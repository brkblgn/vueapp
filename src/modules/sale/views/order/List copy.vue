<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("sales.sales") }}</div>  <!-- Satislar -->
            <h2 class="page-title">{{ $t("sales.invoices.invoices") }}</h2> <!-- Faturalar -->
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                   {{ $t("sales.invoices.create_report") }} <!-- "Satis Raporu Olustur", -->
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
                {{ $t("sales.invoices.create_invoice") }} <!-- "Fatura Olustur", -->
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
                <h3 class="card-title">Invoices</h3>
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
                      <th>{{ $t("sales.invoices.table.client") }}</th>  <!-- Musteri -->
                      <th>VAT No.</th>
                      <th>{{ $t("sales.invoices.table.created_at") }}</th><!-- Tarih -->
                      <th>Status</th>
                      <th>{{ $t("sales.invoices.table.price") }}</th><!-- Tutar -->
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="inv in InvoiceGetter" :key="inv.id">
                      <td>
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select invoice"
                        />
                      </td>
                      <td>
                        <span class="text-muted">{{ inv.invoice_num }}</span>
                      </td>
                      <td>
                        <a
                          href="invoice.html"
                          class="text-reset"
                          tabindex="-1"
                          >{{ inv.title }}</a
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
                              @click="this.deleteInvoice(inv.id)"
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
          <h5 class="modal-title">{{ $t("sales.invoices.modal.new_invoice") }}</h5>
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
                <label class="form-label">{{ $t("sales.invoices.modal.invoice_title") }}</label>
                <input type="text" class="form-control" v-model="this.new_invoice.title" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">client</label>
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
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">invoice address</label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">delivery address</label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">exp</label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">pricelist</label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">payment term</label>
                <input type="date" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Fatura Basligi</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Your report name"
              v-model="new_invoice.title"
            />
          </div>
          <label class="form-label">Report type</label>
          <div class="form-selectgroup-boxes row mb-3">
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="report-type"
                  value="1"
                  class="form-selectgroup-input"
                  checked
                />
                <span
                  class="form-selectgroup-label d-flex align-items-center p-3"
                >
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1"
                      >Simple</span
                    >
                    <span class="d-block text-muted"
                      >Provide only basic data needed for the report</span
                    >
                  </span>
                </span>
              </label>
            </div>
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  type="radio"
                  name="report-type"
                  value="1"
                  class="form-selectgroup-input"
                />
                <span
                  class="form-selectgroup-label d-flex align-items-center p-3"
                >
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1"
                      >Advanced</span
                    >
                    <span class="d-block text-muted"
                      >Insert charts and additional advanced analyses to be
                      inserted in the report</span
                    >
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="mb-3">
                <label class="form-label">Report url</label>
                <div class="input-group input-group-flat">
                  <span class="input-group-text">
                    https://tabler.io/reports/
                  </span>
                  <input
                    type="text"
                    class="form-control ps-0"
                    value="report-01"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label">Visibility</label>
                <select class="form-select">
                  <option value="1" selected>Private</option>
                  <option value="2">Public</option>
                  <option value="3">Hidden</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Client name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Reporting period</label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-lg-12">
              <div>
                <label class="form-label">Additional information</label>
                <textarea class="form-control" rows="3"></textarea>
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
          <a href="#"
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click="this.postInvoice(new_invoice)">
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
            Create new report
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  loadRecords,
  createRecord,
  deleteRecord,
} from '@/services/modela';

export default {
  data() {
    return {
      new_invoice: {
        title: null,
        client_id: null,
        invoice_num: null,
        currency: null,
        tag: null,
      },
      selected: {
        company: 'aa',
      },
    };
  },
  mounted() {
    this.loadInvoices();
    this.loadClients();
  },
  computed: {
    ...mapGetters('Invoice', [
      'InvoiceGetter', // -> this.someGetter
    ]),
    ...mapGetters('Client', [
      'ClientGetter',
    ]),
  },
  methods: {
    loadClients() {
      loadRecords('Client', 'client');
    },
    loadInvoices() {
      loadRecords('Invoice', 'invoice');
    },
    postInvoice(invoice) {
      createRecord('Invoice', 'invoice', invoice);
    },
    deleteInvoice(invoice) {
      deleteRecord('Invoice', 'invoice', invoice);
    },
  },
};
</script>
