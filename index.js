console.log('** DINDIN ACADEMY **');

let cursos = [{
    id: 1,
    titulo: "Investimento para Iniciantes",
    descricao: "Esse curso é para quem não manja de investimentos mas quer ficar rico",
    professor: "Jane Doe",
    listaAulas: []
}, {
    id: 2,
    titulo: "Organizando a Reserva de Emergência",
    descricao: "Esse curso é pra quem quer aprender a organizar a reserva de emergência",
    professor: "Nathália Arcuri",
    listaAulas: []
}];


function listarCursos() {

    let htmlCursos = "";
    //criando lista de cursos em html
    for (let index = 0; index < cursos.length; index++) {
        htmlCursos += `
            <article class="card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].professor}</p>
            </article>
        `;
    }
    //selecionando elemnto que vai englobar a lista
    let painelCursos = document.querySelector(".painel-cursos");
    //inserindo lista de cursos no html
    painelCursos.innerHTML = htmlCursos;

}

//listarCursos();
//idCurso = numero, linkAula = string

// function adicionarAula(idCurso, linkAula) {
//     //findIndex retorna a posição do array do curso encontrado
//     let cursoEncontrado = cursos.findIndex((curso) => {
//         return curso.id == idCurso;
//     })
//     console.log(cursos[cursoEncontrado]);
// }

//adicionarAula(2, "http://google.com");

function adicionarAula(idCurso, linkAula) {
    let indexCurso = null;

    for (let i = 0; i < cursos.length; i++) {
        if(cursos[i].id == idCurso){
            indexCurso = i;
        }
    }
    //adicionando nova aula ao curso selecionado
    cursos[indexCurso].listaAulas.push(linkAula);

    console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}`);
}

//cadastro de curso
let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = function (evento) {
    //prevenindo ação padrão
    evento.preventDefault();
    //capturar campos do formulario
    let titulo_input = document.querySelector("#titulo");
    let descricao_input = document.querySelector("#descricao");
    let professor_input = document.querySelector("#professor");

    //criando novo curso a partir dos dados do form
    let novoCurso = {
        id: cursos.length,
        titulo: titulo.value,
        descricao: descricao.value,
        professor: professor.value,
        listaAulas: []
    };

    //adicionando novo curso na lista
    cursos.push(novoCurso);

    listarCursos();

};

/*
adicionarAula(2, "https://youtube.com");*/


listarCursos();
