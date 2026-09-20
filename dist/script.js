const dialog = document.querySelector('#screen-dialog');
const dialogImage = dialog.querySelector('img');
const dialogTitle = dialog.querySelector('#dialog-title');

document.querySelectorAll('.screen-card').forEach((card) => {
  card.addEventListener('click', () => {
    dialogImage.src = card.dataset.image;
    dialogImage.alt = card.querySelector('img').alt;
    dialogTitle.textContent = card.dataset.title;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
