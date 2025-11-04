const boutons = document.querySelectorAll("button");
const para = document.querySelector("#para");
para.valeur =""
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valeur = btn.value;
    
    if (valeur !== undefined && valeur !== "") {
      if (valeur === "=") {
        para.valeur = eval(para.valeur);
        para.textContent = para.valeur;
      } else if (valeur === "C") {
        para.valeur = "";
        para.textContent = para.valeur;
      } else {
        para.valeur += valeur;
        para.textContent = para.valeur;
      }
    }
  });
});
document.getElementById("egal").addEventListener("click", () => {
  para.valeur = eval(para.valeur);
});
document.getElementById("clear").addEventListener("click", () => {
  para.valeur = "";
});
