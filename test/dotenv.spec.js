const { expect } = require('chai');
const { config } = require('dotenv');

describe('DotEnv', () => {
  beforeEach(() => config());

  it('should parse equality chars', () =>
    expect(process.env.PASSWORD).to.equal('somePa$$With=Equalch@R')
  );
});