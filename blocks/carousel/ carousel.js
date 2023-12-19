export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    row.classList.add('carouse-item');
    if (i === 0) {
      row.classList.add('active');
    }
    [...row.children].forEach((col) => {
      col.children[1].style = 'position: absolute; left: 0; top: 0;';
    });
  });
}
