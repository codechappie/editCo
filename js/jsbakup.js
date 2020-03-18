document.addEventListener("DOMContentLoaded", function (event) {
    const url = '../data/data.json';
    let CardInfo = document.querySelector(".cardInformation");
    let containerFinalJson = document.querySelector(".preContainerJson");
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
                console.log(Object.keys(dat).length)
                for (let index = 0; index < Object.keys(data).length; index++) {  
                    
                    CardInfo.innerHTML+=`<h3>${data[index]['materia']}</h3>`;
                    for (let indexGrados = 0; indexGrados < parseInt(Object.keys(data[index]).length) - 1; indexGrados++) {
                        
                        CardInfo.innerHTML+=`
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck${countda}" activo="${data[index][indexGrados]['activo']}" ${(data[index][indexGrados]['activo'] === '1') ? "checked" : "" }    >
                                <label class="custom-control-label" cursoAttr="${data[index][indexGrados]['curso']}" gradoCursoAttr="${data[index][indexGrados]['grado']}" for="customCheck${countda}">${data[index][indexGrados]['titulo']}</label>
                            </div>`;
                            countda++;
                    }
                }
            });

            containerFinalJson.innerHTML=JSON.stringify(result, null, ' ');
        });
});