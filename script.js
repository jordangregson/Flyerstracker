function mlbStandings() {

    const api_url = `https://api.sportsdata.io/v3/nhl/stats/json/BoxScores/%7B2020-Jan-13%7D?key=ae256145ae3b45d19da29122634bd4c4`;
    
    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            
    
            
    
        })
    }
    
    mlbStandings();