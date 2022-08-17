var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition()

function start()
{
    document.getElementById("textbook").innerHTML="";
    recognition.start();   
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].trnscript;
    console.log(content);
    if(content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    speak();
    document.getElementById("textbox").innerHTML = content;
}

function speak(){

    var synth = window.speechSynthesis;

      speak_data = "taking your selfie in 5 seconds";

    speak_data = document.getElementById("textbox").value; 
     
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000 );
}

webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()

{
   webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie" src="+data_uri+'">';

   });
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}