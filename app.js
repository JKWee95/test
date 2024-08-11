// ------------- homepage ------------------------------
let homepage_list = document.querySelectorAll('.homepage .fixed_line .homepage_item_descriptions .homepage_item_description');
let homepage_list_2 = document.querySelectorAll('.homepage .fixed_line .homepage_item_names .homepage_item_name');
let homepage_count = homepage_list.length;
let homepage_active = 0;
setInterval(myTimer, 1000);

function myTimer() {
    homepage_active = homepage_active >= homepage_count - 1 ? 0 : homepage_active + 1;
    // find item has class hidden to remove it
    let homepage_hidden_old = document.querySelector('.homepage_item_description.homepage_item_hidden');
    let homepage_hidden_old_2 = document.querySelector('.homepage_item_name.homepage_item_hidden');
    if(homepage_hidden_old) {
        homepage_hidden_old.classList.remove('homepage_item_hidden');
        homepage_hidden_old_2.classList.remove('homepage_item_hidden');
    }

    // find item old active to remove it and add class hidden
    let homepage_active_old = document.querySelector('.homepage_item_description.homepage_item_active');
    let homepage_active_old_2 = document.querySelector('.homepage_item_name.homepage_item_active');
    homepage_active_old.classList.remove('homepage_item_active');
    homepage_active_old.classList.add('homepage_item_hidden');
    homepage_active_old_2.classList.remove('homepage_item_active');
    homepage_active_old_2.classList.add('homepage_item_hidden');
    // add class active in position active new
    homepage_list[homepage_active].classList.add('homepage_item_active');
    homepage_list_2[homepage_active].classList.add('homepage_item_active');
    // change mockup background

    //clearInterval(refreshInterval);
    //refreshInterval = setInterval(()=> {next.click()}, 3000);
}
// ----------------------------------------------------------------


let list = document.querySelectorAll('.carousel .list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let mockup = document.querySelector('.mockup');
let homepage_mockup = document.querySelector('.homepage_mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);
mockup.style.setProperty('--labels_width', (list.length*100) + '%');
homepage_mockup.style.setProperty('--labels_width', (list.length*100) + '%');


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + left_each_item;
    carousel.classList.remove('right');
    changeCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - left_each_item;
    carousel.classList.add('right');
    changeCarousel();
}
function changeCarousel() {
    // find item has class hidden to remove it
    let hidden_old = document.querySelector('.item.hidden');
    if(hidden_old) hidden_old.classList.remove('hidden');

    // find item old active to remove it and add class hidden
    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');
    // add class active in position active new
    list[active].classList.add('active');
    // change mockup background
    mockup.style.setProperty('--left', leftMockup + '%');
    homepage_mockup.style.setProperty('--left', leftMockup + '%');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}


// auto run 3s
let refreshInterval = setInterval(()=> {next.click()}, 3000);

// resize windows
document.querySelector('.fixed_line').style.setProperty('font-size', window.innerWidth*0.362 + '%');
window.addEventListener('resize', function(event) {
    document.querySelector('.fixed_line').style.setProperty('font-size', window.innerWidth*0.362 + '%');
}, true);