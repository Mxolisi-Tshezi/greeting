var greetElement = document.querySelector("#name");
var message = document.querySelector("#text");
var greetButton = document.querySelector(".bttn1");
var resetButton = document.querySelector(".bttn2");
var Alphabets = /^[a-zA-Z]+$/;
var TheNames = [];

if (localStorage["Person"]) {
    TheNames = JSON.parse(localStorage.getItem("Person"));
}
document.querySelector(".display").innerHTML = TheNames.length;
var greetingsInstance = GreetFactory(TheNames);

greetButton.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  message.innerHTML = greetingsInstance.errorMessages(
    greetElement.value.trim().toLowerCase(),
    checkedRadioBtn
  );
  message.style.color = "red";
  if (checkedRadioBtn && Alphabets.test(greetElement.value)) {
    var language = checkedRadioBtn.value;
    var userName = greetElement.value;
    let name =
      userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    message.innerHTML = greetingsInstance.greetingMessage(name, language);
    message.style.color = "black";
    localStorage.setItem(
      "Person",
      JSON.stringify(greetingsInstance.storedNames())
    );
    document.querySelector(".display").innerHTML = TheNames.length;
  }
  setTimeout(() => {
    message.innerHTML = "";
    message.style.color = "black";
  }, "5000");
});
greetButton.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  greetElement.value = "";
});
resetButton.addEventListener("click", function () {
  document.querySelector(".display").innerHTML = TheNames.length;
  localStorage.clear();
  location.reload();
});