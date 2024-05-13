
let symbol = "o";
function move(row,cell){
    console.log(row,cell);
    const table= document.getElementById("start");
    if(!table.rows[row].cells[cell].innerHTML ){
        if( symbol==="o"){
            symbol="x"
            table.rows[row].cells[cell].style.color ="red";
        } else {
            symbol="o"
            table.rows[row].cells[cell].style.color ="blue";
        }
        table.rows[row].cells[cell].innerHTML = symbol;
        setTimeout(function(){
           if(table.rows[0].cells[0].innerHTML ==table.rows[0].cells[1].innerHTML &&
           table.rows[0].cells[2].innerHTML ==table.rows[0].cells[0].innerHTML && table.rows[0].cells[0].innerHTML ){
             return  alert('game over,the winner is: '+ symbol);
           }
           if(table.rows[1].cells[0].innerHTML ==table.rows[1].cells[1].innerHTML &&
           table.rows[1].cells[2].innerHTML ==table.rows[1].cells[0].innerHTML && table.rows[1].cells[0].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
           }
           if(table.rows[2].cells[0].innerHTML ==table.rows[2].cells[1].innerHTML &&
           table.rows[2].cells[2].innerHTML ==table.rows[2].cells[0].innerHTML && table.rows[2].cells[0].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[0].cells[0].innerHTML ==table.rows[1].cells[0].innerHTML &&
          table.rows[2].cells[0].innerHTML ==table.rows[0].cells[0].innerHTML && table.rows[0].cells[0].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[0].cells[1].innerHTML ==table.rows[1].cells[1].innerHTML &&
          table.rows[2].cells[1].innerHTML ==table.rows[0].cells[1].innerHTML && table.rows[0].cells[1].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[0].cells[1].innerHTML ==table.rows[1].cells[1].innerHTML &&
          table.rows[2].cells[1].innerHTML ==table.rows[0].cells[1].innerHTML && table.rows[0].cells[1].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[0].cells[2].innerHTML ==table.rows[1].cells[2].innerHTML &&
          table.rows[2].cells[2].innerHTML ==table.rows[0].cells[2].innerHTML && table.rows[0].cells[2].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[0].cells[0].innerHTML ==table.rows[1].cells[1].innerHTML &&
          table.rows[2].cells[2].innerHTML ==table.rows[0].cells[0].innerHTML && table.rows[0].cells[0].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
          }
          if(table.rows[2].cells[0].innerHTML ==table.rows[1].cells[1].innerHTML &&
          table.rows[0].cells[2].innerHTML ==table.rows[2].cells[0].innerHTML && table.rows[2].cells[0].innerHTML ){
            return  alert('game over,the winner is: '+ symbol);
         }
         if(table.rows[0].cells[0].innerHTML &&
            table.rows[0].cells[1].innerHTML &&
            table.rows[0].cells[2].innerHTML &&
            table.rows[1].cells[0].innerHTML &&
            table.rows[1].cells[1].innerHTML &&
            table.rows[1].cells[2].innerHTML &&
            table.rows[2].cells[0].innerHTML &&
            table.rows[2].cells[1].innerHTML &&
            table.rows[2].cells[2].innerHTML){
            return alert('draw');
          }
          
        },0)


    }
   
}