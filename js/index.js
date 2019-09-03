// Your code goes here
const navs = document.querySelectorAll('.nav-link')

navs.forEach(nav => {
    nav.addEventListener('click', (event) => {event.preventDefault(); console.log(event)})

    nav.addEventListener('mouseenter', (e) => e.target.style.color = 'silver')
    nav.addEventListener('mouseleave', (e) => e.target.style.color = 'black')

})