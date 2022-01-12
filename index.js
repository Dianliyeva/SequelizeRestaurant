const {sequelize, DataTypes, Model} = require('./db');

class Restaurant extends Model {}

class Menu extends Restaurant {}

class Menu_item extends Menu {}

Restaurant.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Menu.init({
    type: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Menu_item.init({
   name: DataTypes.STRING,
   cost: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
})

//create association
Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)


module.exports = { Restaurant, Menu, Menu_item } 