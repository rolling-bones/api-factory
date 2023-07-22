const { Console } = require("console");

exports.logger = new Console({
  stdout: process.stdout,
  stderr: process.stderr,
});
