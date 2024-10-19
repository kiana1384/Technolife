const Menu = async () => {
  let htmlMenu = "";
  try {
    let res = await axios.get("http://localhost:3005/Menu");
    res.data.map((elem) => {
      htmlMenu += `<li>
      <a href="${elem.link}">${elem.name}</a>
      </li>`;
    });
    document.querySelector("ul").innerHTML=htmlMenu
  } catch (error) {
    console.log(error);
  }
};
export default Menu;
