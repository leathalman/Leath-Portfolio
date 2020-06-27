export default [
  {
    input: "Harrison.ExampleInfo",
    return:
      '["<a href="mailto:hleath@me.com">hleath@me.com</a>", "<a rel="noopener" href="https://www.jotifyapp.com">Jotify</a>", "<a rel="noopener" href="https://github.com/leathalman">Github</a>"]',
  },
  {
    input: "Harrison.resume",
    return:
      '"<a rel="noopener" href="/justinchi_resume.pdf" target="_blank">harrisonleath.pdf</a>"',
  },
  {
    input: "Harrison.interests",
    return: '["one", "two", "three", "four"]',
  },
  {
    input: "Harrison.education",
    return: '["Super interesting Wesleyan thingy"]',
  },
  {
    input: "Harrison.skills",
    return: '["Java", "JavaScript", "Python", "React", "Swift, "git"]',
  },
  {
    input: "Harrison.exampletwo",
    return:
      '["This is more example information", "Remeber to credit this guy in README"]',
  },
];
