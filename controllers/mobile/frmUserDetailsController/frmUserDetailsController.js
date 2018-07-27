define({ 

  onNavigate: function(context, isBackNavigation) {
    this.setSavingScreenVisibility(true);
    this.loadUserData(context.userId);
  },
  
  loadUserData: function(userId) {
  	var self = this;    
    var successCallback = function(response) {
      var userData = new User(response.records[0]);
      self.bindDataToView(userData);
      self.setSavingScreenVisibility(false);
    };
    
    var failureCallback = function(error) {
			self.setSavingScreenVisibility(false);
      alert("ERROR: " + JSON.stringify(error));
    };
    
    var dataObject = getDataObject(USERS_OBJECT_NAME);
    dataObject.setOdataUrl('$filter=user_id eq ' + userId);
    
    fetchData(OBJECT_SERVICE_NAME, dataObject, successCallback, failureCallback);
	},
  
  bindDataToView: function(userData) {
    var container = this.view.bodyContainer;
    var userIdView = container.userIdLabel;
    var userNameView = container.userNameLabel;
    var userEmailView = container.userEmailLabel;
    
    userIdView.text = userData.id;
    userNameView.text = userData.name;
    userEmailView.text = userData.email;
  },
  
  showUserListScreen: function() {
    var navigation = new kony.mvc.Navigation("frmUserList");
    navigation.navigate();

    kony.application.destroyForm("frmUserDetails");
  },
  
  setSavingScreenVisibility: function(visible) {
    this.view.WaitingWidget.setVisibility(visible);
  }

 });