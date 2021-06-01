import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash(2);
  console.log(id);
  const data = await getData(id);
  const character = data.data.results[0];
  console.log(character);
  const view = `
    <div class="characters">
      <article class="character-card">
        <img src="${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}" alt="name">
      </article>
      <article class="character-card">
        <h3>${character.name}</h3>
        <p>${character.description}</p>
      </article>
    </div>
  `;
  return view;
};

export default Character;
