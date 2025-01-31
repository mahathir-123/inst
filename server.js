const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hash the password (use a proper hashing function in production)
    const hashedPassword = password; // Replace with actual hashing

    const userData = `Username: ${username}, Password: ${hashedPassword}\n`;

    fs.appendFile('user_info.txt', userData, (err) => {
        if (err) {
            return res.status(500).send('Error saving user data.');
        }
        res.send('User data saved successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
