import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  console.log('characters: ', characters.data.results);
  const view = `
    <div class="characters">
      ${characters.data.results.map(
        (character) => `
        <a href='#/${character.id}'></a>
        <article class="character">
          <a href="#/1">
            <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt="name">
            <h2>${character.name}</h2>
          </a>
        </article>
      `
      )}
    </div>
  `;
  return view;
};

export default Home;
