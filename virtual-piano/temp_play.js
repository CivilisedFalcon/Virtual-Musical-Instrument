/*This is just a very basic code.
So if you're an advanced coder, it may not be fancy!
I have not documented it.
But I will Document it later.*/
let a="";
//let temp_playbtn = document.querySelector('temp_play3');
let song = "";
let audio2 = [];

/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function playtext(song){
  a=song;
  console.log(a);
  console.log("Playtext Button Pressed");
  for (var i=0; i<a.length; i++){
    audio2[i] = document.createElement("AUDIO");
    audio2[i].src = "Tune/" + a[i] + ".mp3";
  }
  playkey2(0,a.length);

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

