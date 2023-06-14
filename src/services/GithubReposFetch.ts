export const reposFetch = fetch('https://api.github.com/users/aAnfitrion/repos', { method: 'GET' })
	.then((response) => response.json())
	.then((response) => {
		return response;
	});
