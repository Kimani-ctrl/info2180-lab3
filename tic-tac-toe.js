window.onload = function(event){
  let a = document.getElementById("board");
  let i = a.children;
  var c ;
  for (c=0 ; c < i.length; c++){
      i[c].setAttribute("class","square");
    }
}
