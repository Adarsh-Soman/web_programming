function length() {
  let x=document.getElementById("str").value;
  let len=x.length;
  document.getElementById("l").innerHTML="lengthof String is "+ len;
}

function slice() {
  var x=document.getElementById("str").value;

  var m=parseInt(prompt("enter your positions"))
  var s=x.slice(m);
  document.getElementById("s").innerHTML="String After slice is "+s;

}

function concat() {
  var x=document.getElementById("str").value;
  var m=prompt("enter the string to be conacatinate");
  var s=x.concat(" ",m);
  document.getElementById("c").innerHTML="String After concatination is "+s;

}

function math() {
  var x=document.getElementById("num1").value;

  document.getElementById("m").innerHTML="Round of "+x+" is "+Math.round(x)+"<br>";
  document.getElementById("n").innerHTML="Ceiling of "+x+" is "+Math.ceil(x)+"<br>";
  document.getElementById("o").innerHTML="Floor of "+x+" is "+Math.floor(x)+"<br>";
  document.getElementById("p").innerHTML="Trunc of "+x+" is "+Math.trunc(x)+"<br>";
  document.getElementById("q").innerHTML="Square of "+x+" is "+Math.pow(x,2)+"<br>";
  document.getElementById("r").innerHTML="Square root of "+x+" is "+Math.sqrt(x)+"<br>";
}
