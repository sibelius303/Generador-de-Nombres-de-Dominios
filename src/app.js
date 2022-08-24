/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var com = [".com", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let l = 0; l < noun.length; l++) {
      for (let t = 0; t < com.length; t++) {
        var resul = pronoun[i] + adj[j] + noun[l] + com[t];
        console.log(pronoun[i] + adj[j] + noun[l] + com[t]);
      }
    }
  }
}

var dominio = document.getElementById("dominio");
dominio.innerHTML = resul;
