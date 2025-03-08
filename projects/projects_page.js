async function fetchData() {

    try {
        const response = await fetch("https://raw.githubusercontent.com/Pacolas/pacolas.github.io/refs/heads/main/projects/projects.json");
        const data = await response.json();


        const contentDiv = document.getElementById("projects_");




        data.forEach(item => {
            const div = document.createElement("div");
            
            div.classList.add("card");
            
            let description =  item.description.slice(0,100) + "..."
        


            div.innerHTML = `
            <img src="https://static.wikia.nocookie.net/zelda/images/1/1c/TotK_-_Link_imagen_oficial.png/revision/latest?cb=20230220223232&path-prefix=es" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${description}</p>
            <a href="./" class="btn btn-primary">See more</a>
            </div>
            `;

            contentDiv.appendChild(div);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData()
    