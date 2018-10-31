$.ajax({
    url:'/api/products',
    method: 'GET'
}).then(function(response){
    for(let i = 0; i < response.length; i++){
        let data = response[i];
	$('#product-view').append(data.product);
    }
    console.log(response);
});

$.ajax(
{})



// let product = {
//     product,
//     department,
//     price,
//     inStock
// }

// $.ajax({
//     url: '/api/products',
//     method: 'POST',
//     data: product
// }).then(function(response){
//     console.log(response)
// });

// $.ajax({
//     url: '/api/products/'
//     method:

// })