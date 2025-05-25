/**
 * Utils: Helper functions
 */

/**
 *
 * @param year {number | string} - The year can be a number or a string that contains a year or range or years (eg: 2001 - 2003).
 * @returns The year as a number.
 */
function getStartYear(year: number | string): number {
  if (typeof year === "number") return year;

  // Extract the first 4-digit year from the string
  const match = year.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

/**
 *
 * @param projects {any[]} - An array of project objects, each containing a `data` property with a `year`.
 * @returns An array of projects sorted by year in descending order (most recent first).
 */
function sortProjectsByYear(projects: any[]) {
  return projects.slice().sort((a, b) => {
    const yearA = getStartYear(a.data.year);
    const yearB = getStartYear(b.data.year);

    return yearB - yearA; // descending (most recent first)
  });
}

export { getStartYear, sortProjectsByYear };
