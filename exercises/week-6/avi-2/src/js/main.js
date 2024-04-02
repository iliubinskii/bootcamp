import { contacts } from "../data/contacts.js";

// Array Order Methods
// Write a function that takes the array of contacts and
// returns a new array sorted by last name.

/**
 * Sorts the contacts by the last name.
 *
 * @param {Array<{ name: { last: string } }>} contacts - Contacts.
 * @returns {Array<{ name: { last: string } }>} Sorted array.
 */
function sortByLastName(contacts) {
  const sortedContacts = [...contacts];

  sortedContacts.sort((contact1, contact2) =>
    contact1.name.last.localeCompare(contact2.name.last)
  );

  return sortedContacts;
}

console.log(
  sortByLastName(contacts.results).map((contact) => contact.name.last)
);

// Write a function to return the
// array of contacts in reverse order. Do not use the built-in reverse()
// method.

/**
 * Reverses the contacts.
 *
 * @param {Array<{}>} contacts - Contacts.
 * @returns {Array<{}>} Reversed contacts.
 */
function reverseContacts(contacts) {
  const result = [];

  for (const contact of contacts) result.unshift(contact);

  return result;
}

console.log(reverseContacts(contacts.results)[0]);

// Write a function that returns the first 5 contacts from the sorted
// list (by last name).

/**
 * Returns the first 5 contacts by the last name.
 *
 * @param {Array<{ name: { last: string } }>} contacts - Contacts.
 * @returns {Array<{ name: { last: string } }>} First 5 contacts.
 */
function getFirstFiveByLastName(contacts) {
  return sortByLastName(contacts).slice(0, 5);
}

console.log(
  getFirstFiveByLastName(contacts.results).map((contact) => contact.name.last)
);

// Create a function that returns an array of all unique
// first names. No duplicates should be present.

/**
 * Returns unique first names.
 *
 * @param {Array<{ name: { first: string } }>} contacts - Contacts.
 * @returns {Array<string>} An array of first names.
 */
function getUniqueFirstNames(contacts) {
  return Array.from(
    contacts.reduce((uniqueFirstNames, contact) => {
      return uniqueFirstNames.add(contact.name.first);
    }, new Set())
  );
}

console.log(getUniqueFirstNames(contacts.results));

// Write a function that
// concatenates the first and last name of each contact into a new array of
// full names.

/**
 * Returns full names.
 *
 * @param {Array<{ name: { first: string, last: string } }>} contacts - Contacts.
 * @returns {Array<string>} An array of full names.
 */
function getFullNames(contacts) {
  return contacts.map(
    (contact) => `${contact.name.first} ${contact.name.last}`
  );
}

console.log(getFullNames(contacts.results));

// Looping Through Arrays Write a loop that iterates through the
// array and logs each contact's email to the console.

/**
 * Logs e-mails.
 *
 * @param {Array<{ email: string }>} contacts - Contacts.
 */
function logEmails(contacts) {
  for (const contact of contacts) console.log(contact.email);
}

logEmails(contacts.results);

// Write a function that
// takes an ID as a parameter and returns the contact with that ID.

/**
 * Finds by ID.
 *
 * @param {Array<{ id: { value: string } }>} contacts - Contacts.
 * @param {string} searchId - Search ID.
 * @returns {{ id: { value: string } }} Contact with the given ID.
 */
function findById(contacts, searchId) {
  return contacts.find((contact) => contact.id.value === searchId);
}

console.log(findById(contacts.results, "756.5484.2801.87"));

// Create a
// function that counts how many contacts are from a specific country.
// The
// country should be a parameter of the function.

/**
 * Counts contacts in a country.
 *
 * @param {Array<{ location: { country: string } }>} contacts - Contacts.
 * @param {string} country - Country.
 * @returns {number} An array of full names.
 */
function countContactsFromCountry(contacts, country) {
  return contacts.reduce((count, contact) => {
    return contact.location.country === country ? count + 1 : count;
  }, 0);
}

console.log(countContactsFromCountry(contacts.results, "United States"));

// Write a function that returns
// a new array of contacts that are within a given age range, e.g., 25 to 35
// years old.

/**
 * Finds contacts by age range.
 *
 * @param {Array<{ dob: { age: number } }>} contacts - Contacts.
 * @param {number} minAge - Min age.
 * @param {number} maxAge - Max age.
 * @returns {Array<{ dob: { age: number } }>} Filtered contacts.
 */
function findByAgeRange(contacts, minAge, maxAge) {
  return contacts.filter(({ dob: { age } }) => age >= minAge && age <= maxAge);
}

console.log(
  findByAgeRange(contacts.results, 25, 35).map((contact) => contact.dob.age)
);

// Small App Assignment: Contact Search Tool Build a small web
// application that allows users to search for contacts by name or phone
// number. Create a simple HTML page with an input field and a submit button.
// Implement a function to handle the submit event. Determine if the input is a
// string (name) or a number (phone number). Based on the input type, search
// the contacts array: If it's a string, filter contacts whose first or last
// name contains the string. Consider case sensitivity. If it's a number, find
// contacts whose phone number matches. Display the matching contacts below the
// input field. You can list their names and phone numbers as a simple
// unordered list in HTML. Add styling to improve the layout.

/**
 * @type {HTMLFormElement}
 */
const formEl = document.querySelector("[data-form]");

/**
 * @type {HTMLInputElement}
 */
const inputEl = document.querySelector("[data-input]");

const noSearchEl = document.querySelector("[data-no-search]");

const noResultsEl = document.querySelector("[data-no-results]");

const resultsEl = document.querySelector("[data-results]");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const { value } = inputEl;

  if (value.length) {
    const filteredContacts = (() => {
      if (isPhoneNumber(value)) {
        const normalizedPhone = normalizePhone(value);

        return contacts.results.filter(
          ({ phone }) => normalizePhone(phone) === normalizedPhone
        );
      }

      const namePart = value.toLocaleLowerCase();

      return contacts.results.filter(
        ({ name: { first, last } }) =>
          first.toLocaleLowerCase().includes(namePart) ||
          last.toLocaleLowerCase().includes(namePart)
      );
    })();

    if (filteredContacts.length) {
      resultsEl.innerHTML = filteredContacts
        .map(
          (contact) =>
            `
              <div class="card">
                <div class="d-flex gap-2">
                  <img class="photo rounded-start"
                    src="${encodeURI(contact.picture.medium)}"
                    alt="User photo" />
                  <div>
                    <div>
                      ${escapeHtml(contact.name.first)}
                      ${escapeHtml(contact.name.last)}
                    </div>
                    <div>
                      ${escapeHtml(contact.phone)}
                    </div>
                  </div>
                </div>
              </div>
            `
        )
        .join("\n");

      noSearchEl.classList.add("d-none");
      noResultsEl.classList.add("d-none");
      resultsEl.classList.remove("d-none");
    } else {
      noSearchEl.classList.add("d-none");
      noResultsEl.classList.remove("d-none");
      resultsEl.classList.add("d-none");
    }
  } else {
    noSearchEl.classList.remove("d-none");
    noResultsEl.classList.add("d-none");
    resultsEl.classList.add("d-none");
  }
});

/**
 * Checks for phone number.
 *
 * @param {string} value - Value.
 * @returns {boolean} _True_ if value is a phone number, _false_ otherwise.
 */
function isPhoneNumber(value) {
  return /^[\d\s\(\)-]+$/u.test(value);
}

/**
 * Normalizes phone number.
 *
 * @param {string} phone - Phone.
 * @returns {string} Normalized phone.
 */
function normalizePhone(phone) {
  return phone.replace(/[^\d]/gu, "");
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
