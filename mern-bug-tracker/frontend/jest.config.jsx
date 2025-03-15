module.exports = {
    testEnvironment: "jsdom", // Required for testing React components
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Ensures JSX is properly transformed
    },
    moduleFileExtensions: ["js", "jsx"],
  };
  