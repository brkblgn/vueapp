<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("stock.products.products") }}</div>
            <h2 class="page-title">{{ $t("stock.products.products") }}</h2>
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                  {{ $t("stock.products.create_product") }}
                </a>
              </span>
              <a
                href="#"
                class="btn btn-primary d-none d-sm-inline-block"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
              >
                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                {{ $t("stock.products.create_product") }}
              </a>
              <a
                href="#"
                class="btn btn-primary d-sm-none btn-icon"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
                aria-label="Create new product"
              >
                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">products</h3>
              </div>
              <div class="card-body border-bottom py-3">
                <div class="d-flex">
                  <div class="text-muted">
                    Show
                    <div class="mx-2 d-inline-block">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        value="8"
                        size="3"
                        aria-label="products count"
                      />
                    </div>
                    entries
                  </div>
                  <div class="ms-auto text-muted">
                    Search:
                    <div class="ms-2 d-inline-block">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        aria-label="Search product"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table
                  class="table card-table table-vcenter text-nowrap datatable"
                >
                  <thead>
                    <tr>
                      <th class="w-1">
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select all products"
                        />
                      </th>
                      <th class="w-1">
                        No.
                        <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-sm text-dark icon-thick"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="6 15 12 9 18 15" />
                        </svg>
                      </th>
                      <th>product Subject</th>
                      <th>{{ $t("sales.invoices.table.client") }}</th>
                      <th>VAT No.</th>
                      <th>{{ $t("sales.invoices.table.created_at") }}</th>
                      <th>Status</th>
                      <th>{{ $t("sales.invoices.table.price") }}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="inv in ProductGetter" :key="inv.id">
                      <td>
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select product"
                        />
                      </td>
                      <td>
                        <span class="text-muted">{{ inv.company }}</span>
                      </td>
                      <td>
                        <a
                          href="invoice.html"
                          class="text-reset"
                          tabindex="-1"
                          >{{ inv.company }}</a
                        >
                      </td>
                      <td>
                        <span class="flag flag-country-us"></span>
                        {{ inv.client_id }}
                      </td>
                      <td>87956621</td>
                      <td>{{ inv.company }}</td>
                      <td><span class="badge bg-success me-1"></span> Paid</td>
                      <td>{{ inv.company }} {{ inv.short_name }}</td>
                      <td class="text-end">
                        <span class="dropdown">
                          <button
                            class="btn dropdown-toggle align-text-top"
                            data-bs-boundary="viewport"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#"> Duzenle </a>
                            <a
                              class="dropdown-item"
                              @click="deleteProductt(inv.id)"
                            >
                              Sil
                            </a>
                          </div>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer d-flex align-items-center">
                <p class="m-0 text-muted">
                  Showing <span>1</span> to <span>8</span> of
                  <span>16</span> entries
                </p>
                <ul class="pagination m-0 ms-auto">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      prev
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      next
                      <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal modal-blur fade"
    id="modal-report"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("stock.products.create_product") }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">{{
                  $t("stock.products.modal.product_name")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="this.new_product.name"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">{{
                  $t("stock.products.modal.product_salesPrice")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="this.new_product.salesPrice"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">{{
                  $t("stock.products.modal.product_cost")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="this.new_product.cost"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">{{
                  $t("stock.products.modal.product_stock")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  autocomplete="off"
                  v-model="this.new_product.stock"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="#"
            class="btn btn-link link-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </a>
          <a
            href="#"
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click="this.postProduct(new_product)"
          >
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            {{ $t("stock.products.create_product") }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal modal-blur fade"
    id="modal-report2"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Invoice</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Your report name"
              v-model="new_product.company"
            />
            <small v-if="!new_product.company" class="form-text text-danger"
              >The Name filed is required</small
            >
          </div>
          <div class="mb-3">
            <label class="form-label">Job Title</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Your report name"
              v-model="new_product.company"
            />
            <small v-if="!new_product.company" class="form-text text-danger"
              >The Job Title filed is required</small
            >
          </div>
          <div class="mb-3">
            <label class="form-label">Pay Rate</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Your report name"
              v-model="new_product.company"
            />
            <small v-if="!new_product.company" class="form-text text-danger"
              >The Job Title filed is required</small
            >
          </div>
          <div class="mb-3">
            <label class="form-label">Active</label>
            <input
              type="radio"
              id="one"
              value="1"
              v-model="new_product.company"
            />
            <label for="one">Active</label>
            <br />
            <input
              type="radio"
              id="zero"
              value="0"
              v-model="new_product.company"
            />
            <label for="two">Passive</label>
            <br />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <span aria-hidden="true"></span>
          <button
            type="button"
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click="postProduct(new_product)"
            :disabled="!new_product.company || !new_product.short_name"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* <label class="form-label">client</label>
                <select
                  class="form-select"
                  placeholder="Select a date"
                  id="select-people"
                  value=""
                  v-model="this.new_invoice.client_id"
                >
                  <option v-for="client in ClientGetter" :key="client.id"
                    :value="client.id"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/000m.jpg)"&gt;&lt;/span&gt;'
                  >
                    {{ client.company }}
                  </option>
                </select>
                */
import { mapGetters } from "vuex";
import { loadRecords, createRecord, deleteRecord } from "@/services/model";

export default {
  data() {
    return {
      new_product: {
        name: null,
        salesPrice: null,
        cost: null,
        stock: null,
      },
    };
  },
  mounted() {
    this.loadProduct();
  },
  computed: {
    ...mapGetters("Stock", [
      "ProductGetter", // -> this.someGetter
    ]),
  },
  methods: {
    loadClient() {
      loadRecords("Stock", "product");
    },
    loadProduct() {
      loadRecords("Stock", "product");
    },
    postProduct(product) {
      createRecord("Stock", "product", product);
    },
    deleteProductt(product) {
      deleteRecord("Stock", "product", product);
    },
  },
};
</script>
