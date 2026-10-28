/*
 * ─────────────────────────────────────────────────────────────
 *  WBAC SITE CONTENT
 *  This is the only file you need to edit to update the site.
 *  Anything marked TODO is a placeholder waiting on real info.
 * ─────────────────────────────────────────────────────────────
 */
window.WBAC = {
  name: "World Basketball Analytics Club",
  short: "WBAC",
  tagline: "Exploring the game through data & analytics.",
  // TODO: club contact email (shown in the footer). Leave "" to hide.
  email: "",
  // Used for "Add to calendar" links. TODO: confirm.
  timezone: "America/Indiana/Indianapolis",

  /*
   * Social / join links. A url containing "TODO" renders as
   * "coming soon" instead of a broken link.
   */
  links: [
    {
      id: "groupme",
      label: "GroupMe",
      handle: "Join the group chat",
      url: "https://web.groupme.com/join_group/116831912/Y7McCGsG",
      blurb: "Where everything happens: meeting reminders, game-night threads and project sign-ups.",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@wbac.iu",
      url: "https://www.instagram.com/wbac.iu/",
      blurb: "Meeting graphics, season predictions, debate results and recaps.",
    },
    {
      id: "x",
      label: "X / Twitter",
      handle: "@wbac_iu",
      url: "https://x.com/wbac_iu",
      blurb: "Stat threads, live reactions and takes we'll defend with numbers.",
    },
    {
      id: "beinvolved",
      label: "BeInvolved",
      handle: "Official IU listing",
      url: "https://beinvolved.indiana.edu/organization/wbac",
      blurb: "Become an official member and see us on IU's student organization directory.",
    },
  ],

  /*
   * Meetings. Dates are YYYY-MM-DD, times are 24-hour HH:MM.
   * The site sorts them automatically: future meetings show under
   * "Upcoming", finished ones move to "Past meetings".
   */
  meetings: [
    {
      title: "Final Meeting: NBA Front Office Simulation",
      date: "2026-04-13",
      start: "17:30",
      end: "19:00", // TODO: confirm end time
      location: "Ballantine Hall 110",
      description: "Case competition: teams took over an NBA front office and pitched their moves.",
    },
    {
      title: "Kickoff Meeting",
      date: "2026-09-24",
      start: "18:30",
      end: "19:30",
      location: "Woodburn Hall 111",
      description: "First meeting of the year: what the club does, how to get involved, and the season ahead.",
    },
    {
      title: "Fantasy Basketball Draft",
      date: "2026-10-13",
      start: "18:30",
      end: "19:30",
      location: "Psychology Building, Room 113",
      description: "Club fantasy league draft night.",
    },
    {
      title: "General Meeting", // TODO: topic
      date: "2026-10-27",
      start: "19:00",
      end: "20:00", // TODO: confirm end time
      location: "Psychology Building, Room 113",
      description: "",
    },
    // TODO: November meetings, e.g.
    // { title: "...", date: "2026-11-10", start: "19:00", end: "20:00", location: "...", description: "..." },
  ],

  /*
   * Leadership, in display order (five per row on desktop).
   * Headshots live in assets/leaders/ (square crops, ~600px). When you
   * replace a photo, bump its ?v= number so browsers fetch the new one.
   * Optional fields per person: year, major, bio, linkedin, email.
   */
  leadership: [
    { name: "Jack Doster", role: "President", photo: "assets/leaders/jack-doster.jpg?v=2" },
    { name: "Max Toy", role: "Vice President", photo: "assets/leaders/max-toy.jpg?v=2" },
    { name: "Connor Edds", role: "Treasurer", photo: "assets/leaders/connor-edds.jpg?v=2" },
    { name: "Jackson McGuire", role: "Head of Analytics", photo: "assets/leaders/jackson-mcguire.jpg?v=2" },
    { name: "Blaine Ford", role: "Social Media Manager", photo: "assets/leaders/blaine-ford.jpg?v=2" },
    { name: "Carmine Genovese", role: "Analytics Project Lead", photo: "assets/leaders/carmine-genovese.jpg?v=2" },
    { name: "Jack Brennan", role: "Analytics Researcher", photo: "assets/leaders/jack-brennan.jpg?v=2" },
    { name: "Ryan Doster", role: "Analytics Researcher", photo: "assets/leaders/ryan-doster.jpg?v=2" },
    { name: "Adi Jalram", role: "Outreach & Recruitment Coordinator", photo: "assets/leaders/adi-jalram.jpg?v=2" },
    { name: "Grady Rupp", role: "Outreach & Recruitment Coordinator", photo: "assets/leaders/grady-rupp.jpg?v=2" },
  ],

  /*
   * Projects, newest first. While this list is empty the Projects
   * page shows "coming soon" and the home page hides its preview.
   * category drives the filter chips; image and link are optional.
   * Example:
   * {
   *   title: "2026–27 NBA Predictions",
   *   category: "Predictions",
   *   date: "Fall 2026",
   *   status: "In progress",          // "In progress" is highlighted
   *   summary: "One or two sentences.",
   *   image: "assets/projects/predictions.jpg",
   *   link: "https://...",
   * },
   */
  projects: [
  ],
};
