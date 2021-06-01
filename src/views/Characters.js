import getData from '../utils/getData';
import getHash from '../utils/getHash';
import Pagination from '../components/Pagination';

const Characters = async () => {
  // TODO: Refactor pagination in utils/pagination
  const limit = 12;
  const maxPages = Math.floor(1493 / limit);
  const actualPage = () => {
    return getHash(2) > 1 ? (getHash(2) > maxPages ? maxPages : getHash(2)) : 1;
  };
  const characters = await getData(0, limit, actualPage() * limit);
  const view = `
    <div class="characters">
      ${characters.data.results
        .map(
          (character) => `
        <article class="character card">
          <a href="#/character/${character.id}">
            <img class="character__img" src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="name">
            <h2 class="character__title">${character.name}</h2>
          </a>
        </article>
      `
        )
        .join('')}
    </div>
    ${Pagination(actualPage(), maxPages)}
  `;
  return view;
};

export default Characters;
