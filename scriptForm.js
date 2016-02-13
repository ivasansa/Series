function dataFinal(){
    var d = new Date();
    var final = d.getTime();
    return final;
}

function esborrarNom() {
    localStorage.clear();
}

function guardarNom() {

    var inici = sessionStorage.inici;
    var final = dataFinal();
    var temps = (final - inici)/1000;
    var nom = document.getElementById("nombre").value;

    var punt = [nom, temps];
    localStorage["punt"] = JSON.stringify(punt);

    var storedNames = JSON.parse(localStorage["punt"]);


    console.log(storedNames);

}

window.onload = function () {
    for (var key in localStorage){
        console.log(JSON.parse(localStorage[key]));
  }
}
