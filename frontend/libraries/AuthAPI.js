export async function register(jsonObject) {
	const url = "https://haha-api.herokuapp.com/api/v1/register";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	console.log(Response);
	return Response;
}

export async function login(jsonObject) {
	const url = "https://haha-api.herokuapp.com/api/v1/login";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function verify(jsonObject, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/user";
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function addProfile(file, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/profile";
	const response = await fetch(url, {
		method: "PUT",
		headers: { "auth-token": auth },
		body: file,
	});

	const Response = await response.json();
	return Response;
}
