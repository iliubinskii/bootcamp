import { format } from "date-fns";

/**
 * @param {number} results
 * @param {string} seed
 * @returns {import("./types.js").AuthorsService}
 */
export function getRandomuserAuthorsProvider(results, seed) {
  return {
    getAuthor: async id => {
      const authors = await getAuthors();

      return authors.find(candidate => candidate.id === id);
    },
    getAuthors
  };

  /**
   * @returns {Promise<import("./types.js").Authors>}
   */
  async function getAuthors() {
    const response = await fetch(
      `https://randomuser.me/api/?results=${results}&seed=${seed}`
    );

    const data = await response.json();

    return data.results.map(
      /**
       * @param {any} user
       * @returns {import("./types.js").Author}
       */
      user => ({
        dateOfBirth: format(user.dob.date, "d MMM yyyy"),
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`
      })
    );
  }
}
