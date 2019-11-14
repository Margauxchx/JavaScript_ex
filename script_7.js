question = prompt("Pose ta question (et choisi la bien j'ai pas ton temps)")

// Si "?" a la fin de la question

if (question.substr(-1) == "?"){
  console.log("Ouais, ouais ...")
}

// Si le message est vide

else if (question == ""){
  console.log("T'es en PLS ou quoi ?")
}

// Si la phrase est en majuscule

else if (question === question.toUpperCase()){
  console.log("Calme toi mon pote")
}

// Si la phrase contient fortnite

else if (question.includes("fortnite")){
  console.log("Chaud d'une partie !")
}

// Sinon 

else {
  console.log("Je m'en balek poto")
}
