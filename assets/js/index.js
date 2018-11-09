let projects = document.getElementById('projects');
let projectsButton = document.getElementById('myprojects-button')
projectsButton.onclick = function() { projects.scrollIntoView({ behavior: 'smooth', block: 'start'}); }

let contact = document.getElementById('contact');
let contactButton = document.getElementById('contact-button')
contactButton.onclick = function() { contact.scrollIntoView({ behavior: 'smooth', block: 'start'}); }

let about = document.getElementById('about');
let aboutButton = document.getElementById('about-button')
aboutButton.onclick = function() { about.scrollIntoView({ behavior: 'smooth', block: 'start'}); }