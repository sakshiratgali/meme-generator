async function meme(){
    const api=`https://meme-api.com/gimme/wholesomememes`
    const data= await fetch(api).then(response=>response.json())
    document.querySelector("h3").innerHTML=data.title
    document.querySelector("img").src=data.url
    document.querySelector("p").innerHTML="- by "+data.author
}
document.querySelector("button").addEventListener("click",()=>{
    meme()
})