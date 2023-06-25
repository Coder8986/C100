var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var Content =  event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if ( Content == "take my selfie"){
        speak();
        console.log("Taking your selfie");
    }
    
 
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds "

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(() => {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set ({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = "<img id='img1'src= " + data_uri + ">";
})
}

function save(){
    link = document.getElementById("a1");
    Img = document.getElementById("img1").src;
    link.href = Img;
    link.click();
}





