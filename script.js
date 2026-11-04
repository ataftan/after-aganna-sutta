
let myFont;

let scene = 0;

let gap = [
  "_",
  "( )",



  ".                      ...",

  "restores          ",

  " ' ' ' ' ' ' '       '  ",

  " *",

"the          ",
  "- ",

  ";",
"ghostly   body",
  ":",
   "_",
  "( )",



  ".                      ...",

  "restores          ",

  " ' ' ' ' ' ' '       '  ",

  " *",

"the          ",
  "- ",

  ";",
"ghostly   body",
  ":",
   "_",
  "( )",



  ".                      ...",

  "restores          ",

  " ' ' ' ' ' ' '       '  ",

  " *",

"the          ",
  "- ",

  ";",
"ghostly   body",
  ":",
   "_",
  "( )",



  ".                      ...",

  "restores          ",

  " ' ' ' ' ' ' '       '  ",

  " *",

"the          ",
  "- ",

  ";",
"ghostly   body",
  ":",

];

let chaos = [
  " (  )",
  "#$@^@@^@%&@%@&",

  "************* ****** * *** * * * * * "
];

let sensing = [
  "star lit water", "taste of feeding rapture", "mouth of a veritable one"
];
// let silk = [
//   "silk", "birth", "shadow", "reflections", "beings", "water", "honey", "seasons", "days"
// ];

let silk = [
  "shadow", "exhume",  "reflection", "memory", "season", "materiality", "spiral", "truth", "history"
];

let universe = [
  "stars unseen", "bodies untold", "night nor day"
];

let undream = [
  'repeats', 'recites', 'remembers', 'forgets', 'simmers', 'exhumes'
]

let god = [
  'god', 'time', 'the womb', 'bodies'
]
let prophecy = [
  "message", "song", "mystery", "story", "riddle", "secret", "prayer",
];







async function setup() {

  createCanvas(windowWidth, windowHeight);
    myFont = await loadFont('GENSCO.otf');

  // myFont = await loadFont('Director-Regular.otf');
  textFont(myFont);
  background(255);
  textAlign(CENTER);
  textSize(14);

  story(scene);
}


function mouseClicked() {
  //everytime you click, you add white background with opacity 
  background(255, 200);
  scene++; // x= x+1
  if (scene > 22) {
    scene = 0;
  }
  story(scene);


}

