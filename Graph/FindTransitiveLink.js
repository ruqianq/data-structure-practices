// Given a list of logs and find the transitive link

const logs = [
  {
    currentLink: "www.amazon.com/login",
    referringLink: "www.amazon.com"
  },
  {
    currentLink: "www.amazon.com/audible",
    referringLink: "www.amazon.com"
  },
  {
    currentLink: "www.audible.com/login",
    referringLink: "www.audible.com"
  },
  {
    currentLink: "www.amazon.com/music",
    referringLink: "www.amazon.com/login"
  },
  {
    currentLink: "www.amazon.com/kindle/books",
    referringLink: "www.amazon.com/kindle"
  },
]