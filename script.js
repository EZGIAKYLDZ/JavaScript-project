
const URL = 'https://v1.formula-1.api-sports.io/rankings/drivers?season=2019';
const KEY = '6bc1f53da294d6df9decc7802ac61c7b';

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    fetch(URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
            "x-rapidapi-key": KEY
        }
    })
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
            const ranking = data['response'];

            ranking.forEach(element => {
                const position = element['position'];
                const driver = element['driver'];
                const team = element['team'];
                const points = element['points'];
                const wins = element['wins'];

                const listRankings = document.createElement('tbody');
                listRankings.setAttribute('data-id', driver.id);
                listRankings.innerHTML = `
                            <tr>
                                <td>${position}</td>
                                <td>${driver.name}</td>
                                <td>${team.name}</td>
                                <td>${points}</td>
                                <td>${wins}</td>
                            </tr>
                        `;
                        if (position.value % 2 != 0) { 
                            listRankings.style.backgroundColor = 'white';
                        } 
                        else {
                            listRankings.style.backgroundColor = 'grey';
                        }
                document.getElementById('data-table').append(listRankings);                
            })            
        })

        .catch(err => {
            console.log(err);
        });

        
}

// const deneme = document.querySelector('.drivers');
// function func() {
//     deneme.style.backgroundColor = 'black';
// }
// deneme.addEventListener('mouseover', func);


