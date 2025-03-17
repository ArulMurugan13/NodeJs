process.env.UV_THREADPOOL_SIZE = 6;
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 1");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 2");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 3");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 4");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 5");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
  console.log("Crypto Password Key - 6");
});
