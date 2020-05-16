var menu=document.getElementById('menu')
var close=document.getElementById('close')
var nav=document.getElementById('nav')
menu.addEventListener('click',function(e){
    nav.classList.toggle('hidemobile')
})
close.addEventListener('click',function(e)
{
 nav.classList.add('hidemobile')
})