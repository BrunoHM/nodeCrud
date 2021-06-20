const database = require('../database/database');

exports.getData = function () {
    return database.query('select id, nome, to_char(datacriacao, \'DD/MM/YYYY\') datacriacao, idade from simpletable s order by id')
}

exports.insertDataST = function (name, number, createDate) {
    return database.none('INSERT INTO simpleTable(name, number, createdt) VALUES($1, $2, $3)', [name, number, createDate])
    .then(() => {
        return "Sucesso, registro adicionado!";
    })
    .catch(erro => {
        return "Erro ao inserir registro.</br>"+erro;
    });
}

exports.updateData = function (id, name, age) {
    return database.none('UPDATE simpleTable SET nome = $1, idade = $2 WHERE id = $3', [name, age, id])
    .then(() => {
        return "Sucesso, registro altera!";
    })
    .catch(erro => {
        return "Erro ao alterar registro.</br>"+erro;
    });
}

exports.deleteData = function (id) {
    return database.none('DELETE FROM simpleTable where id = $1', [id])
    .then(() => {
        return "Sucesso, registro removido com sucesso!";
    })
    .catch(erro => {
        return "Erro ao remover registro.</br>"+erro;
    });
}