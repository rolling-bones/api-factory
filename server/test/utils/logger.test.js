const utils = require("../../utils");

it("should print the correct log message", () => {
  const logSpy = jest.spyOn(utils.logger, "log");

  utils.logger.log("hello");

  expect(logSpy).toHaveBeenCalledWith("hello");
});

it("should print the correct info message", () => {
  const logSpy = jest.spyOn(utils.logger, "info");

  utils.logger.info("hello");

  expect(logSpy).toHaveBeenCalledWith("hello");
});

it("should print the correct warn message", () => {
  const logSpy = jest.spyOn(utils.logger, "warn");

  utils.logger.warn("hello");

  expect(logSpy).toHaveBeenCalledWith("hello");
});

it("should print the correct error message", () => {
  const logSpy = jest.spyOn(utils.logger, "error");

  utils.logger.error("hello");

  expect(logSpy).toHaveBeenCalledWith("hello");
});
