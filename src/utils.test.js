import { isScheduleConflict } from "./utils";

describe("isScheduleConflict", () => {
  it("returns [false] for an empty list", () => {
    expect(isScheduleConflict([])).toBe(false);
  });

  it("returns [false] if two dates just touching each other", () => {
    expect(
      isScheduleConflict([
        { start: "2020-07-06T18:30:00.125000Z", end: "2020-07-04T01:30:00Z" },
        {
          start: "2020-07-04T01:30:00Z",
          end: "2020-07-03T18:30:00.125000Z",
        },
      ])
    ).toBe(false);
  });

  it("returns [true] for two dates conflicted", () => {
    expect(
      isScheduleConflict([
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-04T01:30:00Z" },
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-04T00:30:00Z" },
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-04T00:30:00Z" },
      ])
    ).toBe(true);
  });

  it("returns [true] if the first start date is greater than or equal to second start date and the first start date is less than or equal to second end date", () => {
    expect(
      isScheduleConflict([
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-03T01:30:00Z" },
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-04T00:30:00Z" },
      ])
    ).toBe(true);
  });

  it("returns [true] if the first end date is greater than or equal to second start date and the first end date is less than or equal to second end date", () => {
    expect(
      isScheduleConflict([
        { start: "2020-07-03T18:30:00.125000Z", end: "2020-07-04T01:30:00Z" },
        { start: "2020-07-10T01:30:00Z", end: "2020-07-04T01:30:00Z" },
      ])
    ).toBe(true);
  });
});
