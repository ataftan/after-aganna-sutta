let tokenText;
let randomSensingEntry;
let randomSensingWords;
let randomSensingCharacters;
let randomSilkEntry;
let randomSilkWords;
let randomSilkCharacters;
let randomUniverseEntry;
let randomUniverseWords;
let randomUniverseCharacters;
let randomGodEntry;
let randomGodWords;
let randomGodCharacters;

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

// previous p5js strings

// let sensing = [
//   "star lit water", "taste of feeding rapture", "mouth of a veritable one"
// ];
// let silk = [
//   "silk", "birth", "shadow", "reflections", "beings", "water", "honey", "seasons", "days"
// ];

// let silk = [
//   "shadow", "exhume",  "reflection", "memory", "season", "materiality", "spiral", "truth", "history"
// ];

// let universe = [
//   "stars unseen", "bodies untold", "night nor day"
// ];

// let undream = [
//   'repeats', 'recites', 'remembers', 'forgets', 'simmers', 'exhumes'
// ]

// let god = [
//   'god', 'time', 'the womb', 'bodies'
// ]
// let prophecy = [
//   "message", "song", "mystery", "story", "riddle", "secret", "prayer",
// ];

let sensing = [];
let silk = [];
let universe = [];
let undream = [];
let god = [];
let prophecy = [];
let sentence = [];

async function setup() {
  tokenText = await loadJSON('tokens.json');
  //

  // introducting json strings 

  // extracts entire string
  sensing = tokenText.word_banks.sensing.map(entry => entry.original);
    sentence = tokenText.fixed_lines.sentence.map(entry => entry.original);
    sentenceWords = tokenText.fixed_lines.sentence.map(entry => entry.words); 
console.log(sentence);
console.log(sentence[0]);
  // extras random entry
  randomSensingEntry = random(tokenText.word_banks.sensing);
  // extras random word from in the entry
  randomSensingWords = randomSensingEntry.words;
  // extracts random character from the word
  randomSensingCharacters = randomSensingEntry.characters;
  //

  // extracts entire string
  silk = tokenText.word_banks.silk.map(entry => entry.original);
  // extras random entry
  randomSilkEntry = random(tokenText.word_banks.silk);
  // extras random word from in the entry
  randomSilkWords = randomSilkEntry.words;
  // extracts random character from the word
  randomSilkCharacters = randomSilkEntry.characters;
  //

  universe = tokenText.word_banks.universe.map(entry => entry.original);
// extracts random entry
randomUniverseEntry = random(tokenText.word_banks.universe);
// extracts words from the entry
randomUniverseWords = randomUniverseEntry.words;
// extracts characters from the entry
randomUniverseCharacters = randomUniverseEntry.characters;
// 

god = tokenText.word_banks.god.map(entry => entry.original);
// extracts random entry
randomGodEntry = random(tokenText.word_banks.god);
// extracts words from the entry
randomGodWords = randomGodEntry.words;
// extracts characters from the entry
randomGodCharacters = randomGodEntry.characters;
// 


  createCanvas(windowWidth, windowHeight);
  myFont = await loadFont('GENSCO.otf');

  // myFont = await loadFont('Director-Regular.otf');
  textFont(myFont);
  background(255);
  textAlign(CENTER);
  textSize(14);

  story(scene);
  console.log(randomSensingWords);
  console.log(randomSensingCharacters);

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

function scatteringWords(words) {
  
     let marginY = 100;
    let areaWidth = 250;
    let areaHeight = 150;

    let startX = random(0, width - areaWidth);
    let startY = random(marginY + areaHeight / 2, height - marginY - areaHeight / 2);

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      let x = startX + (i * areaWidth / words.length);
      let y = startY + random(-areaHeight / 2, areaHeight / 2);
      let charX = x;
      for (let j = 0; j < word.length; j++) {

        // let character = word[j];

        // let charX = x + random(-10, 10);
        // let charY = y + random(-10, 10);
        let character = word[j];

        let charY = y + random(-2, 2);
        let spacing = textWidth(character) + random(2, 6);
            
        text(character, charX, charY);

        charX += spacing;
      }
    }
}

