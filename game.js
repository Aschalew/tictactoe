//Restart Game Button
var start = document.querySelector("#start");


//Grabs all the squares
var squares = document.querySelectorAll("td")

//Clear all the squares
function clearBoard(){
  for(var i=0;i<squares.length;i++){
	squares[i].textContent=""
  }
}

start.addEventListener("click",clearBoard);
//Check the square marker

function changeMarker(){
if(this.textContent==""){
	this.textContent="X";
}
else if(this.textContent=="X"){
	this.textContent="O";
}
else{
this.textContent="";
}

}
/*var cellOne=document.querySelector("#one")
cellOne.addEventListener("click", function(){
  if(cellOne.textContent==""){
	cellOne.textContent="X";
}
else if(cellOne.textContent=="X"){
	cellOne.textContent="O";
}
else{
cellOne.textContent="";
}
})
*/
//For loop to add event listeners to all the squares

for(var i=0;i<squares.length;i++){
	squares[i].addEventListener("click", changeMarker)
  }