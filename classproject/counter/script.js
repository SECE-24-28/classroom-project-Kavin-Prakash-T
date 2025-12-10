const numberElement=document.getElementById("number");

const incBtn=document.getElementById("increment");
const decBtn=document.getElementById("decrement");

incBtn.addEventListener('click',()=>{
    let value=Number(numberElement.textContent)
    numberElement.innerHTML=value+1
})

decBtn.addEventListener('click',()=>{
    let value=Number(numberElement.textContent)
    numberElement.innerHTML=value-1
})

const resetBtn=document.getElementById("reset")

resetBtn.addEventListener('click',()=>{
    numberElement.innerHTML=0
})