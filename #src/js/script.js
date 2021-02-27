function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

let showbtn = document.getElementById('anruf');
let closebtn = document.getElementById('closeBtn');
let modal = document.getElementById('modal');

showbtn.addEventListener('click', function () {
  modal.classList.remove('notvisible');
  modal.classList.add('modal');
});

closebtn.addEventListener('click', function () {
  modal.classList.remove('modal');
  modal.classList.add('notvisible');
});
