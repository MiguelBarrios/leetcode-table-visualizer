var form = document.getElementById("visualizeBtn");

function visualize(event) {   
    event.preventDefault();
    var data = document.forms.inputForm.data.value;
    var obj = JSON.parse(data);
    var headers = obj["headers"];
    var rows = obj["values"];
    buildTable(headers, rows);
} 

function buildTable(headers, data){
    console.log(data.length);
    var container = document.getElementById("table-container");
    container.innerHTML = '';

    var table = document.createElement("table");
    table.classList.add("table", "table-striped");
    container.appendChild(table);

    // Create Table Headers
    var thead = document.createElement("thead");
    console.log(headers);
    var tr = document.createElement("tr");
    for(var header of headers){
        var th = document.createElement("th");
        th.textContent = header;
        tr.append(th);
    }
    thead.append(tr);
    table.append(thead);

    // Create Table Body
    var tbody = document.createElement("tbody");
    for(var row of data){
        let tr = document.createElement("tr");
        for(let entrie of row){
            let td = document.createElement("td");
            td.textContent = entrie;
            tr.appendChild(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
}

form.addEventListener('submit', visualize);