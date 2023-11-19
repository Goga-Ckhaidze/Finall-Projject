let fixedSection = document.querySelector('.section-2');

document.addEventListener('scroll', fixedHeader);

function fixedHeader() {
    let top = document.documentElement.scrollTop;
    console.log(top);

    if (top >= 163) {

        fixedSection.classList.add('headerfixed');

    }
    if (top < 163) {
        
        fixedSection.classList.remove('headerfixed');

    }

}
setInterval(Interval, 4000);


let left = document.querySelector('.left');
let right = document.querySelector('.righttt');
let wholeDiv = document.querySelector('.divi-divadze-divi');

left.addEventListener('click', () =>{

    wholeDiv.scrollLeft += -282;

    
})
right.addEventListener('click', () =>{

    wholeDiv.scrollLeft += 282;

})
console.log(wholeDiv.scrollLeft);

function Interval() {

    wholeDiv.scrollLeft += 282;
    wholeDivA.scrollLeft += 282;
    wholeDivB.scrollLeft += 282;
    wholeDivC.scrollLeft += 282;
    wholeDivD.scrollLeft += 282;
    wholeDivK.scrollLeft += 282;

}
let leftA = document.querySelector('.left-a');
let rightA = document.querySelector('.righttt-a');
let wholeDivA = document.querySelector('.divi-divadze-divi-a');

leftA.addEventListener('click', () =>{

    wholeDivA.scrollLeft += -282;

})
rightA.addEventListener('click', () =>{

    wholeDivA.scrollLeft += 282;

})
let leftB = document.querySelector('.left-b');
let rightB = document.querySelector('.righttt-b');
let wholeDivB = document.querySelector('.divi-divadze-divi-b');

leftB.addEventListener('click', () =>{

    wholeDivB.scrollLeft += -282;

})
rightB.addEventListener('click', () =>{

    wholeDivB.scrollLeft += 282;

})
let leftC = document.querySelector('.left-c');
let rightC = document.querySelector('.righttt-c');
let wholeDivC = document.querySelector('.divi-divadze-divi-c');

leftC.addEventListener('click', () =>{

    wholeDivC.scrollLeft += -282;

})
rightC.addEventListener('click', () =>{

    wholeDivC.scrollLeft += 282;

})

let leftD = document.querySelector('.left-d');
let rightD = document.querySelector('.righttt-d');
let wholeDivD = document.querySelector('.divi-divadze-divi-d');

leftD.addEventListener('click', () =>{

    wholeDivD.scrollLeft += -282;

})
rightD.addEventListener('click', () =>{

    wholeDivD.scrollLeft += 282;

})

let leftK = document.querySelector('.left-k');
let rightK = document.querySelector('.righttt-k');
let wholeDivK = document.querySelector('.divi-divadze-divi-k');

leftK.addEventListener('click', () =>{

    wholeDivK.scrollLeft += -282;

})
rightK.addEventListener('click', () =>{

    wholeDivK.scrollLeft += 282;

})
var countdownDate = new Date("Nov 30, 2023 00:00:00").getTime()
var x = setInterval(function(){
  var now = new Date().getTime()
  var distance = countdownDate - now
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
document.querySelector('.random-name-h2').innerHTML = days
document.querySelector('.random-name-h3').innerHTML = hours
document.querySelector('.random-name-h4').innerHTML = minutes
document.querySelector('.gray-h2').innerHTML = seconds

if(distance <= 0){
  clearInterval(x)


}






},1000)
