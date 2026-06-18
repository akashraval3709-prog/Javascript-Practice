const regFrom = document.querySelector('#regFrom')
const button = document.querySelector('button')
let login = false

const bNUm = document.querySelector('#bNUm')
const password = document.querySelector('#pass')

let alertMsg = document.querySelector('.alret-msg')
let eMsgPass = document.querySelector('.errorPass')
let msg = document.querySelector('.msg')

bNUm.addEventListener('focus', () => {
    alertMsg.style.backgroundColor = '#dedede';

    alertMsg.textContent = 'Please enter your registered 10-digit account number.'


});


password.addEventListener('focus', () => {
    alertMsg.style.display = 'block';
    alertMsg.textContent = 'Password must include special characters like @, #, $.'
});



bNUm.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        msg.style.color = 'red'
        msg.textContent = 'This field is mandatory!'
    }
});

password.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        eMsgPass.style.color = 'red'
        eMsgPass.textContent = 'This field is mandatory!'
    }

});


bNUm.addEventListener('input', () => {



    if (bNUm.value.length < 10) {
        msg.style.color = 'red'
        msg.textContent = 'Typing... (Must be 10 digits)'
    }
    else if (bNUm.value.length == 10) {

        msg.style.color = 'green'
        msg.textContent = 'Perfect 10 Digits!'
    }
    else {
        msg.style.color = 'orangered'
        msg.textContent = 'Too long! Exceeded 10 digits!'
    }

});


regFrom.addEventListener('submit', (e) => {
    let accnum = false
    let pass = false
    e.preventDefault()

    const accNum = document.querySelector('#bNUm').value.trim()
    const eMsg = document.querySelector('.errorMsg')

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
        regFrom.reset();
        alertMsg.style.backgroundColor = ''
        eMsg.textContent = '';
        alertMsg.textContent = '';
        msg.textContent = '';
        eMsgPass.textContent = ''
        alertMsg.style.display = 'none';


        if (login) {
            setTimeout(() => {
                alert('Login Successful');
            }, 100);
        }

    }



});



