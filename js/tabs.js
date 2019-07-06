


// trigger set_sizes on page resize
var resizeTimer;
$(window).resize( function() {
clearTimeout( resizeTimer );
resizeTimer = setTimeout( set_sizes, 15 );
});
console.log('Start');
var container = $('#container1'),
    content = $('#content1'),
    scroll = $('#scrollbar1'),
    doc = $(document);
content.on('scroll', function(e) {
  scroll.stop(true).css({
    opacity: 0.7,
    height: Math.pow(container.height(), 2) / content[0].scrollHeight,
    top: content.height() * content[0].scrollTop / content[0].scrollHeight + 5
  });//.delay(2000).animate({opacity: 0});
});
$(window).on('resize', content.trigger.bind(content, 'scroll'));
content.trigger('scroll');

scroll.on('mousedown', function(e){
  e.preventDefault();
  var y = scroll[0].offsetTop;
  var y1 = e.originalEvent.pageY;
  doc.on('mousemove', function(e){
    var y2 = e.originalEvent.pageY;
    scroll.css('top', Math.min(container.height() - scroll.height()  + 5,Math.max(5, y + y2 - y1)));
    content[0].scrollTop = (content[0].scrollHeight * scroll[0].offsetTop / content.height());
    
  });
  doc.on('mouseup', function(){
    doc.off('mousemove');
  });
});


function scrolling(id){
  let resizeTimer 
  let container = $("#container"+id);
  let scroll = $("#scrollbar"+id);
  let content = $("#content"+id);
}

scrolling(1)
scrolling(2)
scrolling(3)



$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  $('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show') // Select third tab
