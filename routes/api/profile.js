const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const {
    check,
    validationResult
} = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route GET api/profile/me
//@desc  get current users profile
//@access  private
router.get("/me", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate(
            "user",
            ["name"]
        );
        if (!profile) {
            return res.status(400).json({
                msg: "No profile found for this user"
            });
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.send(500).send("server error");
    }
});