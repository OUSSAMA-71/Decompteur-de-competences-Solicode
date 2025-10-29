listcomp = [
    { nom : "HTML",options: ["C1","C2","C3","C4"], code :"C1" },
    { nom : "CSS" ,options: ["C1","C2","C3","C4"], code :"C2" },
    { nom : "JAVA",options: ["C1","C2","C3","C4"], code :"C3" },
    { nom : "JS"  ,options: ["C1","C2","C3","C4"], code :"C4" },
];

let score = 0;

for ( let i = 0 ; i < listcomp.length ; i++ ) {
  let question = `what is the code of  ${ listcomp[i].nom } ? \n`;

  for ( let y = 0 ; y < listcomp[i].options.length ; y++ ) {
    question  += `${ y + 1 }. ${ listcomp[i].options[y] } \n` ;
  }
  
  let answer = prompt ( question ) ;

  if ( answer === listcomp[i].code ) {
  score++ ;
  }
}
 console.log ( "Your Score is " + score + " / 4" ) ;


