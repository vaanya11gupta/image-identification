Webcam.set ({
	width:350,
	height:315,
	image_format : 'png' ,
	png_quality: 90,
	
	constraints: {
		facingMode:"enviorment"
	}
});
camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
	Webcam.snap(function(data_uri){
		document.getElementById("result").innerHTML= '<img id="taken_snapshot" src="'+data_uri+'"/>';
	});
}
console.log('ml5 version:',ml5.version);

classifier= ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded() {
	console.log('Model Loaded !')
}
function check(){
	img= document.getElementById('taken_snapshot');
	classifier.classify(img, gotResult);
}
function gotResult(error,result){
	if(error){
		console.error(error);
		
	}
	else{ console.log(result);
		 document.getElementById("object_name").innerHTML = result[0].label;
		}
	}
