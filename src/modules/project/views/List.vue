<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("projects.title") }}</div>
            <h2 class="page-title">{{ $t("projects.title") }}</h2>
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                  {{ $t("projects.projects.create_report") }}
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
                {{ $t("projects.projects.create_project") }}
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
                      <th>{{ $t("projects.projects.modal.project_name") }}</th>
                      <th>
                        {{ $t("projects.projects.modal.project_members") }}
                      </th>
                      <th>VAT No.</th>
                      <th>
                        {{ $t("projects.projects.modal.project_created_date") }}
                      </th>
                      <th>
                        {{ $t("projects.projects.modal.project_members") }}
                      </th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="inv in ProjectGetter" :key="inv._id">
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
                          :to="{ name: 'Projects', params: { id: inv._id } }"
                          class="text-reset"
                          tabindex="-1"
                          >{{ inv.name }}</router-link
                        >
                      </td>
                      <td>
                        <span class="flag flag-country-us"></span>
                      </td>
                      <td></td>
                      <td>{{ inv.createdAt }}</td>
                      <td><span class="badge bg-success me-1"></span></td>
                      <td></td>
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
                              @click="this.deleteProject(inv._id)"
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
            {{ $t("projects.projects.modal.new_project") }}
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
                $t("projects.projects.modal.project_name")
              }}</label>
              <input
                type="text"
                class="form-control"
                autocomplete="off"
                v-model="this.new_project.name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">{{
                $t("projects.projects.modal.project_members")
              }}</label>
              <select
                multiple
                class="vs__dropdown-toggle"
                :taggable="true"
                v-bind:class="{ 'fix-height': multiple === 'true' }"
                placeholder="Select a name"
                v-model="this.new_project.members"
                @tag="addTag"
              >
                <option
                  v-for="contact in ContactGetter"
                  :key="contact._id"
                  :value="contact._id"
                  :option="contact._id"
                  @click="this.AddMultiselect(contact._id)"
                >
                  {{ contact.name }}
                </option>
              </select>
              <tr v-for="i in multiselectList.length-1" :key="i">
             <dd class="col-7" v-if="multiselectList[i] !== null"> Value:{{ memberss(multiselectList[i]).name }}</dd>
              <!---  {{ this.multiselectList[i] }}---->
                <button v-on:click="remove(this.multiselectList.[i])">
                  Delete
                </button>
                <br />
              </tr>
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
            @click="this.postProject(new_project)"
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
            {{ $t("projects.projects.create_project") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint no-underscore-dangle: 0 */
import { mapGetters } from "vuex";
import { loadRecords, createRecord, deleteRecord } from "@/services/model";

export default {
  data() {
    return {
      new_project: {
        name: null,
        members: [],
      },
      multiselectList: [null],
      selected: {
        company: "aa",
      },
    };
  },

  mounted() {
    this.loadProjects();
    this.loadContacts();
    console.log(this.multiselectList.length);
  },
  computed: {
    ...mapGetters("Project", [
      "ProjectGetter", // -> this.someGetter
    ]),
    ...mapGetters("Contact", ["ContactGetter"]),
    contacts() {
      return this.ContactGetter;
    },
  },
  methods: {
    loadProjects() {
      loadRecords("Project", "project");
    },
    loadContacts() {
      loadRecords("Contact", "contact");
    },
    postProject(project) {
      createRecord("Project", "project", project);
    },
    deleteProject(project) {
      deleteRecord("project", "project", project);
    },
      ControlNull() {
      for (let s = 0; s <= this.multiselectList.length - 1; s++) {
        console.log(this.multiselectList[s]);
        if (this.multiselectList[s] === null) {
        return this.multiselectList.splice(this.multiselectList.indexOf(s), 1);
        }
      }
      return true;
    },

    remove(i) {
      console.log("indexOf", this.multiselectList.indexOf(i));
      this.multiselectList.splice(this.multiselectList.indexOf(i), 1);
      console.log("removeLength", this.multiselectList.length);
      console.log(this.multiselectList);
      this.new_project.members = this.multiselectList;
      return this.multiselectList;
    },
    AddMultiselect(i) {
      // this.ControlNull()
      console.log(this.ControlSame(i));
      if (this.ControlSame(i)) {
        // this.ControlSame(i);
        this.multiselectList.push(i);
      }
      //  console.log(i);
      //  console.log("AddLength", this.multiselectList.length);
      //  console.log(this.multiselectList);
      this.new_project.members = this.multiselectList;
      return this.multiselectList;
      // return this.contacts.find((contacts) => contacts._id === i);
    },
    ControlSame(t) {
      for (let s = 0; s <= this.multiselectList.length - 1; s++) {
        console.log(this.multiselectList[s]);
        if (this.multiselectList[s] === t) {
          return false;
        }
      }
      return true;
    },
    MemeberName(t) {
      for (let s = 0; s <= this.multiselectList.length - 1; s++) {
        console.log(this.multiselectList[s]);
        if (this.multiselectList[s] === t) {
          return false;
        }
      }
      return true;
    },
     memberss(t) {
      console.log(t);
      return this.contacts.find((contacts) => (contacts._id) === t);
    },

  },
};
</script>
