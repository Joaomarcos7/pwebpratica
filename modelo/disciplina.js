class Disciplina {

constructor(codigo,nome){
    this._alunos=[];
    this._nome=nome;
    this._codigo=codigo;
}

get nome(){
    return this._nome
}

set nome(nome){
    this._nome=nome;
}

get alunos(){
    return this._alunos
}

set alunos(aluno){
    this._alunos.push(aluno)
}

get codigo(){
    return this._codigo
}

set codigo(codigo){
    this._codigo=codigo
}




}