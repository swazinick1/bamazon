
   const express = require("express");
   const router = express.Router();
   const db = require ('../models'); //used to connect database
   
   
   router.get('/api/products', function(req, res){
         //res.json({hello:"world"})//send back to postman for test 
         //Products is the variable from the product.js
         db.Products.findAll({}).then(function(response, error){
             if (error){
                 res.json(error)
             }
             res.json(response)
         })
   });

   router.post('/api/products', function(req, res){
      // res.json({hello:"world"}) // testing post route
      db.Products.create(req.body).then(function(response, error){
          if(error){
              res.json(error)
          }
          res.json(response)
      })
   })
   

   router.get("/api/products/:id",function(req, res){
    console.log("The route was triggered by the item with an id of " + req.params.id)
    res.json("Hello World");
    
    })
   
   module.exports = router;
   
   
   
   
   
   
    // app.get('/api/product', function (req, res){
    //     db.Products.findAll({
    //         include: [db.Post]
    //     })//.then(function(dbProducts){
    //         res.json(dbProducts);
    //     }).catch(function(error){
    //         res.json({ error:error});
    //     });
    // });


    // app.get('/api/product/:id', function(req, res){
    //     db.Product.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.Post]
    //     }).then(function(dbProduct){
    //         res.json(dbProduct);
    //     }).catch(function(error){
    //         res.json({ error: error});
    //     });
    // });

    // app.post('/api/product', function(req, res){
    //     db.Product.create(req.body).then(function(dbProduct){
    //         res.json(dbProduct);
    //     }).catch(function(error){
    //         res.json({ error: error});
    //     });
    // });

    // app.put('/api/product/:id', function(req, res){
    //     db.Product.update(
    //         req.body,
    //         {
    //             where: {
    //                 id: req.params.id
    //             }
    //         }
    //     ).then(function(dbPost){
    //         res.json(dbPost);
    //     }).catch(function(error){
    //         res.json({ error: error});
    //     });
    // });

    // app.delete('/api/product/:id', function(req, res){
    //     db.Product.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbProduct){
    //         res.json(dbProduct);
    //     }).catch(function(error){
    //         res.json({ error: error});
    //     });
    // });


