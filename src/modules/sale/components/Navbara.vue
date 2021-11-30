<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#navbar-extra"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        <span class="nav-link-title"> {{ $t("navbar.sales.orders") }} </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/sale/orders">
          Quatations
        </router-link>
        <router-link class="dropdown-item" to="/sale/orders">
          Orders
        </router-link>
        <router-link class="dropdown-item" to="/sale/orders">
          Sales Teams
        </router-link>
        <router-link class="dropdown-item" to="/sale/orders">
          Customers
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
        <span class="nav-link-title"> {{ $t("navbar.sales.invoices") }} </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/stock/products">
          Orders to Invoice
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Orders to Upsell
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
        <span class="nav-link-title"> Products </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/stock/products">
          {{ $t('navbar.stock.products') }}
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Product Variants
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navbara1',
};
</script>
