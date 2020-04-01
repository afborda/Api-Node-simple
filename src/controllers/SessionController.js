const users = require("../mock/MockUsers");

module.exports = {
  show(req, res) {
    const loginData = req.body;
    // console.log(loginData);
    const user = users.filter(
      item =>
        item.login === loginData.login && item.password === loginData.password
    );

    console.log("teste", user);

    if (user.length < 1) {
      return res.status(400).json({ error: "No User found " });
    }
    return res.json(user);
  }
};
