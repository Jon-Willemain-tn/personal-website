$('.project').hover(
  function() {
    $(this).find('div').css('display', 'block');
  },

  function() {
    $(this).find('div').css('display', 'none');
  }
);
