var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

    recognition.onresult=function(event) {
        console .log(event);

        var Content= event.results[0][0].transcript
        console.log(Content);
        document.getElementById("textbox").innerHTML=Content;
        if (Content=="take my selfie") {
            speak();
            console.log("Devansh is taking your selfie ");
        }
        
    }



    function speak() {
        var synth=window.speechSynthesis;
    
        speak_data="taking your self in 5 seconds";
    
        var utterThis=new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterThis);
        Webcam.attach(camera);
        setTimeout(function(){
            take_snapshot();
            save();
        } ,5000);
    }

    camera=document.getElementById("divTAG1");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot() {
    Webcam.snap(function(data_uri){
document.getElementById("divTAGtime").innerHTML='<img id="firstIMG" src="'+data_uri+'">';
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("firstIMG").src;
    link.href=image;
    link.click();
}
