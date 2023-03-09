// 1. Convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  if (hours === 0) return 0;
  const SECONDS_PER_HOUR = 3600; // Hạn chế Hardcode
  return hours * SECONDS_PER_HOUR;
}

//Goi Taxi
function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount < 0) return -1;

  if (passengersCount <= 4) return 1;
  if (passengersCount <= 7) return 1;
  let taxi4 = 0;
  let taxi7 = 0;
  taxi7 = Math.trunc(passengersCount / 7);
  if (passengersCount % 7 > 0) {
    if (passengersCount % 7 > 4 && passengersCount % 7 <= 7) taxi7 += 1;
    else taxi4 += 1;
  }

  return taxi4 + taxi7;
}
console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));
console.log(getTaxiCount(14));
