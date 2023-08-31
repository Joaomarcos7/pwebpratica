class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome,codigo,aluno) {
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);
        if (DisciplinaPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        
        const DisciplinaNova = new Disciplina(nome,codigo);
        this.repositorio.inserir(DisciplinaNova);
        this.repositorio.insereAlunoNaDisciplina(codigo,aluno)
        return DisciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina=> disciplina.codigo === codigo);
    }


  

    remover(codigo) {
        this.repositorio.remover(codigo);
    }


}
