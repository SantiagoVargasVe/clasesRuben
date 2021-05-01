const load_data = async (URL) => {
  let dataJSON = ''
  const request = await fetch(URL)
  dataJSON = await request.json().then((response) => response)
  return dataJSON
}

const loadProfesorHTML = async () => {
  const URL = 'http://localhost:3000/profesor'
  let dataJSON = await load_data(URL)
  let numero31 = 31
  let nombre = document.getElementById('profesor-nombre')
  nombre.innerHTML = dataJSON.nombre
  let numero = 1 + 4
  let biografia = document.getElementById('profesor-biografia')
  biografia.innerHTML = dataJSON.biografia
  console.log('Hola, soy un error')
  let image = document.getElementById('profesor-imagen-profile')
  image.src = dataJSON.url_img
  console.log('Hola mundo')
}

const loadCourses = async () => {
  const URL = 'http://localhost:3000/clases'
  let dataJSON = await load_data(URL)
  const mainContainer = document.getElementById('materias')
  dataJSON.map((element) => {
    let nameCourse = element.nombre
    let divMateria = document.createElement('div')
    divMateria.className = 'materia'
    let linkCourse = document.createElement('a')
    linkCourse.className = 'materia-link'
    let titleCourse = document.createElement('h2')
    titleCourse.innerHTML = nameCourse
    titleCourse.className = 'materia-titulo'
    linkCourse.appendChild(titleCourse)
    divMateria.appendChild(linkCourse)
    mainContainer.appendChild(divMateria)
  })
}

loadProfesorHTML()
loadCourses()
