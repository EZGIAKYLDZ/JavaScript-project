
const URL = 'https://v1.formula-1.api-sports.io/rankings/drivers?=2019';
const KEY= '6bc1f53da294d6df9decc7802ac61c7b';

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    console.log('çalıştı');
    fetch(URL , {
        "method": "GET",
            "headers": {
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
                "x-rapidapi-key": KEY
        }
    })
    .then (response => response.json)
    .then(response => {
        console.log('ilk response ', response);
        console.log('ikinci: ', response[response])

        // response.response.map (data =>
        //     console.log('ikinci: ', data)
        // )
    } 

)
    .catch(err=>console.log('err' , err))

}

// function getData() {
//     fetch(URL, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "v1.formula-1.api-sports.io",
//             "x-rapidapi-key": KEY
//         }
//     })

//         .then((response) => response.json())
        // .then((response) => {
        //     response.response.map(data => {
        //         const ranking = data['response'];

        //         const pos = document.createElement('p');
        //         pos.innerText = ranking.position;

        //         const driverName = document.createElement('h2');
        //         driverName.innerText = driver.name;

        //         const car = document.createElement('p');
        //         car.innerText = team.name;
                
        //         const listItem = document.createElement('li');
        //         listItem.setAttribute('data-id', ranking.id);
        //         listItem.append(driverName);
        //         listItem.append(car);
        //         listItem.append(pos);

        //         document.getElementById('posts-list').append(listItem);


                // const tableBody = document.querySelector('#dataTable tbody');
                //     const tableRows = data.map(user => {
                //         return `
                //             <tr>
                //                 <td>${user.name}</td>
                //                 <td>${user.age}</td>
                //                 <td>${user.email}</td>
                //             </tr>
                //         `;
                //     });

                //     tableBody.innerHTML = tableRows.join('');

        //     })
        // })
//         .catch(error => {
//             console.error('Error data:', error);
//         });
// }


