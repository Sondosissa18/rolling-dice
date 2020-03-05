let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function rollDice() {
  for (let i = 1; i <= 1000; i++) {
    let diceOne = Math.ceil(Math.random() * 6);
    let diceTwo = Math.ceil(Math.random() * 6);
    let diecTottal = diceOne + diceTwo;
    console.log(diecTottal);
    countArray[diecTottal] = countArray[diecTottal] + 1;
  }
}
rollDice();
console.log(countArray);
// count[rollOfDice] = count[rollOfDice] + 1;

var ul_ = document.getElementById("ulist_");
for (let i = 2; i < countArray.length; i++) {
  var listItem = document.createElement("li");
  var text = document.createTextNode(i + ":" + countArray[i]);
  console.log(text);
  listItem.appendChild(text);
  ul_.appendChild(listItem);
}

for (let i = 2; i < countArray.length; i++) {
  // Create a div, with class "bar", and set the width to 100px.
  var newElement = document.createElement("div");
  newElement.innerHTML = countArray[i];
  newElement.style.width = countArray[i] + "px";
  newElement.style.height = "50px";
  newElement.style.backgroundColor = "green";
  document.body.appendChild(newElement);
}
