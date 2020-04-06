import { isMultipleOfSelectdNumber } from "../../../src/components/gridnumber/index";

describe("Grid Number", () => {
  it("should check for multiple of selected number", () => {
    expect(isMultipleOfSelectdNumber(2)).toBeFalsy();
  });
});
