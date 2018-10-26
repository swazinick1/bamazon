const db = require('../models');

module.exports = function(app) {

    app.get('/api/product', function (req, res){
        db.Products.findAll({
            include: [db.Post]
        }).then(function(dbProducts){
            res.json(dbProducts);
        }).catch(function(error){
            res.json({ error:error});
        });
    });


    app.get('/api/product/:id', function(req, res){
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbProduct){
            res.json(dbProduct);
        }).catch(function(error){
            res.json({ error: error});
        });
    });

    app.post('/api/product', function(req, res){
        db.Product.create(req.body).then(function(dbProduct){
            res.json(dbProduct);
        }).catch(function(error){
            res.json({ error: error});
        });
    });

    app.put('/api/product/:id', function(req, res){
        db.Product.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function(dbPost){
            res.json(dbPost);
        }).catch(function(error){
            res.json({ error: error});
        });
    });

    app.delete('/api/product/:id', function(req, res){
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbProduct){
            res.json(dbProduct);
        }).catch(function(error){
            res.json({ error: error});
        });
    });

}
