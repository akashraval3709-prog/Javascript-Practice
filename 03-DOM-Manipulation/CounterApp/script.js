const increaseButton = document.querySelector('.in-btn')
const decreaseButton = document.querySelector('.de-btn')
const resetButton = document.querySelector('.re-btn')
const count = document.querySelector('.count')

let num = 0

increaseButton.addEventListener('click' , ()=>{
    num+=1
    count.textContent = num
})

decreaseButton.addEventListener('click' , () => {
    if(num > 0){

        num-=1
        count.textContent = num
    }
})

resetButton.addEventListener('click' ,() => {
    num=0
    count.textContent = num
})


