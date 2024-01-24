
const h1 = document.querySelector('h1')
h1.textContent = "Brendan's Webpage"

const copyright = document.querySelector('footer p')
copyright.textContent = "New"

const link = document.querySelector('.active')
link.style.color = "lightyellow"
link.style.textDecoration = "underline"

const contact = document.querySelector('#contact')
contact.style.color = "lightblue"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display = 'none')
