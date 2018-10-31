const express = require ('express');
const app = express ();
const PORT = process.env.PORT || 8080;


const db = require ('./models');




app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

//connects routes with html

const apiRoutes = require('./routes/api-routes.js');
app.use(apiRoutes);
const htmlRoutes = require('./routes/html-routes.js');
app.use(htmlRoutes);

//require("./routes/api-routes.js")(app);








db.sequelize.sync({}).then(function(){
    app.listen(PORT,function(){
        console.log(`App is listening on PORT` + PORT);
    });
});