function sortear() {
    const min = Math.ceil(document.getElementById("Min").value);
    const max = Math.floor(document.getElementById("Max").value);


    if (min >= max) {

        alert("O número máximo deve ser maior que o mínimo.");
    }
    else {
        const resultado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
        alert("O número sorteado é: " + resultado);
    }
}