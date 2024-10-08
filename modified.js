//modified

// const fullName = "John Doe"
// // string properties
// // lenght
// fullName.length
// const firstName = "Peter"
// const lastName = "Pan"
// firstName + lastName;

// // methods
// fullName. toUpperCase()
// fullName. toLowerCase()

// fullName.indexOf("o")
// fullName.lastIndexOf("0")
// fullName.includes('n')
// fullName.replace("o", "9")
// fullName.charAt(4)

// const password = '';
// password.trim();
// password.trimStart()

// password.concat("another str");

// // slice sibstring(stat, end )

// const team1 = 1
// const team2 = 2

// const gymnasticsTeam = team1 + team2

// const team1Score = 96
// const teams2score = 88

// const team1score2 = 108
// const team2score2 = 91

// const team1score3 = 89
// const team2score3 = 110

// if (team1Score > teams2score) {
//   console.log("team1 wins");
// } else if (team1score2 > team2score2) {
//   console.log("team1wins");
// } else if (team1score3 > team2score3) {
//   console.log("team2wins");
// } else console.log("team1 wins with the highest average score");

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinscore3 = 89;
const pandascore1 = 88;
const pandascore2 = 91;
const pandascore3 = 110;

const totalDolphinScore = dolphinScore1 + dolphinScore2 + dolphinscore3;
const totalPandaScore = pandascore1 + pandascore2 + pandascore3;

const avgDolphin = totalDolphinScore / 3;
const avgPandascore = totalPandaScore / 3;

console.log(`average dolphin score is ${avgDolphin}`);
console.log(`average panda score is ${avgPandascore}`);

if (avgDolphin > avgPandascore) {
  console.log("dolphinwins");
} else if (avgDolphin < avgPandascore) {
  console.log("pandawins");
} else {
  console.log("the match is a draw");
}

if (avgDolphin > avgPandascore && avgDolphin >= 100) { 
  console.log("dolphinwins");
} else if (avgDolphin < avgPandascore && avgPandascore >= 100) {
  console.log("pandawins");
} else {
  console.log("Nobody wins");
}

if (avgDolphin > avgPandascore && avgDolphin >= 100) {
  console.log("dolphinwins");
} else if (avgDolphin < avgPandascore && avgPandascore >= 100) {
  console.log("pandawins");
} else if (
  avgDolphin === avgPandascore &&
  avgDolphin >= 100 &&
  avgPandascore >= 100
)
  console.log("this is a draw");
else {
  console.log("Nobody wins");
}  
