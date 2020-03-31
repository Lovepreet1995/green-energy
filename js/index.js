// Load your images on page-load
function preloader() {
    const imagesPaths = [
          "./images/hydro-power.jpg",
           "./images/solar-power.jpg",
           "./images/wind-power.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let clickedButtons = document.querySelectorAll("button");

// Array to store data

let page = {
    One: {
        heading: "Hydroelectricity",
        body: "The kinetic power produced by natural flow of water in rivers is tranformed in usable energy.  According to the Natural Resources Cnada is the major form of usable energy from flowing water. To produce energy, the water flow is made to go through blades of turbine, to spin them, which moves electrical generator and the energy is created. In order to harness the flow of the energy the Dams are built at the loactions. It the renewable source of energy.(Natural Resources Canada, 2020).",
        imgLink: "./images/hydro-power.jpg",
        imgName: "Hydroelectricity"
    },
    Two: {
        heading: "Solar Energy",
        body: "Solar energy is produced from radiated heat and light of sun. The strategic loaction is decided to install siolar panels. It can be produced during only day time with good sunlight. The energy can be stored or it can be used directly to heat the water and other tasks. According to Natural Resouces Canada, the installed capacity of thermal power witnessed 13.8 per cent rate since 2004. 1,843 megawatts power is generated during 2008-2014. (Natural Resources Canada, 2020)",
        imgLink: "./images/solar-power.jpg",
        imgName: "Solar Energy"
    },
    Three: {
        heading: "Wind Power",
        body: "The kinetic energy produced by wind is transformed in machanical energy or electercity. As per site of Natural Resouces Canada, wind is used increasingly to generate electercity. The turbines are installed in the areas with good wind speed. There is large area undr canada with excellent wind resources. As of December 31, 2014, Canada had over 5,130 wind turbines with capacity of 9,694 megawatts. The provincial leaders in wind power capacity are Ontario, Quebec, and Alberta. (Natural Resources Canada, 2020)",
        imgLink: "./images/wind-power.jpg",
        imgName: "Wind Energy"
    }
};

//Get the reference to your HTML-container

let data = document.getElementById("container");

clickedButtons[0].setAttribute("id", "active");

//The first content

data.innerHTML = `<h1>${page.One.heading}</h1>
     <img src="${page.One.imgLink}" alt="${page.One.imgName}">
     <p>${page.One.body}</p>`;

// Function to handle click event

function handleSelection() {

     //// remove currently present id="active"
    for (let i = 0; i < clickedButtons.length; i++) {
          // claiming that current element in the loop containe attribute
        if (clickedButtons[i].hasAttribute("id")) {
          // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            clickedButtons[i].removeAttribute("id");
        }
    }

    this.setAttribute("id", "active");

    // load the corresponding data into <div class="container"></div>

    for (let i = 0; i < clickedButtons.length; i++) {
        if (clickedButtons[i].hasAttribute("id")) {
            if (i == 0) {
                data.innerHTML = `<h1>${page.One.heading}</h1><img src="${page.One.imgLink}" alt="${page.One.imgName}"><p>${page.One.body}</p>`;
            }
            if (i == 1) {
                data.innerHTML = `<h1>${page.Two.heading}</h1><img src="${page.Two.imgLink}" alt="${page.Two.imgName}"><p>${page.Two.body}</p>`;
            }
            if (i == 2) {
                data.innerHTML = `<h1>${page.Three.heading}</h1><img src="${page.Three.imgLink}" alt="${page.Three.imgName}"><p>${page.Three.body}</p>`;
            }
        } 
    }
} 

// Registration of button for click event

for (let i = 0; i < clickedButtons.length; i++) {
    clickedButtons[i].addEventListener("click", handleSelection)
}
