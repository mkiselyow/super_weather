define({ 
  _isLogged: false,
  
  onNavigate: function(context, isBackNavigation) {
    this.updateViewVisibility();
  },
  
  logIn: function() {
    var self = this;
    self.setLoadingScreenVisibility(true);
    LoginService.login(null, function(response) {
      							self._isLogged = true;
      							self.updateViewVisibility();
      							self.setLoadingScreenVisibility(false);
                  }, function(error) {
      							self.setLoadingScreenVisibility(false);
                    alert("Error" + JSON.stringify(error));
                  });
  },
  
  logOut: function() {
    var self = this;
    var browser = this.view.browser;
    var params = {
      browserWidget: browser
    };
    var service = kony.sdk.getCurrentInstance().getIdentityService("KonyWeatherAuthentication");
    this.setBrowserVisibility(true);
    LoginService.logout(function(response) {
      							self._isLogged = false;
      							self.updateViewVisibility();
          					self.setBrowserVisibility(false);
                  }, function(error) {
      							self.setBrowserVisibility(false);
                    alert("Error" + JSON.stringify(error));
                  }, params);
  },
  
  setBrowserVisibility: function(visible) {
   this.view.browser.setVisibility(visible);
	},
  
  loadProfile: function() {
  	alert(JSON.stringify(LoginService.getProfile()));
	}, 
  
  invokeWeatherApi: function() {
    var SERVICE_NAME = "KonyWeatherConditionsApi";
    var service = kony.sdk.getCurrentInstance().getIntegrationService(SERVICE_NAME);
    var OPERATION_NAME = "weatherConditions";
   
    var params = {
      latitude: 25.0256,
    	longitude: 49.4596
    };   
    service.invokeOperation(OPERATION_NAME, null, params, function(response) {
      alert("Success: " + JSON.stringify(response));
    }, function(error) {
      alert("Error: " + JSON.stringify(error));
    });
  },
  
  updateViewVisibility: function() {
    var isLogged = this._isLogged;
    var container = this.view.bodyContainer;
    
    container.logInBtn.setVisibility(!isLogged);
    container.loadProfile.setVisibility(isLogged);
    container.loadWeatherBtn.setVisibility(isLogged);
    container.showWeatherListBtn.setVisibility(isLogged);
    container.logOutBtn.setVisibility(isLogged);
    container.addUserDataBtn.setVisibility(isLogged);
    container.addCityBtn.setVisibility(isLogged);
  },
  
  setLoadingScreenVisibility: function(visible) {
    this.view.WaitingWidget.setVisibility(visible);
  },
  
  navigateToWeatherListScreen: function() {
    var navigation = new kony.mvc.Navigation('frmUserList');
    navigation.navigate();
  },
  
  navigateToAddUserScreen: function() {
    var navigation = new kony.mvc.Navigation('frmCreateUserData');
    navigation.navigate();
  },
});