const User = require("../model/userSchema");
async function addMember(req, res) {
  try {
    const { username, email, pwd } = req.body;
    const form = new User({
      username,
      email,
      pwd,
    });
    await form.save();
    res.status(201).json({ message: "Member added" });
  } catch (err) {
    res.status(err.message);
  }
}
module.exports = addMember;
