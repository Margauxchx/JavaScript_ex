const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Les livres ont ils tous été empruntés au moins une fois ?")

function rented (){
  let i = 0;
  while (i < books.length){
    if (books[i].rented == 0){
      return (concole.log("non"));
    }
  }
  i++;
}
console.log("oui");

function max_rented(books) {
  let i = 0;
  let rentnumber = 0;
  let name = ""

  while (i < books.length) {
    if (books[i].rented > rentnumber) {
      rentnumber = books[i].rented;
      name = books[i].title;
    }
    i++;
  }
   console.log("le livre le plus emprunté est:", name) 
}

max_rented(books)

function min_rented(books){
  let i = 1;
  let rentnumber = books[0].rented;
  let name = "";
  while (i < books.length){
    if (books[i].rented < rentnumber){
      rentnumber = books[i].rented;
      name = books[i].title;
    }
  i++;
  }
  console.log("Le livre le moins emprunté est:", name)
}

min_rented(books);

books.forEach(book =>{
    if(book.id === 873495){
        console.log(`Le livre avec l'ID 873495 se nomme : "${book.title}"`);
    }
});
  
let index = books.findIndex(book => book.id === 133712);
books.splice(index,1)
console.log("Le livre avec l'id 133712 a été supprimé, tape 'books' dans la console pour vérifier");


function tri(books){
  let i = 0;
  let tempo;
  while (i + 1 < books.length){
    if (books[i].title > books[i + 1].title){
      tempo = books[i];
      books[i] = books[i + 1];
      books[i + 1] = tempo;
      i = -1;
    }
    i++;
  }
  console.log(books);
}
console.log("Les livres triés par ordre alphabétique")
tri(books);
