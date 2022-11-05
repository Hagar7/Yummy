import { fetchArea } from "./area.js";
import { fetchAeraDetails } from "./areaDetails.js";
import { fetchCategory } from "./category.js";
import { fetchDetails } from "./details.js";
import { fetchIngredients } from "./ingredients.js";
import { fetchByName,fetchByLetter, testy } from "./search.js";
import { displayContact } from "./validation.js";

let fetchbyName = fetchByName;
let fetchbyLetter = fetchByLetter;
//side bar
$('.buttom').click(function(){
    if($('.nav-slide').css('left')=="-250px"){
        $('.nav-slide').animate({'left':'0'},1000)
        $('.nav-open').animate({'left':'250px'},1000)
        $('#navlist').animate({'marginTop':'20px'},1000)
        $('#togly').removeClass('fa-align-justify')
        $('#togly').addClass('fa-close')


    }else{
        $('.nav-slide').animate({'left':'-250px'},1000)
        $('.nav-open').animate({'left':'0'},1000)
        $('#navlist').animate({'marginTop':'0px'},1000)
        $('#togly').addClass('fa-align-justify')
        $('#togly').removeClass('fa-close')

    }
})


let meals ="";

$(document).ready(function(){
    $('#loading ').fadeOut(50000 , function(){
    })
})





window.addEventListener('load',fetchApi);
document.getElementById('cat').addEventListener('click',fetchCategory)
document.getElementById('searchInput').addEventListener('click',testy)
document.getElementById('ara').addEventListener('click',fetchArea)
document.getElementById('ingredients').addEventListener('click',fetchIngredients)
document.getElementById('contact').addEventListener('click',displayContact)


async function fetchApi(){
    $('section').addClass('d-none')
    $('.home').fadeIn(500);
    $('.home').removeClass('d-none');
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let result = await response.json();
     meals = result.meals;
    displayData()

}

// fetchApi()

 export function displayData () {
    let cols="";
    for(var i=0;i<meals.length -5;i++){
        cols+= `
        <div class="col-md-3">
        <div class="item" id=${meals[i].idMeal}>
        <img src="${meals[i].strMealThumb}" alt="" class="w-100 myImg">
        <div class="overlay">
        <h6 class="myhead">${meals[i].strMeal}</h6>
        </div>
        </div>
    </div>
        `
    }
    document.getElementById('displayData').innerHTML = cols

    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchDetails(el.id)
            
        } 
    })
}








