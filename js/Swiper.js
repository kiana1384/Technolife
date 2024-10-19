const Swiper = async () => {
  let htmlSlider = "";
  try {
    let res = await axios.get("http://localhost:3005/Swiper");
    res.data.map((elem) => {
      htmlSlider += `<div class='swiper-slide'><img src=${elem.image} alt=${elem.alt}/></div>`;
    });
    document.querySelector(".swiper-wrapper1").innerHTML = htmlSlider;
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////
const Swiper2 = async () => {
  let htmlSlider2 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper2");
    res.data.map((elem) => {
      htmlSlider2 += `
        <div class="swiper-slide">
              <div class="ped">
              <a href="#" class="aks">
               <img src=${elem.image} alt=""></a>
              <a href="#" class="mtn">${elem.name}</a>
            </div>
        </div>`;
    });

    document.querySelector(".swiper-wrapper2").innerHTML = htmlSlider2;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////
const Swiper3 = async () => {
  let htmlSlider3 = "";

  try {
    let res = await axios.get("http://localhost:3005/swiper3");
    res.data.map((elem) => {
      // if(elem.flag!=false){
      //   document.querySelector(".").innerHTML
      // }

      htmlSlider3 += `<div class="swiper-slide">
        <div class="item1">
         <div class="up">
         <div class="time">
       <div id="timer">10</div>
         </div>
         <p>${elem.flag}</p></div>
        <div class="down"></div>
                <a href="#">
                  <img src="${elem.image}" alt=""/>
                  <p>${elem.title}</p>
                  <div class="price">
                
                    <div class="tkhf">
                    <img src="${elem.svg}" alt="" />
                      <span>${elem.old_price}</span>

                    </div>
                     <span>${elem.sale}</span>
                  </div>
            
                  <span class="gey">
                  <img src="${elem.svg}" alt="" />
                  ${elem.new_price}
                  </span>
                </a>
              </div>
            </div>`;
      // function starter(duration,display){
      //   let timer=duration,minutes,seconds;
      //   setInterval(function(){
      //     minutes=parseInt(timer/60,10)
      //     seconds=parseInt(timer%60,10)
      //     minutes=minutes<10?"0" +minutes:minutes;
      //     seconds=seconds<10?"0" +seconds:seconds;
      // display.textContent=minutes+":"+seconds;
      // if(--timer<0){
      //   timer=duration
      // }
      // },1000);
      // }
      //       window.onload=function(){
      //         let duration=600;
      //         let display=document.querySelector("#timer")
      //         starter(duration,display)
      //       }

     
    });
    document.querySelector(".swiper-wrapper3").innerHTML = htmlSlider3;
  } catch (error) {
    console.log(error);
  }
};

/////////////////////////////
const Swiper4 = async () => {
  let htmlSlider4 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper4");
    res.data.map((elem) => {
      htmlSlider4 += ` <div class="swiper-slide">
            <div class="item1">
              <a href="#">
                <img src="${elem.image}" alt="" />
                <p>${elem.title}</p>
                <div class="price">
                  <div class="tkhf">
                   <img src="${elem.svg}" alt="" />
                    <span class="new">${elem.new_price}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    });
    document.querySelector(".swiper-wrapper4").innerHTML = htmlSlider4;
  } catch (error) {
    console.log(error);
  }
};
//////////////////////////////////

const Swiper5 = async () => {
  let htmlSlider5 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper5");
    res.data.map((elem) => {
      htmlSlider5 += ` <div class="swiper-slide">
            <div class="item1">
              <a href="#">
                <img src="${elem.image}" alt="" />
                <p>${elem.title}</p>
                <div class="price">
                  <div class="tkhf">
                   <img src="${elem.svg}" alt="" />
                    <span class="new">${elem.new_price}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    });
    document.querySelector(".swiper-wrapper5").innerHTML = htmlSlider5;
  } catch (error) {
    console.log(error);
  }
};
//////////////////////////////
const Swiper6 = async () => {
  let htmlSlider6 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper6");
    res.data.map((elem) => {
      htmlSlider6 += `
        <div class="swiper-slide">
              <div class="ped2">
              <a href="#" class="aks">
               <img src=${elem.image} alt=""></a>
            </div>
        </div>`;
    });
    document.querySelector(".swiper-wrapper6").innerHTML = htmlSlider6;
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////
const Swiper7 = async () => {
  let htmlSlider7 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper7");
    res.data.map((elem) => {
      htmlSlider7 += ` <div class="swiper-slide">
            <div class="item1">
              <a href="#">
                <img src="${elem.image}" alt="" />
                <p>${elem.title}</p>
                <div class="price">
                  <div class="tkhf">
                   <img src="${elem.svg}" alt="" />
                    <span class="new">${elem.new_price}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    });
    document.querySelector(".swiper-wrapper7").innerHTML = htmlSlider7;
  } catch (error) {
    console.log(error);
  }
};
//////////////////////////////////
const Swiper8 = async () => {
  let htmlSlider8 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper8");
    res.data.map((elem) => {
      htmlSlider8 += ` <div class="swiper-slide">
            <div class="item1">
              <a href="#">
                <img src="${elem.image}" alt="" />
                <p>${elem.title}</p>
                <div class="price">
                  <div class="tkhf">
                   <img src="${elem.svg}" alt="" />
                    <span class="new">${elem.new_price}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    });
    document.querySelector(".swiper-wrapper8").innerHTML = htmlSlider8;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////
const Swiper9 = async () => {
  let htmlSlider9 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper9");
    res.data.map((elem) => {
      htmlSlider9 += `<div class="swiper-slide">
              <div class="item1">
                <a href="#">
                  <img src="${elem.image}" alt="" />
                  <p>${elem.title}</p>
                  <div class="price">
                
                    <div class="tkhf">
                    <img src="${elem.svg}" alt="" />
                      <span>${elem.old_price}</span>

                    </div>
                     <span>${elem.sale}</span>
                  </div>
            
                  <span class="gey">
                  <img src="${elem.svg}" alt="" />
                  ${elem.new_price}</span>
                </a>
              </div>
            </div>`;
    });
    document.querySelector(".swiper-wrapper9").innerHTML = htmlSlider9;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////
const Swiper10 = async () => {
  let htmlSlider10 = "";
  try {
    let res = await axios.get("http://localhost:3005/swiper10");
    res.data.map((elem) => {
      htmlSlider10 += `
               <div class="swiper-slide">
            <div class="exp">
              <img
                src="${elem.image}"
                alt=""/>
                 <div class="wr">
              <p>${elem.title}</p>
            </div>
            </div>
            </div>`;
    });
    document.querySelector(".swiper-wrapper10").innerHTML = htmlSlider10;
  } catch (error) {
    console.log(error);
  }
};
export default {
  Swiper,
  Swiper2,
  Swiper3,
  Swiper4,
  Swiper5,
  Swiper6,
  Swiper7,
  Swiper8,
  Swiper9,
  Swiper10,
};
