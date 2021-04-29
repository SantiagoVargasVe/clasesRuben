let dataJSON
const load_data = () => {
  fetch('http://localhost:3000/profesor')
    .then((response) => response.json())
    .then((data) => {
      dataJSON = data
      console.log(dataJSON)
    })
}

dataJSON = {
  nombre: 'Santiago Alejandro Salamanca Jaramillo',
  url_img: 'https://dummyimage.com/600x600/e398e3/fff',
  biografia:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore non cupiditate dolorum assumenda ipsam rem autem vel fugit blanditiis ea'
}
const loadProfesorHTML = () => {
  let nombre = document.getElementById('profesor-nombre')
  nombre.innerHTML = dataJSON.nombre
  let biografia = document.getElementById('profesor-biografia')
  biografia.innerHTML = dataJSON.biografia
  let image = getElementById('profesor-imagen')
  image.src = dataJSON.url_img
}

loadProfesorHTML()
