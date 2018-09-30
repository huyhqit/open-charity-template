module.exports = function (sandbox) {
  const _this = this;

  _this.renderSection5Slide = () => {
    $('#section_5__list').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      dots: true,
    });
  };

  _this.renderSection6Slide = () => {
    $('#section_6__list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });
  };

  _this.toggleSection1TitleItalicStyle = () => {
    _this.objects.$section1Title.toggleClass('text-italic');
  };

  sandbox.on('moduleHeader/logo/click', () => {
    _this.toggleSection1TitleItalicStyle();
  });

  _this.render = () => {
    _this.renderSection5Slide();
    _this.renderSection6Slide();
  };

  return {
    init: (data = {}) => {
      _this.data = data;

      _this.DOMSelectors = {};
      _this.objects = {
        $section1Title: $('#section_1__title'),
      };
      _this.templates = {};

      _this.render();
    },
    destroy: () => {
    },
  };
};
