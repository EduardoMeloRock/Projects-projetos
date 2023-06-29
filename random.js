let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpEM = document.getElementById("inp-em");

//Function to convert pixels to em
let pxToEm = () => {
    let inpBaseValue = inpBase.value;
    let pxValue = inpPx.value;

    if(pxValue.length != 0) {
        inpEM.value = pxValue / inpBaseValue;
    }

    else {
        inpEM.value = "";
    }
};

//Function convert em to pixels
let EmtoPx = () => {
    let inpBaseValue = inpBase.value;
    let emValue = inpEm.value;

    if (emValue.length != 0) {
        inpPx.value = emValue * inpBaseValue;
    }
    else {
        inpPx.value = "";
    }
};

let calcEmPx = () => {
    if (inpBase.value.length != 0) {
        EmtoPx();
    }
    else {
        inpPx.value = "";
        inpEm.value = "";
    }
};

// Adding oninput event to each input field
inpPX.oninput = pxToEm;
inpEm.oninput = emToPx;
inpBase.oninput = calcEmPx;