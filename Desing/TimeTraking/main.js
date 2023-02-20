import data from './data.json' assert {type: 'json'};

let bgColors = ['#ff8c66','#56c2e6','#ff5c7c','#4acf81','#7536d3','#f1c65b']

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

const SECOND_SECTION = document.querySelector(".second-section");

function drawElement (array) {

   SECOND_SECTION.innerHTML = '';
   array.forEach( (element,index) => {

      let title = data[index].title;
      let titleLowerCase = title.toLowerCase();

      if(titleLowerCase == "self care"){
         titleLowerCase = "self-care";
      }

      SECOND_SECTION.innerHTML += (`
         <div class="card">
            <div class="card__background" style="background-color: ${bgColors[index]};">
               <img class="card__img" src="./images/icon-${titleLowerCase}.svg" alt="card-img">
            </div>
            <div class="card__details">
               <div class="card__activity">
                  <p class="card__title">${title}</p>
                  <img class="card__dots" src="./images/icon-ellipsis.svg" alt="">
               </div>
               <div class="card__time">
                  <p class="card__hour">${element.current}</p>
                  <p class="card__previous">Previous - ${element.current}</p>
               </div>
            </div>
         </div>
      `)
   })

}

drawElement(dailyArray);

dailyBtn.addEventListener('click', () => {
   drawElement(dailyArray);
})

weeklyBtn.addEventListener('click', () => {
   drawElement(weeklyArray);
})

monthlyBtn.addEventListener('click', () => {
   drawElement(monthlyArray);
})
