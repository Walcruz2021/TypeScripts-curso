const prices:(number|string)[]= [1,2,3,4,"dfsg"]


//una variable de tipo dupla puede incluir varios tipos de datos pero ademas puede marcar el limte en cuanto a cantidad
//y posiciones
//var employee: [number, string] = [1, "Steve"];

let user:[string,number,boolean]

//user=["hola",3,true,false] marcaria error ya que en la declaracion se declaro solo 3 valores
user=["hola",3,true];  //correcto

//Deestructuracion
const [saludo,numero]=user;
console.log(saludo)
console.log(numero)

//esta deestructuracion la vemos cuando se usa Hoooks en React

// const[state,useState]=useState(initialState)
