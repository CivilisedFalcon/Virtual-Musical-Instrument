/*This is just a very basic code.
So if you're an advanced coder, it may not be fancy!
I have not documented it.
But I will Document it later.*/
let a="";

let clrbtn = document.querySelector('#clr');
let savebtn = document.querySelector('#save');
let playbtn = document.querySelector('#play');

let audio2 = [];

/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function playKey(k){
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/" + k + ".mp3";
        audio.play();
        console.log("Function playKey(", k, ") is called");
}

function playkey2(k,maxk) {
  audio2[k].play();
  console.log("Audio ", k , "played");
  audio2[k].addEventListener('ended', function(e){
    //console.log(k, ": sleep");
    //sleep(100);
    var j=k+1;
    if (j<maxk) {
      playkey2(j,maxk);
    }
  });
}

// Event Listner for the Play Button
playbtn.addEventListener('click', ()=>{
  console.log("Play Button Pressed");
  for (var i=0; i<a.length; i++){
    audio2[i] = document.createElement("AUDIO");
    audio2[i].src = "Tune/" + a[i] + ".mp3";
  }
  playkey2(0,a.length);
})



// Event Listner for the Clear Button
clrbtn.addEventListener('click', ()=>{
    a="";
    console.log("Clear Pressed");
})

/*
//Event Listner for Save Button
savebtn.addEventListener('click', ()=>{
  cobsole.log("File saved in a file named temp.txt");
})*/

document.addEventListener("keydown", function (event) {

    let kcode= String.fromCharCode(event.which);
	//console.log("code=",kcode);

	a=a+kcode;
	document.getElementById('output').value=a;
	console.log("The '", kcode, "' key is pressed.");
	playKey(kcode);

});
