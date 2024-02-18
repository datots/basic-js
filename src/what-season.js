const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
// function getSeason(date) {
//   if (arguments.length === 0) {
//     throw new Error("Argument is required");
//   }

//   if (!(date instanceof Date) || isNaN(date.getTime())) {
//     throw new Error("Invalid date!");
//   }

//   const month = date.getMonth();

//   switch (month) {
//     case 11:
//     case 0:
//     case 1:
//       return "winter";
//     case 2:
//     case 3:
//     case 4:
//       return "spring";
//     case 5:
//     case 6:
//     case 7:
//       return "summer";
//     case 8:
//     case 9:
//     case 10:
//       return "autumn";
//   }
// }

function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  try {
    date.toUTCString();
  } catch {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  if (month == 11 || month == 0 || month == 1) return "winter";
  if (month == 2 || month == 3 || month == 4) return "spring";
  if (month == 5 || month == 6 || month == 7) return "summer";
  if (month == 8 || month == 9 || month == 10) return "autumn";
}

module.exports = {
  getSeason,
};
