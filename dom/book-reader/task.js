const fontSizeArr = Array.from(document.querySelectorAll('.font-size'));
const content = document.querySelector('.book__content');

fontSizeArr.forEach((item) => {
  item.addEventListener('click', (event) => {
    const sizeActive = fontSizeArr.find((item) => item.classList.contains('font-size_active'));
    event.preventDefault();
    sizeActive.classList.remove('font-size_active');
    item.classList.add('font-size_active');
    if (item.classList.contains('font-size_small')) {
      content.classList.remove('book_fs-big');
      content.classList.add('book_fs-small');
    } else if (item.classList.contains('font-size_big')) {
      content.classList.remove('book_fs-small');
      content.classList.add('book_fs-big');
    } else {
    content.className = content;
    }
  });
});
