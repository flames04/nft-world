const allProducts = [
  {
    prodId: 1234,
    name: `#1234 (Sally)`,
    image: `1.png`,
    price: {
      was: 11.2,
      is: 9.9
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.4,
    available: true,
    yourFav: false
  }, {
    prodId: 345,
    name: `#345 (Sandy)`,
    image: `2.png`,
    price: {
      was: false,
      is: 9.8
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    available: false,
    yourFav: false
  }, {
    prodId: 2345,
    name: `#2345 (Peter)`,
    image: `3.png`,
    price: {
      was: false,
      is: 8.5
    },
    desc: `Blah blah blah, I love this!!`,
    rating: 4.6,
    available: true,
    yourFav: true
  }, {
    prodId: 3345,
    name: `#3345 (Allen)`,
    image: `4.png`,
    price: {
      was: 12,
      is: 7.99
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    available: true,
    yourFav: false
  }, {
    prodId: 4221,
    name: `#4221 (Grace)`,
    image: `5.png`,
    price: {
      was: 9,
      is: 7.25
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 3.9,
    available: true,
    yourFav: false
  }, {
    prodId: 136,
    name: `#136 (Ada)`,
    image: `6.png`,
    price: {
      was: false,
      is: 6.2
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 3.9,
    available: true,
    yourFav: false
  }
]



// If given an Object representing the data for one product, connects the object data with an HTML "view" and appends to the #products element
const appendProduct = function(item) {
  document.querySelector(`#products`).innerHTML += `
    <article class="product ${ (!item.available) && `unavailable` }">
      <header>
        <img src="img/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <data value="${item.price.is}"><span class="material-icons">diamond</span>ETH ${
          (item.price.was)
            ? `<del>${item.price.was}</del> <ins>${item.price.is}</ins>`
            : `<span>${item.price.is}</span>`}</data>
        <p>${item.desc}</p>
        <dl>
          <dt>Rating</dt>
          <dd>${item.rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <a href="#">see more</a>
      </header>
      <footer>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span></button>
      </footer>
    </article>
  `
}


// Pagination (Extra, see "slice" below)
const perPage = 6
const onPage = 1
const startAt = (onPage - 1) * perPage


document.querySelector(`#productFilter`).addEventListener(`submit`, function(event) {
  // Stop the form from redirecting/refreshing
  event.preventDefault()

  // Check the form's values, do some stuff...
  const nameSearch = event.target.querySelector(`#searchName`).value
  const maxPrice = event.target.querySelector(`#maxPrice`).value

  // Clear out the existing results
  document.querySelector(`#products`).innerHTML = ``

  // For each product, filter, slice and print
  allProducts
    .filter(item => item.price.is <= maxPrice)
    .filter(item => item.name.toUpperCase().includes(nameSearch.toUpperCase()))
    .slice(startAt, startAt + perPage)
    .forEach(appendProduct)

  console.log(typeof searchNameValue, typeof maxPriceValue)
})


















/*
// This week:
- "falsy"
- Ternary operator (inline binary condition w/ return value)
  - and omitting {} from conditions
- filter()
- arrow functions
- chaining
- Strings

// Next:
- Modules
- Form submit and values
- map() vs forEach()
- data-*=""
- Event delegation
- Media events
- Sorting

// Then:
- fetch
- async/await
- JSON
*/



