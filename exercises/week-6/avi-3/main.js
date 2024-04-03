const numberOfPages = 7;

const results = 5;

const seed = "aG3n";

const contactsEl = document.querySelector("[data-contacts]");

const paginationEl = document.querySelector("[data-pagination]");

let page = 1;

loadContacts();
renderPagination();
updatePagination();

/**
 * Loads contacts.
 */
function loadContacts() {
  fetch(
    `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`
  )
    .then((response) => response.json())
    .then((data) => renderContacts(data.results))
    .catch((error) => console.error(error));
}

/**
 * Updates pagination.
 */
function updatePagination() {
  {
    const prevEl = paginationEl.querySelector("[data-prev]");

    if (page === 1) prevEl.classList.add("disabled");
    else prevEl.classList.remove("disabled");
  }

  for (let i = 1; i <= numberOfPages; i++) {
    const pageEl = paginationEl.querySelector(`[data-${i}]`);

    if (page === i) pageEl.classList.add("active");
    else pageEl.classList.remove("active");
  }

  {
    const nextEl = paginationEl.querySelector("[data-next]");

    if (page === numberOfPages) nextEl.classList.add("disabled");
    else nextEl.classList.remove("disabled");
  }
}

/**
 * Renders pagination.
 */
function renderPagination() {
  paginationEl.innerHTML = "";

  {
    const prevEl = document.createElement("li");

    prevEl.setAttribute("data-prev", "");

    prevEl.classList.add("page-item");

    prevEl.innerHTML = `
      <a class="page-link" href="#" aria-label="Previous">
        &laquo;
      </a>
    `;

    prevEl.addEventListener("click", (event) => {
      event.preventDefault();

      if (page > 1) {
        page--;
        loadContacts();
        updatePagination();
      }
    });

    paginationEl.appendChild(prevEl);
  }

  for (let i = 1; i <= numberOfPages; i++) {
    const pageEl = document.createElement("li");

    pageEl.setAttribute(`data-${i}`, "");

    pageEl.classList.add("page-item");

    pageEl.innerHTML = `
      <a class="page-link" href="#" aria-label="Page ${i}">
        ${i}
      </a>
    `;

    pageEl.addEventListener("click", (event) => {
      event.preventDefault();
      page = i;
      loadContacts();
      updatePagination();
    });

    paginationEl.appendChild(pageEl);
  }

  {
    const nextEl = document.createElement("li");

    nextEl.setAttribute("data-next", "");

    nextEl.classList.add("page-item");

    nextEl.innerHTML = `
      <a class="page-link" href="#" aria-label="Previous">
        &raquo;
      </a>
    `;

    nextEl.addEventListener("click", (event) => {
      event.preventDefault();

      if (page < numberOfPages) {
        page++;
        loadContacts();
        updatePagination();
      }
    });

    paginationEl.appendChild(nextEl);
  }
}

/**
 * Render contacts.
 *
 * @param {Array<{ email: string, name: { title: string, first: string, last: string }, phone: string, picture: { thumbnail: string } }>} contacts - Contacts.
 */
function renderContacts(contacts) {
  contactsEl.innerHTML = contacts
    .map(
      (contact) =>
        `
          <tr>
            <td class="py-1 px-2">
              <img src="${encodeURI(
                contact.picture.thumbnail
              )}" alt="User photo">
            </td>
            <td class="py-1 px-2">
              ${escapeHtml(contact.name.title)}
              ${escapeHtml(contact.name.first)}
              ${escapeHtml(contact.name.last)}
            </td>
            <td class="py-1 px-2">
              ${escapeHtml(contact.phone)}
            </td>
            <td class="py-1 px-2">
              ${escapeHtml(contact.email)}
            </td>
          </tr>
        `
    )
    .join("\n");
}

/**
 * Escapse HTML entites.
 *
 * @param {string} unsafe - Unsafe string.
 * @returns Escaped string.
 */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#039;");
}
