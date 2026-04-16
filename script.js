function sortear() {
    const min = Math.ceil(document.getElementById("Min").value);
    const max = Math.floor(document.getElementById("Max").value);
    
    const resultado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
    alert("O número sorteado é: " + resultado);
}