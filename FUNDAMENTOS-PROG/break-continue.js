

var y = 10;

for (y; y > 0; y--) {
  if (y == 5) {
    break;
  }
    console.log("El valor de Y es: " +y);
}

let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  text += i + "<br>";
}