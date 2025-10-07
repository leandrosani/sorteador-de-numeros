const quantity = document.querySelector("#n1")
const n1 = document.querySelector("#n2")
const n2 = document.querySelector("#n3")

const sortStart = document.querySelector(".sort-start")
const sortEnd = document.querySelector(".sort-end")

const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const btnAgain = document.querySelector(".btn-again");

const contadorDeEnvio = 0;


function drawNumbers(quantity, n1, n2) {
  const results = [];
  const result = document.querySelector(".result-wrap")

  const newDiv = document.createElement(`div`)
  newDiv.classList.add(`result`)

  sortStart.classList.add("display-none")
  sortEnd.classList.remove("display-none")
  

  for(let i = 0; i < Number(quantity.value); i++){
    const num = Math.floor(Math.random() * Number(n2.value)) + Number(n1.value)
    results.push(num)

    const newDiv = document.createElement("div") 
    newDiv.classList.add("result")
    newDiv.textContent = results[i];
    
    result.append(newDiv)
  }

  console.log(contadorDeEnvio)
}

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  drawNumbers(quantity,n1,n2)
});

btnAgain.addEventListener("click", (event)=>{
  event.preventDefault

  quantity.value = "";
  n1.value = "";
  n2.value = "";

  sortStart.classList.remove("display-none")
  sortEnd.classList.add("display-none")
  quantity.focus();
});