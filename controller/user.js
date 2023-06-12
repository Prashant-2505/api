import { User } from "../models/user.js";

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        console.log(req.query);
        res.json({
            success: true,
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

export const register =  async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.create({
            name,
            email, 
            password,
        });

        await User.create({
            name: 'poka',
            email: 'poka@gmail.com',
            password: '123',
        });

        res.status(201).cookie('temp', 'working').json({
            success: true,
            message: 'Sign up successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while signing up',
        });
    }
}


export const getUserDetails =  async (req, res) => {

    const { id } = req.params;
    const user = await User.findById(id);

    console.log(req.params);

    res.json({
        success: true,
        user,
    });

}