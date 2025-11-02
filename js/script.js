const boutons = document.querySelectorAll("button");
const para = document.querySelector("#para");
boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valeur = btn.value;
    if (valeur !== undefined && valeur !== "") {
      if (valeur === "=") {
        para.value = eval(para.value);
      } else if (valeur === "C") {
        para.value = "";
      } else {
        para.value += valeur;
      }
    }

    para.textContent = para.value;
  });
});
document.getElementById("egal").addEventListener("click", () => {
  para.value = eval(para.value);
});

document.getElementById("clear").addEventListener("click", () => {
  para.value = "";
});
