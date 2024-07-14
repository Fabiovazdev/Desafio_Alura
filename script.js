function criptografarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').innerText = outputText;
}

function descriptografarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').innerText = outputText;
}
function criptografarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').innerText = outputText;
}

function descriptografarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').innerText = outputText;
}
function copiarTexto() {
    var textoCriptografado = document.getElementById('outputText').textContent;


var textarea = document.createElement('textarea');
    textarea.value = textoCriptografado;
    textarea.style.position = 'fixed'; 
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy'); 
    document.body.removeChild(textarea); 
    alert('Texto copiado para a área de transferência');
}