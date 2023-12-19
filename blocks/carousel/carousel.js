export default function decorate(block) {
  document.querySelector('.carousel-wrapper').classList.add('carousel');
  document.querySelector('.carousel').classList.remove('carousel-wrapper');
  document.querySelector('.carousel').classList.add('carousel-inner');

  [...block.children].forEach((row, i) => {
    row.classList.add('carousel-item');
    if (i === 0) {
      row.classList.add('active');
    }
    [...row.children].forEach((col) => {
      col.children[1].style = 'position: absolute; left: 0; top: 0;';
      col.children[1].classList.add('text-white');
    });
  });
}
