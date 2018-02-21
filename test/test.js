const chai = require('chai');

const { expect } = chai;

describe('Test describe', () => {
  it('should test', () => {
    expect([1, 2, 3].indexOf(4)).to.equal(-1);
  });
});

