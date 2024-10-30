const express = require('express');
const mySql = require('mysql');
const cors = require('cors');

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
    const { firstname, lastname, username, email, password, confirmpwd } = req.body;

    const query = 'INSERT INTO users (firstname, lastname, username, email, password, confirmpwd) VALUES (?, ?, ?, ?, ?, ?)';

    server.query(query, [firstname, lastname, username, email, password, confirmpwd], (error, results) => {
        if (error) {
            console.log("Error Inserting Data", error);
            return res.status(500).json({ message: 'Failed to register user' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
});

//POST end-point to valid login credentials 
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = ?`;

    server.query(query, [username], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length > 0) {
            const user = result[0];

            if (user.password === password) {
                return res.status(200).json({ success: true, message: 'Login successful' })
            } else {
                return res.status(401).json({ success: false, message: 'Invalid password' });
            }
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})