import { chargerClassementLDC } from "./API.js";
import { chargerClassementPL } from "./API.js";

const chargement = document.getElementById('chargement');
const classement = document.getElementById('classement');
const btn = document.getElementById('ldc');
const div = document.getElementById('retour');
const pl = document.getElementById('PL');



async function retourEnArriere(){
  classement.setAttribute('hidden', '');
  div.setAttribute('hidden', '');
  btn.removeAttribute('hidden');
  chargement.removeAttribute('hidden');
  pl.removeAttribute('hidden');
}
//APPEL DE L'API

function afficherTab(equipe){
//CREATION DU TABLEAU QU'ON INJECTE DANS L'HTLM (THEAD POUR L'EN-TÊTE)
classement.innerHTML = `
  <thead>
    <tr>
      <th>#</th>
      <th>Équipe</th>
      <th>MJ</th>
      <th>V</th>
      <th>N</th>
      <th>D</th>
      <th>Pts</th>
    </tr>
  </thead>
`;

const tbody = document.createElement('tbody');

equipe.forEach(function(equipe) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${equipe.idx}</td>
    <td>${equipe.name}</td>
    <td>${equipe.played}</td>
    <td>${equipe.wins}</td>
    <td>${equipe.draws}</td>
    <td>${equipe.losses}</td>
    <td><strong>${equipe.pts}</strong></td>
  `;
  tbody.appendChild(tr);
});

classement.appendChild(tbody);

div.innerHTML = `
    <button id = "btnRetour">Retour</button>
    `;
const btn2 = document.getElementById('btnRetour');
div.removeAttribute('hidden');
chargement.setAttribute('hidden', '');
btn.setAttribute('hidden', '');
classement.removeAttribute('hidden');

btn2.addEventListener('click', retourEnArriere);

}

btn.addEventListener('click', async () => {
    // On appelle la fonction de l'API.js
    const donnees = await chargerClassementLDC(); 
    
    // Une fois qu'on a les données, on lance la création du tableau
    if (donnees) {
        afficherTab(donnees);
    }
});


//------------------------------------------------------------------------------------------------------------------------------------
//                                                TAB PL
//------------------------------------------------------------------------------------------------------------------------------------

function afficherTabPL(equipe){
//CREATION DU TABLEAU QU'ON INJECTE DANS L'HTLM (THEAD POUR L'EN-TÊTE)
classement.innerHTML = `
  <thead>
    <tr>
      <th>#</th>
      <th>Équipe</th>
      <th>MJ</th>
      <th>V</th>
      <th>N</th>
      <th>D</th>
      <th>Pts</th>
    </tr>
  </thead>
`;

const tbody = document.createElement('tbody');

equipe.forEach(function(equipe) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${equipe.idx}</td>
    <td>${equipe.name}</td>
    <td>${equipe.played}</td>
    <td>${equipe.wins}</td>
    <td>${equipe.draws}</td>
    <td>${equipe.losses}</td>
    <td><strong>${equipe.pts}</strong></td>
  `;
  tbody.appendChild(tr);
});

classement.appendChild(tbody);

div.innerHTML = `
    <button id = "btnRetour">Retour</button>
    `;
const btn3 = document.getElementById('btnRetour');
div.removeAttribute('hidden');
chargement.setAttribute('hidden', '');
btn.setAttribute('hidden', '');
pl.setAttribute('hidden', '');
classement.removeAttribute('hidden');

btn3.addEventListener('click', retourEnArriere);

}

pl.addEventListener('click', async () => {
    // On appelle la fonction de l'API.js
    const donnees = await chargerClassementPL(); 
    
    // Une fois qu'on a les données, on lance la création du tableau
    if (donnees) {
        afficherTabPL(donnees);
    }
});