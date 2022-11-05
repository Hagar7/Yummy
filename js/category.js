import { fetchCategoryDetails } from "./categoryDetails.js";
import { fetchDetails } from "./details.js";

let categoryResult ="";


export async function fetchCategory(){
    $('section').fadeOut(1000)
    $('.category').fadeIn(1000);
    // $('section').addClass('d-none')
    $('.category').removeClass('d-none'); 
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let result = await response.json();
     categoryResult = result.categories;
    displayCategories()
}
// fetchCategory()



async function displayCategories(){
    let cols="";
    for(var i=0;i< categoryResult.length -2;i++){
        cols+= `
        <div class="col-md-3">
        <div class="item" id=${categoryResult[i].strCategory}>
            <img src="${categoryResult[i].strCategoryThumb}" alt="" class="w-100">
            <div class="overlay1">
                <h6 class="myhead pt-2">${categoryResult[i].strCategory}</h6>
                <p class="para">${categoryResult[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('displayCategory').innerHTML = cols;

    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(ele=>{
        ele.onclick = function(){
            fetchCategoryDetails(ele.id)
        } 
    })
}