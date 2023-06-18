import jwt from 'jsonwebtoken'

export const sentCookie = (user, res, messages, statuscode) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    
        res.status(statuscode)
        .cookie('token', token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite:process.env.NODE_ENV==="DEVELOPMENT"?"Lax": "none",
            secure:process.env.NODE_ENV==="DEVELOPMENT" ? false:true
        })
        .json({
            success: true,
            message: messages,
        });
}