function scatteringLines(words) {
  //  fill(150)
  let marginY = 100;
    let areaWidth = 250;
    let areaHeight = 150;

    let startX = random(0, width - areaWidth);
    let startY = random(marginY + areaHeight / 2, height - marginY - areaHeight / 2);
    // let startY = random(0, height - areaHeight);

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      let x = startX + (i * areaWidth / words.length);
      let y = startY + random(-areaHeight / 2, areaHeight / 2);
      let charX = x;
      for (let j = 0; j < word.length; j++) {

        // let character = word[j];

        // let charX = x + random(-10, 10);
        // let charY = y + random(-10, 10);
        let character = word[j];

        let charY = y + random(-2, 3);
        let spacing = textWidth(character) + random(1, 2);
            
        text(character, charX, charY);

        charX += spacing;
      }
    }
          fill(0);

}
function scatteringUpright(words) {
  fill(0);
  let marginY = 100;
    let areaWidth = 250;
    let areaHeight = 150;

    let startX = random(0, width - areaWidth);
    let startY = random(marginY + areaHeight / 2, height - marginY - areaHeight / 2);
    // let startY = random(0, height - areaHeight);

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      let x = startX + (i * areaWidth / words.length);
      let y = startY + random(-areaHeight / 2, areaHeight / 2);
      let charX = x;
      for (let j = 0; j < word.length; j++) {

        // let character = word[j];

        // let charX = x + random(-10, 10);
        // let charY = y + random(-10, 10);
        let character = word[j];

        let charY = y + random(-0.5, 1);
let spacing = textWidth(character) * random(1.5, 2.5);
        // let spacing = textWidth(character) + random(-1, 1);
        text(character, charX, charY);

        charX += spacing;
      }
    }
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
    // scatteringLines(sentence[0]);
// scatteringLines(sentenceWords[0]);
scatteringUpright(sentenceWords[0]);

    sentence = "sooner or later";
scatteringLines(sentence.split(" "));
    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);

    // textWrap(WORD);

  }

  if (scene == 1) {

    sentence = "the earth with its savour was spread";
scatteringLines(sentenceWords[1]);

    // // double = " endowed with the " +
    // //   random(sensing);  

    double = " endowed with the ";
    scatteringLines(double);
scatteringUpright(sentenceWords[2]);

    // text(sentence, random(100, 0.66 * windowWidth), random(0, windowHeight - 100));
    // text(double, random(300, windowWidth - 500), random(windowHeight - 100, windowHeight - 200), 300);
        scatteringWords(randomSensingWords);

    // text(random(randomSensingWords), random(width), random(height));



    textWrap(WORD);

  }

  if (scene == 2) {
    sentence = "all the faces";
    triple = "sideways asleep";

    scatteringLines(sentence);
        scatteringLines(triple);

scatteringUpright(sentenceWords[3]);
scatteringUpright(sentenceWords[4]);


    // sentence = "something " + random(lingers) + " to " + random(tell) + " you a " + random(message);

    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    // text(triple, random(200, windowWidth - 500), random(100, windowHeight - 200), 200);

    textWrap(WORD);
  }

  if (scene == 3) {
    sentence =
      "that gambling blur of silk";
    double = "birth's ";
        scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[5]);
scatteringUpright(sentenceWords[6]);


    // text(sentence, random(40, windowWidth - 500), random(100, windowHeight - 200), 300);
    // text(double, random(100, 0.66 * windowWidth), random(0, windowHeight - 100));
            scatteringWords(randomSilkWords);



    textWrap(WORD);
  }

  if (scene == 4) {
    sentence =
      "now, at the time";
    double = "all had become one world";
        scatteringLines(sentence);
    scatteringLines(double);
scatteringUpright(sentenceWords[7]);
scatteringUpright(sentenceWords[8]);


    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    // text(double, random(500, windowWidth - 100), random(300, windowHeight - 100), 300);
    textWrap(WORD);
  }
  if (scene == 5) {
    double =
      "no " ;
    scatteringLines(double);
    scatteringUpright(sentenceWords[9]);

    // text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    scatteringWords(randomUniverseWords);
    textWrap(WORD);
  }

  if (scene == 6) {
    sentence = "neither male nor female";
    double = "beings reckoned as beings";
     scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[10]);
