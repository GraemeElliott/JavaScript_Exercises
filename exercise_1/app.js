$(document).ready(function () {
    
// For Loop

   fetch("./data/contacts.json") //is this the best way?
        .then(function (response) {
        return response.json();
    }).then(function (json) {
        //console.log(json[0].id);
        var tableArray = [];
        
        for(var i = 0; i < json.length; i++) {
        var tableData = '<tr><td>' + json[i].id + '</td>';
        tableData+= '<td>' + json[i].first_name+ '</td>';
        tableData+= '<td>' + json[i].last_name + '</td>';
        tableData+= '<td>' + json[i].country + '</td></tr>';
        tableArray.push(tableData);
}

$('table').append(tableArray.join(''));     

    });

// For In


/*
    fetch("./data/contacts.json") //is this the best way?
        .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json[0].id);
        var tableArray = [];
        for (var i in json) {
            var tableData = "<tr><td>" + json[i].id + "</td>";
            tableData+= '<td>' + json[i].first_name+ '</td>';
            tableData+= '<td>' + json[i].last_name + '</td>';
            tableData+= '<td>' + json[i].country + '</td></tr>';
            
            tableArray.push(tableData);
        }
        $('table').append(tableArray.join(''));
        
        
    });
*/

});