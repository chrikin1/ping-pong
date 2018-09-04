var moringa=[]
var index=1;
function chris (y){
  for(index=1;index<=y;index++){
    if (index % 15===0) {
      moringa.push("pingpong");
       }
        else if (index%5===0) {
      moringa.push("pong");
       }
        else if (index% 3 === 0) {
        moringa.push("ping");
       }
        else{
        moringa.push(index);
       }
    }
    return moringa
  }


// console.log(chris(12))

  $(document).ready(function() {
    $("#submit").click(function(event){
      event.preventDefault();
      $("#result").empty();
      // console.log(chris(12))
      var y=parseInt($("#inputval").val());
      // console.log(chris(y))
      chris(y).forEach(function(moringa){
        $("#list").append("<li>"+moringa+"</li>")
      });
    });
  });
