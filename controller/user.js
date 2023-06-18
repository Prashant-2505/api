import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import { sentCookie } from "../utils/feature.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({
            success: false,
            message: 'User already exists',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });

    sentCookie(user, res, "register succesfully", 201)

};



export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'invalid email or password',
        });
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: 'invalid email or password',
        });
    }

    sentCookie(user, res, `welcome back, ${user.name}`, 200)
}


export const logout = (req, res) => {
    res.status(200)
        .cookie("token", "", {
            expires: new Date(0),
            sameSite: process.env.NODE_ENV === "DEVELOPMENT" ? "lax" : "None",
            secure: process.env.NODE_ENV === "DEVELOPMENT" ? false : true
        })
        .json({
            success: true,
            message: "Logout successfully"
        });
};




export const getMyProfile = (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user
    });
};


