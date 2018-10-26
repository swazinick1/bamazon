module.exports = function (sequelize, DataTypes){
    const Products = sequelize.define('Products', {
        product: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        inStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Products;
}