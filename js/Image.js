const Image = async () => {
  let htmlImg = "";
  try {
    let res = await axios.get("http://localhost:3005/imagee");
    res.data.map((elem) => {
      htmlImg += `<img src=${elem.imge} alt=/>`;
    });
    document.querySelector(".img").innerHTML = htmlImg;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////
const Image2 = async () => {
  let htmlImage2 = "";
  try {
    let res = await axios.get("http://localhost:3005/image2");
    res.data.map((elem) => {
      htmlImage2 += `
          <div class="box">
            <a href="#"><img src="${elem.image}" alt="">
            <p>${elem.title}</p></a>
          </div>`;
    });
    document.querySelector(".item").innerHTML = htmlImage2;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////
const Image3 = async () => {
  let htmlImage3 = "";
  try {
    let res = await axios.get("http://localhost:3005/image3");
    res.data.map((elem) => {
      htmlImage3 += `<img src="${elem.image}" alt="">`;
    });
    document.querySelector(".tara").innerHTML = htmlImage3;
  } catch (error) {
    console.log(error);
  }
};
//////////////////////////////////
const Image4 = async () => {
  let htmlImage4 = "";
  try {
    let res = await axios.get("http://localhost:3005/image4");
    res.data.map((elem) => {
      htmlImage4 += `
          <div class="boox">
            <a href="#"><img src="${elem.image}" alt="">
            <p>${elem.title}</p></a>
          </div>`;
    });
    document.querySelector(".iteem").innerHTML = htmlImage4;
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////////
const Image5 = async () => {
  let htmlImg5 = "";
  try {
    let res = await axios.get("http://localhost:3005/image5");
    res.data.map((elem) => {
      htmlImg5 += `<img src=${elem.imge} alt=/>`;
    });
    document.querySelector(".image").innerHTML = htmlImg5;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////
const Image6 = async () => {
  let htmlImage6 = "";
  try {
    let res = await axios.get("http://localhost:3005/image6");
    res.data.map((elem) => {
      htmlImage6 += `
          <div class="boox2">
            <a href="#"><img src="${elem.image}" alt="">
            <p>${elem.title}</p></a>
          </div>`;
    });
    document.querySelector(".iteem2").innerHTML = htmlImage6;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////
const Image7 = async () => {
  let htmlImg7 = "";
  try {
    let res = await axios.get("http://localhost:3005/image7");
    res.data.map((elem) => {
      htmlImg7 += `<img src=${elem.imge} alt=/>`;
    });
    document.querySelector(".image2").innerHTML = htmlImg7;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////
const Image8= async () => {
  let htmlImg8 = "";
  try {
    let res = await axios.get("http://localhost:3005/image8");
    res.data.map((elem) => {
      htmlImg8 += `  
      <div class="stuff">
      <a href="#"><img src="${elem.image}" alt=""></a></div>
      `;
    });
    document.querySelector(".sth").innerHTML = htmlImg8;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////
const Image9 = async () => {
  let htmlImg9 = "";
  try {
    let res = await axios.get("http://localhost:3005/image9");
    res.data.map((elem) => {
      htmlImg9 += `<img src=${elem.imge} alt=/>`;
    });
    document.querySelector(".image9").innerHTML = htmlImg9;
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////
const Image10 = async () => {
  let htmlImg10 = "";
  try {
    let res = await axios.get("http://localhost:3005/image10");
    res.data.map((elem) => {
      htmlImg10 += `  <div class="itm"> 
        <p>${elem.title} </p>
        <div class="btn">
          <a href="#">${elem.matn}</a>
          <a href="#">${elem.matn1}</a>
          <a href="#">${elem.matn2}</a>
          <a href="#">${elem.matn3}</a>
          <a href="#">${elem.matn4}</a>
          <a href="#">${elem.matn5}</a>
        </div> </div>
  
`;
    });
    document.querySelector(".neew1").innerHTML = htmlImg10;

  } catch (error) {
    console.log(error);
  }
};
export default { Image, Image2,Image3 ,Image4,Image5,Image6,Image7,Image8,Image9,Image10};
