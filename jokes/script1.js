{/* <div id="joke" class="joke">awesome joke is loading...</div>
<button id="jokeBtn" class="btn">Next Joke</button> */}
// GET https://icanhazdadjoke.com/
const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

const generateJokes = async()=>{

    try{
    const setHeader = {
        headers: {
            Accept : "application/json"
         }
    }

    const res= await fetch('https://icanhazdadjoke.com', setHeader)//promise return
    const data = await res.json()//promise return
    jokes.innerHTML =data.joke;
}catch(err){
    console.log(`the errror is ${err}`)
}
    
    
   
}
jokeBtn.addEventListener('click' , generateJokes)
generateJokes()

