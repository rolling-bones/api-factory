const request = require("supertest");

const baseURL = "http://localhost:5000";

describe("GET requests", () => {
  // TODO: make sure server is running before tests run
  it("should return 200 when /bob is requested", async () => {
    const response = await request(baseURL).get("/bob");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
});
