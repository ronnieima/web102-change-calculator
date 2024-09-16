const DENOMINATIONS = {
  twentyDollars: 2000, // in pennies
  tenDollars: 1000,
  fiveDollars: 500,
  twoDollars: 200,
  dollars: 100,
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1,
};

const amountDueInput = document.getElementById("amount-due");
const amountReceivedInput = document.getElementById("amount-received");
const calculateChangeButton = document.getElementById("calculate-change");
const changeText = document.getElementById("change");

calculateChangeButton.addEventListener("click", handleCalculation);

function calculateChange(amountDue, amountReceived) {
  const change = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  let diff = Math.round((amountReceived - amountDue) * 100);
  changeText.innerText = (diff / 100).toFixed(2);

  for (const d in DENOMINATIONS) {
    while (diff >= DENOMINATIONS[d]) {
      change[d] = change[d] + 1;
      diff = diff - DENOMINATIONS[d];
    }
  }

  return change;
}

function handleCalculation(e) {
  const amountDue = amountDueInput.value;
  const amountReceived = amountReceivedInput.value;

  if (!amountDue || !amountReceived || amountDue > amountReceived) return;

  const change = calculateChange(amountDue, amountReceived);
  console.log(change);
  for (const d in change) {
    document.getElementById(`${d}-output`).innerText = change[d];
  }
}
