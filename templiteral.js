const TEMPLIT = [
    {
        link: "modal2",
        imgn: "1"
    },
    {
        link: "modal3",
        imgn: "2"
    }
];

function gal1(tempgal){
    return `
    <img id="btn${tempgal.imgn}" src="${tempgal.imgn}.JPG">
    `
}

function mod(tempgal){
    return `
    <div id="id${tempgal.imgn}" class="modal-window">
        <iframe class="modal-wrap" src="modals/${tempgal.link}.html" frameborder="0"></iframe>
    </div>
    `
}

function modalLinks(tempgal){
    let btnId = "btn" + tempgal.imgn;
    let modId = "id" + tempgal.imgn;
    let getBtnId = document.getElementById(btnId);
    let getModId = document.getElementById(modId);
    getBtnId.onclick = function() {
        console.log('click: btn: ' + this.id + ', modal: ' + getModId.id);
        getModId.classList.toggle('show-popup');
    }
    /* to dispose the popup on click */
    getModId.onclick = function() {
        console.log(this.id +" it's OK");
        this.classList.toggle('show-popup');
    }
}

document.getElementById("modalframe").innerHTML = `
<div class="galeria">
    ${TEMPLIT.map(gal1).join('')}
</div>
${TEMPLIT.map(mod).join('')};
`
TEMPLIT.map(modalLinks);

