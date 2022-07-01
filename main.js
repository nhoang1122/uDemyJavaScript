//CODING CHALLENGE #3//

//TEST ONE//

let dolphinScore = (96 + 108 + 89) / 3;
let koalaScore = (88 + 91 + 110) / 3;

if (dolphinScore > koalaScore) {
    console.log(`Team Dolphin is WINNER WINNER with a score of ${dolphinScore}`);
} else if (koalaScore > dolphinScore) {
    console.log(`Team Koala is WINNER WINNER with a score of ${koalaScore}`);
} else if (koalaScore === dolphinScore) {
    console.log(`WE HAVE A......DRAW! boo`)
} else {
    console.log('ERROR ERROR ERROR')
};

//TEST TWO//

let dolphinScore2 = (97 + 112 + 89) / 3;
let koalaScore2 = (109 + 95 + 123) / 3;

if (dolphinScore2 > koalaScore2 && dolphinScore2 > 100) {
    console.log(`Team Dolphin is WINNER WINNER with a score of ${dolphinScore2}`);
} else if (koalaScore2 > dolphinScore2 && koalaScore2 > 100) {
    console.log(`Team Koala is WINNER WINNER with a score of ${koalaScore2}`);
} else if (koalaScore2 === dolphinScore2) {
    console.log(`TIE TIE TIE`)
} else {
    console.log(`SCORES NOT GOOD ENOUGH`)
}

//TEST THREEE/

let dolphinScore3 = (97 + 112 + 101) / 3;
let koalaScore3 = (109+95+106) / 3;

if (dolphinScore3 > koalaScore3 && dolphinScore3 > 100) {
    console.log(`Team Dolphin is WINNER WINNER with a score of ${dolphinScore3}`);
} else if (koalaScore3 > dolphinScore3 && koalaScore3 > 100) {
    console.log(`Team Koala is WINNER WINNER with a score of ${koalaScore3}`);
} else if (koalaScore3 === dolphinScore3 && dolphinScore3 > 100) {
    console.log(`TIE TIE TIE`)
} else {
    console.log(`SCORES NOT GOOD ENOUGH`)
}


