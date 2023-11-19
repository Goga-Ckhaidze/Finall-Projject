let add = document.querySelector('.secondHTML-add');
let remove = document.querySelector('.secondHTML-remove');
let Number = document.querySelector('.secondHTML-Number');

let N = 1;

add.addEventListener('click', () => {

    N++
    Number.innerText = N;

})
remove.addEventListener('click', () => {

    N--
    Number.innerText = N;

    if (N < 1) {
        N++;
    }

})
let leftE = document.querySelector('.left-e');
let rightE = document.querySelector('.righttt-e');
let wholeDivE = document.querySelector('.divi-divadze-divi-e');

leftE.addEventListener('click', () =>{

    wholeDivE.scrollLeft += -282;

})
rightE.addEventListener('click', () =>{

    wholeDivE.scrollLeft += 282;

})

