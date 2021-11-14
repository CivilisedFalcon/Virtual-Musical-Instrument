/*This is just a very basic code.
So if you're an advanced coder, it may not be fancy!
I have not documented it.
But I will Document it later.*/
let a="";
let clrbtn = document.querySelector('#clr');
let savebtn = document.querySelector('#save');


clrbtn.addEventListener('click', ()=>{
  a="";
  document.getElementById('output').vAlue=a;
  console.log("Clear Pressed");
})

savebtn.addEventListener('click', ()=>{
  console.log("File saved in a file named temp.txt");
})

document.addEventListener("keydown", function (event) {

    if (event.code == "KeyA") {
        a=a+"A";
        document.getElementById('output').value=a;
        console.log("The 'A' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/A.mp3";
        audio.play();
    }
    else if (event.code == "KeyS") {
        a=a+"S";
        document.getElementById('output').value=a;
        console.log("The 'S' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/S.mp3";
        audio.play();
    }
    else if (event.code == "KeyD") {
        a=a+"D";
        document.getElementById('output').value=a;
        console.log("The 'D' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyF") {
        a=a+"F";
        document.getElementById('output').value=a;
        console.log("The 'F' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/F.mp3";
        audio.play();
    }
    else if (event.code == "KeyG") {
        a=a+"G";
        document.getElementById('output').value=a;
        console.log("The 'G' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/G.mp3";
        audio.play();
    }
    else if (event.code == "KeyH") {
        a=a+"H";
        document.getElementById('output').value=a;
        console.log("The 'H' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/H.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ") {
        a=a+"J";
        document.getElementById('output').value=a;
        console.log("The 'J' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/J.mp3";
        audio.play();
    }
    else if (event.code == "KeyW") {
        a=a+"W";
        document.getElementById('output').value=a;
        console.log("The 'W' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/W.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        a=a+"E";
        document.getElementById('output').value=a;
        console.log("The 'E' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/E.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        a=a+"T";
        document.getElementById('output').value=a;
        console.log("The 'T' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/T.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        a=a+"Y";
        document.getElementById('output').value=a;
        console.log("The 'Y' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/Y.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        a=a+"U";
        document.getElementById('output').value=a;
        console.log("The 'U' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/U.mp3";
        audio.play();
    }
    else if (event.code == "KeyZ") {
        a=a+"Z";
        document.getElementById('output').value=a;
        console.log("The 'Z' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/Z.mp3";
        audio.play();
    }
    else if (event.code == "KeyX") {
        a=a+"X";
        document.getElementById('output').value=a;
        console.log("The 'X' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyC") {
        a=a+"C";
        document.getElementById('output').value=a;
        console.log("The 'C' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyV") {
        a=a+"V";
        document.getElementById('output').value=a;
        console.log("The 'V' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyB") {
        a=a+"B";
        document.getElementById('output').value=a;
        console.log("The 'B' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyN") {
        a=a+"N";
        document.getElementById('output').value=a;
        console.log("The 'N' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyM") {
        a=a+"M";
        document.getElementById('output').value=a;
        console.log("The 'M' key is pressed.");
        let audio = document.createElement("AUDIO");
        //audio.src = "Tune/D.mp3";
        audio.play();
    }
    else {
        console.log("Warning");
        alert('I have not made a handler for this key yet :(')
    }
});
