import { fetchDetails } from "./details.js";
let areaDetails;


export async function fetchAeraDetails(city='Canadian'){
    $('section').fadeOut(1000)
    $('.areadetails').fadeIn(1000);
    // $('section').addClass('d-none')
    $('.areadetails').removeClass('d-none'); 
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
    let result = await response.json()
    areaDetails = result.meals;
    

    displayAreaDetails()
}

fetchAeraDetails()

function displayAreaDetails(){
    let cols ="";
    for(var i=0;i <areaDetails.length;i++){
        
        cols+=
        `
         <div class="col-md-3">
        <div class="item" data-id=${areaDetails[i].idMeal}>
        <img src="${areaDetails[i].strMealThumb}" alt="" class="w-100 myImg">
        <div class="overlay">
        <h6 class="myhead">${areaDetails[i].strMeal}</h6>
        </div>
        </div>
    </div>
        `
    }
    document.getElementById('displayareadetail').innerHTML = cols;
    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchDetails(el.dataset.id)
            
        } 
    })
}