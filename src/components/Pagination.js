const Pagination = (actualPage, maxPages) => {
  const page = parseInt(actualPage);
  const view = `
    <section class="pagination">
      <div class="pagination__buttons">
        <a class="button previous" href="#/characters/${page - 1}">previous</a>
        <a class="button next" href="#/characters/${page + 1}">next</a>
      </div>
      <p class="pagination__details">page ${actualPage} of ${maxPages}</p>
    </section>
  `;
  return view;
};

export default Pagination;
