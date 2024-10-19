const Footer = async () => {
  let htmlFooter = "";
  try {
    let res = await axios.get("http://localhost:3005/footer");
    res.data.map((elem) => {
      htmlFooter += ` <div class="tx">

     <h3>${elem.title}</h3>
      <p>${elem.matn}</p>
          <div id="hidee">
      <h3 class="hideh3">${elem.title1}</h3>
      <p> class="hidep"${elem.matn1}</p>
        <h3 class="hideh3">${elem.title2}</h3>
      <p> class="hidep"${elem.matn2}</p>
        <h3 class="hideh3">${elem.title3}</h3>
      <p> class="hidep"${elem.matn3}</p>
        <h3 class="hideh3">${elem.title4}</h3>
      <p> class="hidep"${elem.matn4}</p>
          <h3 class="hideh3">${elem.title5}</h3>
      <p> class="hidep"${elem.matn5}</p>
       </div>
         <a href="#" onclick= " hideShow() ">${elem.see}</a>
       </div>
      
  `;
    });

    document.querySelector(".text").innerHTML = htmlFooter;
  } catch (error) {
    console.log(error);
  }
  var content = document.getElementById("hidee");
  var display = 0;
  function hideShow() {
    if (display == 1) {
      content.style.display = "block";
      display = 0;
    } else {
      content.style.display = "none";
      display = 1;
    }
  }
  hideShow()
  // const content = $(".hide");
  // const btn = $(".bttn");
  // btn.on("click", function (e) {
  //   e.preventDefault();
  //   if (content.Css("display") !== "none") {
  //     content.hide();
  //     $(this).text("مشاهده بیشتر");
  //   } else {
  //     content.show();
  //     $(this).text("مشاهده ");
  //   }
  // });

  // btn.addEventListener("click",()=>{
  //   content .style.display="flex"
  // })
};

// const btns = () => {
//   const btn = document.getElementsByClassName("bttn");
//   const text = document.querySelector(".text");
//   btns.addEventListener("click", function () {
//     if (text.classList.contains("text.cs")) {
//       text.classList.remove("text.cs");
//       btn.innerHTML = ` <a href="#" id="bttn">مشاهده بیشتر </a>`;
//       text.style.filter='blur(1px)'
//     }else{
//       text.classList.add("text.cs")
//       btn.innerHTML = ` <a href="#" id="bttn">مشاهده کمتر </a>`
//     }
//   });
// };
///////////////////////////////////////
const Footer2 = async () => {
  let htmlFooter2 = "";
  try {
    let res = await axios.get("http://localhost:3005/footer2");
    res.data.map((elem) => {
      htmlFooter2 += `<div class="one">
      <a href="#" onclick=" scrollToTop()" class="scroll">  ${elem.btn}</a>
      <img src="${elem.image}" alt="">
    </div>
    <div class="two">
      <div class="left">
      <p>${elem.title}</p>
    <div class="axx">
        <img src="${elem.img1}" alt="">
        <img src="${elem.img2}" alt="">
        <img src="${elem.img3}" alt="">
        <img src="${elem.img4}" alt="">
        </div> 
        </div> 
        <div class="right">
        <p>${elem.num}</p>
        <p>${elem.email}</p>
      </div> 
      </div>
  <div class="three">
        <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
         
       </a>
      </div>
       <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
        
       </a>
      </div>
       <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
         
       </a>
      </div>
       <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
       
       </a>
      </div>
       <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
       </a>
      </div>
       <div class="col">
          <a href="#">
          <h3>${elem.matn1}</h3>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
          <p>${elem.matn2}</p>
       </a>
      </div>
       </div>
             <div class="ending">  
             <img   src="${elem.ax1}" alt="">
              <img  src="${elem.ax2}" alt="">
              <img  src="${elem.ax3}" alt="">
              <img  src="${elem.ax4}" alt="">
             </div>
             <div class="techno">
             <div class="text-footer">
             <p>${elem.p}</p><span>${elem.p1}</span>
             </div>
             </div>
  `;
    });
    document.querySelector(".blue").innerHTML = htmlFooter2;
  } catch (error) {
    console.log(error);
  }
};
function scrollToTop() {
  window.scrollTo(0, 0);
}

export default { Footer, Footer2, scrollToTop };
