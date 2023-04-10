// const search=document.querySelector("button");
// const input=document.querySelector("input");
// const flagBox=document.querySelector(".box2");
// fetch(" https://flagcdn.com/en/codes.json")
// .then((Response)=>{
//     return Response.json()
// })
// .then((result)=>{
//     console.log(result);
    
// })
let form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  deleteoldflag();
  let name = document.querySelector("input").value;
  fetch("https://flagcdn.com/en/codes.json")
    .then((response) => {
      return response.json();
    })
    .then((result) => data(result, name));
};
function data(result, name) {
  name = name.toLowerCase();
  let firstname = name[0].toUpperCase();
  let countryname = name.split("");   
  countryname.splice(0, 1, firstname);
  let flagtofind = countryname.join("");    
  for (let code in result) {
    if (result[code] === flagtofind) {
      let image = document.createElement("img");
      image.src = " https://flagcdn.com/256x192/" + code + ".png";
      document.querySelector(".box2").appendChild(image);
    }
  }
}

function deleteoldflag() {
  let oldflag = Array.from(document.querySelector(".box2").children);
  if (oldflag.length > 0) {
    oldflag.forEach((flg) => {
      flg.remove();
    });
  }
}