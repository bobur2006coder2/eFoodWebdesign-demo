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


const dataBase=[
  {
    imgUrl:"./img/images/pitsa.png",
    cardTitle:"Blaze Pizza",
    clock:"11.00 AM - 10.00 PM",
  },
  {
    imgUrl:"./img/images/pitsa2.png",
    cardTitle:"Pizza Ranch",
    clock:"09.00 AM - 10.00 PM",
  },
  {
    imgUrl:"./img/images/pitsa3.png",
    cardTitle:"	Dion’s Pizza Hut",
    clock:"10.00 AM - 12.00 PM",
  },
  {
    imgUrl:"./img/images/pitsa4.png",
    cardTitle:"Royel Burger",
    clock:"11.00 AM - 10.00 PM",
  },
  {
    imgUrl:"./img/images/pitsa5.png",
    cardTitle:"KFC Restaurant",
    clock:"09.00 AM - 10.00 PM",
  },
  {
    imgUrl:"./img/images/pitsa6.png",
    cardTitle:"Star Food",
    clock:"10.00 AM - 12.00 PM",
  },
]

const Restaurant=document.getElementById("Restaurant");

for(let i =0;  i <=dataBase.length-1; i++){
   Restaurant.innerHTML+=`
   <div class="col-11 col-sm-3 bg-white border-left-0" style="border-radius: 50px 0px; border: 1px solid transparent;">
   <div>
       <img src="${dataBase[i]?.imgUrl}" alt="" class="cardImg">
   </div>
   <div class="p-1 pt-5 pb-5 ">
       <h4 style="color:#363853;">${dataBase[i]?.cardTitle}</h4>
       <div class="d-flex align-items-center justify-content-between">
           <i class="fas fa-stopwatch fs-4"> <span class="fs-5 fw-light">${dataBase[i]?.clock}</span></i>
           <button class="topFood__btn">
               <i class="fas fa-arrow-right text-white"></i>
           </button>
       </div>
   </div>
</div>
   `
}

const footerCards=document.getElementById("footerCards_container");

console.log(footerCards.appendChild(`dsdfdsjfkldskljflkdsfjlsdjlkfdsjkl`))