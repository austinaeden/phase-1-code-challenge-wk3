fetch('http://localhost:3000/films')
.then((res)=> res.json())
.then((films)=>{
    films.forEach((film)=>displayListCharacters(film))
})

