const User = require("./auth-model");

const checkUserNameExists = async (req, res, next) => {
  const { username } = req.body;
  const exists = await User.findBy({ username });
  if (exists.length) {
    next({ status: 401, message: "username taken" });
  } else {
    next();
  }
};

const validateFields = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password || !username.trim() || !password.trim()
    ) {
    next({ status: 401, message: "username and password required" });
  } else {
    next();
  }
};

module.exports = {
  checkUserNameExists,
  validateFields,
};
