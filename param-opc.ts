export const createProduct = (
  id: string | number,
  isNew?: boolean, //PARAMETRO OPCIONAL (?) permite NO dejar como obligatorio al parametro
  stock?: number //PARAMETRO OPCIONAL (?) permite NO dejar como obligatorio al parametro
) => {
  return {
    id,
    isNew: isNew ?? 10,
    stock: stock ?? true
  };
};

const p1=createProduct(2,false,200)
console.log(p1)
//{ id: 2, isNew: false, stock: 200 }

const p2=createProduct(2)
console.log(p2)
//{ id: 2, isNew: undefined, stock: undefined }