chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var oldMessage = $("#id_new_comment").val();
    $("#id_new_comment").val(oldMessage + "\n\n" + request.image);
});
