const getAPIData = async (url) => {
    const _urlBase = 'https://api.le-systeme-solaire.net/rest/bodies';
	const res = await fetch(`${_urlBase}/${url}`);

	if (!res.ok) {
		throw new Error (`Could not fetch ${url}, status: ${res.status}`);
	}

	return res.json();
};

const getData = async (planet) => {
	const res = await fetch(`http://localhost:3000/${planet}`);

	if (!res.ok) {
		throw new Error (`Could not fetch , status: ${res.status}`);
	}

	return await res.json();
};


export {getAPIData, getData};