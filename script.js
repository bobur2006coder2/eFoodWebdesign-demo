// const searchIcon=document.querySelector(".searchIcon");

// searchIcon.addEventListener("click",()=>{
// })
// document.addEventListener("keydown",(e)=>{
//     console.log(e)
// })

const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const closeBtn = document.querySelector('.close');

btn.addEventListener("click",(e)=>{
  modal.style.display = 'block';
})

closeBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  modal.style.display = 'none';
})


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


