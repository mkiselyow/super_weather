define({ 
  
  logIn: function() {
    var params = {
      UseDeviceBrowser: true,
      success_url: 'konyweather://com.orgname.KonyWeather'
    };
    
    var service = kony.sdk.getCurrentInstance().getIdentityService("KonyWeatherAuthentication");
    service.login(params, function(response) {
                    alert("Success: " +  JSON.stringify(response));
                  }, function(error) {
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
    service.logout(function(response) {
          					self.setBrowserVisibility(false);
                    alert("Success: " +  JSON.stringify(response));
                  }, function(error) {
      							self.setBrowserVisibility(false);
                    alert("Error" + JSON.stringify(error));
                  }, params);
  },
  
  setBrowserVisibility: function(visible) {
   this.view.browser.setVisibility(visible);
	},
  
  loadProfile: function() {
  	var service = kony.sdk.getCurrentInstance().getIdentityService("KonyWeatherAuthentication");
    service.getProfile(true, function(response) {
      alert("Success: " + JSON.stringify(response));
    }, function(error) {
      alert("Error: " + JSON.stringify(error));
    });	
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
  
  navigateToWeatherListScreen: function() {
    var navigation = new kony.mvc.Navigation('frmWeatherList');
    navigation.navigate();
    
    kony.application.destroyForm("frmLogin");
  },
});