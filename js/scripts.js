$(document).ready(function() {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();
    var number = paraseInt($("input#number").val());
    var result = numbers(number);
    $("#result").text(result);
    $("#result").forEach(function(number) {
    $("#list-items").append("<li>") + number + "</li>");
    });
    });
  });
var numbers = functions
