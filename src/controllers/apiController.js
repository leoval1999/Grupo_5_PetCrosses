const db = require('../database/models');
const sequelize = require("sequelize");

const apiController = {
    usuarios: (req, res) => {

        db.Usuario.findAll()
            .then(users => {
                let usersData = [];
                users.forEach(user => {
                    let usuario = {
                        id: user.user_id,
                        name: `${user.user_name} ${user.user_surname}`,
                        email: user.user_email,
                        detail: `http://localhost:3200/api/users/${user.user_id}`,
                    }
                    usersData.push(usuario)
                });

                let usersResponse = {
                    count: users.length,
                    users: usersData
                }

                return res.status(200).json(usersResponse)
            })
            .catch(error => {
                return res.status(500).json(`Ha ocurrido un error inesperado : ${error}`);
            })

    },
    usuarioDetalle: (req, res) => {
        db.Usuario.findByPk(req.params.id, {
            attributes: { exclude: ['user_password', 'user_esAdmin'] }
        })
            .then(users => {
                res.status(200).json(users)
            })
            .catch(error => {
                return res.status(500).json(`Ha ocurrido un error inesperado : ${error}`);
            })
    },
    productos: (req, res) => {
        let promesaProductos = db.Producto.findAll({
            attributes: [
                "product_id", 
                [sequelize.col("Producto.product_name"),"name"],[sequelize.col("Producto.product_price"),"price"],[sequelize.col("Producto.product_stock"),"stock"],
                [sequelize.col("product_description"),"description"],
                "subcategoryID",
                [sequelize.fn('concat', 'http://localhost:3200/api/products/', sequelize.col('Producto.product_id')), "detail"]
                ]
        })
        let categorias = db.Producto.findAll({
            attributes: ['categoryID', [sequelize.fn('count', sequelize.col('categoryID')), 'cantidad']],
            group: ['categoryID'],
        })

        let nombres = db.Categoria.findAll({
            attributes: ['category_name']
        })
        Promise.all([promesaProductos, categorias,nombres])
            .then(([products, categorias,nombre]) => {

                let productsResponse = {
                    categoryName: nombre,
                    count: products.length,
                    countByCategory: categorias,
                    products
                    
                }
                res.status(200).json(productsResponse)
            })
            .catch(error => {
                return res.status(500).json(`Ha ocurrido un error inesperado : ${error}`);
            })
    },
    productoDetalle: (req,res) => {
        db.Producto.findByPk(req.params.id, {
            attributes:{exclude: [ "subCategoryID"]},
        })
            .then(product => {
                return res.status(200).json(product);
            })

            .catch(error => {
                return res.status(500).json(`Ha ocurrido un error inesperado : ${error}`);
            })
    }



}

module.exports = apiController; 