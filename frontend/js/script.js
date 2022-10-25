import { criptografar } from './encrypted.js'
import secret from './secret.js'

const formRegistration = document.querySelector("#form-registration");
const formLogin = document.querySelector("#form-login");

const url = "http://localhost:8000/api";
const urlUsuarios = url + "/v1/usuario";

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = formLogin.querySelector("#email-login").value;
    const senha = formLogin.querySelector("#senha-login").value;

    const senhaCriptografada = criptografar(senha)
    // const dadosLogin = analisarLogin(email, senhaCriptografada)
})

formRegistration.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = formRegistration.querySelector("#email-cadastro").value;
    const senhaPura = formRegistration.querySelector("#senha-cadastro").value;
    const nome = formRegistration.querySelector("#nome-cadastro").value;
    const descricao = formRegistration.querySelector("#descricao-cadastro").value;

    const senha = criptografar(senhaPura)

    const retorno = await cadastrarUsuario(email, senha, nome, descricao);
    console.log(retorno)
})

async function acessandoToken() {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({
            "username": secret.token_user,
            "password": secret.token_pass
        })
	};

    const token = await fetch(`${url}/token/`, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao trazer um token"));

    return token.access;
}

async function cadastrarUsuario (email, senha, nome, descricao) {
    const token = await acessandoToken();

    const config = {
		method: "POST",
		headers: {
            "Authorization": `Bear ${token}`,
			"Content-Type": "application/json",
		},
        body: JSON.stringify({email, nome, senha, descricao})
	};

    const retorno = await fetch(urlUsuarios, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao renvidicar os dados do BD"));

    return retorno;
}

// async function dadosLogin (email, senha) {
//     const token = await acessandoToken();

//     const config = {
// 		method: "POST",
// 		headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
// 		},
//         body: JSON.stringify({ email, senha})
// 	};

//     const validar = await fetch(urlUsuarios, config)
//         .then((response) => response.json())
//         .catch(() => alert("Ocorreu um error ao renvidicar os dados do BD"));

//     return validar
// }