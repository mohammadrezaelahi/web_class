// a = 10
// let b =[]
// for(a ; a < 20; a++){
//     b.push(a)
// }
// for(i=0; i<10; i++){
//     document.write(b[i]+"<br>")
// }

var result = "<table>";

for (i = 0; i <= 10; i++) {
  result += "<tr>";
  for (j = 0; j <= 10; j++) {
    result += "<td>" + i * j + "</td>";
  }
  result += "</tr>";
}
result += "</table>";

document.getElementById("hi").innerHTML = result;
