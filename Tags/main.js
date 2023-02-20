const UL = document.querySelector("ul");
const INPUT = UL.querySelector("input");
const CONUNT_TAG = document.querySelector(".details span");

let maxTags = 10;
let tags = [];

function countag () {
   INPUT.focus();
   CONUNT_TAG.innerHTML =  maxTags - tags.length;
}

countag();

function createTag() {
   //baciamos para que no aañada los anteirores de la lista
   UL.querySelectorAll("li").forEach( li => li.remove() );
   tags.slice().reverse().forEach(tag => {
      let litag = `<li>${tag} <i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i></li>`
      UL.insertAdjacentHTML("afterbegin",litag);
   });
   countag();
}

function remove(element, tag) {
   let index = tags.indexOf(tag); // geting removing tag index
   // remover y escluir el tag seleccionado del array
   tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
   element.parentElement.remove(); // remover li of removed tag
   countag();
}

function addtag(e) {
   if(e.key == "Enter"){
      let tag = e.target.value.replace(/\s+/g," "); //removing inwanted spaces from user tag
      if(tag.length > 1 && !tags.includes(tag)) {
         if(tags.length < 10){
            tag.split(",").forEach(tag => {
               tags.push(tag);
               createTag();
            });
         }
      }
      e.target.value = "";
   }
}

INPUT.addEventListener("keyup", addtag);

const removeBTN = document.querySelector("button");
removeBTN.addEventListener("click",  () => {
   tags.length = 0 ;
   UL.querySelectorAll("li").forEach(li => li.remove());
   countag();
})