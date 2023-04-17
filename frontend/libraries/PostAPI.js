export async function newPost(jsonObject, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/post";
	const response = await fetch(url, {
		method: "POST",
		headers: { "auth-token": auth },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function deletePost(post_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/post/" + post_id;
	const response = await fetch(url, {
		method: "DELETE",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function getFeedPost(auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/posts";
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function getExplorePost(auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/explore";
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function postComment(post_id, jsonObject, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/comment/" + post_id;
	const response = await fetch(url, {
		method: "POST",
		headers: { "auth-token": auth },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function getPost(post_id, auth) {
	const url = "https://haha-api.herokuapp.com/api/v1/post/" + post_id;
	const response = await fetch(url, {
		method: "GET",
		headers: { "auth-token": auth },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}
