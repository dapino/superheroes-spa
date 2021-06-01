const Pagination = (actualPage, maxPages) => {
  const page = parseInt(actualPage);
  const view = `
    <section class="pagination">
      <div class="pagination__buttons">
        <a class="pagination__button previous" href="#/characters/${
          page - 1
        }">next</a>
        <a class="pagination__button next" href="#/characters/${
          page + 1
        }">next</a>
      </div>
      <p class="pagination__details">page ${actualPage} of ${maxPages}</p>
    </section>
  `;
  return view;
};

export default Pagination;
