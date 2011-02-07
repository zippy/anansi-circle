// ==========================================================================
// Project:   Circle.Person
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Circle */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Circle.Person = SC.Record.extend(
/** @scope Circle.Person.prototype */ {

  name: SC.Record.attr(String),
  x: SC.Record.attr(Number),
  y: SC.Record.attr(Number),

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('circle');