let num1=document.querySelector("input#num1")
let num2=document.querySelector("input#num2")

let sum=document.querySelector("div>button#sum")
let min=document.querySelector("div>button#min")
let mul=document.querySelector("div>button#mul")
let div=document.querySelector("div>button#div")
let pow=document.querySelector("div>button#pow")
let per=document.querySelector("div>button#per")


sum.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)+Number(num2.value)
})
min.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)-Number(num2.value)
})
mul.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)*Number(num2.value)
})
div.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)/Number(num2.value)
})
pow.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)**Number(num2.value)
})
per.addEventListener("click",function(){
    document.querySelector("h1").innerHTML=Number(num1.value)%Number(num2.value)
})