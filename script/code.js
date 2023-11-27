let btn = document.querySelector("[data-btn]");
function calculateInterestAmountOwed() {
  //   debugger;
  let amount = +document.getElementById(`intAmount`).value;
  let rate = +document.getElementById(`intRate`).value / 100;
  let result = amount * rate;

  switch (true) {
      case amount < 0:
      alert(`You can't have negative money. Don't be weird!`);
      document.getElementById(`result`).textContent = `Try Again?`;
      break;
    case rate < 0:
      alert(`Negative interest? Is that a thing?`);
      document.getElementById(`result`).textContent = `Try Again?`;
      break;
    case rate >= 1:
      alert(`How do you have so much interest?`);
      document.getElementById(`result`).textContent = `Try Again?`;
      break;
    default:
      document.getElementById(`result`).textContent =
      `R` + result.toFixed(2);
      break;
    }
}
btn.addEventListener(`click`, calculateInterestAmountOwed);

//   if (amount < 0) {
//     alert(`You can't have negative money. Don't be weird!`)
//     document.getElementById(`result`).textContent = `Try Again?`;
//   } else {
//     document.getElementById(`result`).textContent =
//       result.toFixed(2) + ` in rands`;
//   }
//   if (rate < 0) {
//     alert(`Negative interest? Is that a thing?`);
//     document.getElementById(`result`).textContent = `Try Again?`;
//   } else {
//     document.getElementById(`result`).textContent = result.toFixed(2) + `%`;
//   }
//   if (rate => 100) {
//     alert(`How do you have so much interest?`);
//     document.getElementById(`result`).textContent = `Try Again?`;
//   } else {
//     document.getElementById(`result`).textContent =
//       `Interest amount is R` + result.toFixed(2);
//   }