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
      imgSrc: "img/empty.svg",
      uri: "resource/acta_de_constitucion.pdf",
      description: "Documento de Acta de Constitución",
    },
    {
      header: "Alcances",
      imgSrc: "img/empty.svg",
      uri: "resource/enunciado_de_alcance.pdf",
      description: "Documento de Alcances",
    },
    {
      header: "EDT",
      imgSrc: "img/empty.svg",
      uri: "resource/EDT.png",
      description: "Estructura de Descomposición del Trabajo",
    },
    {
      header: "RF y RNF",
      imgSrc: "img/empty.svg",
      uri: "resource/rf_rnf.pdf",
      description: "Requerimiento Funcional y No Funcional",
    },
    {
      header: "Cronograma",
      imgSrc: "img/empty.svg",
      uri: "resource/cronograma.png",
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
      uri: "resource/organigrama.png",
      description: "",
    },
    {
      header: "Roles y responsabilidades",
      imgSrc: "img/doc.svg",
      uri: "resource/roles_y_responsabilidades.pdf",
      description: "",
    },
    {
      header: "Acta de equipo",
      imgSrc: "img/doc.svg",
      uri: "resource/acta_de_equipo.pdf",
      description: "",
    },
    {
      header: "Requisitos de recursos",
      imgSrc: "img/doc.svg",
      uri: "resource/requisitos_de_recursos.pdf",
      description: "",
    },
    {
      header: "Estructura de desglose de recursos",
      imgSrc: "img/image.svg",
      uri: "resource/desglose_de_recursos.png",
      description: "",
    },
    {
      header: "Calendario de recursos",
      imgSrc: "img/doc.svg",
      uri: "resource/calendario_de_recursos.pdf",
      description: "",
    },
    {
      header: "Información del desempeño del trabajo",
      imgSrc: "img/doc.svg",
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
