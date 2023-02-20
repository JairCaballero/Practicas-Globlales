let ratiowidth = document.getElementById("ratio-width");
let ratioheight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

let calculateWidth = () => {
   let aspecRatio = ratiowidth.value / ratioheight.value;
   width.value = parseFloat((height.value * aspecRatio).toFixed(2));
}

let calculateHeight = () => {
   let aspecRatio = ratiowidth.value / ratioheight.value;
   height.value = parseFloat((width.value / aspecRatio).toFixed(2));
}

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);
ratioheight.addEventListener("input", calculateWidth);
ratiowidth.addEventListener("input", calculateHeight);