scatteringUpright(sentenceWords[11]);

    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    // text(double, random(200, windowWidth - 100), random(300, windowHeight - 100), 300);

    textWrap(WORD);
  }


  if (scene == 7) {
    sentence = "those beings";

 scatteringLines(sentence);

scatteringUpright(sentenceWords[12]);

    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);

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
    double = " further from any dream"
 scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[13]);
scatteringUpright(sentenceWords[14]);

    // text(sentence, random(50, windowWidth - 500), random(50, windowHeight - 200), 300);
    // text(double, random(100, windowWidth - 500), random(windowHeight - 200, windowHeight - 400), 300);

    textWrap(WORD);
  }

  if (scene == 9) {
    sentence = "an undream";
     scatteringLines(sentence);
     scatteringUpright(sentenceWords[14]);

    // text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);

  }

  if (scene == 10) {
    sentence = "how " + " " + "returns to";

    double = "earth's temples"
 scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[15]);
scatteringUpright(sentenceWords[16]);

    // text(sentence, random(windowWidth - 500, 0.66 * windowWidth), random(windowHeight - 200, windowHeight - 400), 300);
    // textWrap(WORD);

    // text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    scatteringWords(randomGodWords);
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
    // text(sentence, random(50, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
    double = "the ghostly body";
     scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[17]);
scatteringUpright(sentenceWords[18]);

    // text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    textWrap(WORD);
    ;





  }

  if (scene == 13) {
    textSize(14);

    sentence = "breath's ruins";
    double = " echoes to silence"
 scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[19]);
scatteringUpright(sentenceWords[20]);

    // text(sentence, random(50, windowWidth - 500), random(100, windowHeight - 200), 300);
    // text(double, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);

    textWrap(WORD);


  }

  if (scene == 14) {
    sentence = "self-luminescence break into";
    double = "star-shaped constellations";
 scatteringLines(sentence);
    scatteringLines(double);
    scatteringUpright(sentenceWords[21]);
scatteringUpright(sentenceWords[22]);

    textWrap(WORD);

  }


  if (scene == 15) {
    sentence = "across every language's longing ";
     scatteringLines(sentence);
         scatteringUpright(sentenceWords[23]);

    textWrap(WORD);

  }

  if (scene == 16) {
    sentence = "the wise innocence of prophecy";
     scatteringLines(sentence);
    scatteringUpright(sentenceWords[24]);
    textWrap(WORD);
  }

  if (scene == 17) {
    sentence = "recollects the mouth";
    double = "of";
    let ending;
    ending = "a fainted mooon"
 scatteringLines(sentence);
    scatteringLines(double);
     scatteringLines(ending);
        scatteringUpright(sentenceWords[25]);
            scatteringUpright(sentenceWords[26]);


    textWrap(WORD);
  }

  if (scene == 18) {
    sentence = "restores";
    double = "the ghostly body";
     scatteringLines(sentence);
    scatteringLines(double);
        scatteringUpright(sentenceWords[27]);

    background(255, 200);
        scatteringUpright(sentenceWords[28]);

    background(255, 200);

    textWrap(WORD);
  }

  if (scene == 19) {
    sentence = "restores";
    double = "the ghostly body"
     scatteringLines(sentence);
    scatteringLines(double);
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    background(255, 200);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);

    textWrap(WORD);
  }


  if (scene == 20) {
    sentence = "restores";
    double = "the ghostly body"
     scatteringLines(sentence);
    scatteringLines(double);
    text(sentence, random(100, windowWidth - 500), random(100, windowHeight - 200), 300);
    text(double, random(200, windowWidth - 500), random(200, windowHeight - 200), 300);

    textWrap(WORD);
  }

  if (scene == 21) {
    sentence = "now";
    double = "at that time"
     scatteringLines(sentence);
    scatteringLines(double);
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


