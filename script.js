/**********************************************************
 for connection check.
**********************************************************/
//console.log("connected js with html");

/***********************************************************
 The function is to generate new joke.
 older version that is xhr version
***********************************************************/
// function getAJoke(){
//     let xhr=new XMLHttpRequest();
//     xhr.open("GET","https://api.api-ninjas.com/v1/dadjokes?limit=1");
//     xhr.setRequestHeader( 'X-Api-Key', 'h0lILuhuulINq8LrQpXQXQ==6wSCjXfLRwnGgzi1');
//     xhr.send();
//     xhr.onload=()=>{
//         if(xhr.status===200){
//             let parsedValue=JSON.parse(xhr.responseText);
//             console.log(parsedValue[0].joke);
//         }
//     }
//     // xhr.close();
// }
// getAJoke();

/***********************************************************
 The new version is fetch method ..
************************************************************/
function getAJoke() {
  document.getElementById("joke").innerText = "Updating....";
  let btn = document.getElementById("button");
  btn.innerHTML = "Loading....";

  fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
    headers: {
      "X-Api-Key": "h0lILuhuulINq8LrQpXQXQ==6wSCjXfLRwnGgzi1",
    },
  })
    .then((element) => {
      return element.json();
    })
    .then((element) => {
      document.getElementById("joke").innerText = `${element[0].joke}`;
      btn.innerText = "TELL ME A JOKE";
    });
}
