const rickAndMorty = fetch("https://rickandmortyapi.com/api/character");
rickAndMorty.then((data) => data.json()).then((data) => rick(data.results));

const rick = (data) => {
    console.log("llegue aca", data)
  let body = "";
  data.map(({name, status, species, image}) => {
    return (body += `
        <div class="card">
            <img src=${image} alt="">
            <div class="text__card">
                <h4>${name}</h4>
                <p>Status: ${status}</p>
                <p>Sprecies: ${species}</p>
            </div>        
        </div>        
        `);
  });
  document.getElementById("rick").innerHTML=body
};
