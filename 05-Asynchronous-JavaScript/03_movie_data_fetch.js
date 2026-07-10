
const getMovieData = () =>{
    return new Promise((resolve ,reject) => {

        const movieFound = true;
        setTimeout(()=>{
            if(movieFound)
            {
                resolve({ title: "Pushpa 2", rating: "8.5/10", year: 2024 })
            }
            else{
                reject("Error 404: Movie not found in database!")
            }
        },1500)
    })
}



async function getMovie() {

    try{
        const data = await getMovieData()
        console.log(data);
        
    }
    catch (err){
        console.log(err);
        
    }
    finally{
        console.log("Your task is complate\n ");
        
    }
    
}


getMovie()
