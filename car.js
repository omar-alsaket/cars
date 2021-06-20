var name = prompt ("what is your name?")
alert ("welcome    " + name)


var fastcar = prompt("what is the fast car in the wourld?")

while (fastcar != "mercedes" && fastcar != "bmw" &&  fastcar != "audi" ) { 
  fastcar = prompt("wrong answer")}
  

function starsNumber (){
var starsnum = prompt ("how many stars do you rate our website ?")
// document . write (  img src ="  "  )

var favcar =prompt ("what is your favcar (mercedes or bmw or audi ?) ")

if ( favcar  = "mercedes") {document.write ("<p>"+"super cars is here" +"</p>")

}

else if (favcar = "bmw"){document .write ("<p>"+"super cars is here"+"</p>")}

else if (favcar = "audi"){document .write ("<p>"+"super cars is here"+"</p>")}

else { alert ("sorry we dont have")}

}
var car  = prompt('chose your car  ') 
if  ( car == 'mercedes'){
  var printed = prompt ('how many time u want to see the img' )
  for ( var x =0 ;x < printed ;x++)
  {
    document.write( "<img src ='https://thumbor.forbes.com/thumbor/fit-in/960x720/https://www.forbes.com/wheels/wp-content/uploads/2020/07/Mercedes-Benz-S-63-cabriolet.jpg' />")
    } 
}else{
  document .write ("<h1>sorry</h1>")
}



// var fastcar = prompt("what is the fast car in the wourld?")

// while ( fastcar != "mercedes" && != "bmw" && != "audi" ) { 
//   fastcar = prompt("wrong answer")
// }
// console.log (fastcar)
