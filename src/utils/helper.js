function compareTime(timeString1, timeString2) {
  let dateTime1 = new Date(timeString1); //arrival
  let dateTime2 = new Date(timeString2); //departure
  console.log(dateTime1.getTime() > dateTime2.getTime());
  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};
