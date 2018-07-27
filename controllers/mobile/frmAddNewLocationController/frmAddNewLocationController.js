define({ 

  onNavigate: function(context, isBackNavigation) {
    this.view.bodyContainer.resultsList.setVisibility(false);
  },
  
  onMapSearchSuggestions: function () {
    var self = this;
    var searchText = this.view.bodyContainer.searchBox.text;
		if (searchText.length >= 3) {
      var operationSuccess = function(data) {
        self.view.bodyContainer.resultsList.widgetDataMap = {
          locationName: 'name',
          locationId: 'place_id'
        };
        self.view.bodyContainer.resultsList.setData(data.predictions);
        self.view.bodyContainer.resultsList.setVisibility(true);
      };

      var operationFailure = function(res) {
        alert('Auto Suggestions Failure\n' + res);
      };

      var options = {
        place_name: searchText
      };

      searchLocations(options, operationSuccess, operationFailure);
    } else {
      self.view.bodyContainer.resultsList.setVisibility(false);
    }
  },
  
  addLocation: function() {
    var segment = this.view.bodyContainer.resultsList;
    var item = segment.selectedRowItems[0];
    var dataObject = getDataObject(LOCATIONS_OBJECT_NAME);
    dataObject.setRecord({
       cityName: item.name,
       cityId: item.place_id,
       userId: LoginService.getProfile().userid
    });
    var options = {"dataObject": dataObject};

    var objectService = getObjectService(OBJECT_SERVICE_NAME);
    objectService.create(options, function(response) {
				alert(JSON.stringify(response));
    }, function(error) {
				alert(JSON.stringify(error));
    });	
  }
  
 });