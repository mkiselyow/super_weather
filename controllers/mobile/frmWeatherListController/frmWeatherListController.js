define({ 

  onNavigate: function(context, isBackNavigation) {
		alert("Welcome!");
    this.loadUsers();
  },
  
  loadUsers: function() {
  	var self = this;    
    var successCallback = function(response) {
      alert("Success: " + JSON.stringify(response));
      var users = response.records.map(function(record) {
        return new User(record);
      });
      self.fillList(users);
    };
    
    var failureCallback = function(error) {
      alert("ERROR: " + JSON.stringify(error));
    };
    
    var dataObject = getDataObject(USERS_OBJECT_NAME);
    
    fetchData(USERS_SERVICE_NAME, dataObject, successCallback, failureCallback);
	},
  
  fillList: function(users) {
     var segment = this.view.weatherList;
    segment.widgetDataMap = {
      userName: "name",
      userId: "id"
    };
 		
    segment.setData(users);
  },

 });