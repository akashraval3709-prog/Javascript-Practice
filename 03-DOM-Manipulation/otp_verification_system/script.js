const otpBtn = document.querySelector('.btn')
const otpInput = document.querySelector('#otpInput')
const statusMsg = document.querySelector('.statusMsg')
let num;

function getOtp() {
    let timeLeft = 30;
    num= Math.floor(Math.random() * 9000) + 1000
    alert(` Varify OTP code : ${num}`)
    otpInput.disabled = false
    otpBtn.removeEventListener('click', getOtp)
    let countdownTimer = setInterval(() => {
        timeLeft -= 1
        statusMsg.textContent = `OTP sent! valid for 30 seconds.: ${timeLeft}`

        if (timeLeft <= 0) {
            clearInterval(countdownTimer)
           
            otpBtn.addEventListener('click', getOtp)
            otpInput.disabled = true
            otpBtn.textContent = 'Resend OTP'
            statusMsg.textContent = `OTP sent! valid for 40 seconds.: ${timeLeft}`
           
            statusMsg.textContent = 'OTP Expired! Please try again.'

        }

    }, 1000)

    otpInput.addEventListener('input', function checkOTP() {
      if(otpInput.value.length===4){
        if (Number(otpInput.value) === num) {
            clearInterval(countdownTimer); 
            statusMsg.style.color = 'green';
            statusMsg.textContent = 'Verification Successful! Welcome back.';
            otpInput.disabled = true;
            
            
            otpInput.removeEventListener('input', checkOTP);
        }
        else{
             clearInterval(countdownTimer)
            statusMsg.style.color = 'red';
            statusMsg.textContent = 'Verification Failed';
            otpInput.disabled = true;
                otpBtn.textContent = 'Try Again';
                otpBtn.addEventListener('click', getOtp);
                otpInput.removeEventListener('input', checkOTP);

            
        }
        }
    });



}

otpBtn.addEventListener('click', getOtp)