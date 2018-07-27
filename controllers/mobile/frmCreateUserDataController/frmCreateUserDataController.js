define({ 

 saveData: function() {   
   var self = this;
   var userName = this.view.bodyContainer.enterUserNameBox.text;
   var userEmail = this.view.bodyContainer.enterUserEmailBox.text;
   
   var dataObject = getDataObject(USERS_OBJECT_NAME);
   dataObject.setRecord({
     full_name: userName,
     email: userEmail
   });
   var options = {"dataObject": dataObject};
   
   var objectService = getObjectService(OBJECT_SERVICE_NAME);
   this.setSavingScreenVisibility(true);
	 objectService.create(options, function(response) {
     self.setSavingScreenVisibility(false);
     self.showUserListScreen();
   }, function(error) {
     self.setSavingScreenVisibility(false);
     alert("Error: " + JSON.stringify(error));
   });	
 },
  
  showUserListScreen: function() {
    var navigation = new kony.mvc.Navigation("frmUserList");
    navigation.navigate();

    kony.application.destroyForm("frmCreateUserData");
  },
  
  navigateToLoginScreen: function() {
    var navigation = new kony.mvc.Navigation("frmLogin");
    navigation.navigate();

    kony.application.destroyForm("frmCreateUserData");
  },
  
  setSavingScreenVisibility: function(visible) {
    this.view.WaitingWidget.setVisibility(visible);
  }
 });