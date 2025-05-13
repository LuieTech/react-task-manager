const cors = require("cors");

module.exports = cors({
  origin: process.env.CORS_ORIGIN || "",
  credentials: true,
});
console.log("This is the cors origin: ",cors.origin)