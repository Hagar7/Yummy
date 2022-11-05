import { fetchDetails } from "./details.js";

let CategoryDetails;

export let fetchCategoryDetails = async(id)=>{
    $('section').fadeOut(1000)
    $('.categorydetails').fadeIn(1000);
    // $('section').addClass('d-none')
    $('.categorydetails').removeClass('d-none');


    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    let result = await response.json()
    CategoryDetails = result.meals;

    displayCategoriesFilters()
}


export function displayCategoriesFilters(){
    let cols="";
    for(var i=0; i < CategoryDetails.length;i++){
        cols+= `
        <div class="col-md-3">
        <div class="item" id=${CategoryDetails[i].strCategory} data-id=${CategoryDetails[i].idMeal}>
            <img src="${CategoryDetails[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay">
            <h6 class="myhead">${CategoryDetails[i].strMeal}</h6>
                
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('categoryDetails').innerHTML = cols;
    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchDetails(el.dataset.id)
            
        } 
    })

}
