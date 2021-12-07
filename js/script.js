const allProducts = [
  {
    prodId: 1234,
    name: `Crypto Punk #1234`,
    image: `1.png`,
    price: {
      was: 11.2,
      is: 9.9
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.4,
    available: true,
    yourFav: false,
    songUrl: `audio_cb4f1212a9.mp3`
  }, {
    prodId: 345,
    name: `Crypto Punk #345`,
    image: `2.png`,
    price: {
      was: false,
      is: 9.8
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    available: true,
    yourFav: false
  }, {
    prodId: 2345,
    name: `Crypto Punk #2345`,
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
    name: `Crypto Punk #3345`,
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
    name: `Crypto Punk #4221`,
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
    name: `Crypto Punk #136`,
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
    <article class="product">
      <header>
        <img src="img/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <data value="${item.price.is}"><span class="material-icons">diamond</span>ETH <del>${item.price.was}</del> <ins>${item.price.is}</ins></data>
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

// For each product
allProducts.forEach(appendProduct)


/*
- Ternary operator (inline condition)
- map() vs forEach()
- filter()
- data-*=""
*/



