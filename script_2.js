// Affiche le factoriel

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let n = number - 1;

if (number == 0){
	number =1;
}

while(n>0){
	number = number*n;
	n--;
}

console.log(`Le résultat est : ${number}`);