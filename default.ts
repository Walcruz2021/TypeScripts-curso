export const createProduct = (id: String | Number, stock: Number=20, isNew: Boolean=true) => {
  return {
    id,
    stock,
    isNew,
  };
};

const p1=createProduct(1)
console.log(p1)


