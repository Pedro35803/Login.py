import { login, postUser } from "./crudUser.js";
import { signIn } from "./auttenticate.js"

const formRegistration = document.querySelector("#form-registration");
const formLogin = document.querySelector("#form-login");

formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = formLogin.querySelector("#email-login").value;
    const senha = formLogin.querySelector("#senha-login").value;

    const token = await login(email, senha)

    if (token.access) {
        signIn(token.refresh)
    } else {
        alert("Adicione o usuario e senha corretamente")
    }
})

formRegistration.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = formRegistration.querySelector("#email-cadastro").value;
    const senha = formRegistration.querySelector("#senha-cadastro").value;
    const nome = formRegistration.querySelector("#nome-cadastro").value;
    const descricao = formRegistration.querySelector("#descricao-cadastro").value;

    const objUser = await postUser(email, senha, nome, descricao);

    if (!objUser.username) {
        alert("Usuário não registrado, algum error aconteceu")
        return;
    }
    
    const token = await login(nome, senha)

    if (token.access) {
        signIn(token.refresh)
    } else {
        alert("Algum deu errado ao fazer login pós cadastro")
    }
})