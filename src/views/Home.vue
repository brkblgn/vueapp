<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{{ $t("header.company") }}</div>
            <h2 class="page-title">{{ $t("header.apps") }}</h2>
          </div>
          <!-- Page title actions -->
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <span class="d-none d-sm-inline">
                <a href="#" class="btn btn-white">
                  {{ $t("header.settings") }}
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
                {{ $t("header.new_app") }}
              </a>
              <a
                href="#"
                class="btn btn-primary d-sm-none btn-icon"
                data-bs-toggle="modal"
                data-bs-target="#modal-report"
                aria-label="Create new invoice"
              >
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
        <div class="row row-cards">
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/sales/invoices">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
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
                        <path d="M18 21v-14" />
                        <path d="M9 15l3 -3l3 3" />
                        <path d="M15 10l3 -3l3 3" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <line x1="12" y1="21" x2="12" y2="12" />
                        <path d="M3 6l3 -3l3 3" />
                        <path d="M6 21v-18" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">{{ $t("apps.sales") }}</div>
                    <div class="text-muted">
                      1 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/stock/products">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/stack -->
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
                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                        <polyline points="4 12 12 16 20 12" />
                        <polyline points="4 16 12 20 20 16" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">{{ $t("apps.stock") }}</div>
                    <div class="text-muted">
                      3 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/sales/clients">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/affiliate -->
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
                        <path
                          d="M5.5 5.5l1.706 5.685m5.607 5.609l5.687 1.706"
                        />
                        <path d="M11.683 12.317l6.817 -6.817" />
                        <circle cx="5.5" cy="5.5" r="1.5" />
                        <circle cx="18.5" cy="5.5" r="1.5" />
                        <circle cx="18.5" cy="18.5" r="1.5" />
                        <circle cx="8.5" cy="15.5" r="4.5" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">
                      {{ $t("apps.clients") }}
                    </div>
                    <div class="text-muted">
                      0 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/contacts">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/chart-bubble -->
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
                        <circle cx="6" cy="16" r="3" />
                        <circle cx="16" cy="19" r="2" />
                        <circle cx="14.5" cy="7.5" r="4.5" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">
                      {{ $t("apps.contacts") }}
                    </div>
                    <div class="text-muted">
                      2 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/sales/invoices">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/chart-arrows-vertical -->
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
                        <path d="M18 21v-14" />
                        <path d="M9 15l3 -3l3 3" />
                        <path d="M15 10l3 -3l3 3" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <line x1="12" y1="21" x2="12" y2="12" />
                        <path d="M3 6l3 -3l3 3" />
                        <path d="M6 21v-18" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">{{ $t("apps.sales") }}</div>
                    <div class="text-muted">
                      1 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/stock/products">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/stack -->
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
                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                        <polyline points="4 12 12 16 20 12" />
                        <polyline points="4 16 12 20 20 16" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">{{ $t("apps.stock") }}</div>
                    <div class="text-muted">
                      3 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/stock/products">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/affiliate -->
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
                        <path
                          d="M5.5 5.5l1.706 5.685m5.607 5.609l5.687 1.706"
                        />
                        <path d="M11.683 12.317l6.817 -6.817" />
                        <circle cx="5.5" cy="5.5" r="1.5" />
                        <circle cx="18.5" cy="5.5" r="1.5" />
                        <circle cx="18.5" cy="18.5" r="1.5" />
                        <circle cx="8.5" cy="15.5" r="4.5" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">
                      {{ $t("apps.manufacturing") }}
                    </div>
                    <div class="text-muted">
                      0 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-3">
            <router-link class="card card-link" to="/projects">
            <a class="card card-link" href="#">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto">
                    <span
                      class="avatar rounded"
                      style="background-color: smoke"
                    >
                      <!-- Download SVG icon from http://tabler-icons.io/i/chart-bubble -->
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
                        <circle cx="6" cy="16" r="3" />
                        <circle cx="16" cy="19" r="2" />
                        <circle cx="14.5" cy="7.5" r="4.5" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="font-weight-medium">
                      {{ $t("apps.project") }}
                    </div>
                    <div class="text-muted">
                      2 {{ $t("header.new_notification") }}
                    </div>
                  </div>
                </div>
              </div>
            </a>
            </router-link>
          </div>

          <div class="col-md-8">
            <div class="card" style="height: calc(24rem + 10px)">
              <div
                class="card-body card-body-scrollable card-body-scrollable-shadow"
              >
                <div class="divide-y">
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar">JL</span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Jeffie Lewzey</strong> commented on your
                          <strong>"I'm not a witch."</strong> post.
                        </div>
                        <div class="text-muted">yesterday</div>
                      </div>
                      <div class="col-auto align-self-center">
                        <div class="badge bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/002m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          It's <strong>Mallory Hulme</strong>'s birthday. Wish
                          him well!
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                      <div class="col-auto align-self-center">
                        <div class="badge bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/003m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Dunn Slane</strong> posted
                          <strong>"Well, what do you want?"</strong>.
                        </div>
                        <div class="text-muted">today</div>
                      </div>
                      <div class="col-auto align-self-center">
                        <div class="badge bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/000f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Emmy Levet</strong> created a new project
                          <strong>Morning alarm clock</strong>.
                        </div>
                        <div class="text-muted">4 days ago</div>
                      </div>
                      <div class="col-auto align-self-center">
                        <div class="badge bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/001f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Maryjo Lebarree</strong> liked your photo.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar">EP</span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Egan Poetz</strong> registered new client as
                          <strong>Trilia</strong>.
                        </div>
                        <div class="text-muted">yesterday</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/002f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Kellie Skingley</strong> closed a new deal on
                          project <strong>Pen Pineapple Apple Pen</strong>.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/003f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Christabel Charlwood</strong> created a new
                          project for <strong>Wikibox</strong>.
                        </div>
                        <div class="text-muted">4 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar">HS</span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Haskel Shelper</strong> change status of
                          <strong>Tabler Icons</strong> from
                          <strong>open</strong> to <strong>closed</strong>.
                        </div>
                        <div class="text-muted">today</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/006m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Lorry Mion</strong> liked
                          <strong>Tabler UI Kit</strong>.
                        </div>
                        <div class="text-muted">yesterday</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/004f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Leesa Beaty</strong> posted new video.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/007m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Perren Keemar</strong> and 3 others followed
                          you.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar">SA</span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Sunny Airey</strong> upload 3 new photos to
                          category <strong>Inspirations</strong>.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/009m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Geoffry Flaunders</strong> made a
                          <strong>$10</strong> donation.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/010m.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Thatcher Keel</strong> created a profile.
                        </div>
                        <div class="text-muted">3 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/005f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Dyann Escala</strong> hosted the event
                          <strong>Tabler UI Birthday</strong>.
                        </div>
                        <div class="text-muted">4 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span
                          class="avatar"
                          style="
                            background-image: url(./static/avatars/006f.jpg);
                          "
                        ></span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Avivah Mugleston</strong> mentioned you on
                          <strong>Best of 2020</strong>.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-auto">
                        <span class="avatar">AA</span>
                      </div>
                      <div class="col">
                        <div class="text-truncate">
                          <strong>Arlie Armstead</strong> sent a Review Request
                          to <strong>Amanda Blake</strong>.
                        </div>
                        <div class="text-muted">2 days ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row row-cards">
              <div class="col-12">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="bg-blue text-white avatar"
                          ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
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
                            <path
d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                            />
                            <path d="M12 3v3m0 12v3" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="font-weight-medium">132 Sales</div>
                        <div class="text-muted">12 waiting payments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="bg-green text-white avatar"
                          ><!-- Download SVG icon from http://tabler-icons.io/i/shopping-cart -->
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
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="font-weight-medium">78 Orders</div>
                        <div class="text-muted">32 shipped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="bg-yellow text-white avatar"
                          ><!-- Download SVG icon from http://tabler-icons.io/i/users -->
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
                            <circle cx="9" cy="7" r="4" />
                            <path
                              d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                            />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="font-weight-medium">1352 Members</div>
                        <div class="text-muted">163 registered today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-auto">
                      </div>
                      <div class="col">
                        <div class="font-weight-medium">623 Shares</div>
                        <div class="text-muted">16 today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="bg-facebook text-white avatar"
                          ><!-- Download SVG icon from http://tabler-icons.io/i/brand-facebook -->
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
                            <path
d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="font-weight-medium">132 Likes</div>
                        <div class="text-muted">21 today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>
