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

$('.select').each(function () {
  const _this = $(this),
    selectOption = _this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text(),
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
    class: 'new-select__list',
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function () {
        let chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});

$(document).ready(function () {
  $('.articles__first').on('click', function () {
    $(this).addClass('active');
    $('.articles__second').removeClass('active');
    $('.articles__third').removeClass('active');
    $('.articles__textfirst').removeClass('notvisibletext');
    $('.articles__textsecond').addClass('notvisibletext');
    $('.articles__textthird').addClass('notvisibletext');
  });
  $('.articles__second').on('click', function () {
    $(this).addClass('active');
    $('.articles__first').removeClass('active');
    $('.articles__third').removeClass('active');
    $('.articles__textfirst').addClass('notvisibletext');
    $('.articles__textsecond').removeClass('notvisibletext');
    $('.articles__textthird').addClass('notvisibletext');
  });
  $('.articles__third').on('click', function () {
    $(this).addClass('active');
    $('.articles__first').removeClass('active');
    $('.articles__second').removeClass('active');
    $('.articles__textfirst').addClass('notvisibletext');
    $('.articles__textsecond').addClass('notvisibletext');
    $('.articles__textthird').removeClass('notvisibletext');
  });
});

$(document).ready(function () {
  $('.faqsection__arrow').on('click', function () {
    $('.faqsection__arrow').toggleClass('rotate');
    $('.faqsection__description').toggleClass('notvisible');
  });
  $('.faqsection__arrowone').on('click', function () {
    $('.faqsection__arrowone').toggleClass('rotate');
    $('.faqsection__descriptionone').toggleClass('notvisible');
  });
  $('.faqsection__arrowtwo').on('click', function () {
    $('.faqsection__arrowtwo').toggleClass('rotate');
    $('.faqsection__descriptiontwo').toggleClass('notvisible');
  });
});
