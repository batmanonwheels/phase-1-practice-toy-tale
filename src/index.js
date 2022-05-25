// let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const baseURL = "http://localhost:3000/toys"
const toyCollect = document.getElementById('toy-collection')

const getToys = () => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((arr) => arr.forEach((toy) => renderToys(toy)))
}

const renderToys = (toy) => {
  let h2 = document.createElement('h2')
  let img = document.createElement('img')
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let card = document.createElement('div')

  h2.textContent = toy.name

  img.src = toy.image
  img.className = 'toy-avatar'

  let likes = toy.likes
  p.textContent = `${likes} likes`

  btn.className = 'like-btn'
  btn.textContent = 'like'
  btn.id = toy.id
  btn.addEventListener('click', () => {
    likes++
    p.textContent = `${likes} likes`
  })

  card.className = 'card'

  card.append(h2, img, p, btn)
  toyCollect.append(card)
}

getToys()

// document.addEventListener("DOMContentLoaded", () => {
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });
