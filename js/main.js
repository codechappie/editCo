document.addEventListener("DOMContentLoaded", function (event) {
    const url = '../data/data.json';
    let mainConteiner = document.querySelector(".cardConteiner");
    let containerFinalJson = document.querySelector(".preContainerJson");

    fetch(url, {

    }).then(response => response.json())
        .then(result => {
            let jsonData = result;
            let dat = Object.entries(result);
            let data = Object.values(result);
            let dataIndices = Object.keys(result);
            let counterCheck = 0;
            let jsonFinal;
            let html = "";
            copyData(); 

            for (let levelCounter = 0; levelCounter < dat.length; levelCounter++) {

                html += `
                    <div class="card">
                        <h3 class="LevelName">${dat[levelCounter][0]}</h3>
                        <div class="courseList">
                        <ul class="gradeCourseList">
                        `;

                for (let coursesCounter = 0; coursesCounter < Object.keys(dat[levelCounter][1]).length; coursesCounter++) {
                    html += `<h5>${dat[levelCounter][1][coursesCounter]['materia']}</h5>`;
                    console.log()
                    html += `<div class="coti">`;
                    for (let gradesCourseCounter = 0; gradesCourseCounter < Object.keys(dat[levelCounter][1][coursesCounter]).length - 1; gradesCourseCounter++) {
                        let active = dat[levelCounter][1][coursesCounter][gradesCourseCounter]['activo'];
                        
                        html += `
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="courseCheck${counterCheck}" activo="" ${active === "1" ? "checked" : ""} >
                                <label class="custom-control-label" id="labalCheckId${counterCheck}" levelAttr="${dat[levelCounter][0]}" cursoAttr="${coursesCounter}" gradoCursoAttr="${gradesCourseCounter}" for="courseCheck${counterCheck}">${dat[levelCounter][1][coursesCounter][gradesCourseCounter]['titulo']}</label>
                            </div>
                            `;
                        
                        counterCheck++;
                    }
                    html += `</div>`;
                }

                html += `
                            </ul>
                        </div>
                    </div>`;
            }

            mainConteiner.innerHTML = html;
            checkStatus(jsonData);
            containerFinalJson.innerHTML = JSON.stringify( jsonData, null, ' ');
        });
});

function checkStatus(jsonData) {

    let checkBoxInput = document.querySelectorAll('.custom-control-input');
    let checkBoxLabel = document.querySelectorAll('.custom-control-label');
    for (let controlIndex = 0; controlIndex < checkBoxInput.length; controlIndex++) {
        checkBoxInput[controlIndex].addEventListener("change", () => {

            let newLabel = checkBoxLabel[controlIndex];
            let levelAttrDat = checkBoxLabel[controlIndex].getAttribute("levelAttr");
            let cursoAttrDat = checkBoxLabel[controlIndex].getAttribute("cursoAttr");
            let gradoCursoAttrDat = checkBoxLabel[controlIndex].getAttribute("gradoCursoAttr");
            console.log(levelAttrDat, cursoAttrDat, gradoCursoAttrDat)
            checkBoxInput[controlIndex].removeAttribute("checked");
            jsonData[levelAttrDat][cursoAttrDat][gradoCursoAttrDat].activo="1";
            containerFinalJson = document.querySelector(".preContainerJson");
            containerFinalJson.innerHTML = JSON.stringify( jsonData, null, ' ');
        });
    }
    return jsonData;
}

function copyData() {
    var button = document.getElementById("copy-button"),
    contentHolder = document.getElementById("finalJson");

button.addEventListener("click", function() {

    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    // Clear selection from any previous data.
    selection.removeAllRanges();

    // Make the range select the entire content of the contentHolder paragraph.
    range.selectNodeContents(contentHolder);

    // Add that range to the selection.
    selection.addRange(range);

    // Copy the selection to clipboard.
    document.execCommand('copy');

    // Clear selection if you want to.
    selection.removeAllRanges();
    alert("copiado...")
}, false);
}