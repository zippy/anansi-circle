// ==========================================================================
// Project:   Circle.Person Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Circle */

sc_require('models/person');

Circle.Person.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
    name: "Eric",
    x: 100,
    y: 100,
    
  },
  { guid: 2,
    name: "Art",
    x: 100,
    y: 120,
  },
  { guid: 3,
    name: "JF",
    x: 100,
    y: 140,
  },
  { guid: 4,
    name: "Fer",
    x: 100,
    y: 160,
  }
  //
  // { guid: 2,
  //   firstName: "Dwight",
  //   lastName: "Schrute" },
  //
  // { guid: 3,
  //   firstName: "Jim",
  //   lastName: "Halpert" },
  //
  // { guid: 4,
  //   firstName: "Pam",
  //   lastName: "Beesly" },
  //
  // { guid: 5,
  //   firstName: "Ryan",
  //   lastName: "Howard" }

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('circle');