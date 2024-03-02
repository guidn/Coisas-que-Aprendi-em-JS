console.log('hello world');

function Soma() {

    let input1 = parseFloat(document.getElementById('soma1').value)
    let input2 = parseFloat(document.getElementById('soma2').value)

    const resultado = (input1 + input2)

    return alert(resultado)
}

function Sub() {

    let input1 = parseFloat(document.getElementById('sub1').value)
    let input2 = parseFloat(document.getElementById('sub2').value)

    const resultado = (input1 - input2)

    return alert(resultado)
}

function Divi() {

    let input1 = parseFloat(document.getElementById('divi1').value)
    let input2 = parseFloat(document.getElementById('divi2').value)

    const resultado = (input1 / input2)

    return alert(resultado)
}

function Multi() {

    let input1 = parseFloat(document.getElementById('multi1').value)
    let input2 = parseFloat(document.getElementById('multi2').value)

    const resultado = (input1 * input2)

    return alert(resultado)
}

function CalcGoogle() {
    var valor1 = document.getElementById("valor1").value
    var opcao = document.getElementById("Selecione").value

    if (opcao == "Temperatura") {
        var resultado = (valor1 * 9/5) + 32
    }
    else if (opcao == "Comprimento") {
        var resultado = (valor1 / 100)
    }
    else if (opcao == "Armazenamento de Dados" || opcao == "Transmissao de Dados" || opcao == "Frequencia") {
        var resultado = (valor1 / 1000)
    }
    else if (opcao == "Tempo") {
        var resultado = (valor1 / 60)
    }
    else if (opcao == "Massa" || opcao == "Volume") {
        var resultado = (valor1 * 1000)
    }
    else if (opcao == "Energia Mecanica") {
        var resultado = (valor1 / 3.6)
    }
    else if (opcao == "Consumo de Combustivel") {
        var resultado = (valor1 * 2.352)
    }
    else if (opcao == "Velocidade") {
        var resultado = (valor1 * 3.6)
    }
    else if (opcao == "Pressao") {
        var resultado = (valor1 * 1.013)
    }
    else if (opcao == "Area") {
        var resultado = (valor1 * (1 * 10 ** 6))
    }
    else if (opcao == "Angulo") {
        var resultado = (valor1 * (Math.PI / 180))
    }
    
    return alert(resultado)
}

function buttonscalc() {
    var valord = document.getElementById("exibir")
    valord.setAttribute("value", "1")
}

function Innera() {
    var valord = document.getElementById("exibir")
    valorf = document.getElementById("exibir").value
    valord.setAttribute("value", valorf)
}


function Login() {
    return alert('Vc está logado')
}