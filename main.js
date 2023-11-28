var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "ya te la sabes")
    {
    console.log("Tomando la foto en 5 segundos");
     speak();
    }

   
}

function speak() {
    speak_data =  "Haciendo la que ya me la se"
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");

function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});
}