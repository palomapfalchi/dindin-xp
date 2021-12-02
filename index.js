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
    for (let index = 0; index < cursos.length; index++) {
        console.log(`
        Título: ${cursos[index].titulo}
        Descrição: ${cursos[index].descricao}
        Professor: ${cursos[index].professor}
        Número de aulas: ${cursos[index].listaAulas.length}
        `);
    }
}

//listarCursos();
//idCyrso = numero, linkAula = string

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
    //adicionando novo aula ao curso selecionado
    cursos[indexCurso].listaAulas.push(linkAula);

    console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}`);
}

// adicionarAula(2, "https://youtube.com");
// listarCursos();