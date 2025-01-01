import User from "../models/user.model.js";

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.json(user);
    } catch (error) {
        console.log("Error in getProfile controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
    };

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.address = req.body.address || user.address;
            user.password = req.body.password || user.password;
            const updatedUser = await user.save();
            res.json(updatedUser);
        }
    } catch (error) {
        console.log("Error in updateProfile controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};