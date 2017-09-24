$(document).ready(function () {
// Fetch the JSON data

    fetch("./data/contacts.json") //is this the best way?
        .then(function (response) {
        return response.json();
    }).then(function (json) {
        //console.log(json[0].id);
        var tableArray = [];
        
        for(var i = 0; i < 5; i++) {
        var tableData = '<tr><td>' + json[i].id + '</td>';
        tableData+= '<td>' + json[i].first_name+ '</td>';
        tableData+= '<td>' + json[i].last_name + '</td>';
        tableData+= '<td>' + json[i].country + '</td></tr>';
        tableArray.push(tableData);
}

$('table').append(tableArray.join(''));     

    });

});