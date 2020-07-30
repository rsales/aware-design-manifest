<template>
  <div class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-white p-2">
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="font-semibold text-xl tracking-tight">
          Connecting Teams
        </span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- <nav>
      <div class="container">
        <p class="navbar-left brand">
          Connecting Teams |
        </p>
        <ul class="navbar-left">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>

        <ul class="navbar-right">
          <li>
            <a href="#" id="cart"
              ><i class="fa fa-shopping-cart"></i> Cart
              <span class="badge">3</span></a
            >
          </li>
        </ul>
      </div>
    </nav> -->

    <!-- <div class="container">
      <div class="shopping-cart">
        <div class="shopping-cart-header">
          <i class="fa fa-shopping-cart cart-icon"></i
          ><span class="badge">3</span>
          <div class="shopping-cart-total">
            <span class="lighter-text">Total:</span>
            <span class="main-color-text">$2,229.97</span>
          </div>
        </div>
        <ul class="shopping-cart-items">
          <li class="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
              alt="item1"
            />
            <span class="item-name">Sony DSC-RX100M III</span>
            <span class="item-price">$849.99</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>

          <li class="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
              alt="item1"
            />
            <span class="item-name">KS Automatic Mechanic...</span>
            <span class="item-price">$1,249.99</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>

          <li class="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
              alt="item1"
            />
            <span class="item-name">Kindle, 6" Glare-Free To...</span>
            <span class="item-price">$129.99</span>
            <span class="item-quantity">Quantity: 01</span>
          </li>
        </ul>

        <a href="#" class="button">Checkout</a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 9999;
}
</style>
