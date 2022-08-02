let contador = 0;
let imagen = document.querySelector("img");
let parr = document.querySelector("p");

function contarClick() {
  contador++; //console.log ('se realizaron' +contador+'clicks');

  //document.write('se realizaron' +contador+'clicks');
  document.getElementById("cuenta").innerHTML =
    "se realizaron" + contador + "clicks";

  //console.log('se realizaron' +contador+'clicks');
  // document.write ('se realizaron' +contador+'clicks');

  document.getElementById("cuenta").innerHTML =
    "se realizaron" + contador + "clicks";
  document.getElementsByTagName("p");
  document.querySelector("p");
  //console.log('se realizaron' +contador+'clicks');
  //let texto = document.getElementById("cuenta").innerHTML='se realizaron' +contador+ 'clicks';

  let imagen = document.querySelector("img");
  imagen.src = "";

  if (contador % 2 === 0) {
    imagen.src =
      "https://www.desafiomundial.com/wp-content/uploads/2018/09/18-Mansion-NY-01-78987.jpg?width=800&height=533";
  } else {
    imagen.src =
      "https://secure.img1-fg.wfcdn.com/im/21671938/compr-r100/2150/215031868/defineyourstyle215031868desktop.png";
  }
}
//document.getElementByTagName ('p')
//document.querySelector ('p')
