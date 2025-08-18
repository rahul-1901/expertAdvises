import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// --- SIGNUP ---
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// --- LOGIN ---
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        // generate token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "secret123",
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
