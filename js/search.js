import { fetchDetails } from "./details.js";


export function testy(){
    $('#loading').fadeIn(1000)
    $('section').fadeOut(1000)
    $('.search').fadeIn(1000);
    $('.search').removeClass('d-none');
    fetchByName()
} 


//variables
let searchMeal;
    let searchByName = document.getElementById('searchByName');
    let searchByLetter = document.getElementById('searchByLetter');

// event listener
        searchByName.addEventListener('keyup',function(e){
            // $('#loading').fadeIn(1000)
            fetchByName(e.target.value)
        })
        searchByLetter.addEventListener('keyup',function(e){
            fetchByLetter(e.target.value)
        })

//search by name
export async function fetchByName(meal){
    // $('section').fadeOut(1000)
    // $('.search').fadeIn(1000);
    // $('.search').removeClass('d-none');
    // $('section').addClass('d-none')
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        let result = await response.json();
        searchMeal = result.meals;
        displaySearch()
}
//search by character

   export  async function fetchByLetter(meal ='a'){
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`)
            let result = await response.json();
            searchMeal = result.meals;
            displaySearch()
        }

export function displaySearch() {
    let cols="";
    for(var i=0;i<searchMeal.length;i++){
        cols+= `
        <div class="col-md-3">
        <div class="item" id=${searchMeal[i].idMeal}>
        <img src="${searchMeal[i].strMealThumb}" alt="" class="w-100 myImg">
        <div class="overlay">
        <h6 class="myhead">${searchMeal[i].strMeal}</h6>
        </div>
        </div>
    </div>
        `
    }
    document.getElementById('displaySearch').innerHTML = cols;
    let items =[...document.getElementsByClassName("item")] 
    
    items.forEach(el=>{
        el.onclick = function(){
            fetchDetails(el.id)
        } 
    })
}