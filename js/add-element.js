/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class

$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#one').next().next().text('milk');

$('#todo').append('<li>candy</li>');
// add a new element by clicking the plus sign

document.getElementById('add').addEventListener('click', addElement);
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element

  // add a input text box
  $('#todo').append('<li><input type="text"></li>');
  // whenever the user are done add the element
  $('input').blur(function () {
    $(this).parent().addClass('cool');
    var items = $(this).val();
    $(this).parent().text(items);
    $('li').click(changeStyle);
  });
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else if ($(this).hasClass('complete')) {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  } else {
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}