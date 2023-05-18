$(document). ready (function(){

$.getJSON('./basudata.json',basudata)

})

let name = document.querySelector('.name')
let cellno =document.querySelector('.cellno')
let email = document.querySelector('.email')
let adddr = document.querySelector('.addr')
let skills =document.querySelector('.skills')
let prof=document.querySelector('.prof')
let exp=document.querySelector('.exp')
let HSE= document.querySelector('.HSE')
let BE=document.querySelector('.BE')
let MS=document.querySelector('.MS')



function basudata(data){
    
    for(const property in data)
    {
         name.innerHTML = data.name
         email.innerHTML = data.email
         cellno.innerHTML= data.cellno
         adddr.innerHTML=data.addr
         skills.innerHTML=data.skills
         prof.innerHTML=data.prof
         exp.innerHTML=data.exp
         HSE.innerHTML=data.HSE
         BE.innerHTML=data.BE
         MS.innerHTML=data.MS
    }
}





