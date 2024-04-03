const contactsEl = document.querySelector("[data-contacts]");

loadContacts(1, 10);

/**
 * Loads contacts.
 *
 * @param {number} page - Page number.
 * @param {number} limit - Limit.
 */
function loadContacts(page, limit) {
  const seed = "aG3n";

  fetch("https://randomuser.me/api/?results=5&seed=yourSeedValue")
    .then((response) => response.json())
    .then((data) => renderContacts(data.results))
    .catch((error) => console.error(error));
}

/**
 * Render contacts.
 *
 * @param {Array<{ email: string, name: { title: string, first: string, last: string }, phone: string, picture: { medium: string } }>} contacts - Contacts.
 */
function renderContacts(contacts) {
  contactsEl.innerHTML = contacts
    .map(
      (contact) =>
        `
          <tr>
            <td class="py-1 px-2">
              <img src="${encodeURI(contact.picture.medium)}" alt="User photo">
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
