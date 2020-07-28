<template>
  <div class="navbar">
    <nav>
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
    </nav>

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
$main-color: #6394f8;
$light-text: #abb0be;
.navbar {
  position: fixed;
  width: 100%;
  z-index: 9999;
}

.lighter-text {
  color: #abb0be;
}

.main-color-text {
  color: $main-color;
}

nav {
  padding: 20px 0 40px 0;
  background: #fff;
  font-size: 16px;

  .brand {
    font-family: "Lato", Arial, sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-top: -4px;
  }

  .navbar-left {
    float: left;
  }

  .navbar-right {
    float: right;
  }
  ul {
    li {
      display: inline;
      padding-left: 20px;
      a {
        font-family: "Lato", Arial, sans-serif;
        color: #777777;
        text-decoration: none;

        &:hover {
          color: black;
        }
      }
    }
  }
}

.container {
  margin: auto;
  width: 92%;
}

.badge {
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}

.shopping-cart {
  margin: 20px 0;
  float: right;
  background: white;
  width: 320px;
  position: relative;
  border-radius: 3px;
  padding: 20px;

  .shopping-cart-header {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;

    .shopping-cart-total {
      float: right;
    }
  }

  .shopping-cart-items {
    padding-top: 20px;

    li {
      margin-bottom: 18px;
    }

    img {
      float: left;
      margin-right: 12px;
    }

    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }

    .item-price {
      color: $main-color;
      margin-right: 8px;
    }

    .item-quantity {
      color: $light-text;
    }
  }
}

.shopping-cart:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}

.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background: $main-color;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  &:hover {
    background: lighten($main-color, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
