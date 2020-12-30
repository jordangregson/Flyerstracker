function mlbStandings() {

    const api_url = `https://api.sportsdata.io/v3/soccer/scores/json/Competitions?key=55f7015ef0324e349a50ff5aced16802`;
    
    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            
    
            
    
        })
    }
    
    mlbStandings();