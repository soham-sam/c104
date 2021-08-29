Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera= document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot(){
    webcam.take_snapshot(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    })}
    console.log('ml5 version', ml5.version);
    classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/CypZL9ih7/model.json",modelLoaded)

    function check(){
        img = document.getElementById('captured_image');
        classifier.classify(img,getresult);
    }

    function gotResult(error,results){
        if (error){
            console.error(error);
        

    } else {
        console.log(results)
        document.getElementById("result_object_name").innerHTML= results[0].lable
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }}