<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#navbar-extra"
        role="button"
        aria-expanded="false"
      >
        <span class="nav-link-title"> Home </span>
      </a>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#navbar-extra"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        <span class="nav-link-title"> Sales </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/sale/orders">
          Invoices
        </router-link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#navbar-extra"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        <span class="nav-link-title"> Stocks </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/stock/products">
          Products
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navbara2',
};
</script>
