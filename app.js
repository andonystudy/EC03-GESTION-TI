let cStudents = document.getElementById("cStudents");
let students = document.getElementById("students");

function showHideStudents() {
  // cStudents.style.height = "none";
  students.classList.toggle("hide");
}

document.addEventListener("DOMContentLoaded", () => {
  let rowone = document.getElementById("rowone");
  let rowoneData = [
    {
      header: "Acta de Constitución",
      imgSrc: "img/doc.svg",
      uri: "resource/meme.jpg",
      description: "Documento de Acta de Constitución",
    },
    {
      header: "Alcances",
      imgSrc: "img/doc.svg",
      uri: "resource/meme.jpg",
      description: "Documento de Alcances",
    },
    {
      header: "EDT",
      imgSrc: "img/image.svg",
      uri: "resource/meme.jpg",
      description: "Estructura de Descomposición del Trabajo",
    },
    {
      header: "RF y RNF",
      imgSrc: "img/doc.svg",
      uri: "resource/meme.jpg",
      description: "Requerimiento Funcional y No Funcional",
    },
    {
      header: "Cronograma",
      imgSrc: "img/image.svg",
      uri: "resource/meme.jpg",
      description: "Diagrama de Gantt",
    },
  ];

  initOneRow();

  function initOneRow() {
    let html = "";
    rowoneData.forEach((data) => {
      html += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <h3 class="card-header">${data.header}</h3>
              <a href="${data.uri}" target="_BLANK" title="${data.header}" class="c-img">
                <img
                  src="${data.imgSrc}"
                  alt="${data.header}"
                />
              </a>
              <div class="card-body">
                <p class="card-text">
                  ${data.description}
                </p>
              </div>
            </div>
          </div>
            `;
    });
    rowone.innerHTML = html;
  }

  let rowtwo = document.getElementById("rowtwo");
  let rowtwoData = [
    {
      header: "Organigrama del Proyecto",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Roles y responsabilidades",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Planes de Capacitación",
      imgSrc: "img/empty.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Acta de equipo",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Requisitos de recursos",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Estructura de desglose de recursos",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Calendario de recursos",
      imgSrc: "img/image.svg",
      uri: "resource/meme2.jpg",
      description: "",
    },
    {
      header: "Información del desempeño del trabajo",
      imgSrc: "img/image.svg",
      uri: "resource/desempenio_de_trabajo.pdf",
      description: "",
    },
  ];

  initTwoRow();

  function initTwoRow() {
    let html = "";
    rowtwoData.forEach((data) => {
      html += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <h3 class="card-header">${data.header}</h3>
              <a href="${data.uri}" target="_BLANK" title="${data.header}" class="c-img">
                <img
                  src="${data.imgSrc}"
                  alt="${data.header}"
                />
              </a>
              
            </div>
          </div>
            `;
    });
    rowtwo.innerHTML = html;
  }
});
