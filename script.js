const chargement = document.getElementById('chargement');
const erreur = document.getElementById('erreur');
const classement = document.getElementById('classement');

//APPEL DE L'API
async function chargerClassement() {
  const reponse = await fetch(
    'https://free-api-live-football-data.p.rapidapi.com/football-get-standing-all?leagueid=42',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '09b4b21589mshbe435c0e8f5b26bp1e0f30jsn2ea26b500df8',
        'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
      }
    }
  );
  const data = await reponse.json();
  console.log(data);
  const equipe = data.response.standing;
if (!equipe || equipe.length === 0){
    return;
}
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

chargement.setAttribute('hidden', '');
classement.removeAttribute('hidden');
}
chargerClassement();

