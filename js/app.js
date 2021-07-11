'use strict'

const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(
    '.container, .movie-list-title, .navbar-container, .navbar, .sidebar, .sidebar-menu-icon, .toggle');

arrows.forEach((arrow, idx)=>{
    const itemNumber = movieLists[idx].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener('click',()=>{
        const ratio = ~~(window.innerWidth/270);
        clickCounter++;
        if(itemNumber-(4+clickCounter) + (4 - ratio) >= 0){
            movieLists[idx].style.transform = `translateX(${
                movieLists[idx].computedStyleMap().get("transform")[0].x.value-300}px)`;
            } else {
                movieLists[idx].style.transform = "translateX(0)";
                clickCounter=0;
            }
    })
})

ball.addEventListener("click",() => {
    items.forEach(item =>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})





