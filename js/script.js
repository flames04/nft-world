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
    yourFav: false
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


allProducts.forEach(appendProduct)






/* 


<!-- Product 3 -->

  
<!-- Product 4 -->
<article class="product">
  <header>
    <img src="img/4.png" alt="Product Image">
    <h3>Crypto Punk #3345</h3>
    <data value="39"><span class="material-icons">diamond</span>ETH <del>12</del> <ins>7.99</ins></data>
    <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
    <dl>
      <dt>Rating</dt>
      <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
    </dl>
    <a href="#">see more</a>
  </header>
  <footer>
    <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
    <button type="button"><span class="material-icons">favorite</span></button>
  </footer>
</article>

<!-- Product 5 -->
<article class="product">
  <header>
    <img src="img/5.png" alt="Product Image">
    <h3>Crypto Punk #4221</h3>
    <data value="39"><span class="material-icons">diamond</span>ETH <del>9</del> <ins>7.25</ins></data>
    <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
    <dl>
      <dt>Rating</dt>
      <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
    </dl>
    <a href="#">see more</a>
  </header>
  <footer>
    <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
    <button type="button"><span class="material-icons">favorite</span></button>
  </footer>
</article>

<!-- Product 6 -->
<article class="product">
  <header>
    <img src="img/6.png" alt="Product Image">
    <h3>Crypto Punk #136</h3>
    <data value="39"><span class="material-icons">diamond</span>ETH 6.2</data>
    <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
    <dl>
      <dt>Rating</dt>
      <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
    </dl>
    <a href="#">see more</a>
  </header>
  <footer>
    <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
    <button type="button"><span class="material-icons">favorite</span></button>
  </footer>
</article> */