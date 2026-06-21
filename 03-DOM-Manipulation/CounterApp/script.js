const increaseButton = document.querySelector('.in-btn')
const decreaseButton = document.querySelector('.de-btn')
const resetButton = document.querySelector('.re-btn')
const count = document.querySelector('.count')


let num = 0
increaseButton.addEventListener('click' , ()=>{
    num+=1
    count.style.color='green'
    count.textContent = num
    
    localStorage.setItem('num',num)
    
    
})


decreaseButton.addEventListener('click' , () => {
    
    if(num > 0){
        
        
        num-=1
        count.style.color='red'
        count.textContent = num
    localStorage.setItem('num',num)
    }
    
})

resetButton.addEventListener('click' ,() => {
    num=0
    localStorage.setItem('num',num)
    count.style.color='orange'
    count.textContent = num
   localStorage.setItem('num',num)
})



function getitem(){
    
    count.textContent=localStorage.getItem('num')
    num=Number(count.textContent)
    console.log(num)
    
}


    

getitem()
