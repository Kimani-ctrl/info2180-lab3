window.onload = function(event){
  let a = document.getElementById("board");
  let i = a.children;
  const button = document.querySelector("button");
  var c ;
  
  for (c=0 ; c < i.length; c++){
      i[c].setAttribute("class","square");
  }
   var n;
  for (n=0; n < i.length; n++){
    
      i[n].onclick=function(event) {
        let text = event.target.textContent;
                
    
                if(text=="X"){
                    event.target.classList.remove('X');
                    event.target.classList.add('O');
                    event.target.textContent='O';
                }
                else if(text == "O"){
                    event.target.classList.remove('O');
                    event.target.classList.add('X');
                    event.target.textContent='X';
                }
                else{
                    event.target.classList.add('X');
                    event.target.textContent='X';
                }
            }   
        }
}

    
    