Webcam.set({
    height: 300,
    width:300 ,
    img_format:png,
    img_quality:90
})

camera = document.getElementById("camera").innerHTML

Webcam.attach(camera);

function take_snapshot(data_uri){

    Webcam.snap()
    document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";

}
console.log('ml5version:',ml5version)

classifier = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/2YcdDkjE_/model.json",modelLoaded)

function modelLoaded(){
    console.log('Model Loaded')
}