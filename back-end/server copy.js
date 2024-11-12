const express = require('express');
const mySql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const secretKey = 'a8cc1ff8f4bc3b7b4d7611509c97f4b6e5836962f24c2c014453838e6aaa348e';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Function to create a MySQL server connection
async function createServerConnection() {
    try {
        const server = await mySql.createConnection({
            host: 'localhost',
            user: 'root',  // Your MySQL username
            password: '',  // Your MySQL password
            database: 'mydb'  // Your database name
        });
        console.log("Database connection successful.");
        return server;  // Return the connection object
    } catch (err) {
        console.error("Error connecting to database:", err);
        throw err;  // Re-throw error to handle it
    }
}

// Initialize MySQL connection once at the start
let server;

createServerConnection()
    .then((conn) => {
        server = conn;  // Store the connection for later use
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Failed to start server due to DB connection error:", err);
        process.exit(1);  // Exit the process if DB connection fails
    });

// POST endpoint to add data into the users table
app.post('/register', async (req, res) => {
    const { fullname, phone, email, password, confirmpwd } = req.body;

    const query = 'INSERT INTO users (fullname, phone, email, password, confirmpwd) VALUES (?, ?, ?, ?, ?)';

    try {
        const [results] = await server.execute(query, [fullname, phone, email, password, confirmpwd]);
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    } catch (error) {
        console.log("Error Inserting Data", error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

// POST endpoint to validate login credentials
app.post('/login', async (req, res) => {
    const { fullname, password } = req.body;

    const query = 'SELECT * FROM users WHERE fullname = ?';

    try {
        const [result] = await server.execute(query, [fullname]);

        if (result.length > 0) {
            const user = result[0];
            if (user.password === password) {
                // Creating JWT on successful login
                const token = jwt.sign({
                    id: user.id,
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    password: user.password // Avoid storing sensitive data like passwords in tokens if possible
                }, secretKey, { expiresIn: '1h' });

                return res.status(200).json({ success: true, message: 'Login successful', token });
            } else {
                return res.status(401).json({ success: false, message: 'Invalid password' });
            }
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Database error', error });
    }
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
app.get('/profile', authenticateToken, async (req, res) => {
    console.log("req user",req.user);
    try {
        const userArray = await server.execute('SELECT * FROM users WHERE id = ?', [req.user.id]);
        console.log('userArray',userArray);

        const user = userArray[0][0];
        console.log("user",user);

        if (!user) return res.status(404).json({ message: 'User not found' });

        const userData = {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            password: user.password
        };
        console.log("userDData",userData);
        res.json(userData);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Error fetching profile data', error });
    }
});

// PUT Update User Profile
app.put('/profile', authenticateToken, async (req, res) => {
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

    try {
        const [result] = await server.execute(query, values);
        res.json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
        console.log("Database Error:", error);
        res.status(500).json({ error: "Failed to update profile" });
    }
});
