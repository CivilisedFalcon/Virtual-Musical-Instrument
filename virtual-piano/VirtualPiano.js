/*This is just a very basic code.
So if you're an advanced coder, it may not be fancy! 
I have not documented it. 
But I will Document it later.*/
document.addEventListener("keydown", function (event) {

    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/A.mp3";
        audio.play();
    }
    else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/S.mp3";
        audio.play();
    }
    else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/F.mp3";
        audio.play();
    }
    else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/G.mp3";
        audio.play();
    }
    else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/H.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/J.mp3";
        audio.play();
    }
    else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/W.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/E.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/T.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/Y.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Tune/U.mp3";
        audio.play();
    }
    else {
        console.log("Warning");
        alert('I have not made a handler for this key yet :(')
    }
});

