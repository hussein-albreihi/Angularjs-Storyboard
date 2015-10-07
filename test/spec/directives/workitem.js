'use strict';

describe('Directive: workitem', function () {

  // load the directive's module
  beforeEach(module('angularProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<workitem></workitem>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the workitem directive');
  }));
});
