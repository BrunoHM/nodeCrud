const crudsData = require('../data/crudData');

exports.getData = function() {
    return crudsData.getData();
}

exports.insertData = function(name, number, createDate) {
    return crudsData.insertData(name, number, createDate);
}

exports.updateData = function(id, name, age) {
    return crudsData.updateData(id, name, age);
}

exports.deleteData = function(id) {
    return crudsData.deleteData(id);
}