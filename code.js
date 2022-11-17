/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


$("#buttonL").hover(function(){
          $(this).css("background-color", "#C9C9C9");
          }, function(){
          $(this).css("background-color", "#9E9E9E");
        });
        
        $("#buttonR").hover(function(){
          $(this).css("background-color", "#C9C9C9");
          }, function(){
          $(this).css("background-color", "#9E9E9E");
        }); */

function mouseOnOne() {
  document.getElementById("buttonL").style.backgroundColor = "#C9C9C9";
}

function mouseOffOne() {
  document.getElementById("buttonL").style.backgroundColor = "#9E9E9E";
}

function mouseOnTwo() {
  document.getElementById("buttonR").style.backgroundColor = "#C9C9C9";
}

function mouseOffTwo() {
  document.getElementById("buttonR").style.backgroundColor = "#9E9E9E";
}
