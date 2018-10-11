function convertDate(userDate) {
    // var dateString = "12/31/2014";
    // var target = "20141231"
    var dataSplit = userDate.split('/');
    var intVal = Number.parseInt(dataSplit[2])*10000 + Number.parseInt(dataSplit[0])*100 + Number.parseInt(dataSplit[1]);
    return "" + intVal;
}

console.log(convertDate("12/31/2014"));
console.log(convertDate("5/1/2014"));
