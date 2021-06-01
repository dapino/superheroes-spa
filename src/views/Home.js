import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters">
      ${characters.data.results
        .map(
          (character) => `
        <article class="character card">
          <a href="#/${character.id}">
            <img class="character__img" src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="name">
            <h2 class="character__title">${character.name}</h2>
          </a>
        </article>
      `
        )
        .join('')}
    </div>
  `;
  return view;
};

export default Home;