function story(scene) {
  let time_passed = int(random(1000));
  let unit = random(gap);
  let blend = random(chaos);
  let sentence = "";
  let double = "";
  let second = "";

  if (scene == 0) {
    for (let i = 0; i < time_passed; i++) {
      text(unit, random(windowWidth), random(windowHeight));

    }
    background(255, 200);

    sentence = "sooner or later";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 1) {

    sentence = "the earth with its savour was spread";

    double = " endowed with the " +
      random(sensing);  

    text(sentence, random(100, 0.66 * windowWidth), random(0, windowHeight - 100));
    text(double, random(300, windowWidth - 500), random(windowHeight - 100, windowHeight - 200), 300);
 textWrap(WORD);

  }

  if (scene == 2) {
        sentence = "all the faces";
            triple = "sideways asleep";


    // sentence = "something " + random(lingers) + " to " + random(tell) + " you a " + random(message);

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(triple, random(200, windowWidth - 500), random(100, windowHeight - 200), 200);

    textWrap(WORD);
  }

  if (scene == 3) {
    sentence =
      "that gambling blur of silk" ;
      double = "birth's " + random(silk) ;
    text(sentence, random(40, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(double, random(100, 0.66 * windowWidth), random(0, windowHeight - 100));

    
    textWrap(WORD);
  }

  if (scene == 4) {
    sentence =
      "now, at the time" ;
      double= "all had become one world";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(double, random(500, windowWidth - 100), random(300, windowHeight - 100), 300);
    textWrap(WORD);
  }
  if (scene == 5) {
    double =
      "no " + random(universe) ;
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 6) {
    sentence = "neither male nor female";
    double = "beings reckoned as beings" ;
   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(double, random(200, windowWidth - 100), random(300, windowHeight - 100), 300);
    
    textWrap(WORD);
  }

  
 if (scene == 7) {
    sentence = "those beings";
   



    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
   
    textWrap(WORD);


  // if (scene == 7) {
  //   sentence = "the tendencies of " + random(ghosts) + " is to flash time in your face.";
  //   let s6;
  //   s6 = "it reverberates into your eyes, down a canal of veins";
  //   let s6_2;
  //   s6_2 = "the " + random(entities) + " of another realm enter your dreams.";



  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   text(s6, random(0, 0.66 * windowWidth), random(0, windowHeight - 100), 300);
  //   text(s6_2, random(100, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
  //   textWrap(WORD);

  }

  if (scene == 8) {
    sentence = "fallen from the shadow wings";
    double=" further from any dream"
    
    text(sentence, random(50, windowWidth - 500), random(50, windowHeight - 200), 300);
    text(double, random(100, windowWidth - 500), random(windowHeight - 200, windowHeight - 400), 300);

    textWrap(WORD);
  }

  if (scene == 9) {
    sentence = "an undream";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 10) {
    sentence = "how " + random(god) + " " + "returns to";

    double = "earth's temples"
    
    text(sentence, random(windowWidth - 500, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
    textWrap(WORD);

    text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);


  }
if (scene == 11) {
    for (let i = 0; i < time_passed; i++) {
              textSize(20);

      text(gap, random(windowWidth), random(windowHeight));

    }
         background(255, 200);

     

  }
 
  if (scene == 12) {
        textSize(20);

     sentence = "restores";
    text(sentence, random(50, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
     double = "the ghostly body";
    text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
;

    



  }

  if (scene == 13) {
            textSize(14);

    sentence = "breath's ruins";
    double =" echoes to silence"

    text(sentence, random(50, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);

    textWrap(WORD);


  }

  if (scene == 14) {
    sentence = "self-luminescence break into";
    double = "star-shaped constellations";

    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(double, random(100, 0.66 * windowWidth), random(windowHeight - 100, windowHeight - 200), 300);

    textWrap(WORD);

  }


  if (scene == 15) {
    sentence = "across every language's longing ";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 16) {
    sentence = "the wise innocence of prophecy";
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
  }

  if (scene == 17) {
    sentence = "recollects the mouth";
        double = "of";
        let ending;
        ending= "a fainted mooon"

    text(sentence, random(500, windowWidth - 500), random(100, windowHeight - 200), 300);
        text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);

            text(ending, random(200, windowWidth - 500), random(100, windowHeight - 200), 300);

    textWrap(WORD);
  }

  if (scene == 18) {
    sentence = "restores";
    double = "the ghostly body"
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
      background(255, 200);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);
      background(255, 200);

    textWrap(WORD);
  }

  if (scene == 19) {
   sentence = "restores";
    double = "the ghostly body"
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
      background(255, 200);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);

    textWrap(WORD);
  }

  
  if (scene == 20) {
   sentence = "restores";
    double = "the ghostly body"
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);

    textWrap(WORD);
  }

    if (scene == 21) {
   sentence = "now";
    double = "at that time"
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);

    textWrap(WORD);
  }
  // if (scene == 20) {
  //   sentence = "by a full circle,";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }



  // if (scene == 21) {
  //   sentence = ",the presence of a whole truth. ";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 22) {
  //   sentence = ",it makes your heart heavy, and afraid. a core mounded in stone shedded by a fire enclave";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 23) {
  //   sentence = " the narrative quest creates many reasons to get lost.";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 24) {
  //   sentence = " the nectarine pulp ripens under conditions of love. ";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 25) {
  //   sentence = "aligns justice with truth. intimacy with courage.";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 26) {
  //   sentence = "i manage the silkened translucent thread between a voyreustic tendency of vulnerability and complete privacy. ";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }

  // if (scene == 27) {

  // }



  // if (scene == 28) {
  //   sentence = " the gaps between our standards of completeness and our lives forever largening to accommodate";
  //   let s27 = "a humaness punctuated by restlessness.";
  //   text(s27, random(100, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
  //   textWrap(WORD);

  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);


  // }


  // if (scene == 29) {
  //   for (let i = 0; i < time_passed; i++) {
  //     text(blend, random(windowWidth), random(windowHeight));

  //   }

  // }




  // if (scene == 30) {
  //   sentence = "rearranging the need for chaos";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);

  // }

  // if (scene == 31) {
  //   for (let i = 0; i < time_passed; i++) {
  //     text(blend, random(windowWidth), random(windowHeight));

  //   }
  //   sentence = "rearranging the need for chaos";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);

  // }

  // if (scene == 32) {
  //   sentence = " for immersion into a time-space continuum that breathes into you";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);

  // }

  // if (scene == 33) {
  //   sentence = "alternately, you slow down and open, the next iteration is taking care of you";
  //   text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
  //   textWrap(WORD);
  // }


  //print it the sentence out


  console.log(sentence);
}


