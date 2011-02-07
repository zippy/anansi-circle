// ==========================================================================
// Project:   Circle - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Circle */

// This page describes the main user interface for your application.  
Circle.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'peopleView'.w(),
    
    peopleView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 42, bottom: 42, left: 0, right: 0 },

      contentView: SC.CollectionView.design({
        contentBinding: 'Circle.peopleController.arrangedObjects',
        selectionBinding: 'Circle.peopleController.selection',
        canReorderContent: YES,
        exampleView: Circle.PersonView
      })
    })
    
  })

});
