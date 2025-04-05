$(document).ready(function () {
  // 1.文字色変化
  $('#change-color').click(function () {
    $('#target').css('color', 'red');
  });

  // 2.文字内容変化
  $('#change-text').click(function () {
    $('#target').text('Hello!');
  });

  // 3.フェードアウト
  $('#fade-out').click(function () {
    $('#target').fadeOut();
  });

  // 4.フェードイン
  $('#fade-in').click(function () {
    $('#target').fadeIn();
  });
});