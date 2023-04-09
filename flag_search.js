const search=document.querySelector("button");
const input=document.querySelector("input");
const flagBox=document.querySelector(".box2");
fetch(" https://flagcdn.com/en/codes.json")
.then((Response)=>{
    return Response.json()
})