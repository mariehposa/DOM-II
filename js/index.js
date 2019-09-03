// Your code goes here
const navs = document.querySelectorAll('.nav-link')

navs.forEach(nav => {
    nav.addEventListener('click', (event) => {event.preventDefault(); console.log(event)})

    nav.addEventListener('mouseenter', (e) => e.target.style.color = 'silver')
    nav.addEventListener('mouseleave', (e) => e.target.style.color = 'black')

})

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('dblclick', (event) => {
       event.target.style.transform = ''   
    })

    image.addEventListener('drag', (event) => {
        event.target.style.transition = '0.3s'
        event.target.style.transform = 'scale(0.8)'
    })

    image.addEventListener('dragend', (event) => {
        event.target.style.transition = '0.3s'
        event.target.style.transform = 'scale(0.5)'
    })
})