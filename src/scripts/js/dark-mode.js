if (theme === "dark") {
  $("#darkmode").attr('checked', true);
  $('body').addClass('dark-mode');
  window.localStorage.setItem('theme', 'dark');
} else {
  $('body').removeClass('dark-mode');
  window.localStorage.setItem('theme', 'light');
}

$('#darkmode').on('change', function(e){
  if ($(this).is(':checked')) {
    $('body').addClass('dark-mode');
    window.localStorage.setItem('theme', 'dark');
  } else {
    $('body').removeClass('dark-mode');
    window.localStorage.setItem('theme', 'light');
  }
});
