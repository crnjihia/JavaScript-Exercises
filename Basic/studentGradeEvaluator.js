function gradeEvaluator(marks, finalExam = false) {
  if (finalExam) {
    return marks >= 90 ? "A+" : "Fail";
  } else {
    return marks >= 89 && marks <= 100 ? "A+" : "Fail";
  }
}

console.log(gradeEvaluator(95, true)); // A+
console.log(gradeEvaluator(85, false)); // Fail
