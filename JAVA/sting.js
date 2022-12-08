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
