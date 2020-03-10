var year = "YYYY";
var month = "MM";
var day = "DD";
var date = year + "-" + month + "-" + day;

var settings = {
  url: "https://epic.gsfc.nasa.gov/api/natural/all",
  method: "GET"
};

$.ajax(settings).done(function(response) {
  console.log(response);
});

function getSignInfo() {
  var day = $("#day")
    .val()
    .trim();
  var month = $("#month")
    .val()
    .trim();
  var year = $("#year")
    .val()
    .trim();

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    console.log("Aquarius");
  }
  if (month == 1 && day > 31) {
    alert("invalid date");
  }
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    console.log("Pisces");
  }
  if (month == 2 && day > 29) {
    alert("invalid date");
  }
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    console.log("aries");
  }
  if (month == 3 && day > 31) {
    alert("invalid date");
  }
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    console.log("Taurus");
  }
  if (month == 4 && day > 30) {
    alert("invalid date");
  }
  if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    console.log("gemini");
  }
  if (month == 5 && day > 31) {
    alert("invalid date");
  }
  if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    console.log("cancer");
  }
  if (month == 6 && day > 30) {
    alert("invalid date");
  }
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    console.log("leo");
  }
  if (month == 7 && day > 31) {
    alert("invalid date");
  }
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    console.log("virgo");
  }
  if (month == 8 && day > 31) {
    alert("invalid date");
  }
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    console.log("libra");
  }
  if (month == 9 && day > 30) {
    alert("invalid date");
  }
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    console.log("scorpio");
  }
  if (month == 10 && day > 31) {
    alert("invalid date");
  }
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    console.log("Sagittarius");
  }
  if (month == 11 && day > 30) {
    alert("invalid date");
  }
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    console.log("capricorn");
  }
  if (month == 12 && day > 31) {
    alert("invalid date");
  }
}
getSignInfo();
