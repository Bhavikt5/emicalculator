window.onload = function () {
  calculateEMI();
};
function updateLoanAmount() {
  const loanAmountBar = document.getElementById("loanAmountBar");
  const loanAmount = document.getElementById("loanAmount");
  loanAmount.value = loanAmountBar.value;
}

function updateInterestRate() {
  const interestRateBar = document.getElementById("interestRateBar");
  const interestRate = document.getElementById("interestRate");
  interestRate.value = interestRateBar.value;
}

function updateLoanTerm() {
  const loanTermBar = document.getElementById("loanTermBar");
  const loanTerm = document.getElementById("loanTerm");
  loanTerm.value = loanTermBar.value;
}

function calculateEMI() {
  const loanAmount = parseInt(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTerm = parseInt(document.getElementById("loanTerm").value);

  const monthlyInterestRate = interestRate / 12 / 100;
  const totalInterestRate = Math.pow(1 + monthlyInterestRate, loanTerm);
  const emi =
    (loanAmount * monthlyInterestRate * totalInterestRate) /
    (totalInterestRate - 1);
  const totalPayment = emi * loanTerm;
  const totalInterestPayable = totalPayment - loanAmount;

  const emiDiv = document.getElementById("emiResult");
  emiDiv.innerHTML = `₹ ${emi.toFixed(2)}`;

  const totalPaymentDiv = document.getElementById("totalPaymentResult");
  totalPaymentDiv.innerHTML = `₹ ${totalPayment.toFixed(2)}`;

  const totalInterestPayableDiv = document.getElementById(
    "totalInterestPayableResult"
  );
  totalInterestPayableDiv.innerHTML = `₹ ${totalInterestPayable.toFixed(2)}`;
}
