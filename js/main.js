document.addEventListener("DOMContentLoaded", function(event) {
    const url = '../data/data.json';
    let level = document.getElementById("levelCourse");

    fetch(url,{

    }).then(response => response.json())
    .then(result => {
        // let cant = Object.keys(result).length;
        let data = Object.keys(result);
        let grades = result["Primaria"][0][0]["titulo"];
        console.log(grades)

        data.forEach((element, index) => {
            level.innerHTML+=`
            <h3>${element}</h3>
            <p>${grades}</p>
            `;
 
        })
        
    });
});