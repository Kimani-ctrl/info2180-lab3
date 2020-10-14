window.onload = function(event){
  let a = document.getElementById("board");
  let i = a.children;
  let elem = document.getElementById('status');
  var c ;
  
  for (c=0 ; c < i.length; c++){
      i[c].setAttribute("class","square");
  }
   var n;
  for (n=0; n < i.length; n++){
      win();
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
            win();
         i[n].onmouseover=function(event){
             event.target.classList.add('hover');
         }  
         i[n].onmouseout=function(event){
             event.target.classList.remove('hover');
         }
         
        }

       function win(){
           let winnerlist = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[0,4,8],[2,4,6],[3,4,5],[1,4,7]]
           var x;
           let Arr1 = Array(3).fill(null);
           let Arr2 = Array(3).fill(null);
           let Arr3 = Array(3).fill(null);
           for (x=0; x<i.length; x++){
               if(i[x].textContent=="X"){
                Arr1.push(x);
               }
               else if (i[x].textContent=="O"){
                   Arr2.push(x);
               }
               else {
                   Arr3.push(x);
               }
           }
           for (x=0; x<winnerlist.length; x++){
               if (Arr1==winnerlist[x]){
                  elem.classList.add('you-won');
                  elem.textContent= "Congratulations! X is the winner";
               }
               else if (Arr2==winnerlist[x]){
                elem.classList.add('you-won');
                elem.textContent= "Congratulations! O is the winner";
               }
               else {
                   return;
               }
           }
        }
}

    
    