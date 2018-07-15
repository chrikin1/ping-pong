$(document).ready(function() {
});
var moringa ={};
function chris (result){
  for(index=1;index<=result;index++){
    if (index) % 15===0) {
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
  };
