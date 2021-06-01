const APIKEY = '7700e70b79ba8e47e54084c237a5ba1c';
const APIURL = 'https://gateway.marvel.com/v1/public/characters';
const HASH = '095feed6b4a5293f096874bcc8b506fe';
// https://gateway.marvel.com:443/v1/public/characters?apikey=7700e70b79ba8e47e54084c237a5ba1c
// https://gateway.marvel.com:443/v1/public/characters/1?apikey=7700e70b79ba8e47e54084c237a5ba1c

const getData = async (id, limit, offset) => {
  // const ts = Date.now();
  const ts = 1;
  const apiURL =
    limit && offset
      ? `${APIURL}?ts=${ts}&apikey=${APIKEY}&hash=${HASH}&limit=${limit}&offset=${offset}`
      : `${APIURL}/${id}?ts=${ts}&apikey=${APIKEY}&hash=${HASH}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error', error);
  }
};

export default getData;
