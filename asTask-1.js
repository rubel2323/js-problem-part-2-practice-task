function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  const inExpDiff = income - expenses;
  const tax = inExpDiff * 0.2;
  return tax;
}
const calculate = calculateTax(6000, -1500);
console.log(calculate);
