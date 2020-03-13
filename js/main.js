document.addEventListener("DOMContentLoaded", function (event) {
    const url = '../data/data.json';
    let level = document.getElementById("levelCourse");
    let preCont = document.getElementById("contePre");

    fetch(url, {

    }).then(response => response.json())
        .then(result => {
            // let cant = Object.keys(result).length;
            const JsonData = result;
            console.info("activo:", result["Primaria"][0][0]["activo"])
            result["Primaria"][0][0]["activo"] = "1";
            result["Primaria"][0][1]["activo"] = "1";
            console.info("activo:", result["Primaria"][0][0]["activo"])
            console.log(result)
            
            preCont.innerHTML=JSON.stringify(result, null, 2);
            

            // console.log(JSON.stringify(JsonData))
        });
});