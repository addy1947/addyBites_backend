const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../data/loginDetail/schema');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const createToken = (userId) => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    // Generate unique username
    let base = name.replace(/\s+/g, '').toLowerCase();
    let num = 0;
    let username;
    while (true) {
        username = `@${base}${num}`;
        const userWithUsername = await User.findOne({ username });
        if (!userWithUsername) break;
        num++;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, username });
    await newUser.save();

    const token = createToken(newUser._id);

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',  // true in production, false in development
        sameSite: 'none',
        maxAge: 3 * 24 * 60 * 60 * 1000  // 3 days
    });

    res.status(201).json({ message: "User registered", name: newUser.name, _id: newUser._id, username: newUser.username });
});


// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password" });

    const token = createToken(user._id);

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 3 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: "Login successful", name: user.name, _id: user._id });
});


// Check login status
router.get('/profile', async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) return res.status(401).json({ message: "Not authenticated" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // Fetch user from DB
        const user = await User.findById(decoded.id).select('name _id');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User authenticated", name: user.name, _id: user._id });
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
});


// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ message: "Logged out" });
});

module.exports = router;

