define({ 

  onNavigate: function(context, isBackNavigation) {
    this.setSavingScreenVisibility(true);
    this.loadUsers();
  },
  
  loadUsers: function() {
  	var self = this;    
    var successCallback = function(response) {
      var users = response.records.map(function(record) {
        return new User(record);
      });
      self.fillList(users);
      self.setSavingScreenVisibility(false);
    };
    
    var failureCallback = function(error) {
      self.setSavingScreenVisibility(false);
      alert("ERROR: " + JSON.stringify(error));
    };
    
    var dataObject = getDataObject(USERS_OBJECT_NAME);
    
    fetchData(OBJECT_SERVICE_NAME, dataObject, successCallback, failureCallback);
	},
  
  fillList: function(users) {
     var segment = this.view.weatherList;
    segment.widgetDataMap = {
      userName: "name",
      userId: "id"
    };
 		
    segment.setData(users);
  },
  
  onItemSelected: function() {
    var segment = this.view.weatherList;
    var item = segment.selectedRowItems[0];
    var id = item.id;
    this.showDetailsScreen(id);
  },
  
  showDetailsScreen: function(id) {
    var navigation = new kony.mvc.Navigation("frmUserDetails");
    navigation.navigate({userId: id});
    
    kony.application.destroyForm("frmUserList");
  },
  
  navigateToLoginScreen: function() {
    var navigation = new kony.mvc.Navigation("frmLogin");
    navigation.navigate();
    
    kony.application.destroyForm("frmUserList");
	},
  
  setSavingScreenVisibility: function(visible) {
    this.view.WaitingWidget.setVisibility(visible);
  }

 });