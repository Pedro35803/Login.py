const button = document.querySelector("#button-login");

const url = "localhost:8000/api";
const urlUsuarios = url + "/v1/usuarios";

button.addEventListener("click", () => {
    const email = document.querySelector("#email-login").value;
    const senha = document.querySelector("#senha-login").value;

    // const senhaCriptografada = criptografarSenha(senha)
    // const dadosLogin = analisarLogin(email, senhaCriptografada)
    const dadosLogin = analisarLogin(email, senha)
})

async function dadosLogin (email, senha) {
    const token = acessandoToken();

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