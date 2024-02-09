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



function Login() {
    return alert('Vc está logado')
}