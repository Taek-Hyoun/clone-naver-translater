const container = document.querySelector('.translate-textarea.inner1');

document.addEventListener('click', function (event) {
    let element = event.target;
    if (element.className == 'textArea') {
        container.style.border = '1px solid rgb(0,216,116)';
    } else {
        container.style.border = '1px solid rgb(223,221,221)';
    }
})

const textarea_left = document.querySelector('.textArea-left');
const copy_left = document.querySelector('.tooltip.copy.left');

copy_left.addEventListener('click', function (event) {
    textarea_left.select();
    navigator.clipboard.writeText(textarea_left.value);
})
const textarea_right = document.querySelector('.textArea-right');
const copy_right = document.querySelector('.tooltip.copy.right');

copy_right.addEventListener('click', function (event) {
    textarea_right.select();
    navigator.clipboard.writeText(textarea_right.value);
})

let defaultTextl = document.querySelector('.cursor-box.left > .h3.left');
let defaultTextr = document.querySelector('.cursor-box.right > .h3.right');
let source = defaultTextl.innerText;
let target = defaultTextr.innerText;

func = () => {
    let string = textarea_left.value;
    if(source !== undefined && target !== undefined){
        location.href = `http://localhost:3001/translate?source=${source}&target=${target}&text=${string}`;
    }
}


document.addEventListener('click', (e) => {
    let targetName = e.target.className.toLowerCase();
    let dropdown_left = document.querySelector('.dropdown-container.left');

    if(targetName == 'h3 left' || targetName == 'cursor-box left'){
        dropdown_left.style.height = '90%';
    }else if(targetName!=='dropul' && targetName!=='dropli'){
        dropdown_left.style.height = '0';
    }

    let dropdown_right = document.querySelector('.dropdown-container.right');
    if(targetName == 'h3 right' || targetName == 'cursor-box right'){
        dropdown_right.style.height = '90%';
    }else{
        dropdown_right.style.height = '0';
    }
})
let dropdown_inner_left = document.querySelector('.dropdown-container.left');
let dropdown_inner_ele = document.querySelectorAll('.dropspan');
let h3TextLeft = document.querySelector('.cursor-box.left > .h3.left');

dropdown_inner_left.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'span'){
        source = e.target.innerText;
        h3TextLeft.innerText = e.target.innerText;
    }
})

let dropdown_inner_right = document.querySelector('.dropdown-container.right');
let h3TextRight = document.querySelector('.cursor-box.right > .h3.right');

dropdown_inner_right.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'span'){
        target = e.target.innerText;
        h3TextRight.innerText = e.target.innerText;
    }
})
