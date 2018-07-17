var moringas=[];
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
    index=index+1;
  }


  var y=parseInt($("#inputval"))
  $(document).ready(function() {
    $("#submit").click(function(event){
      event.preventDefault();
      chris(index);
      moringas.forEach(function(moringa){
        $("#list").append("<li>"+moringa+"</li>")
      });
    });
  });
