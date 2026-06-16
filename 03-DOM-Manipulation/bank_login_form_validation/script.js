const regFrom = document.querySelector('#regFrom')
const button = document.querySelector('button')
let login = false

regFrom.addEventListener('submit', (e) => {
    let accnum = false
    let pass = false
    e.preventDefault()

    const accNum = document.querySelector('#bNUm').value.trim()
    const eMsg = document.querySelector('.errorMsg')
    const eMsgPass = document.querySelector('.errorPass')
    const button = document.querySelector('button')
    const password = document.querySelector('#pass').value.trim()

    if (accNum === '') {
        eMsg.style.color = 'red'
        eMsg.textContent = 'Account number can not be empty'
    }
    else if (accNum.length !== 10) {
        eMsg.style.color = 'red'
        eMsg.textContent = 'Account number must be exactly 10 digits!'
    }
    else if (isNaN(Number(accNum))) {
        eMsg.style.color = 'red'
        eMsg.textContent = 'Account number must be digits!'
    }



    else {
        eMsg.style.color = 'green'
        eMsg.textContent = `Authenticating Account : ${accNum}`
        // btn.setAttribute('disabled', 'true')
        accnum = true


    }

    if (password === '') {
        eMsgPass.style.color = 'red'
        eMsgPass.textContent = 'Password can not be empty'
    }
    else if (password.length < 6) {

        eMsgPass.style.color = 'red'
        eMsgPass.textContent = 'Password must be exactly 6 char & digit @-._'
    }
    else {
        eMsgPass.style.color = 'green'
        eMsgPass.textContent = 'Valid Password'
        pass = true
    }

    if (accnum && pass) {
        button.disabled = true
        login = true

        if (login) {
            setTimeout(() => {
                alert('Login Successful');
            }, 100);
        }

    }



});



