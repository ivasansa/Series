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
    localStorage[inici] = JSON.stringify(punt); // Posem la data d'inici com a clau única ja que es impossible que es pugui repetir i guardem l'array com un objecte JSON

}

window.onload = function () {
    //Mostrem les puntuacions guardades en JSON
    var myTable= "<table><th>Nom</th>";
    myTable+= "<th>Temps</th>";

    for (var key in localStorage) {
        myTable+="<tr><td>" + JSON.parse(localStorage[key])[0] + "</td>";
        myTable+="<td>" + JSON.parse(localStorage[key])[1] + "</td></tr>";
    }
    myTable+="</table>";

    document.getElementById('tablePrint').innerHTML = myTable;
}
