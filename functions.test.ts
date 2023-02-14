const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("return an array with equal length", () => {
    const testArray = ["a", "b", "c"];
    const result = shuffleArray(testArray);
    expect(result.length).toEqual(testArray.length);
  });

  test("return an array with same items", () => {
    const testArray = ["a", "b", "c"];
    const result = shuffleArray(testArray);
    expect(result).toContain("a");
    expect(result).toContain("b");
    expect(result).toContain("c");
  });
});
