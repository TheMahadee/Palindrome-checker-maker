const palindromeForm = document.querySelector('form')
const givenNumber = document.querySelector('#givenNumber')
const messageOne = document.querySelector('#msg_1')
const messageTwo = document.querySelector('#msg_2')

function radioBtnData() {
    const rbs = document.querySelectorAll('input[name="mode"]')
    for (const rb of rbs) {
        if (rb.checked) {
            const mode = rb.value
            return mode
        }
    }
    return undefined
}

palindromeForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const mode = radioBtnData()

    if (mode === "check") {
        fetch('/check-palindrome?number=' + givenNumber.value).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.given
                    messageTwo.textContent = data.result
                }
            })
        })
    } else if (mode === "make") {
        fetch('/make-palindrome?number=' + givenNumber.value).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.given
                    messageTwo.textContent = data.result
                }
            })
        })
    }
})