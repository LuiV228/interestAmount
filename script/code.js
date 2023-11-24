let btn = document.querySelector('[data-btn]')

function calculateInterestAmountOwed() {
    let amount = document.getElementById(`intAmount`).value
    let rate = document.getElementById(`intRate`).value / 100
    let result = amount * rate

    if (amount < 0) {
        alert(`You can't have negative money. Don't be weird!`)
        document.getElementById(`result`).textContent = `Try Again?`
    }
    else {
        document.getElementById(`result`).textContent = result.toFixed(2) + ` in rands`   
    }
    if (rate < 0) {
        alert(`Negative interest? Is that a thing?`)
        document.getElementById(`result`).textContent = `Try Again?`
    }
    else {
        document.getElementById(`result`).textContent = result.toFixed(2) + `%`   
    }
    if (100 <= rate) {
        alert(`How do you have so much interest?`)
        document.getElementById(`result`).textContent = `Try Again?`
    }
    else {
        document.getElementById(`result`).textContent = `Interest amount is R` + result.toFixed(2)   
    }
}
btn.addEventListener(`click`, calculateInterestAmountOwed)