/**
 * @param {{ start: Date, end: Date }[]} reservations - list of reservations
 *
 * @returns true if any 2 reservations conflict
 *   - reservations conflict if their times overlap in any way
 *   - reservations DO NOT conflict if they are just touching each other (reservation1.end === reservation2.start)
 */
export const isScheduleConflict = (reservations) => {
  if (reservations.length === 0) return false;
  let isOverlap = false;
  reservations.forEach(({ start, end }, i) => {
    let st1 = start;
    let et1 = end;

    reservations.forEach((reservation, j) => {
      if (i != j) {
        let st2 = reservation.start;
        let et2 = reservation.end;
        if (
          (st1 >= st2 && st1 <= et2) ||
          (et1 >= st2 && et1 <= et2) ||
          (st2 >= st1 && st2 <= et1) ||
          (et2 >= st1 && et2 <= et1)
        ) {
          isOverlap = true;
          return isOverlap;
        }
      }
    });
  });

  return isOverlap;
};
