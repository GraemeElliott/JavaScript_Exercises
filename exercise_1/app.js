/*
var data = [{"id":"17b78bad-876d-49c4-89d0-53a8cb165e06","first_name":"Johny","middle_name":"233.86.192.59","last_name":"Scapens","gender":null,"email":"jscapens0@globo.com","website":"http://disqus.com/nisl.jpg","city":"Chandmanĭ","country":"MN","postal_code":null,"street_number":"967","street_name":"Grasskamp"},
{"id":"72a22bb0-d82e-4ffb-8392-3fdda288fb86","first_name":"Udale","middle_name":null,"last_name":"Paolillo","gender":"M","email":"upaolillo1@icio.us","website":"https://cnet.com/in/tempor/turpis.js","city":"Fort Worth","country":"US","postal_code":"76129","street_number":"389","street_name":"Forster"}]


function tableData (data) {
    
    //Creates the header using keys from JSON

    let objectKeys = Object.keys(data[0]);
    let table = document.querySelector('table');
    let headerRow = document.createElement ('tr');
    
    for (i=0; i < objectKeys.length; i++) {
        let headerCell = document.createElement('th');
        headerCell.append(document.createTextNode(objectKeys[i]));
        headerRow.append(headerCell);
    };
    
    table.append(headerRow);
    
};

tableData(data);
*/






//Working Method


   fetch("./data/contacts.json") //is this the best way?
        .then(function (response) {
        return response.json();
    }).then(function (json) {
       
       function tableData (data) {
           let objectKeys = Object.keys(data[0]);
           let table = document.querySelector('table');
           let headerRow = document.createElement ('tr');
           
           for (let keyName of objectKeys) {
               let headerCell = document.createElement('th');
               headerCell.append(document.createTextNode(keyName));
               headerRow.append(headerCell);
           };
    
    table.append(headerRow);
           
           for (let i = 0; i < data.length; i++) {
               const dataRow = document.createElement('tr');
               
               for (const keyName of objectKeys) {
                   const dataCell = document.createElement('td');
                   dataCell.append(document.createTextNode(data[i][keyName]));
                   dataRow.append(dataCell);
               }
               table.append(dataRow);
           }
       };
       
       tableData(json);
   });