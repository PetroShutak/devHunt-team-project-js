window.onload = function () {
  const fullDocumentHeight = document.documentElement.scrollHeight;
  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 0.8 * fullDocumentHeight ? this.show() : this.hide();
      });
      this.el.onclick = () => {
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
