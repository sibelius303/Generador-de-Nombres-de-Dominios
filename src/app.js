/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
var pronoun = ["the", "our", "we", "el"];
var adj = ["great", "big", "power", "gran"];
var noun = ["jogger", "racoon", "lion", "boleta"];
var com = [".com", ".net", ".org", ".blogg"];
var pais = [".es", ".bra", ".ve", ".co"];

var pronounRandom = Math.floor(Math.random() * pronoun.length);
var pronounDato = pronoun[pronounRandom];

var adjRandom = Math.floor(Math.random() * adj.length);
var adjDato = adj[adjRandom];

var nounRandom = Math.floor(Math.random() * noun.length);
var nounDato = noun[nounRandom];

var comRandom = Math.floor(Math.random() * com.length);
var comDato = com[comRandom];

var paisRandom = Math.floor(Math.random() * pais.length);
var paisDato = pais[paisRandom];

var resul = "www." + pronounDato + adjDato + nounDato + comDato + paisDato;

var dominio = document.getElementById("dominio");
dominio.innerHTML = resul;
