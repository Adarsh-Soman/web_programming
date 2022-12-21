function validation(){
  let a=document.forms["form"]["fname"].value;
  let b=document.forms["form"]["pass"].value;
  let age=document.forms["form"]["age"].value
  if (a == "") {
      alert("name must be filled");
      return false;
  }
  else if (b.length<8){
      alert("The password must contain atleast 8 charachters");
      return false;
  }
  else if (isNaN(age)) {
      alert("Age must be a Integer");
      } 
}
