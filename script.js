function dataInici(){
    var d = new Date();
    var inici = d.getTime();
    return inici;
}


//cloneNode permet fer còpies dels Node, mentre que appendChild els mou
function mostraSerie(serie){
    document.getElementById("div1").appendChild(serie[0].cloneNode(true));
    document.getElementById("div2").appendChild(serie[1].cloneNode(true));
    document.getElementById("div3").appendChild(serie[2].cloneNode(true));
}

//Retorna el valor del comptador de sèries guardades en sessionStorage
function getComptador(){
    if (sessionStorage.counter){
        var count = Number(sessionStorage.counter);
     }
    else {
        sessionStorage.counter=0;
        var count = Number(sessionStorage.counter);
        sessionStorage.inici = dataInici();// Al ser la primera serie, posem en marxa el temps
     }
    return count;
}

window.onload = function () {


    var count = getComptador(); //recuperem el valor del contador o el posem a 0 si es la primera sèrie

    //Comprovem quan arribem a la última sèrie
    if(count == 4){
        window.location.href = 'final.html';
        sessionStorage.counter=5;
    }

    console.log(count);



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
            if(document.getElementById(data).src == series[count].pop().src){ //Comprova que sigui la imatge correcte segons està definida a la sèrie
                document.getElementById("resultat").childNodes[0].nodeValue = "Correcte"; //Informa a l'usuari
                ev.target.appendChild(document.getElementById(data));
                sessionStorage.counter=count+1; //Objecte que guarda en emmagatzematge web el valor de count que serveix per avançar en les sèries i veure quan s'han acabat
                location.reload(false);
            }
            else {
                document.getElementById("resultat").childNodes[0].nodeValue = "Incorrecte"; //Informa a l'usuari
            }
        }
    }



    //Precàrrega d'imatges
    var image1 = new Image();
    image1.src = 'images/image1.png';
    var image2 = new Image();
    image2.src = 'images/image2.png';
    var image3 = new Image();
    image3.src = 'images/image3.png';
    var image4 = new Image();
    image4.src = 'images/image4.png';

    var serie1 = [image1, image1, image1, image1];
    var serie2 = [image3, image4, image3, image4];
    var serie3 = [image2, image2, image4, image4];
    var serie4 = [image3, image4, image3, image4];

    var series = [serie1, serie2, serie3, serie4];

    mostraSerie(series[count]);



};


