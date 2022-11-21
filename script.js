var menu = document.querySelector("#nav-bar>h1");
var navmob = document.querySelector("#nav-mob")
var flag = 0;

menu.addEventListener("click",function () {
    if (flag===0) {
        navmob.style.top = "0%";
        menu.innerHTML = `<i class="ri-close-line"></i>`
        flag=1;
    } else {
        navmob.style.top = "-600%";
        menu.innerHTML = `<i class="ri-menu-3-line"></i>`
        flag=0
    }
})


// document.querySelector("#menu-icon").addEventListener("click",function () {
//     if (flag===0) {
//       nav.style.display = "block";
//       menu.innerHTML = `<i class="ri-close-line"></i>`
//       flag = 1
      
//     } 
//     else {
//       nav.style.display = "none";
//       menu.innerHTML = `<i class="ri-menu-3-line"></i>`
//       flag = 0
//     }
// })  