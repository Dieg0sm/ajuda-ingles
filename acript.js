const palavrasIniciante = [
 "Hello: olá",
 "Goodbye: adeus",
 "Cat: gato",
 "Dog: cachorro",
 "Apple: maçã",
 "Book: livro",
 "Car: carro",
 "Chair: cadeira",
 "Clock: relógio",
 "Coffee: café",
 "Computer: computador",
 "Door: porta",
 "Elephant: elefante",
 "Fish: peixe",
 "Flower: flor",
 "Food: comida",
 "Guitar: guitarra",
 "Hat: chapéu",
 "House: casa",
 "Juice: suco",
 "Key: chave",
 "Knife: faca",
 "Lamp: lâmpada",
 "Milk: leite",
 "Movie: filme",
 "Music: música",
 "Phone: telefone",
 "Shoe: sapato",
 "Table: mesa",
 "Water: água"
];

const palavrasIntermediario = [
 "Advertise: anunciar",
 "Avenue: avenida",
 "Budget: orçamento",
 "Candidate: candidato",
 "Championship: campeonato",
 "Conference: conferência",
 "Debate: debate",
 "Determine: determinar",
 "Election: eleição",
 "Environment: meio ambiente",
 "Evidence: evidência",
 "Exhibit: exposição",
 "Fascinating: fascinante",
 "Gesture: gesto",
 "Habit: hábito",
 "Industry: indústria",
 "Influence: influência",
 "Intention: intenção",
 "Journalist: jornalista",
 "Literature: literatura",
 "Mysterious: misterioso",
 "Necessary: necessário",
 "Opportunity: oportunidade",
 "Participate: participar",
 "Qualify: qualificar",
 "Recommend: recomendar",
 "Satisfy: satisfazer",
 "Statistics: estatísticas",
 "Theater: teatro",
 "Versatile: versátil"
];


const palavrasDificil = [
 "Accommodate: acomodar",
 "Acquiesce: aquiescer",
 "Benevolent: benevolente",
 "Capricious: caprichoso",
 "Conundrum: enigma",
 "Disingenuous: dissimulado",
 "Egregious: flagrante",
 "Equanimity: equanimidade",
 "Exacerbate: exacerbar",
 "Fastidious: exigente",
 "Gregarious: sociável",
 "Hackneyed: banal",
 "Incessant: incessante",
 "Inevitable: inevitável",
 "Insidious: insidioso",
 "Lackadaisical: desleixado",
 "Malfeasance: má conduta",
 "Mendacious: mentiroso",
 "Nefarious: nefasto",
 "Obsequious: servil",
 "Perfunctory: perfunctório",
 "Pernicious: pernicioso",
 "Philanthropy: filantropia",
 "Precipitous: precipitado",
 "Proclivity: propensão",
 "Sagacious: sagaz",
 "Surreptitious: sorrateiro",
 "Tenuous: tênue",
 "Ubiquitous: ubíquo",
 "Voracious: voraz"
];


const palavrasElement = document
 .querySelectorAll(".palavra");
const botaoElement = document
 .querySelectorAll(".botao");

function mostrarPalavra() {
 const nivel = Math.floor(Math
  .random() * 3);
 let palavra;
 if (nivel === 0) {
  palavra = palavrasIniciante[Math
   .floor(Math.random() *
    palavrasIniciante.length)];
 } else if (nivel === 1) {
  palavra = palavrasIntermediario[Math
   .floor(Math.random() *
    palavrasIntermediario.length)];
 } else {
  palavra = palavrasDificil[Math.floor(
   Math.random() * palavrasDificil
   .length)];
 }
 const card = this.parentNode;
 const titulo = card.querySelector(
  ".titulo").textContent;
 if (titulo === "Iniciante") {
  card.style.backgroundColor =
   "#76bcad";
  palavra = palavrasIniciante[Math
   .floor(Math.random() *
    palavrasIniciante.length)];
 } else if (titulo ===
  "Intermediário") {
  card.style.backgroundColor =
   "#f7bc05";
  palavra = palavrasIntermediario[Math
   .floor(Math.random() *
    palavrasIntermediario.length)];
 } else {
  card.style.backgroundColor =
   "#fa2e59";
  palavra = palavrasDificil[Math.floor(
   Math.random() * palavrasDificil
   .length)];
 }
 card.querySelector(".palavra")
  .textContent = palavra;
}

botaoElement.forEach((botao) => {
 botao.addEventListener("click",
  mostrarPalavra);
});
