const urlHost = "http://localhost:8000/api/v1/usuario";

export const login = async (username, password) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({username, password})
	};

    const token = await fetch(`${urlHost}/token/`, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao trazer um token"));

    return token.access;
}

export const postUser = async (email, password, username, descricao) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({email, username, password, descricao})
	};

    const objUser = await fetch(urlHost, config)
        .then((response) => response.json())
        .catch(() => alert("Ocorreu um error ao renvidicar os dados do BD"));

    return objUser;
}