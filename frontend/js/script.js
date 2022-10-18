const button = document.querySelector("#button-login");

button.addEventListener("click", () => {
    const email = document.querySelector("#email-login").value;
    const senha = document.querySelector("#senha-login").value;

    // const senhaCriptografada = criptografarSenha(senha)
    // const dadosLogin = analisarLogin(email, senhaCriptografada)
    const dadosLogin = analisarLogin(email, senha)
})

async function dadosLogin (email, senha) {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
            senha,
		}),
	};
    const validar = await fetch("/login", config)
}