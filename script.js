window.onload = function () {
  setLoanAmountFromURL();
  calculateEMI();
};

function setLoanAmountFromURL() {
  const url = window.location.href;
  const match = url.match(/\/(\d+)-personal-loan\//);

  // Default value if no match is found
  const defaultLoanAmount = match ? parseInt(match[1]) : 3000;

  // Validate loan amount is within range
  const minLoanAmount = 3000;
  const maxLoanAmount = 500000;
  const loanAmount = Math.max(
    minLoanAmount,
    Math.min(defaultLoanAmount, maxLoanAmount)
  );

  // Set values for input and slider
  const loanAmountInput = document.getElementById("loanAmount");
  const loanAmountBar = document.getElementById("loanAmountBar");
  loanAmountInput.value = loanAmount;
  loanAmountBar.value = loanAmount;
}

function updateLoanAmount() {
  const loanAmountBar = document.getElementById("loanAmountBar");
  const loanAmount = document.getElementById("loanAmount");
  loanAmount.value = loanAmountBar.value;
}
function updateLoanAmountBar() {
  const loanAmountBar = document.getElementById("loanAmountBar");
  const loanAmount = document.getElementById("loanAmount");
  loanAmountBar.value = loanAmount.value;
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
