const {sequelize} = require("./db");

const {Restaurant, Menu, Menu_item} = require("./index")

describe('Restaurant Database', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true})
    })

    test('can create a Restaurant', async() => {
        const testRestaurant = await Restaurant.create({name: "Delicious Delights"})
        expect(testRestaurant.name).toBe("Delicious Delights")
    })

    test('Restaurant can have menus', async() =>{
      const testRestaurant = await Restaurant.create({name:"Delicious Delights"})
      const Food = await Menu.create({type:"Food"})
      const Drink = await Menu.create({type:"Drink"})

        
      await testRestaurant.addMenu(Food)
      await testRestaurant.addMenu(Drink)
      
      const menus = await testRestaurant.getMenus()

      expect(menus.length).toBe(2)
    })
})

