function criptografar(dados) {
	let j = 0;
	let mensx = "";
	let ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";

	for (let i = 0; i < dados.length; i++){
		j++;
		let l = (asc(dados.substr(i, 1)) + (asc(ch.substr(j, 1))));

		if (j == 50){
			j = 1;
		}
		if (l > 255){
			l -= 256;
		}

		mensx += (chr(l));
	}

    return mensx;
}

function descriptografar(dados) {
	let j = 0;
	let mensx = "";
	let ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";

	for (let i = 0; i < dados.length; i++){
		j++;
		let l = (asc(dados.substr(i, 1)) - (asc(ch.substr(j, 1))));

		if (j == 50){
			j = 1;
		}
		if (l < 0){
			l += 256;
		}

		mensx += (chr(l));
	}

    return mensx;
}

function asc(string) {
	return string.charCodeAt(0);
}

function chr(asciiNum) {
	return String.fromCharCode(asciiNum)
}

export {criptografar, descriptografar}