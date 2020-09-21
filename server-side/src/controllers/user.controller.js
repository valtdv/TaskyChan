const userCtrl = {};

const User = require('../models/User')

userCtrl.getUsers= async (req, res) => {
    const users = await User.find();
    res.json(users)
};

userCtrl.createUsers= async (req, res) => {
    const {Name, Email, Password} = req.body;
    console.log(req.body)
    const NewUser = new User({
        Name: Name,
        Email: Email,
        Password: Password
    });
    await NewUser.save();
    res.json({message:'User Saved'})
};

userCtrl.getUser= async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
};

module.exports = userCtrl;