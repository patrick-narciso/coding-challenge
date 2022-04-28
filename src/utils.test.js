import { isScheduleConflict } from "./utils";

describe("isScheduleConflict", () => {
  it("returns [false] for an empty list", () => {
    expect(isScheduleConflict([])).toBe(false);
  });

  // TODO: add more test coverage
});
