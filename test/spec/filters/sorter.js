'use strict';

describe('Filter: sorter', function () {

  // load the filter's module
  beforeEach(module('angularProjectApp'));

  // initialize a new instance of the filter before each test
  var sorter;
  beforeEach(inject(function ($filter) {
    sorter = $filter('sorter');
  }));

  it('should return the input prefixed with "sorter filter:"', function () {
    var text = 'angularjs';
    expect(sorter(text)).toBe('sorter filter: ' + text);
  });

});
