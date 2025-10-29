// liste de competonces
let list =["C1","C1","C3","C3","C6","C4","C9","C5","C5","C6"];
// lacompetonce a cherche
 let code ="C1";
// compteur de la comepetence
 let compteur = 0;
// for pour calceler le noubr de fois de code 
 for (let i = 0; i< list.length ; i++){
    if (code === list[i]){
        compteur++ ;
    }
 
}
console.log(" # " + code + " repeat " + compteur);
