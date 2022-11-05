import { displayCategoriesFilters } from "./categoryDetails.js";
import { displayData } from "./main.js";


let  dataDetails;



 
export let fetchDetails =async (id)=>{  
    
    $('section').fadeOut()
    $('.details').fadeIn(1000);
    // $('section').addClass('d-none')
    $('.details').removeClass('d-none');
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let result = await response.json();
    dataDetails = result.meals;
    console.log(dataDetails);

    displayDetails()    
}



function displayDetails(){
        
     document.getElementById('detailsimg').src = dataDetails[0].strMealThumb; 
     document.getElementById('title-det').innerHTML = dataDetails[0].strMeal;
    document.getElementById('detailDesc').innerHTML = dataDetails[0].strInstructions;
    document.getElementById('area1').innerHTML = dataDetails[0].strArea;
    document.getElementById('area2').innerHTML = dataDetails[0].strCategory;
    document.getElementById('one').innerHTML = dataDetails[0].strMeasure1;
    document.getElementById('two').innerHTML = dataDetails[0].strIngredient1;
    document.getElementById('three').innerHTML = dataDetails[0].strMeasure2;
    document.getElementById('four').innerHTML = dataDetails[0].strIngredient2;
    document.getElementById('five').innerHTML = dataDetails[0].strMeasure3;
    document.getElementById('six').innerHTML = dataDetails[0].strIngredient3;
    document.getElementById('seven').innerHTML = dataDetails[0].strMeasure4;
    document.getElementById('eight').innerHTML = dataDetails[0].strIngredient4;
    document.getElementById('nine').innerHTML = dataDetails[0].strMeasure5;
    document.getElementById('ten').innerHTML = dataDetails[0].strIngredient5;
    document.getElementById('one-1').innerHTML = dataDetails[0].strIngredient6;
    document.getElementById('one-2').innerHTML = dataDetails[0].strIngredient6;
    document.getElementById('one-17').innerHTML = dataDetails[0].strTags;
    document.getElementById('one-18').href = dataDetails[0].strYoutube;
    
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (button.innerHTML =="" ) {
          button.style.display = "none";
        }
      });
    }
    


  

