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
      url: "https://groupme.com/join_group/116831912/Y7McCGsG", // TODO: confirm full invite link
      blurb: "Where everything happens: meeting reminders, game-night threads and project sign-ups.",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@TODO",
      url: "https://instagram.com/TODO",
      blurb: "Meeting graphics, season predictions, debate results and recaps.",
    },
    {
      id: "x",
      label: "X / Twitter",
      handle: "@TODO",
      url: "https://x.com/TODO",
      blurb: "Stat threads, live reactions and takes we'll defend with numbers.",
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
    // TODO: add upcoming meetings here, e.g.
    // { title: "...", date: "2026-11-05", start: "18:30", end: "19:30", location: "...", description: "..." },
  ],

  /*
   * Leadership. Put headshots in assets/leaders/ and set photo
   * to e.g. "assets/leaders/jane-doe.jpg". Without a photo the
   * card shows the person's initials.
   */
  leadership: [
    { name: "TODO Name", role: "President", year: "", major: "", bio: "", photo: "", linkedin: "", email: "" },
    { name: "TODO Name", role: "Vice President", year: "", major: "", bio: "", photo: "", linkedin: "", email: "" },
    { name: "TODO Name", role: "Director of Analytics", year: "", major: "", bio: "", photo: "", linkedin: "", email: "" },
    { name: "TODO Name", role: "Treasurer", year: "", major: "", bio: "", photo: "", linkedin: "", email: "" },
    { name: "TODO Name", role: "Marketing & Media", year: "", major: "", bio: "", photo: "", linkedin: "", email: "" },
  ],

  /*
   * Projects, newest first. category is used for the filter
   * chips on the Projects page. image and link are optional.
   * TODO: the summaries below are drafts based on Instagram posts.
   */
  projects: [
    {
      title: "2026–27 NBA Predictions",
      category: "Predictions",
      date: "Fall 2026",
      status: "In progress",
      summary: "The club's official calls for the new season: standings, award races and playoff picks, scored against reality in April.",
      image: "",
      link: "",
    },
    {
      title: "Season Preview: What to Watch",
      category: "Media",
      date: "Fall 2026",
      status: "Published",
      summary: "A tip-off video breaking down the storylines and numbers to watch before the NBA season starts.",
      image: "",
      link: "",
    },
    {
      title: "Club Fantasy League",
      category: "Fantasy",
      date: "Fall 2026",
      status: "In progress",
      summary: "Members drafted on October 13. Weekly standings, trade analysis and a season-long race for bragging rights.",
      image: "",
      link: "",
    },
    {
      title: "NBA Front Office Simulation",
      category: "Competition",
      date: "Spring 2026",
      status: "Completed",
      summary: "A case competition where teams ran an NBA front office: cap sheets, trades, draft strategy and a final pitch.",
      image: "",
      link: "",
    },
    {
      title: "The GOAT Debate",
      category: "Debate",
      date: "Spring 2026",
      status: "Completed",
      summary: "Jordan or LeBron? Members built the case for each side using era-adjusted stats, playoff impact and advanced metrics.",
      image: "",
      link: "",
    },
  ],
};
