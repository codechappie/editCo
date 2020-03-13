document.addEventListener("DOMContentLoaded", function (event) {
    const url = '../data/data.json';
    let level = document.getElementById("levelCourse");
    let preCont = document.getElementById("contePre");

    fetch(url, {

    }).then(response => response.json())
        .then(result => {
            
            let dat = Object.keys(result);
            

            dat.forEach((eleme,index) => {
                level.innerHTML+=`<h2>${eleme}</h2>`;
                // console.log(result['Primaria'])
                let data = result[eleme];  
                  
                for (let index = 0; index < Object.keys(data).length; index++) {
                    
                    level.innerHTML+=`
                    <h5>${data[index]['materia']}</h5>
                    <a>${JSON.stringify(data[index][index], null, 2)}</a>
                    `;
                    
                }


            })
        });
});