module.exports = function (sequelize, DataTypes){
    const Products = sequelize.define('Products', {
        product: {
            type: DataTypes.STRING,
            
        },
        department: {
            type: DataTypes.STRING,
            
        },
        price: {
            type: DataTypes.INTEGER,
            
        },
        inStock: {
            type: DataTypes.INTEGER,
            
        }
    },{timestamps:false});

    return  Products;
}



