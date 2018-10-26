const mysql2 = require('mysql2')
const takeData = function(){

    // const data = Products;
    // const queryURL = '';

    $.ajax({
        url: '/api/product',
        method: 'GET'
        
    }).then(function(productList){

       
    });

 
}

const postData = function (){


    $.ajax({
        url: '/api/product',
        mathod: 'POST'
    }).then(function(productList){
        
    })
}