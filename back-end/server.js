const express = require('express');
const mySql = require('mysql');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const secretKey = 'a8cc1ff8f4bc3b7b4d7611509c97f4b6e5836962f24c2c014453838e6aaa348e';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const server = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

server.connect(err => {
    if (err) {
        console.error('Error Connecting to database:', err);
    }
    console.log("Connection Successful");
});

//POST end-point to add data into users table
app.post('/register', (req, res) => {
    const { fullname, phone, email, password, confirmpwd } = req.body;

    const query = 'INSERT INTO users (fullname,phone, email, password, confirmpwd) VALUES (?, ?, ?, ?, ?)';

    server.query(query, [fullname, phone, email, password, confirmpwd], (error, results) => {
        if (error) {
            console.log("Error Inserting Data", error);
            return res.status(500).json({ message: 'Failed to register user' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
});

//POST end-point to valid login credentials 
app.post('/login', (req, res) => {
    const { fullname, password } = req.body;

    const query = `SELECT * FROM users WHERE fullname = ?`;

    server.query(query, [fullname], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length > 0) {
            const user = result[0];
            console.log(user);
            if (user.password === password) {

                //creating jwt on successful login
                // const token = jwt.sign(
                //     { id: user.id, fullname: user.fullname },
                //     secretKey,
                //     { expiresIn: '1h' }
                // );
                const token = jwt.sign({
                    id: user.id,
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    password: user.password // Avoid storing sensitive data like passwords in tokens if possible
                }, secretKey, { expiresIn: '1h' });


                return res.status(200).json({ success: true, message: 'Login successful', token })
            } else {
                return res.status(401).json({ success: false, message: 'Invalid password' });
            }
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    });
});


// Middleware to check if JWT is valid
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token.' });
        req.user = user; // Attach user info to the request
        next(); // Pass control to the next handler
    });
}

// Protected profile route
app.get('/profile', authenticateToken, (req, res) => {
    // Simulate fetching user data from the database
    const userData = {
        id: req.user.id,
        fullname: req.user.fullname,
        email: req.user.email,
        phone: req.user.phone,
        password: req.user.password
    };
    res.json(userData);
});

// PUT Update User Profile
// app.put('/profile', authenticateToken, (req, res) => {
//     const { fullname, password, email, phone } = req.body;
//     const userId = req.user.id; // Get user ID from JWT or session
//     const query = `UPDATE users SET fullname = ?, email = ?, password = ?, phone = ? WHERE id = ?`;
//     server.query(query, [fullname, email, password, phone, userId], (err, result) => {
//         if (err) {
//             console.log("Database Error:", err);
//             res.status(500).json({ error: "Failed to update profile" });
//         } else {
//             res.json({ success: true, message: "Profile updated successfully" });
//         }
//     });
// });
app.put('/profile', authenticateToken, (req, res) => {
    const { fullname, email, password, phone } = req.body;
    const userId = req.user.id; // Get user ID from JWT or session

    // Build the query dynamically based on the provided fields
    let query = "UPDATE users SET";
    let values = [];

    if (fullname) {
        query += " fullname = ?,";
        values.push(fullname);
    }
    if (email) {
        query += " email = ?,";
        values.push(email);
    }
    if (password) {
        query += " password = ?,";
        values.push(password);
    }
    if (phone) {
        query += " phone = ?,";
        values.push(phone);
    }

    // Remove trailing comma
    query = query.slice(0, -1);  // Remove last comma
    query += " WHERE id = ?";    // Always update for the logged-in user

    values.push(userId);  // Add the userId at the end of the values array

    // Execute the query
    server.query(query, values, (err, result) => {
        if (err) {
            console.log("Database Error:", err);
            res.status(500).json({ error: "Failed to update profile" });
        } else {
            res.json({ success: true, message: "Profile updated successfully" });
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})