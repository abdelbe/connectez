// JS for index

$('#submit').click(function() {
  var user = $('#username').val();
  var room = $('#roomname').val();
  if (user == '' || room == '') {
  	alert("vérifiez vos coordonées");
  	window.location.replace('/');
  }
});