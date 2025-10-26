const Member = require('../models/member');

// Get all members
exports.getAllMembers = (req, res, next) => {
  Member.find({})
    .exec()
    .then((members) => {
      req.data = members;
      next();
    })
    .catch((error) => {
      console.log(`Error fetching members: ${error.message}`);
      next(error);
    });
};

// Show join page
exports.getJoinPage = (req, res) => {
  res.render("join");
};

// Save new member
exports.saveMember = (req, res) => {
  let newMember = new Member({
    name: req.body.name,
    email: req.body.email,
    membershipLevel: req.body.membershipLevel || 'Basic'
  });

  newMember.save()
    .then((result) => {
      res.render("thanks", {
        memberName: result.name,
        memberEmail: result.email,
        membershipLevel: result.membershipLevel
      });
    })
    .catch((error) => {
      console.log(`Error saving member: ${error.message}`);
      res.send(error);
    });
};
