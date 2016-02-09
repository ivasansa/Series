
function Figura() {
  this.ID = 0;
  this.dept = "general";
}

window.onload = function () {

     var divs = document.querySelectorAll('div');
    [].forEach.call(divs, function (item) {
        item.addEventListener('dragover', gestionarSobreDrag, false);
        item.addEventListener('drop', gestionarDrop, false);

    });

    var imatges = document.querySelectorAll('img');
    [].forEach.call(imatges, function (item) {
        item.addEventListener('dragstart', gestionarIniciDrag, false);
    });

    function gestionarSobreDrag(ev) {
        ev.preventDefault();
    }

    function gestionarIniciDrag(ev) {
        ev.dataTransfer.setData("imatge", ev.target.id);
    }

    function gestionarDrop(ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("imatge");
        if ( event.target.nodeName !== "IMG" ) {    //evita que les imatges es fiquin dins d'elles mateixes
            ev.target.appendChild(document.getElementById(data));
        }
    }

    var image1 = new Image();
    image1.src = 'images/image1.png';
    var image2 = new Image();
    image2.src = 'images/image2.png';
    var image3 = new Image();
    image3.src = 'images/image3.png';
    var image4 = new Image();
    image4.src = 'images/image4.png';

    var serie1 = [image1, image1, image1, image1];

    document.getElementById("div1").appendChild(image1);
    document.getElementById("div2").appendChild(image2);

};
