const ul = document.getElementById('myList');
const item = "Testing web interaction"

li = document.createElement("li")
li.appendChild(document.createTextNode(item))
ul.appendChild(li)

p = document.createElement("p")
p.appendChild(document.createTextNode(item))
ul.appendChild(p)

var li = document.getElementById("myList")
console.log(li.textContent || li.innerText);

function change() {
    var header = document.getElementsByTagName("H2").item(0);
    header.firstChild.data = "Function Added Header";
    
    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "Function added first paragraph.";

    var newText = document.createTextNode("Function added second paragraph.");
    var newElement = document.createElement("P");
    newElement.appendChild(newText);
    para.parentNode.appendChild(newElement);
}

function generate_table() {
  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 2; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode("row "+i+", col "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}