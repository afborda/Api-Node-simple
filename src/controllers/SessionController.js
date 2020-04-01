const users = require("../mock/MockUsers");

module.exports = {
  show(req, res) {
    const loginData = req.body;
    const user = users.filter(
      item =>
        item.login === loginData.login && item.password === loginData.password
    );

    if (user.length < 1) {
      return res.status(400).json({ error: "No User found " });
    }
    return res.json(user);
  }
};
