import { fetchDetails } from "./details.js";


let ingredientsDetails;

export let fetchIngredientsDetails = async(id)=>{
    $('section').fadeOut(1000)
    $('.ingredientsdetails').fadeIn(1000);
    // $('section').addClass('d-none')
    $('.ingredientsdetails').removeClass('d-none');


    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
    let result = await response.json()
    ingredientsDetails = result.meals;

    displayingredientFilters()
}


export function displayingredientFilters(){
    let cols="";
    for(var i=0; i < ingredientsDetails.length;i++){
        cols+= `
        <div class="col-md-3">
        <div class="item" id=${ingredientsDetails[i].idMeal}>
            <img src="${ingredientsDetails[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay">
            <h6 class="myhead">${ingredientsDetails[i].strMeal}</h6>
                
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('displayingredientsdetails').innerHTML = cols;
   
    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchDetails(el.id)
            
        } 
    })
}



