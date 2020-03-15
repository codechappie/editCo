document.addEventListener("DOMContentLoaded", function (event) {
    const url = '../data/data.json';
    let CardInfo = document.querySelector(".cardInformation");
    // console.log(CardInfo)
    fetch(url, {

    }).then(response => response.json())
        .then(result => {
            
            let dat = Object.keys(result);
            let data;
            let eleme;
            dat.forEach((eleme) => {
                CardInfo.innerHTML+=`<h2>${eleme}</h2>`;
                data = result[eleme];  
                let countda = 0;
                for (let index = 0; index < Object.keys(data).length; index++) {  

                    // let cardLevel = document.querySelectorAll(".cardLevel");
                    // console.log(data[index]['materia'])
                    CardInfo.innerHTML+=`<h3>${data[index]['materia']}</h3>`;
                    CardInfo.innerHTML+=`<fieldset> `;
                    for (let indexGrados = 0; indexGrados < parseInt(Object.keys(data[index]).length) - 1; indexGrados++) {

                        CardInfo.innerHTML+=`
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck${countda}" >
                                <label class="custom-control-label" cursoAttr="${data[index][indexGrados]['curso']}" gradoCursoAttr="${data[index][indexGrados]['grado']}" for="customCheck${countda}">${data[index][indexGrados]['titulo']}</label>
                            </div>`;
                            countda++;
                    }
                    
                    CardInfo.innerHTML+=`</fieldset>`;

                }
            })
        
        });
});