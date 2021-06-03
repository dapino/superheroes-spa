import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash(2);
  console.log(id);
  const data = await getData(id);
  const character = data.data.results[0];
  console.log(character);
  const view = `
    <div class="container">
      <div class="character-detail card">
        <article class="character-image">
          <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt="name">
        </article>
        <article class="character-content">
          <h3>${character.name}</h3>
          <p>${character.description}</p>
          <a href="${character.comics.collectionURI}">Comics</a>
        </article>
      </div>
    </div>
  `;
  return view;
};

export default Character;
