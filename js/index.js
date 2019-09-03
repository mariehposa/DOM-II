// Your code goes here
const navs = document.querySelectorAll('.nav-link')

navs.forEach(nav => {
    nav.addEventListener('click', (event) => {
        event.preventDefault(); 
        console.log(event)
    })

    nav.addEventListener('mouseenter', (e) => e.target.style.color = 'silver')
    nav.addEventListener('mouseleave', (e) => e.target.style.color = 'black')

})

document.querySelector('.nav').addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'dodgerblue'
    e.target.style.padding = '3rem 0'
    e.target.style.color = 'white'
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

let buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('mousedown', (event) => {
        event.target.style.backgroundColor = 'orange'
        event.target.style.color = 'white'
    })

    button.addEventListener('mouseup', (event) => {
        event.target.style.backgroundColor = '#17A2B8'
        event.target.style.color = 'white'
    })

    button.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = '#17A2B8'
        event.target.style.color = 'white'
    })

    button.addEventListener('mouseover', (e) => {
        e.target.style.color = '#17A2B8'
        event.target.style.backgroundColor = 'white'
    })
        
})