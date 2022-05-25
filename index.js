console.log("h11");
import dataPerson from "./DATA.json" assert { type: "json" };
console.log(dataPerson);

let data = dataPerson["data"];
let dataList = "";
data.forEach(function (data) {
  dataList += `
    <div class="card-person">
    <img class="profile-image" src="${data["profile-picture"]}" alt="Profilepicture ${data["name"]}">
    <h2>${data["name"]}</h2>
<h3>${data["kmapus"]}</h3>
 <p>${data["teks"]}</p>

     <a class="link" href="${data["linked-in"]}">
         <i class="fa fa-linkedin icon" aria-hidden="true"></i>
        </a>

        <a class="link" href="${data["github"]}">
            <i class="fa fa-github icon" aria-hidden="true"></i>
           </a>

        <a class="link" href="${data["twitter"]}">
            <i class="fa fa-twitter" aria-hidden="true"></i>
           </a>

        <a class="link" href="${data["link"]}">
            <i class="fa fa-link" aria-hidden="true"></i>
           </a>
</div>
        `;
});
document.querySelector("#konten").innerHTML = dataList;
// });
