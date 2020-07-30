// funtion to get input and place in variables
function myFunction() {
  var xStart = Number(document.getElementById("xStart").value);
  var xEnd = Number(document.getElementById("xEnd").value);
  var yStart = Number(document.getElementById("yStart").value);
  var yEnd = Number(document.getElementById("yEnd").value);


  // catching if the start is greater than the end
  if (xStart > xEnd) {
    document.getElementById("error").innerHTML = "Start greater than end; swapping to fix."

    var tmp = xStart;
    xStart = xEnd;
    xEnd = tmp;
  }

  if (yStart > yEnd) {
    document.getElementById("error").innerHTML = "Start greater than end; swapping to fix."

    var tmp = xStart;
    xStart = xEnd;
    xEnd = tmp;
  }


  var table_text = "";

  table_text += "<table>";

  table_text += "<tr>";

  table_text += "<td></td>";

  for (var i = xStart; i <= xEnd; i++) {
    table_text += "<td>"+ i +"</td>";
  }

  var y = yStart;

  for (var i = yStart; i <= yEnd; i++) {
    table_text += "<tr>";

    table_text += "<td>" + i + "</td>";

    for (var j = xStart; j <= xEnd; j++) {
      table_text += "<td>" + (i * j) + "</td>";
    }

    table_text += "</tr>";
  }

  table_text += "</tr>";

  table_text += "</table>";

  document.getElementById('myTable').innerHTML = table_text;

}
