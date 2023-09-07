const res = document.getElementById('result')
function colocarRes(valor){
    res.value += valor;
}

function zerar(){
    res.value=""
}

function calcular(){
    let expressao = res.value
    let result = eval(expressao)
    res.value = result

}