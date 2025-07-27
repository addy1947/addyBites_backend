const bcrypt = require('bcrypt');
const saltRounds = 10;

const users = [
    { name: "Aditya Maurya", email: "ad1947@gmail.com", plainPassword: "123456", username: "@adityamaurya0" },
    { name: "Test User", email: "ad1948@gmail.com", plainPassword: "654321", username: "@testuser0" }
];

// Return a promise that resolves to hashed user data
const dataPromise = Promise.all(
    users.map(async user => {
        const hash = await bcrypt.hash(user.plainPassword, saltRounds);
        return { name: user.name, email: user.email, password: hash, username: user.username };
    })
);

module.exports = dataPromise;
