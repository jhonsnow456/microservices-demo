const fetch = require("node-fetch");
const host = "http://localhost:8080";

describe("get all catlogue data", () => {
  it("should return 200 when data is in db", async () => {
    const response = await fetch(host + "/catalogue");
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.length).toBe(9);
  });
});
