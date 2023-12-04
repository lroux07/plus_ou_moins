let p = document.querySelector("#p");
let ca = Math.floor(Math.random() * 100);
let c = 0;

while(c < 1) {
  let q = parseInt(prompt("Entrez un nombre entre 0 et 100 jusqu'à trouver le bon nombre"));
  if(q == ca) {
    c++
  } else if(q < ca) {
    alert("C'est plus!");
  } else if(q > ca) {
    alert("C'est moins!");
  }
}

p.textContent="Bonne réponse, " + ca;