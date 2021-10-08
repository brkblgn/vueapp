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
          <div class="col-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{ project?.name }}</h3>
                <div class="card-actions">
                  <a href="#">
                    Edit configuration<!-- Download SVG icon from http://tabler-icons.io/i/edit -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ms-1"
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
                      <path
                        d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                      />
                      <path
                        d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                      />
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <dl class="row">
                  <dt class="col-5">ID:</dt>
                  <dd class="col-7">{{ project?._id }} </dd>
                  <dt class="col-5">{{ $t("projects.projects.project_name") }}</dt>
                  <dd class="col-7">{{ project?.name }}</dd>
                  <dt class="col-5">{{ $t("projects.projects.project_members") }}</dt>
                  <dd class="col-7">{{ project?.members }}</dd>

                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint no-underscore-dangle: 0 */
/* eslint "no-trailing-spaces": ["warn", {"skipBlankLines": true}] */
import { mapGetters } from 'vuex';
import {
  loadRecords, createRecord, deleteRecord,
} from '@/services/model';

export default {
  data() {
    return {
      new_project: {
        id: '',
        name: '',
      },
      selected: {
        company: 'aa',
      },
    };
  },
  mounted() {
    this.loadProjects();
    this.loadContacts();
  },
  computed: {
    ...mapGetters('Project', [
      'ProjectGetter', // -> this.someGetter
    ]),
      ...mapGetters('Contact', [
      'ContactGetter',
    ]),
    projects() {
      return this.ProjectGetter;
    },
    contacts() {
      return this.ContactGetter;
    },
    project: {
      get() {
        const idd = this.$route.params.id;
        console.log(this.$route.params.id)
        console.log(Number(this.$route.params.id))
        // return idd ? this.contacts.filter((contact) => (contact)._id === idd) : {};
        return idd ? this.projects.find((project) => (project)._id === idd) : {};
      },
    },
  },
  methods: {
    loadProjects() {
      loadRecords('project', 'project');
    },
    postProject(project) {
      createRecord('project', 'project', project);
    },
    loadContacts() {
      loadRecords("Contact", "contact");
    },
    deleteProject(project) {
      deleteRecord('project', 'project', project);
    },
  },
};
</script>
