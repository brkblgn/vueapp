<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#navbar-extra"
        role="button"
        aria-expanded="false"
      >
        <span class="nav-link-title"> Overview </span>
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
        <span class="nav-link-title"> Operations </span>
      </a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/stock/products">
          Transfers
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Replanishment
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Inventory Adjustments
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Scrap
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Run Scheduler
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
          Products
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Product Variants
        </router-link>
        <router-link class="dropdown-item" to="/stock/products">
          Lot/Serial Numbers
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navbara',
};
</script>
