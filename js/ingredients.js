import { fetchIngredientsDetails } from "./ingredientsDetails.js";

let IngredientsResult;



export async function fetchIngredients (){
    $('section').fadeOut(1000);
    $('.ingredients').fadeIn(1000); 
    $('.ingredients').removeClass('d-none');
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let result = await response.json()
    IngredientsResult = result.meals;
    displayIngredients()

}

fetchIngredients ()
function displayIngredients(){
    let cols="";
    for(var i=0;i< IngredientsResult.length -562 ;i++){
        cols+=
        `<div class="col-md-3">
        <div class="item" id=${IngredientsResult[i].strIngredient}>
        <i class="fa-solid fa-bowl-food fa-3x"></i>
            <h3>${IngredientsResult[i].strIngredient}</h3>
            <p>${IngredientsResult[i].strDescription}</p>
        </div>
    </div>
        `
    }
    document.getElementById('displayingredients').innerHTML = cols;
    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchIngredientsDetails(el.id)
        } 
    })
}
 