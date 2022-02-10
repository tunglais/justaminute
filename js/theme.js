$(document) .ready(function() {

  $('.right1').click(function() {
      $('#heading2').show();
      $('#heading1').hide();
      $("body").css("background-image", `url("../image/carousel2.png")`);
      $('.text2').show();
      $('.text1').hide();
      $('.left2').show();
      $('.right1').hide();
      $('.right2').show();
      $('.right2').css("z-index", "2");
  });

  $('.left2').click(function() {
    $('#heading1').show();
    $('#heading2').hide();
    $("body").css("background-image", `url("../image/carousel1.png")`);
    $('.text1').show();
    $('.text2').hide();
    $('.left2').hide();
    $('.right2').hide();
    $('.right1').show();
    
  });

  $('.right2').click(function() {
    window.console&&console.log('3');
    $("body").css("background-image", `url("../image/carousel3.png")`);
    $('.right2').hide();
    $('.left2').hide();
    $('.text2').html('Tag @justaminute_campaign and<br/>post it on your social media story.');
    $('.left3').show();
    $('.right3').show();
    $('.right3').css("z-index", "3");
    $('.left3').css("z-index", "3");
  });

  $('.left3').click(function() {
    window.console&&console.log('2');
    $("body").css("background-image", `url("../image/carousel2.png")`);
    $('.right2').show();
    $('.left2').show();
    $('.text2').html('Use our Instagram filter and complete<br/> the sentence "just a minute of..." with <br/> your acts of self-love!');
    $('.left3').hide();
    $('.right3').hide();
    
  });

  $('.right3').click(function() {
    window.console&&console.log('4');
    $("body").css("background-image", `url("../image/carousel4.png")`);
    $('.right3').hide();
    $('.left3').hide();
    $('.text2').html('The most creative post wins the prize<br/>from our collaborators!');

    $('.left4').show();
    $('.left4').css("z-index", "4");
  });

  $('.left4').click(function() {
    window.console&&console.log('2');
    $("body").css("background-image", `url("../image/carousel3.png")`);
    $('.right3').show();
    $('.left3').show();
    $('.text2').html('Tag @justaminute_campaign and<br/>post it on your social media story.');
    $('.left4').hide();
    
  });



  $('#heading2').hide();
  $('.text1').show();
  $('.right1').show();
  $('.text2').hide();
  $('.left2').hide();
  $('.left3').hide();
  $('.right3').hide();
  $('.left4').hide();
});