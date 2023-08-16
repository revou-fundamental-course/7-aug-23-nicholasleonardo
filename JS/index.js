function hitung() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    
    var keliling = sideA+sideB+sideC

    document.getElementById("keliling").innerHTML ="keliling segitiga: " + keliling;

    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    var luas = (alas*tinggi)*1/2

    document.getElementById("luas").innerHTML = "Luas Segitiga: " + luas;
}

function resetForm() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("alas").value = "";
    document.getElementById("luas").innerHTML = "";
    document.getElementById("keliling").innerHTML = "";
}