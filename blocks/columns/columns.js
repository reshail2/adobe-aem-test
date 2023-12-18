export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  const metadata = block.closest('.section').dataset;
  const { title, subtitle } = metadata;

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  block.innerHTML = `<div><h1>${title.innerHTML}</h1> <p>${subtitle.innerHTML}</p> ${image.innerHTML}</div>`
}
