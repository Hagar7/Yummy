import { fetchAeraDetails } from "./areaDetails.js";


let areaResult;
export async function fetchArea(){
    $('section').fadeOut(500);
    $('.area').fadeIn(500); 
    $('.area').removeClass('d-none');
 
   
 let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
 let result = await response.json();
 areaResult = result.meals;
 displayArea()
}
fetchArea()


function displayArea(){
    let cols="";
    for(var i=0;i< areaResult.length;i++){
        cols+=
        `<div class="col-md-3">
        <div class="item" id=${areaResult[i].strArea}>
            <i class="fa-solid fa-city fa-3x"></i>
            <h3>${areaResult[i].strArea}</h3>
        </div>
    </div>
        `
    }
    document.getElementById('displayArea').innerHTML = cols;

    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){            
            fetchAeraDetails(el.id)
        } 
    })
}