var btntranslate = document.querySelector(".translate-btn");
var textarea = document.querySelector("#txt-input");
var outputarea = document.querySelector(".output-txtarea");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslateurl(text) {
  return serverURL + "?" + "text=" + text;
}
function errorhandler(error) {
  console.log("error occured", error);
  alert("something might be happening with the server");
}
function clickevent() {
  var inputTxt = textarea.value;
  fetch(getTranslateurl(inputTxt))
    .then(response => response.json())
    .then(json=> {
      var translatedtext = json.contents.translated;
      outputarea.innerText = translatedtext;
    })
    .catch(errorhandler);
}
btntranslate.addEventListener("click", clickevent);
