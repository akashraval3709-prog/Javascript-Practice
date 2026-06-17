const accountType = document.querySelector('#accountType')

accountType.addEventListener('change', (e) => {
    let interestMsg = document.querySelector('.interestMsg')

    console.log(interestMsg)
    if (e.target.value === 'saving') {
        interestMsg.style.color = 'green'
        interestMsg.textContent = 'Saving Account Interest: 4%'

    }
    else if (e.target.value === 'current') {

        interestMsg.style.color = 'orangered'
        interestMsg.textContent = 'Current Account Interest: 0% (No Interest)'
    }
    else if(e.target.value==='loan'){
        interestMsg.style.color='red'
        interestMsg.textContent='Loan Account Interest: 12% (Premium Charges)'
    }
    else{
        
    }


})