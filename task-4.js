function calculateFinalScore(obj) {
  if (
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === "number" &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === "boolean"
  ) {
    if (obj.isFFamily === true) {
      let totalScore = obj.testScore + obj.schoolGrade + 10;

      if (totalScore >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return "invalid input";
  }
}

const applicant = calculateFinalScore({
  name: "Rajib",
  testScore: 40,
  schoolGrade: 30,
  isFFamily: true,
});
console.log(applicant);
