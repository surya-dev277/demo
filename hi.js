function changeText() {
const message = document.getElementById("message");


if (message.innerText === "Click the button to see magic") {
message.innerText = "✨ JavaScript is working!";
} else {
message.innerText = "Click the button to see magic";
}
}