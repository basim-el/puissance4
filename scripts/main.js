class Jeu {
  constructor(largeur, hauteur) {
    this.player = 1;
    this.grille = new Grille(largeur, hauteur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.score = { joueur1: 0, joueur2: 0 };
    this.coupsJoues = [];
    this.afficherGrille();
  }

  afficherGrille() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const grilleHtml = document.createElement("div");
    grilleHtml.classList.add("grille");

    for (let colonne = 0; colonne < this.grille.largeur; colonne++) {
      const ligneHtml = document.createElement("div");
      ligneHtml.classList.add("ligne");

      for (let ligne = 0; ligne < this.grille.hauteur; ligne++) {
        const caseHtml = document.createElement("div");
        caseHtml.classList.add("case");
        caseHtml.dataset.colonne = colonne;
        const pion = this.grille.grille[ligne][colonne];

        if (pion.getStatus() == 1) {
          caseHtml.classList.add("rouge");
        } else if (pion.getStatus() == 2) {
          caseHtml.classList.add("jaune");
        }
        caseHtml.addEventListener("click", () => {
          this.jouer(colonne);
        });
        ligneHtml.appendChild(caseHtml);
      }
      grilleHtml.appendChild(ligneHtml);
    }

    let text = document.createElement("div");
    text.classList.add("text");
    container.appendChild(text);
    text.classList.add("text");
    if (this.player == 1) {
      text.innerHTML = "Autour du joueur rouge";
    } else if (this.player == 2) {
      text.innerHTML = "Autour du joueur jaune ";
    }

    const scoreHtml = document.createElement("div");
    scoreHtml.classList.add("score");
    scoreHtml.innerHTML = `Score joueur 1 = ${this.score.joueur1} ||| Score joueur 2 = ${this.score.joueur2}`;
    container.appendChild(scoreHtml);

    container.appendChild(grilleHtml);
    const button = document.createElement("button");
    button.classList.add("button");
    button.type = "submit";
    button.textContent = "Reset jeu";
    container.appendChild(button);

    const test = document.createElement("button");
    test.classList.add("button");
    test.type = "submit";
    test.textContent = "Reset le score";
    container.appendChild(test);

    const undoButton = document.createElement("button");
    undoButton.classList.add("button");
    undoButton.type = "submit";
    undoButton.textContent = "Annuler le dernier coup";
    container.appendChild(undoButton);

    button.addEventListener("click", () => {
      this.reset();
    });

    test.addEventListener("click", () => {
      this.resetscore();
    });

    undoButton.addEventListener("click", () => {
      this.annulerDernierCoup();
    });
  }

  reset() {
    this.grille = new Grille(this.hauteur, this.largeur);
    this.player = 1;
    this.afficherGrille();
  }

  resetscore() {
    this.score = { joueur1: 0, joueur2: 0 };
    this.afficherGrille();
  }

  annulerDernierCoup() {}

  jouer(colonne) {
    const pionDuHaut = this.grille.grille[0][colonne];
    if (pionDuHaut.getStatus() != 0) {
      return;
    }

    let y = 0;

    while (
      y + 1 < this.grille.hauteur &&
      this.grille.grille[y + 1][colonne].getStatus() == 0
    ) {
      y++;
    }
    this.grille.grille[y][colonne].setStatus(this.player);

    if (this.player == 1) {
      this.player = 2;
    } else if (this.player == 2) {
      this.player = 1;
    }

    if (this.checkwin()) {
      setTimeout(() => {
        alert(`Joueur ${this.player} a gagné !`);
        if (this.player == 1) {
          this.score.joueur1++;
        } else {
          this.score.joueur2++;
        }
        this.reset();
      }, 50);
    } else if (this.checknul()) {
      setTimeout(() => {
        alert("Match nul !");
        this.reset();
      }, 50);
    }
    this.afficherGrille();
  }

  checkwin() {
    for (let i = 0; i < this.grille.largeur; i++) {
      for (let j = 0; j < this.grille.hauteur - 3; j++) {
        if (
          this.grille.grille[j][i].getStatus() !== 0 &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 1][i].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 2][i].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 3][i].getStatus()
        ) {
          return true;
        }
      }
    }

    for (let i = 0; i < this.grille.largeur - 3; i++) {
      for (let j = 0; j < this.grille.hauteur; j++) {
        if (
          this.grille.grille[j][i].getStatus() !== 0 &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j][i + 1].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j][i + 2].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j][i + 3].getStatus()
        ) {
          return true;
        }
      }
    }

    for (let i = 0; i < this.grille.largeur - 3; i++) {
      for (let j = 0; j < this.grille.hauteur - 3; j++) {
        if (
          this.grille.grille[j][i].getStatus() !== 0 &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 1][i + 1].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 2][i + 2].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j + 3][i + 3].getStatus()
        ) {
          return true;
        }
      }
    }
    for (let i = 0; i < this.grille.largeur - 3; i++) {
      for (let j = this.grille.hauteur - 1; j - 3 >= 0; j--) {
        if (
          this.grille.grille[j][i].getStatus() !== 0 &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j - 1][i + 1].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j - 2][i + 2].getStatus() &&
          this.grille.grille[j][i].getStatus() ===
            this.grille.grille[j - 3][i + 3].getStatus()
        ) {
          return true;
        }
      }
    }
    return false;
  }

  checknul() {
    for (let i = 0; i < this.grille.largeur; i++) {
      if (this.grille.grille[0][i].getStatus() == 0) {
        return false;
      }
    }
    return true;
  }
}

class Pion {
  #status = 0;

  getStatus() {
    return this.#status;
  }

  setStatus(status) {
    this.#status = status;
  }
}

class Grille {
  constructor(largeur = 7, hauteur = 6) {
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.grille = Array.from({ length: this.hauteur }, () =>
      Array.from({ length: this.largeur }, () => new Pion())
    );
  }
}

let jeuea = new Jeu();
