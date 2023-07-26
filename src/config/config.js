const path = require("path");
module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || "chatapp",
    user: process.env.DB_USER || "chatapp",
    password: process.env.DB_PASS || "chatapp",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../healthyapp.sqlite"),
    },
  },
};
