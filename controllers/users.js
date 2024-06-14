const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
    const {id, token} = req.query
    res.json({
        msg: 'get API',
        id,
        token
    });
}

const usersPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}

const usersPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API',
        id
    });
}

const usersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API'
    });
}

const usersDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}