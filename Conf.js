exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testFiles/spec.js'],
capabilities: {
  'browserName': 'chrome'
}
};



