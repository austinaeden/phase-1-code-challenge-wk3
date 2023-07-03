fetch('http://localhost:3000/films')
.then((res)=> res.json())
.then((films)=>{
    films.forEach((film)=>displayFilmList(film))
})

function displayFilmList(film){
    const menu = document.getElementById("menu")
    const filmList =document.getElementById("filmlist")

    menu.addEventListener("click", function(){
        if(filmList.style.display==="none"){
            filmList.style.display="block"
        }
        else{
            filmList.style.display="none"
        }
    })

    const listName = document.createElement("li")
    filmList.appendChild(listName)

    const link = document.createElement("a")
    link.href = `http://localhost:3000/films/${film.id}`
    link.textContent = `${film.title}`
    listName.appendChild(link)

    listName.addEventListener("click", function(event){
        event.preventDefault()

        const name = document.querySelector("#section h3")
        name.innerHTML=`${film.title}`

        const runtime =document.getElementById("runtime")
        runtime.textContent=`Runtime : ${film.runtime}`

        const showtime = document.getElementById("showtime")
        showtime.textContent=`Showtime : ${film.showtime}`

        const availableTickets =document.getElementById("availabletickets")
        const num1 = film.capacity
        const num2 = film.tickets_sold
        const result = num1 - num2
        availableTickets.textContent=`${result}`

        const image = document.querySelector("#section img")
        image.src=film.poster

        const description = document.querySelector("p")
        description.textContent=`description : ${film.description}`

        const myButton = document.getElementById("mybutton")
        myButton.innerHTML=`
        <button id="button">BUY TICKETS</button>
        `
        const button = document.getElementById("button")
        button.addEventListener("click", function(event){
            event.preventDefault()
            result-=1
        })

    })

}