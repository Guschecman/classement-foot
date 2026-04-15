export async function chargerClassementLDC() {
  try {
    const reponse = await fetch(
      'https://free-api-live-football-data.p.rapidapi.com/football-get-standing-all?leagueid=42',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '09b4b21589mshbe435c0e8f5b26bp1e0f30jsn2ea26b500df8', // Attention à ne pas partager votre clé publique ;)
          'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
        }
      }
    );
    
    const data = await reponse.json();
    
    // On extrait le tableau des équipes
    const equipe = data.response.standing;
    
    // TRÈS IMPORTANT : On renvoie la donnée pour que script.js puisse l'utiliser
    return equipe; 

  } catch (erreur) {
    console.error("Erreur lors de l'appel API :", erreur);
  }
}

export async function chargerClassementPL() {
  try {
    const reponse = await fetch(
      'https://free-api-live-football-data.p.rapidapi.com/football-get-standing-all?leagueid=47',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '09b4b21589mshbe435c0e8f5b26bp1e0f30jsn2ea26b500df8', // Attention à ne pas partager votre clé publique ;)
          'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
        }
      }
    );
    
    const data = await reponse.json();
    
    // On extrait le tableau des équipes
    const equipePL = data.response.standing;
    
    // TRÈS IMPORTANT : On renvoie la donnée pour que script.js puisse l'utiliser
    return equipePL; 

  } catch (erreur) {
    console.error("Erreur lors de l'appel API :", erreur);
  }
}


