class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#name");
        const codigoElemento = document.querySelector("#codigo");
        const alunoElemento= document.querySelector("#alunodis");
        const elementoDestino= document.querySelector("#listaDisciplina")
        const disciplinaInserido = this.servico.inserir(nomeElemento.value, Number(codigoElemento.value),alunoElemento.value);
        if (disciplinaInserido) {
            this.inserirDisciplinaNoHtml(disciplinaInserido,elementoDestino);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${disciplina.nome} -  Codigo: ${disciplina.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

   

}
