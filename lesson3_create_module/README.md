# Lesson 3: Creating a Node.js Module

This lesson covers creating Node.js modules and using npm to manage packages.

## Files Included

1. **messages.js** - A module that exports an array of positive messages
2. **printMessages.js** - A file that requires the messages module and prints each message
3. **main.js** - Main application file that uses the cities package to lookup ZIP codes
4. **package.json** - Project configuration file with dependencies

## Setup Instructions

1. Navigate to this directory in your terminal
2. Run `npm install` to install the cities package
3. Test the messages module by running: `node printMessages.js`
4. Test the main application by running: `node main.js`

## What You'll Learn

- How to create a Node.js module using `exports`
- How to require local modules with `require()`
- How to initialize a Node.js application with `npm init`
- How to install external packages with `npm install`
- How to use the cities package to lookup location data by ZIP code

## Expected Output

### Running printMessages.js:
```
You are great!
You can accomplish anything!
Success is in your future!
```

### Running main.js:
```
{
  zipcode: '10016',
  state_abbr: 'NY',
  latitude: '40.746180',
  longitude: '-73.97759',
  city: 'New York',
  state: 'New York'
}
```

## Key Concepts

- **exports**: Used to make functions or variables within one module available to others
- **require()**: Used to load modules into your application
- **npm**: Node Package Manager for managing external packages
- **package.json**: Configuration file that defines your application's properties and dependencies
- **node_modules**: Folder where installed packages are stored

## Try This Exercise

Create a couple of new modules and practice adding simple JavaScript objects and functions to the exports object. For example:

```javascript
// mathUtils.js
exports.addNum = (x, y) => {
  return x + y;
};
```

Then require and use this module in another file!
