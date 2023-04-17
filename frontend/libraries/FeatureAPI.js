export async function likePost(post_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/like/" + post_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function unlikePost(post_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/unlike/" + post_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function followUser(user_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/follow/" + user_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function getUser(user_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/profile/" + user_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function unfollowUser(user_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/unfollow/" + user_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}
