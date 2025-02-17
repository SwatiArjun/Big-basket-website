const products=[
      {id: 1, name: "fresho! Strawberry", Image:"https://www.bigbasket.com/media/uploads/p/m/10000263_14-fresho-strawberry.jpg?tr=w-154,q-80", price:55}, 
      {id: 2, name: "Capsicum - Green, Organically Grown (Loose)", Image:"https://www.bigbasket.com/media/uploads/p/m/40022640_15-fresho-capsicum-green-organically-grown.jpg?tr=w-154,q-80", price:18}, 
      {id: 3, name: "Broccoli", Image:"https://www.bigbasket.com/media/uploads/p/m/10000063_21-fresho-broccoli.jpg?tr=w-154,q-80", price:17.5 }, 
      {id: 4, name: "Mushrooms - Button", Image:"https://www.bigbasket.com/media/uploads/p/m/10000273_17-fresho-mushrooms-button.jpg?tr=w-154,q-80", price:48 }, 
      {id: 5, name: "Kiwi - Green", Image:"https://www.bigbasket.com/media/uploads/p/m/20000911_35-fresho-kiwi-green.jpg?tr=w-154,q-80", price:99}, 
      {id: 6, name: "Ber (Loose)", Image:"https://www.bigbasket.com/media/uploads/p/m/20000725_13-fresho-ber.jpg?tr=w-154,q-80", price:44 }, 
      {id: 7, name: "Neem Leaves ", Image:"https://www.bigbasket.com/media/uploads/p/m/30007409_5-fresho-neem-leaves-organically-grown.jpg?tr=w-154,q-80", price: 5}, 
      {id: 8, name: "Avocado", Image:"https://www.bigbasket.com/media/uploads/p/m/30009284_17-fresho-avocado-imported-medium.jpg?tr=w-154,q-80", price:101 }, 
      {id: 9, name: "Amaranthus ", Image:"https://www.bigbasket.com/media/uploads/p/m/40001242_18-fresho-amaranthus-red-cleaned-without-roots.jpg?tr=w-154,q-80", price:112 }, 
      {id: 10, name: "Sweet Corn", Image:"https://www.bigbasket.com/media/uploads/p/m/40004992_15-fresho-sweet-corn.jpg?tr=w-154,q-80", price:36}, 
      {id: 11, name: "Pear - Green", Image:"https://www.bigbasket.com/media/uploads/p/m/1202331_2-usa-pear-green-imported.jpg?tr=w-154,q-80", price:270 }, 
      {id: 12, name: "Thai Guava", Image:"https://www.bigbasket.com/media/uploads/p/m/40008984_9-fresho-guava-thai.jpg?tr=w-154,q-80", price:51 }, 
      {id: 13, name: "Blueberry", Image:"https://www.bigbasket.com/media/uploads/p/m/30009286_12-fresho-blueberry.jpg?tr=w-154,q-80", price:264 }, 
      {id: 14, name: "Cucumber ", Image:"https://www.bigbasket.com/media/uploads/p/m/10000668_13-fresho-cucumber-english.jpg?tr=w-154,q-80", price:48 }, 
      {id: 15, name: "Baby Spinach", Image:"https://www.bigbasket.com/media/uploads/p/m/40198829_2-fresho-baby-spinach-hydroponically-grown.jpg?tr=w-154,q-80", price:52}, 
      {id: 16, name: "Avocado ", Image:"https://www.bigbasket.com/media/uploads/p/m/10000312_21-fresho-avocado.jpg?tr=w-154,q-80", price:593 }, 
      {id: 17, name: "Zespri Kiwi", Image:"https://www.bigbasket.com/media/uploads/p/m/40025342_19-fresho-zespri-kiwi-sun-gold.jpg?tr=w-154,q-80", price:382 }, 
      {id: 18, name: "Fresh Figs", Image:"https://www.bigbasket.com/media/uploads/p/m/20001006_9-fresho-fresh-figs.jpg?tr=w-154,q-80", price:280 }, 
      {id: 19, name: "Capsicum Red", Image:"https://www.bigbasket.com/media/uploads/p/m/40287308_3-fresho-capsicum-red.jpg?tr=w-154,q-80", price:61 }, 
      {id: 20, name: "Dragon Fruit ", Image:"https://www.bigbasket.com/media/uploads/p/m/40113536_6-fresho-dragon-fruit-red-flesh.jpg?tr=w-154,q-80", price:133 }, 
]
function renderProducts(products,productList){
      const container = document.getElementById(productList);
      container.innerHTML="";
      products.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product-item");
          productDiv.innerHTML=`
          <img src="${product.Image}"/>
          <h3>${product.name}</h3>
          <h2>${product.price}</h2>
          <button onclick = "addToCart(${product.id})">Add to Cart</button>
          `
          container.appendChild(productDiv);
      })        
      
  }
  function addToCart(productId){
      const product = products.find(p => p.id === productId);
      let cart = JSON.parse(localStorage.getItem("cart"))||[];
      cart.push(product);
      localStorage.setItem("cart",JSON.stringify(cart));
      alert(`${product.name} is added to cart`)
      renderCart();
  }
  
  function renderCart(){
      const cart = JSON.parse(localStorage.getItem("cart"))||[];
      const container = document.getElementById("cartItems");
      container.innerHTML="";
      if(cart.length == 0){
          container.innerHTML="<h1>Your Cart is Empty</h1>"
      }
      cart.forEach(item => {
          const cartDiv = document.createElement("div");
          cartDiv.classList.add("cart-item");
          cartDiv.innerHTML=`
          <img src="${item.Image}"/>
          <h3>${item.name}</h3>
          <h2>${item.price}</h2>
          <button onclick = "removeFromCart(${item.id})">Remove</button>
          `
          container.appendChild(cartDiv);
      })
  }
  //Search functionality
  function searchProducts(query){
      const filterProducts = products.filter(product =>
           product.name.toLocaleLowerCase() .includes(query.toLocaleLowerCase())
      )
      renderProducts(filterProducts,"productList");
  }
  
  //Add EventListner to Button
  document.getElementById("searchButton")?.addEventListener("click",() => {
      const query = document.getElementById("productSearch") .value;
      searchProducts(query);
  })
  
  //Sorting
  function sortProducts(criteria){
      if(criteria === "price"){
          return products.sort((a,b) => a.price-b.price);
      }
      return products;
  }
  
  //Adding Event listners
  document.getElementById("sortOptions")?.addEventListener("change",(event)=>{
      const sortedProducts = sortProducts(event.target.value);
      renderProducts(sortedProducts,"productList");
  })
  
  
  function removeFromCart(productId){
      let cart = JSON.parse(localStorage.getItem("cart"))||[];
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem("cart",JSON.stringify(cart));
      alert("Product is removed successfully");
      renderCart();
  }
  
  
  function renderSubtotal(cart){
      const subtotal = cart.reduce((total,item) => total + item.price,0);
      const subtotalContainer = document.getElementById("subtotal");
      if(cart.length > 0){
          subtotalContainer.innerHTML = `Subtotal : Rs. ${subtotal}`
      }else{
              subtotalContainer.innerHTML = `No items in the cart`
          }
  }
  
  if(document.getElementById("productList"))renderProducts(products,"productList");
  if(document.getElementById("cartItems"))renderCart();

  document.getElementById("registerForm") .addEventListener("submit",function(event) {
      event.preventDefault();
      let username = document.getElementById("regUsername").value;
      let password = document.getElementById("regPassword").value;
      if (username === "" || password === "") {
          alert("All fields are required!");
          return;
      }
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let userExists = users.some(user => user.username === username);
      if(userExists){
          alert("username already taken!");
          return;
      }
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successfully! You can now log in.");
      document.getElementById("registerForm").reset();
  });
  //Login User
  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      let username = document.getElementById("loginUsername").value;
      let password = document.getElementById("loginPassword").value;
      let message = document.getElementById("message");
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let validUser = users.find(user => user.username === username && user.password === password);
      if(validUser){
          message.style.color = "green";
          message.textContent = "Login successful!";
      }else{
          message.style.color = "red";
          message.textContent = "Invalid username or password!";
      }
      document.getElementById("loginFrom").reset();
  });