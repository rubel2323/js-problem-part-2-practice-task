function calculateFinalScore(obj) {
  if (
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === "number" &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === "boolean"
  ) {
    let testSchoolTotal = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily === true) {
      testSchoolTotal = testSchoolTotal + 20;
    }

    if (testSchoolTotal >= 80) {
      return true;
    } else {
      return false;
    }
  } else {
    return "invalid input";
  }
}

const applicant = calculateFinalScore({
  name: "Rajib",
  testScore: 30,
  schoolGrade: 30,
  isFFamily: true,
});
console.log(applicant);
