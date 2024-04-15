import { format } from "date-fns";

/**
 * @param {number} results
 * @param {string} seed
 * @returns {import("./types.js").AuthorsProvider}
 */
export function getRandomuserAuthorsProvider(results, seed) {
  return {
    getAuthors: async () => {
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
          email: user.email,
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`
        })
      );
    }
  };
}
