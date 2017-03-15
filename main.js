document.getElementById("addButton").addEventListener("click", addFunction);
document.getElementById("deleteButton").addEventListener("click", deleteFunction);

function addFunction() {
    var idTemp = document.getElementById("id").value;
    var nameTemp = document.getElementById("name").value;
    var creditTemp = document.getElementById("credit").value;
    var gpaTemp = document.getElementById("grade").value;

    var table = document.getElementById("tableSubject");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = idTemp;
    cell2.innerHTML = nameTemp;
    cell3.innerHTML = creditTemp;
    cell4.innerHTML = gpaTemp;

    var sumCredit = 0;
    var sumGPA = 0.00;
    for (var i = 1, row; row = table.rows[i]; i++) {
        sumCredit += parseInt(row.cells[2].innerHTML);
        sumGPA += parseInt(row.cells[2].innerHTML) * parseFloat(convertGPAtoNumber(row.cells[3].innerHTML));
    }

    var averageGPA = sumGPA / sumCredit;
    document.getElementById("answerGPA").innerHTML = parseFloat(Math.round(averageGPA * 100) / 100).toFixed(2);;
}

function deleteFunction() {
    document.getElementById("tableSubject").deleteRow(1);

    var sumCredit = 0;
    var sumGPA = 0.00;
    var table = document.getElementById("tableSubject");
    for (var i = 1, row; row = table.rows[i]; i++) {
        sumCredit += parseInt(row.cells[2].innerHTML);
        sumGPA += parseInt(row.cells[2].innerHTML) * parseFloat(convertGPAtoNumber(row.cells[3].innerHTML));
    }

    document.getElementById("answerGPA").innerHTML = sumGPA / sumCredit;
}

function convertGPAtoNumber(letter) {
    if (letter == "A" || letter == "a") {
        return 4;
    } else
    if (letter == "B+" || letter == "b+") {
        return 3.5;
    } else
    if (letter == "B" || letter == "b") {
        return 3;
    } else
    if (letter == "C+" || letter == "c+") {
        return 2.5;
    } else
    if (letter == "C" || letter == "c") {
        return 2;
    } else
    if (letter == "D+" || letter == "d+") {
        return 1.5;
    } else
    if (letter == "D" || letter == "d") {
        return 1;
    } else
    if (letter == "F" || letter == "f") {
        return 0;
    } else {
        return letter;
    }
}