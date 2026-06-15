
const inputMsg = document.querySelector('.usermsg')
const message = document.querySelector('.msg')
inputMsg.addEventListener('input' ,(e)=>{

 
        message.textContent = inputMsg.value.toUpperCase()
    
})
