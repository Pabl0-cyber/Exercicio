const form = document.getElementById("form-comparacao")
let comparacao = false;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

    const campoA = parseFloat(document.getElementById("campo-A").value);
    const campoB = parseFloat(document.getElementById("campo-B").value);
    const mensagemSucesso = " O campo (A) é maior que o campo (B) ";
    const mensagemError = " O campo (A) precisa ser maior que o campo (B) ";

    comparacao = (campoA > campoB)
    if (comparacao) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }
});

console.log(form);