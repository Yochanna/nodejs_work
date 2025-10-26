const Subscriber = require('../models/subscriber');

// Get all subscribers (READ)
exports.getAllSubscribers = (req, res) => {
  Subscriber.find({})
    .sort({ subscribedDate: -1 })  // Sort by newest first
    .exec()
    .then((subscribers) => {
      res.render("subscribers", {
        subscribers: subscribers,
        pageTitle: "All Subscribers"
      });
    })
    .catch((error) => {
      console.log(`Error fetching subscribers: ${error.message}`);
      res.render("subscribers", {
        subscribers: [],
        pageTitle: "All Subscribers"
      });
    });
};

// Show subscription page
exports.getSubscriptionPage = (req, res) => {
  res.render("contact", {
    pageTitle: "Contact Us"
  });
};

// Save new subscriber (CREATE)
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });

  newSubscriber.save()
    .then((result) => {
      console.log(`New subscriber saved: ${result.getInfo()}`);
      res.render("thanks", {
        pageTitle: "Thank You!",
        subscriberName: result.name,
        subscriberEmail: result.email,
        subscriberZip: result.zipCode
      });
    })
    .catch((error) => {
      console.log(`Error saving subscriber: ${error.message}`);
      if (error.code === 11000) {
        // Duplicate email error
        res.send("This email is already subscribed!");
      } else {
        res.send(`Error: ${error.message}`);
      }
    });
};

// Delete subscriber (DELETE)
exports.deleteSubscriber = (req, res) => {
  const subscriberId = req.params.id;

  Subscriber.findByIdAndDelete(subscriberId)
    .then((deletedSubscriber) => {
      if (deletedSubscriber) {
        console.log(`Subscriber deleted: ${deletedSubscriber.name}`);
      }
      res.redirect("/subscribers");
    })
    .catch((error) => {
      console.log(`Error deleting subscriber: ${error.message}`);
      res.redirect("/subscribers");
    });
};
