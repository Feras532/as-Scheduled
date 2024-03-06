const moment = require("moment-timezone");

function convertTimeZone(fromTime, fromTimeZone, toTimeZone) {
  const time = moment.tz(fromTime, fromTimeZone);
  const convertedTime = time.tz(toTimeZone).format("YYYY-MM-DD HH:mm");
  return convertedTime;
}

// Example usage:
const fromTime = "2024-03-06 12:00"; // Example date and time
const fromTimeZone = "America/New_York"; // New York timezone
const toTimeZone = "Asia/Riyadh"; // Tokyo timezone

const toTime = convertTimeZone(fromTime, fromTimeZone, toTimeZone);
console.log(`Time in ${fromTimeZone}: ${fromTime}`);
console.log(`Time in ${toTimeZone}: ${toTime}`);
