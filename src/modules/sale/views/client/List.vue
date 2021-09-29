<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("sales.clients") }}</div>
            <h2 class="page-title">{{ $t("sales.invoices.invoices") }}</h2>
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                  {{ $t("sales.invoices.create_report") }}
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
                {{ $t("sales.invoices.create_invoice") }}
              </a>
              <a
                href="#"
                class="btn btn-primary d-sm-none btn-icon"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
                aria-label="Create new client"
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
                <h3 class="card-title">clients</h3>
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
                        aria-label="clients count"
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
                        aria-label="Search client"
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
                          aria-label="Select all clients"
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
                      <th>client Subject</th>
                      <th>{{ $t("sales.invoices.table.client") }}</th>
                      <th>VAT No.</th>
                      <th>{{ $t("sales.invoices.table.created_at") }}</th>
                      <th>Status</th>
                      <th>{{ $t("sales.invoices.table.price") }}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="inv in ClientGetter" :key="inv.id">
                      <td>
                        <input
                          class="form-check-input m-0 align-middle"
                          type="checkbox"
                          aria-label="Select client"
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
                              @click="deleteClientt(inv.id)"
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
          <h5 class="modal-title">New report</h5>
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
                <label class="form-label">Fatura Basligi</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">client</label>
                <select
                  type="text"
                  class="form-select"
                  placeholder="Select a date"
                  id="select-people"
                  value=""
                >
                  <option
                    value="1"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/000m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Paweł Kuna
                  </option>
                  <option
                    value="2"
                    data-custom-properties='&lt;span class="avatar avatar-xs"&gt;JL&lt;/span&gt;'
                  >
                    Jeffie Lewzey
                  </option>
                  <option
                    value="3"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/002m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Mallory Hulme
                  </option>
                  <option
                    value="4"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/003m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Dunn Slane
                  </option>
                  <option
                    value="5"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/000f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Emmy Levet
                  </option>
                  <option
                    value="6"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/001f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Maryjo Lebarree
                  </option>
                  <option
                    value="7"
                    data-custom-properties='&lt;span class="avatar avatar-xs"&gt;EP&lt;/span&gt;'
                  >
                    Egan Poetz
                  </option>
                  <option
                    value="8"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/002f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Kellie Skingley
                  </option>
                  <option
                    value="9"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/003f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Christabel Charlwood
                  </option>
                  <option
                    value="10"
                    data-custom-properties='&lt;span class="avatar avatar-xs"&gt;HS&lt;/span&gt;'
                  >
                    Haskel Shelper
                  </option>
                  <option
                    value="11"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/006m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Lorry Mion
                  </option>
                  <option
                    value="12"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/004f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Leesa Beaty
                  </option>
                  <option
                    value="13"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/007m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Perren Keemar
                  </option>
                  <option
                    value="14"
                    data-custom-properties='&lt;span class="avatar avatar-xs"&gt;SA&lt;/span&gt;'
                  >
                    Sunny Airey
                  </option>
                  <option
                    value="15"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/009m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Geoffry Flaunders
                  </option>
                  <option
                    value="16"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/010m.jpg)"&gt;&lt;/span&gt;'
                  >
                    Thatcher Keel
                  </option>
                  <option
                    value="17"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/005f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Dyann Escala
                  </option>
                  <option
                    value="18"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/006f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Avivah Mugleston
                  </option>
                  <option
                    value="19"
                    data-custom-properties='&lt;span class="avatar avatar-xs"&gt;AA&lt;/span&gt;'
                  >
                    Arlie Armstead
                  </option>
                  <option
                    value="20"
                    data-custom-properties=
'&lt;span class="avatar avatar-xs"
style="background-image: url(./static/avatars/008f.jpg)"&gt;&lt;/span&gt;'
                  >
                    Tessie Curzon
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
              v-model="new_client.company"
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
          <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
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
              v-model="new_client.company"
            />
            <small v-if="!new_client.company" class="form-text text-danger"
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
              v-model="new_client.company"
            />
            <small v-if="!new_client.company" class="form-text text-danger"
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
              v-model="new_client.company"
            />
            <small v-if="!new_client.company" class="form-text text-danger"
              >The Job Title filed is required</small
            >
          </div>
          <div class="mb-3">
            <label class="form-label">Active</label>
            <input
              type="radio"
              id="one"
              value="1"
              v-model="new_client.company"
            />
            <label for="one">Active</label>
            <br />
            <input
              type="radio"
              id="zero"
              value="0"
              v-model="new_client.company"
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
            @click="postClient(new_client)"
            :disabled="
              !new_client.company ||
              !new_client.short_name
            "
          >
            Save
          </button>
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
      new_client: {
        id: '',
        company: '',
        short_name: '',
        active: 1,
      },
    };
  },
  mounted() {
    this.loadClient();
  },
  computed: {
    ...mapGetters('Client', [
      'ClientGetter', // -> this.someGetter
    ]),
  },
  methods: {
    loadClient() {
      loadRecords('Client', 'client');
    },
    postClient(client) {
      createRecord('Client', 'client', client);
    },
    deleteClientt(client) {
      deleteRecord('Client', 'client', client);
    },
  },
};
</script>
