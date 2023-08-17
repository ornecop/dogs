const getDbInfo = require("../src/controllers/getDbInfo");

describe("getDbInfo", () => {
  it("should return an array of dog breeds with their temperaments", async () => {
    const dbInfo = await getDbInfo();
    expect(Array.isArray(dbInfo)).toBe(true);
    expect(dbInfo.length).toBeGreaterThan(0);
    expect(dbInfo[0]).toHaveProperty("name");
    expect(dbInfo[0]).toHaveProperty("Temperaments");
    expect(dbInfo[0].Temperaments[0]).toHaveProperty("name");
  });
});
