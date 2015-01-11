$(function() {
  var text_window = $('#text_window');
  $(text_window).append('<p>', {
    class: "npc_name",
    html: "Ranson"
  });
  $(text_window).append('<p>', {
    class: "dialogue",
    html: "I will challege you to a duel!"
  });
});