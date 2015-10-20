$(document).ready(function(){
	$("#signin").click(function(){
		localStorage.username = $("#username").val();
		alert($("#username").val());
	});
});
