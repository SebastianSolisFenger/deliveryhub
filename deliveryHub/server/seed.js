const { faker } = require("@faker-js/faker");
const _ = require("lodash");

const MongoClient = require("mongodb").MongoClient;

async function main() {
  const url =
    "mongodb+srv://Seba:Jesusismyhome77@cluster0.ql4fy.mongodb.net/food-ordering?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const productsCollection = client
      .db("food-ordering")
      .collection("products");
    const categoriesCollection = client
      .db("food-ordering")
      .collection("categories");

    let categories = ["breakfast", "lunch", "dinner", "drinks"].map(
      (category) => {
        return { name: category };
      }
    );

    await categoriesCollection.insertMany(categories);

    let imageUrls = [
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
    ];

    let products = [];
    for (let i = 0; i < 10; i += 1) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        desciption: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main();
