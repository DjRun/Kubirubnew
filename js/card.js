$('.input-cart-number').on('keyup change', function(){
  $t = $(this);
  
  if ($t.val().length > 3) {
    $t.next().focus();
  }
  
  var card_number = '';
  $('.input-cart-number').each(function(){
    card_number += $(this).val() + ' ';
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  })
  
  $('.credit-card-box .number').html(card_number);
});

$('#card-holder').on('keyup change', function(){
  $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function(){
  $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function(){
  m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
  m = (m < 10) ? '0' + m : m;
  y = $('#card-expiration-year').val().substr(2,2);
  $('.card-expiration-date div').html(m + '/' + y);
})

$('#card-ccv').on('focus', function(){
  $('.credit-card-box').addClass('hover');
}).on('blur', function(){
  $('.credit-card-box').removeClass('hover');
}).on('keyup change', function(){
  $('.ccv div').html($(this).val());
});


setTimeout(function(){
  $('#card-ccv').focus().delay(1000).queue(function(){
    $(this).blur().dequeue();
  });
}, 500);

function getCreditCardType(accountNumber) {
    $('.logo').removeClass('master visa amex discover');
  if (/^5/.test(accountNumber)) {
          result = 'master';
      $('.logo').addClass('master');
  } else if (/^4/.test(accountNumber)) {
    result = 'visa';
      $('.logo').addClass('visa');
  } else if ( /^3/.test(accountNumber)) {
    result = 'amex';
      $('.logo').addClass('amex');
  } else if ( /^6/.test(accountNumber)) {
    result = 'discover';
      $('.logo').addClass('discover');
  } else {
    result = 'unknown'
  }
  return result;
}

$('#card-number').change(function(){
  getCreditCardType($(this).val());
})