
const bcrypt = require('bcrypt');
const User = require('./models/User');

(async ()=>{
  const username = 'admin2345';
  const password = 'admin2345';
  if (!User.findByUsername(username)){
    const passwordHash = await bcrypt.hash(password, 10);
    User.create({ username, passwordHash });
    console.log('Seeded admin user:', username);
  } else {
    console.log('Admin user already exists');
  }
})();
