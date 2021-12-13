//Inserir números na tela
function insertNumber(digit){
    //Variável que guarda o valor inserido pelo usuário
    let number = document.getElementById("showNumber").innerHTML;
    //A cada digíto clicado, é exibido na tela o número anterior mais o novo digíto
    document.getElementById("showNumber").innerHTML = number + digit;
}

//Apagar um número por vez
function deleteOne(){
    //Variável que guarda o valor inserido pelo usuário
    let result = document.getElementById("showNumber").innerHTML;
    //O último digíto inserido pelo usuário é apagado a cada clique do botão "C"
    document.getElementById("showNumber").innerHTML = result.substring(0, result.length - 1);
}

//Limpar todos os números da tela
function deleteAll(){
    //Todo o número é substituído por um "vazio"
    document.getElementById("showNumber").innerHTML = "";
}

//Efetuar os cálculos
function eql(){
    //Variável que guarda o valor inserido pelo usuário
    let number = document.getElementById("showNumber").innerHTML;

    //Se o valor da variável de entrada não for "vazio", então os cálculos serão efetuados, caso contrário, uma mensagem de aviso será exibida ao usuário
    if (number != ""){
        document.getElementById("showNumber").innerHTML = eval(number);
    }else{       
        document.getElementById("showNumber").innerHTML = "Insira números!";
    }
}