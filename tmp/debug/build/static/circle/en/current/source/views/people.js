// ==========================================================================
// Project:   Circle.PeopleView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Circle */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Circle.PeopleView = SC.View.extend(
/** @scope Circle.PeopleView.prototype */ {

  contentDisplayProperties: "name".w(),
  
  render: function(context, firstTime) {
    var content = this.get('content');
    var name = content.get('name');
    var x = content.get('x');
    var y = content.get('y');
    context = context.begin('div').addClass('person').addStyle({position: 'absolute', left: x, top: y}).push(name).end();
    arguments.callee.base.apply(this,arguments);
  }

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('circle');