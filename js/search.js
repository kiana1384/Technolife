const search = async () => {
  let htmlFooter = "";
  try {
    let res = await axios.get("http://localhost:3005/search");
    res.data.map((elem) => {
      htmlFooter += `
        <img src="${elem.img}" alt="">
            <div class="inp">
        <input type="text" placeholder=" محصول، برند یا دسته مورد نظرتان را جستجو کنید ">
       
        <div class="suggest">
        <div class="search">جستجو برای....</div>
        <p class="titrr">جستجو‌های محبوب</p>
          <div class="btns">
       <a href="#">A55</a>
       <a href="#">A34</a>
       <a href="#">A34</a>
       <a href="#">S24</a>
       <a href="#">S23</a>
       <a href="#">A54</a>
       <a href="#">ایفون</a>
       <a href="#">هدزفری</a>
       <a href="#">A15</a>
       <a href="#">ایرپاد</a>
 </div>
        </div> </div>
        `;
    });
    document.querySelector(".rightside").innerHTML = htmlFooter;
  } catch (error) {
    console.log(error);
  }
  const searchBar = document.querySelector("input");
  const searchBarDown = document.querySelector("div.suggest");

  searchBar.addEventListener("click", () => {
    searchBarDown.style.display = "flex";
  });
};
export default search;
