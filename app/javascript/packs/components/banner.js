import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Come and enjoy", "The best cocktails in London"],
    typeSpeed: 100,
    loop: true
  });
}
import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
    console.log(swalButton)
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "A nice alert",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });
  }
}

export { bindSweetAlertButtonDemo };

export { loadDynamicBannerText };
