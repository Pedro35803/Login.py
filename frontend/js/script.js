const button = document.querySelector("#button-login");
const form = document.querySelector("#form")

const url = "http://localhost:8000/api";
const urlUsuarios = url + "/v1/usuarios";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = form.querySelector("#email-login").value;
    const senha = form.querySelector("#senha-login").value;

    // const senhaCriptografada = criptografarSenha(senha)
    // const dadosLogin = analisarLogin(email, senhaCriptografada)
})

async function dadosLogin (email, senha) {
    const token = await acessandoToken();

    const config = {
		method: "POST",
		headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
		},
        body: JSON.stringify({ email, senha})
	};

    const validar = await fetch(urlUsuarios, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao renvidicar os dados do BD"));

    return validar
}

async function acessandoToken() {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({
            "username": "",
            "password": ""
        })
	};

    const token = await fetch(`${url}/token/`, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao trazer um token"));

    return token;
}