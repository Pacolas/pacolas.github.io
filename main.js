

  const contentDiv = document.getElementById("content");

  async function fetchData() {

    try {
        const response = await fetch("https://raw.githubusercontent.com/Pacolas/pacolas.github.io/refs/heads/main/projects/projects.json");
        const data = await response.json();


        const contentDiv = document.getElementById("projects");

        contentDiv.innerHTML = "<h2>Projects</h2>";


        data.forEach(item => {
            const div = document.createElement("div");
            
            div.classList.add("mb-4");
        
            console.log(item.link)

            div.innerHTML = `
                <h4>${item.name}</h4>
                <p>
                    <strong>
                        Technologies: 
                    </strong>
                    ${ item.technologies.join(", ")}
                </p>
                <p>
                  ${item.description}
                
                </p>
                <p>
                    <a href="${item.link}" target="_blank">Project Link</a>
                </p>
                <hr>
            `;

            contentDiv.appendChild(div);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData()
    