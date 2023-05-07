window.onload = function () {
  const fullDocumentHeight = document.documentElement.scrollHeight;
  const btnUp = {
    element: document.querySelector('.btn-up'),
    show() {
      this.elem.classList.remove('btn-up_hide');
    },
    hide() {
      this.elem.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 0.8 * fullDocumentHeight ? this.show() : this.hide();
      });
      this.elem.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
    },
  };
  btnUp.addEventListener();
};
