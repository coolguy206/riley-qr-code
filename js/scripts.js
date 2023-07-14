import $ from 'jquery';

$(document).ready(function() {
  console.log(`jquery ready`);

  var date = new Date();
  date = date.getFullYear();
  $('.year').text(date);

});