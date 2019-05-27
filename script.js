const doc = new jsPDF()

const makePdf = (e, inputs) => {
    e.preventDefault();
    let x = 20;
    let y = 20;
    inputs.forEach(input => {
        doc.text(input.value, x, y);
        y += 20;
    })

    doc.save(`${inputs[0].value}\'s_resume.pdf`)
}


let inputs = document.querySelectorAll(".inp")
window.inputs = inputs;
let submit = document.querySelector("#submit");
submit.addEventListener("click",e => makePdf(e, inputs));