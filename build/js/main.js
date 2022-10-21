/*путевые листы */
/*разворачиваем подробнее */
$(".edit-entry").on('click', function () {
  $(this).toggleClass('edit-entry--open');
  $(this).parents('.content-table__wrapper').find('.content-table__more').toggleClass('content-table__more--open')
});
/*Отмечаем чекбоксы */
$(".checkbox-label").on('click', function () {

  if ($('.content-table__row .checkbox:checked').length) {
    $('#all-checkbox-label').addClass('checkbox-label--unselect');
    $("#all-checkbox").attr("checked", "checked");
    $('#delite-rows').removeClass('hidden');
    $('#print-plink').removeClass("disabled")
  } else {
    $('#all-checkbox-label').removeClass('checkbox-label--unselect');
    $("#all-checkbox").attr("checked", false);
    $('#delite-rows').addClass('hidden');
    $('#print-plink').addClass("disabled")
  }
});
/*Снимаем чекбоксы */
$('#all-checkbox-label').on('click', function () {
  if ($("#all-checkbox").is(":checked")) {
    $(".checkbox").prop("checked", true);
    $(this).addClass('checkbox-label--unselect')
    $('#delite-rows').removeClass('hidden');
    $('#print-plink').removeClass("disabled")
  } else {
    $(".checkbox").prop("checked", false);
    $(this).removeClass('checkbox-label--unselect')
    $("#all-checkbox").prop("checked", false);
    $('#delite-rows').addClass('hidden');
    $('#print-plink').addClass("disabled")

  }
})
/*Dropdown Menu*/

$('.dropdown').on('click', function () {
  $(this).parent('form').find('.journal-form-hidden').removeClass('hidden')
  if ($(this).hasClass("active")) {
    $(this).removeClass('active');
    var value = '';
    $(".filter__list li .checkbox-label").filter(function () {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).parents('.filter__list li').toggle(item);
    });
    $(this).find('.sort').removeClass("sort--active");
  } else {
    $(this).addClass('active');
    $(this).find('.select-reset').addClass('active');
    $(this).find('.input-select__link').addClass('active');
    $(this).find('.dropdown-menu').slideDown(500);
    if ($('.filter__list input[type="checkbox"]:checked').length) {
      $(this).find('.sort').addClass("sort--active");
      
    }
  }
}).on('click', ' .filter-reset', function () {
  $(this).parents('.dropdown').find('input[type="checkbox"]').prop("checked", false);
  $(this).parents('.dropdown').find('.dropdown-menu').slideUp(500);
  $(this).parents('.dropdown').find(".filter-searsh").prop('value', '')
  $(this).parents('.dropdown').find('.sort').removeClass("sort--active");
  $(this).parents('.dropdown').find('.filter__list li').css({ 'display': 'block' });
});
$('.dropdown .select__list li').on('click', function () {
  var txt = $(this).text()
  $('.dropdown .select__list li').removeClass('active')
  $(this).addClass('active');
  $(this).parents('.dropdown').find('.input-select__link .input-select-value').text($(this).text());
  $(this).parents('.dropdown').find('.dropdown-menu').slideUp(500);
  $(this).parents('.dropdown').find('.select-reset').addClass('active')
  $(this).parents('.dropdown').find('.select-value').prop('value',txt)
});
$('.dropdown .select-reset').on('click', function () {
  $(this).parents('.dropdown').find('.input-select__link').text($(this).text());
  $(this).parents('.dropdown').find('.dropdown-menu').slideUp(500);
  $(this).removeClass('active');
  $(this).parents('.dropdown').find('.select-value').prop('value','');
  $(this).parents('.dropdown').find('.input-select__link').removeClass('active');
  $(this).parents('form').find('.journal-form-hidden').addClass('hidden')
  return false;
});
$(".filter-searsh").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $(".filter__list li .checkbox-label").filter(function () {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).parents('.filter__list li').toggle(item);
  });
});
$(document).mouseup(function (e) {
  var parent = $(".dropdown.active");
  var div = $(".dropdown.active").find('.dropdown-menu');
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    $(div).slideUp(500);
    $(parent).removeClass('active');
  }
});
/*сортировка по возрастанию.убыванию */
$(".sort-arrow").on('click', function () {
  $(this).toggleClass('sort-arrow--up');
})
/*выпадающее меню в настройках */
$(".setting-link").on("click", function () {
  $(this).toggleClass('active');
  $(".setting-menu").toggleClass("setting-menu--open");
});


/*input time */
$('.time').on('click', function () {
  $(this).parent('.placeholder-container').find('.placeholder').addClass('placeholder--active');
});
$('.time').on('blur', function () {
  var val = $(this).val()
  if (val === "") {
    $(this).parent('.placeholder-container').find('.placeholder').removeClass('placeholder--active');
  } else {
    $(this).parent('.placeholder-container').find('.placeholder').addClass('placeholder--active');
  }
});
/*сброс в модалках */
$('.modal-reset').on('click', function () {
  $(this).parents('.setting-checkbox').find('input[type="checkbox"]').prop("checked", true);
  $(this).parents('form').find('input[type="text"]').prop('value', '');
});
/*раскрываем блоки в модалке */
$('.form__addlink').on('click', function () {
  var id = $(this).data('link');
  $('#'+id).removeClass('hidden');
});

