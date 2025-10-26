exports.showHome = (req, res) => {
  res.render("index", { title: "Gaming Hub - Home" });
};

exports.showGames = (req, res) => {
  const games = [
    { name: "Space Explorer", genre: "Adventure", rating: 4.5 },
    { name: "Code Warriors", genre: "Strategy", rating: 4.8 },
    { name: "Pixel Quest", genre: "RPG", rating: 4.3 },
    { name: "Racing Thunder", genre: "Racing", rating: 4.6 }
  ];
  res.render("games", { title: "Our Games", games: games });
};

exports.showAbout = (req, res) => {
  res.render("about", { title: "About Us" });
};

exports.handleSubscribe = (req, res) => {
  const email = req.body.email;
  console.log(`New subscription from: ${email}`);
  res.render("thanks", { title: "Thank You!", email: email });
};
