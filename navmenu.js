//nav bar menulist
document.write("hello");
const tb=document.getElementsByClassName('toggle-button')[0]
const menulink=document.getElementsByClassName('menulist')[0]

tb.addEventListener('click',() => {
  menulink.classList.toggle('active')
})