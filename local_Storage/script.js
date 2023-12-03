var itens = [];
abrir()
function inserir() {
    var ra = document.getElementById('ra');
    var nome = document.getElementById('nome');
    var instituicao = document.getElementById('instituicao');
    var curso = document.getElementById('curso');
    var periodo = document.getElementById('periodo');

    var pessoa = {
        ra: ra.value,
        nome: nome.value,
        instituicao: instituicao.value,
        curso: curso.value,
        periodo: periodo.value
    };

    itens.push(pessoa);
    salvar()

    ra.value = "";
    nome.value = "";
    instituicao.value = "";
    curso.value = "";
    periodo.value = "";

    ra.focus();

    salvar();
}

function listar() {
    var tab = document.getElementById('tabela');
    tab.innerHTML = "<tr><th>RA</th><th>Nome</th><th>Instituição</th><th>Curso</th><th>Periodo</th><th>Deletar</th></tr>";

    for (var i = 0; i < itens.length; i++) {
        tab.innerHTML += "<tr><td>" + itens[i].ra + "</td><td>" + itens[i].nome + "</td><td>" + itens[i].instituicao + "</td><td>" + itens[i].curso + "</td><td>" + itens[i].periodo + "</td><td><a href='#' onclick='excluir(" + i + ")'>X</a></td></tr>";
    }
}

function excluir(i) {
    itens.splice(i, 1);
    listar();
    salvar();
}

function salvar() {
    var dados = JSON.stringify(itens);
    localStorage.setItem("dados", dados);
}

function abrir() {
    var dados = localStorage.getItem('dados');
    itens = JSON.parse(dados) || [];
    listar();
}
