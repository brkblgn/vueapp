<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("contacts.title") }}</div>
            <h2 class="page-title">{{ $t("contacts.title") }}</h2>
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                  {{ $t("contacts.contacts.create_report") }}
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
                {{ $t("contacts.contacts.create_contact") }}
                <!-- {{ $t("sales.invoices.create_invoice") }}-->
              </a>
              <a
                href="#"
                class="btn btn-primary d-sm-none btn-icon"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
                aria-label="Create new invoice"
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
                <h3 class="card-title">Kontaklar</h3>
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
                        aria-label="Invoices count"
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
                        aria-label="Search invoice"
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
                          aria-label="Select all invoices"
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
                      <th>Invoice Subject</th>
                      <th>{{ $t("sales.invoices.table.client") }}</th>
                      <th>VAT No.</th>
                      <th>{{ $t("sales.invoices.table.created_at") }}</th>
                      <th>Status</th>
                      <th>{{ $t("sales.invoices.table.price") }}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="inv in ContactGetter" :key="inv._id">
                      <td>
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select invoice"
                        />
                      </td>
                      <td>
                        <span class="text-muted">{{ inv._id }}</span>
                      </td>
                      <td>
                        <router-link
                          :to="{ name: 'Contacts', params: { id: inv._id } }"
                          class="text-reset"
                          tabindex="-1"
                          >{{ inv.name }}</router-link
                        >
                      </td>
                      <td>
                        <span class="flag flag-country-us"></span>
                        {{ inv.client_id }}
                      </td>
                      <td>87956621</td>
                      <td>{{ inv.created_date }}</td>
                      <td><span class="badge bg-success me-1"></span> Paid</td>
                      <td>{{ inv.genel_toplam }} {{ inv.currency }}</td>
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
                              @click="this.deleteContact(inv._id)"
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
          <h5 class="modal-title">
            {{ $t("contacts.contacts.modal.new_contact") }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
           <fieldset class="form-fieldset">
            <div class="mb-3">
              <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_name")
              }}</label>
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_email")
              }}</label>
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.email"
              />
              </div>
                <div class="mb-3">
              <label class="form-label"> {{ $t("contacts.contacts.modal.contact_phone") }}</label>
              <input type="text"
                  class="form-control"
                  data-mask="(00) 0000-0000"
                  data-mask-visible="true"
                  placeholder="(00) 0000-0000"
                  autocomplete="off"  v-model="this.new_contact.phone" />
            </div>

             </fieldset>
               <strong >ADRES</strong>
                 <fieldset class="form-fieldset">
            <div class="mb-3">
               <div class="form-group mb-3 ">
                 <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_adress.country")
              }}</label>
              <input
                type="email"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.address.country"
              />
                <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_adress.town")
              }}</label>
              <input
                type="email"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.address.town"
              />
                  <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_adress.city")
              }}</label>
              <input
                type="email"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.address.city"
              />
              <label class="form-label required">{{
                $t("contacts.contacts.modal.contact_adress.street")
              }}</label>
              <input
                type="email"
                class="form-control"
                autocomplete="off"
                v-model="this.new_contact.address.street"
              />
            </div>
            </div>
          </fieldset>
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
            @click="this.postContact(new_contact)"
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
            {{ $t("contacts.contacts.create_contact") }}
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
import { loadRecords, createRecord, deleteRecord } from "@/services/model";

export default {
  data() {
    return {
      new_contact: {
        name: null,
        email: null,
        jobPosition: null,
        phone: null,
        website: null,
        address: {
          street: " ",
          town: " ",
          city: " ",
          country: "",
        },
      },
      selected: {
        company: "aa",
      },
    };
  },
  mounted() {
    this.loadContacts();
  },
  computed: {
    ...mapGetters("Contact", [
      "ContactGetter", // -> this.someGetter
    ]),
  },
  methods: {
    loadContacts() {
      loadRecords("Contact", "contact");
    },
    postContact(contact) {
      createRecord("Contact", "contact", contact);
    },
    deleteContact(contact) {
      deleteRecord("Contact", "contact", contact);
    },
  },
};
</script>
