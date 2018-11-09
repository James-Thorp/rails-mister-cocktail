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
            event.preventDefault();
            setTimeout(function(){
              document.querySelector('.swal-button--confirm').addEventListener('click', () => {
                document.querySelector('form').submit();
              });
            }, 1000);
      swal({
        title: "A nice alert",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });
  }
}

function bindSweetAlertButtonDanger() {
  const swalButton = document.getElementById('delete');
    console.log(swalButton)
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      event.preventDefault();
        setTimeout(function(){
          document.querySelector('.swal-button--danger').addEventListener('click', () => {
            document.getElementById('sweet-alert-danger').click();

          });
        }, 1000);
      swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})

    });
  }
}

export { bindSweetAlertButtonDemo };
export { bindSweetAlertButtonDanger };

export { loadDynamicBannerText };
