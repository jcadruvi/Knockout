Knockout
========

This is a project that I will use to test out some Knockout code. 

The following are the notes for the code I did for using Knockout with Kendo UI controls:

	Kendo Combo Boxes:
		District combo box uses global settings and the data source that is needed to get the data.
		Retailer combo box uses global settings and data option. An AJAX call is used to grab the data and 
		place it in the retailerData observable array. The user can add a Retailer to this combo box by 
		typing in the retailer and then clicking add. I add the retailer by pushing the new Retailer to the
		observable array which automatically adds it to the Kendo combo box. 

