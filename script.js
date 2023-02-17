const confirm = document.querySelector(".formulario button");
const formulario = document.querySelector(".formulario");
const obrigado = document.querySelector(".obrigado");
const continua = document.querySelector(".obrigado button");
//numero
const numCartaoDig = document.querySelector(
  '.form-number input[type="number"]'
);
//nome
const nomeCartaoDig = document.querySelector("#nome");
const nomeCartao = document.querySelector(".cardName");
//data
const dataMes = document.querySelector(".mes");
const dataAno = document.querySelector(".ano");
const anoDig = document.querySelector("#ano");
const mesDig = document.querySelector("#mes");
//cvc
const cvcDig = document.querySelector("#cvc");
const cvc = document.querySelector(".cvc");

cvcDig.addEventListener("input", () => {
  cvc.innerHTML = cvcDig.value;
});

//input em tempo real da DATA e ANO no cartao
mesDig.addEventListener("input", () => {
  dataMes.innerHTML = mesDig.value;
});

anoDig.addEventListener("input", () => {
  dataAno.innerHTML = anoDig.value;
});

//input em tempo real do NOME no cartao
nomeCartaoDig.addEventListener("input", () => {
  nomeCartao.innerHTML = nomeCartaoDig.value;
});

//input em tempo real do numero do cartao
function padRight(str, len, pad) {
  return str.padEnd(len, pad).slice(0, len);
}

numCartaoDig.addEventListener("input", () => {
  const numCartao = numCartaoDig.value;
  const numCartaoFormatado = padRight(numCartao.slice(0, 16), 16, "0")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  if (numCartaoFormatado !== "+/*-,") {
    number.innerHTML = numCartaoFormatado;
  }

  if(/^[0-9]+$/.test(numCartaoDig.value) && numCartaoDig.value.length===16 ){
    numCartaoDig.classList.remove("remove")
    numCartaoDig.classList.add("accept")
  } else{
    numCartaoDig.classList.remove("accept")
    numCartaoDig.classList.add("remove")
  }
});

nomeCartaoDig.addEventListener("input",()=>{
  if(/^[0-9]+$/.test(nomeCartaoDig.value) && nomeCartaoDig.value.length <5){
    nomeCartaoDig.classList.remove("accept")
    nomeCartaoDig.classList.add("remove")
  } else{
    nomeCartaoDig.classList.remove("remove")
    nomeCartaoDig.classList.add("accept")
  }
})


anoDig.addEventListener("input",()=>{
  if(/^[0-9]+$/.test(anoDig.value) && anoDig.value.length <2){
    anoDig.classList.remove("accept")
    anoDig.classList.add("remove")
  } else{
    anoDig.classList.remove("remove")
    anoDig.classList.add("accept")
  }
})

mesDig.addEventListener("input",()=>{
  if(/^[0-9]+$/.test(mesDig.value) && mesDig.value.length <2){
    mesDig.classList.remove("accept")
    mesDig.classList.add("remove")
  } else{
    mesDig.classList.remove("remove")
    mesDig.classList.add("accept")
  }
})

cvcDig.addEventListener("input",()=>{
  if(/^[0-9]+$/.test(cvcDig.value) && cvcDig.value.length <3){
    cvcDig.classList.remove("accept")
    cvcDig.classList.add("remove")
  } else{
    cvcDig.classList.remove("remove")
    cvcDig.classList.add("accept")
  }
})
//

function hasOnlyLetter(inputNome) {
  return /^[a-zA-Z]+$/.test(inputNome);
}
function hasOnlyNumber(inputNum) {
  return /^[0-9]+$/.test(inputNum);
}
function hasOnlyMes(inputMes) {
  return /^[0-9]+$/.test(inputMes);
}
function hasOnlyAno(inputAno) {
  return /^[0-9]+$/.test(inputAno);
}
function hasOnlyCvc(inputCvc) {
  return /^[0-9]+$/.test(inputCvc);
}

//Atualizaão de tela para OBRIGADO
confirm.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    hasOnlyLetter(nomeCartaoDig.value) &&
    hasOnlyNumber(numCartaoDig.value) &&
    hasOnlyCvc(cvcDig.value) &&
    hasOnlyAno(anoDig.value) &&
    hasOnlyMes(mesDig.value)
  ) {
    formulario.style.display = "none";
    obrigado.style.display = "block";
  }
});





continua.addEventListener("click", (e) => {
  formulario.style.display = "grid";
  obrigado.style.display = "none";
});
//
