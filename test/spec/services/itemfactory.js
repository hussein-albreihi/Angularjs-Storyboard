'use strict';

describe('Service: itemFactory', function () {

  // load the service's module
  beforeEach(module('angularProjectApp'));

  // instantiate service
  var itemFactory;
  beforeEach(inject(function (_itemFactory_) {
    itemFactory = _itemFactory_;
  }));

  it('should do something', function () {
    expect(!!itemFactory).toBe(true);
  });

});
