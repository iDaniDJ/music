let c = {
    treble: "c.png",
    bass: "cbass.png",
    val: "C",
    val2: "c"
};
let d = {
    treble: "d.png",
    bass: "dbass.png",
    val: "D",
    val2: "d"
};
let e = {
    treble: "e.png",
    bass: "ebass.png",
    val: "E",
    val2: "e"
};
let f = {
    treble: "f.png",
    bass: "fbass.png",
    val: "F",
    val2: "f"
};
let g = {
    treble: "g.png",
    bass: "gbass.png",
    val: "G",
    val2: "g"
};
let a = {
    treble: "a.png",
    bass: "abass.png",
    val: "A",
    val2: "a"
};
let b = {
    treble: "b.png",
    bass: "bbass.png",
    val: "B",
    val2: "b"
};
let octivec = {
    treble: "hic.png",
    bass: "lowc.png",
    val: "C",
    val2: "c"
};
let octived = {
    treble: "hid.png",
    bass: "lowd.png",
    val: "D",
    val2: "d"
};
let octivee = {
    treble: "hie.png",
    bass: "lowe.png",
    val: "E",
    val2: "e"
};
let octivef = {
    treble: "hif.png",
    bass: "lowf.png",
    val: "F",
    val2: "f"
};
let octiveg = {
    treble: "hig.png",
    bass: "lowg.png",
    val: "G",
    val2: "g"
};
let octivea = {
    treble: "hia.png",
    bass: "lowa.png",
    val: "A",
    val2: "a"
};
let octiveb = {
    treble: "hib.png",
    bass: "lowb.png",
    val: "B",
    val2: "b"
};
let veryoctiveb = {
  bass: "verylowb.PNG",
  val: "B",
  val2: "b"
  };
let veryoctivea = {
  bass: "verylowa.PNG",
  val: "A",
  val2: "a"
  };
let veryoctiveg = {
  bass: "verylowg.PNG",
  val: "G",
  val2: "g"
  };
let veryoctivef = {
  bass: "verylowf.PNG",
  val: "F",
  val2: "f"
  };

let notes = [c,d,e,f,g,a,b,octivec,octived,octivee,octivef,octiveg,octivea,octiveb,veryoctiveb,veryoctivea,veryoctiveg,veryoctivef];
let rand = notes[Math.floor(Math.random() * notes.length)];
let bass = rand.bass;
let treble = rand.treble;
let bassortreble = Math.floor(Math.random() * 2);

if (bassortreble === 0){
    document.getElementById("note").src = rand.bass;
} else {
    document.getElementById("note").src = rand.bass;
}
$("#answer").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#checkb").click();
    }
});
function check() {
    if (document.getElementById("answer").value == rand.val || document.getElementById("answer").value == rand.val2 ) {
        document.getElementById("result").innerHTML = "Correct";
        setTimeout(
            function() 
            {
window.location.reload(true);          }, 500);
    } else {
        document.getElementById("result").innerHTML = "Incorrect";
    }
    
}