/*календарь в фильтрах*/
$('#select-date').dateRangePicker({
  inline: true,
  container: '#calendar-container',
});

/*календарь в формах */
$('.select-form-date').dateRangePicker({ });
$('#select-diplom').dateRangePicker({singleDate : true, });
/*календарь в формах со временем */
$('#select-form-time').dateRangePicker({
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('#select-form-time1').dateRangePicker({
	separator : ' ~ ',
	format: 'DD.MM.YYYY HH:mm',
  singleDate : true,
	time: {
		enabled: true
	}
});
$('.date-destroy').on('click',function (evt) {
  evt.stopPropagation();
  $('#select-date').data('dateRangePicker').clear();
  $('#select-date').data('dateRangePicker').close();
  $('.select-form-date').data('dateRangePicker').clear();
  $('.select-form-date').data('dateRangePicker').close();
});

/*Основные табы */
$('.main-header__list .tab-link').on('click', function () {
  $(".main-header__list li a").removeClass('active');
  $(".main-header__list li").removeClass('active');
  $(this).toggleClass('active');
  $(this).parent(".main-header__list li").addClass('active');
  $('.tab-content.main-content')
    .removeClass('tab-content--active')
    .filter('[data-id=' + $(this).attr('data-link') + ']')
    .addClass('tab-content--active');
});
/*Табы в контенте */
$('.page-tab-list .tab-link').on('click', function () {
  $(".page-tab-list li a").removeClass('active');
  $(".page-tab-list li").removeClass('active');
  $(this).toggleClass('active');
  $(this).parent(".page-tab-list li").addClass('active');
  $('.content .tab-content')
    .removeClass('tab-content--active')
    .filter('[data-id=' + $(this).attr('data-link') + ']')
    .addClass('tab-content--active');
});
/*скрыть/показать вкладку создания документа/группы */
$("#add-list-link").on('click', function () {
  $("#add-list").removeClass('hidden');
  $("#add-list-close").removeClass('hidden');
  $("#add-list").trigger('click');
});
$(' #add-list-close').on('click', function () {
  $(this).addClass('hidden');
  $("#add-list").addClass('hidden');
  $("#all-list").trigger('click');
});
$("#add-group-link").on('click', function () {
  $("#add-group").removeClass('hidden');
  $("#add-group-close").removeClass('hidden');
  $("#add-group").trigger('click');
});
$(' #add-group-close').on('click', function () {
  $(this).addClass('hidden');
  $("#add-group").addClass('hidden');
  $("#all-list").trigger('click');
});
/*модалки */
class HystModal {
  constructor(props) {
    const defaultConfig = {
      backscroll: true,
      linkAttributeName: 'data-hystmodal',
      closeOnOverlay: true,
      closeOnEsc: true,
      closeOnButton: true,
      waitTransitions: false,
      catchFocus: true,
      fixedSelectors: '*[data-hystfixed]',
      beforeOpen: () => { },
      afterClose: () => { },
    };
    this.config = Object.assign(defaultConfig, props);
    if (this.config.linkAttributeName) {
      this.init();
    }
    this._closeAfterTransition = this._closeAfterTransition.bind(this);
  }

  init() {
    this.isOpened = false;
    this.openedWindow = false;
    this.starter = false;
    this._nextWindows = false;
    this._scrollPosition = 0;
    this._reopenTrigger = false;
    this._overlayChecker = false;
    this._isMoved = false;
    this._focusElements = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      'select:not([disabled]):not([aria-hidden])',
      'textarea:not([disabled]):not([aria-hidden])',
      'button:not([disabled]):not([aria-hidden])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ];
    this._modalBlock = false;

    const existingShadow = document.querySelector('.hystmodal__shadow');
    if (existingShadow) {
      this.shadow = existingShadow;
    } else {
      this.shadow = document.createElement('div');
      this.shadow.classList.add('hystmodal__shadow');
      document.body.appendChild(this.shadow);
    }
    this.eventsFeeler();
  }

  eventsFeeler() {
    document.addEventListener('click', (e) => {
      const clickedlink = e.target.closest(`[${this.config.linkAttributeName}]`);
      if (!this._isMoved && clickedlink) {
        e.preventDefault();
        this.starter = clickedlink;
        const targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
        this._nextWindows = document.querySelector(targetSelector);
        this.open();
        return;
      }
      if (this.config.closeOnButton && e.target.closest('[data-hystclose]')) {
        this.close();
      }
    });

    if (this.config.closeOnOverlay) {
      document.addEventListener('mousedown', (e) => {
        if (!this._isMoved && (e.target instanceof Element) && !e.target.classList.contains('hystmodal__wrap')) return;
        this._overlayChecker = true;
      });

      document.addEventListener('mouseup', (e) => {
        if (!this._isMoved && (e.target instanceof Element) && this._overlayChecker && e.target.classList.contains('hystmodal__wrap')) {
          e.preventDefault();
          this._overlayChecker = !this._overlayChecker;
          this.close();
          return;
        }
        this._overlayChecker = false;
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!this._isMoved && this.config.closeOnEsc && e.which === 27 && this.isOpened) {
        e.preventDefault();
        this.close();
        return;
      }
      if (!this._isMoved && this.config.catchFocus && e.which === 9 && this.isOpened) {
        this.focusCatcher(e);
      }
    });
  }

  open(selector) {
    if (selector) {
      if (typeof (selector) === 'string') {
        this._nextWindows = document.querySelector(selector);
      } else {
        this._nextWindows = selector;
      }
    }
    if (!this._nextWindows) {
      console.log('Warning: hystModal selector is not found');
      return;
    }
    if (this.isOpened) {
      this._reopenTrigger = true;
      this.close();
      return;
    }
    this.openedWindow = this._nextWindows;
    this._modalBlock = this.openedWindow.querySelector('.hystmodal__window');
    this.config.beforeOpen(this);
    this._bodyScrollControl();
    this.shadow.classList.add('hystmodal__shadow--show');
    this.openedWindow.classList.add('hystmodal--active');
    this.openedWindow.setAttribute('aria-hidden', 'false');
    if (this.config.catchFocus) this.focusControl();
    this.isOpened = true;
  }

  close() {
    if (!this.isOpened) {
      return;
    }
    if (this.config.waitTransitions) {
      this.openedWindow.classList.add('hystmodal--moved');
      this._isMoved = true;
      this.openedWindow.addEventListener('transitionend', this._closeAfterTransition);
      this.openedWindow.classList.remove('hystmodal--active');
    } else {
      this.openedWindow.classList.remove('hystmodal--active');
      this._closeAfterTransition();
    }
  }

  _closeAfterTransition() {
    this.openedWindow.classList.remove('hystmodal--moved');
    this.openedWindow.removeEventListener('transitionend', this._closeAfterTransition);
    this._isMoved = false;
    this.shadow.classList.remove('hystmodal__shadow--show');
    this.openedWindow.setAttribute('aria-hidden', 'true');

    if (this.config.catchFocus) this.focusControl();
    this._bodyScrollControl();
    this.isOpened = false;
    this.openedWindow.scrollTop = 0;
    this.config.afterClose(this);

    if (this._reopenTrigger) {
      this._reopenTrigger = false;
      this.open();
    }
  }

  focusControl() {
    const nodes = this.openedWindow.querySelectorAll(this._focusElements);
    if (this.isOpened && this.starter) {
      this.starter.focus();
    } else if (nodes.length) nodes[0].focus();
  }

  focusCatcher(e) {
    const nodes = this.openedWindow.querySelectorAll(this._focusElements);
    const nodesArray = Array.prototype.slice.call(nodes);
    if (!this.openedWindow.contains(document.activeElement)) {
      nodesArray[0].focus();
      e.preventDefault();
    } else {
      const focusedItemIndex = nodesArray.indexOf(document.activeElement);
      if (e.shiftKey && focusedItemIndex === 0) {
        nodesArray[nodesArray.length - 1].focus();
        e.preventDefault();
      }
      if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
        nodesArray[0].focus();
        e.preventDefault();
      }
    }
  }

  _bodyScrollControl() {
    if (!this.config.backscroll) return;

    // collect fixed selectors to array
    const fixedSelectorsElems = document.querySelectorAll(this.config.fixedSelectors);
    const fixedSelectors = Array.prototype.slice.call(fixedSelectorsElems);

    const html = document.documentElement;
    if (this.isOpened === true) {
      html.classList.remove('hystmodal__opened');
      html.style.marginRight = '';
      fixedSelectors.forEach((el) => {
        el.style.marginRight = '';
      });
      window.scrollTo(0, this._scrollPosition);
      html.style.top = '';
      return;
    }
    this._scrollPosition = window.pageYOffset;
    const marginSize = window.innerWidth - html.clientWidth;
    html.style.top = `${-this._scrollPosition}px`;

    if (marginSize) {
      html.style.marginRight = `${marginSize}px`;
      fixedSelectors.forEach((el) => {
        el.style.marginRight = `${parseInt(getComputedStyle(el).marginRight, 10) + marginSize}px`;
      });
    }
    html.classList.add('hystmodal__opened');
  }
}
const myModal = new HystModal({
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
  beforeOpen: function (modal) {
    console.log('Message before opening the modal');
    console.log(modal);
  },
  afterClose: function (modal) {
    console.log('Message after modal has closed');
    console.log(modal);

    let videoframe = modal.openedWindow.querySelector('iframe');
    if (videoframe) {
      videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  },
});



