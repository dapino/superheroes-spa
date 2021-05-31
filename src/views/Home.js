import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters">
      ${characters.data.results
        .map(
          (character) => `
        <article class="character">
          <a href="#/${character.id}">
            <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt="name">
            <h2>${character.name}</h2>
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
