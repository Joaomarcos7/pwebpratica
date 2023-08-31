class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaRemover = this.disciplinas.findIndex(disciplina => disciplina.codigo=== codigo);
        if (indxDisciplinaRemover> -1) {
            this.disciplinas.splice(indxDisciplinaRemover, 1);
        }
    }



    listar(){
        return this.disciplinas;
    }
    
    insereAlunoNaDisciplina(codigo,aluno){
      const disciplina=  this.disciplinas.find(x=>x.codigo === codigo);

        if(disciplina !== null){
            disciplina.alunos.push(aluno)
              }
        else{
        throw new Error("Disciplina nao existe")
        }
    }

    

}