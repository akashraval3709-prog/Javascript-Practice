
new Promise(function(resolve,reject){
    setTimeout( ()=>{
        let error =false

        if(!error){
            resolve({username : "Akash" ,password:"Akash@3709",age: 19})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})
.then( (user)=>{
    console.log(user);
    return user.username
    
})
.then( (username)=>{
     console.log(username);
     
})
.catch((err)=>{
    console.log(err);
    
})
.finally(()=>{
    console.log('Your work is done');
    
})
