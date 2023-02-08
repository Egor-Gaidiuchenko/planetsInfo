const getData = async (url) => {
    const _urlBase = 'https://api.le-systeme-solaire.net/rest/bodies';
	const res = await fetch(`${_urlBase}/${url}`);

	if (!res.ok) {
		throw new Error (`Could not fetch ${url}, status: ${res.status}`);
	}

	return res.json();
};


export default getData;