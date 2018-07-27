var LoginService = function() {
  var profile = null;
  
  var getLoginOptions = function() {
    var deepLink = '';
    //#ifdef android
    deepLink = 'konyweather://com.orgname.KonyWeather';
    //#else
    deepLink = 'konyweather://?formToOpen=frmLoginController';
    //#endif
        
    return {
    	success_url: deepLink,
      loginOptions: {
        persistLoginResponse: true
      },
    	include_profile: true,
      noPopup: true
    };
  };
  
  var login = function (browserWidget, successCallback, failureCallback) {
    try {
      var service = getIdentityService("KonyWeatherAuthentication");
      var options = getLoginOptions();
      if (!browserWidget) {
        options.UseDeviceBrowser = true;
      } else {
        options.browserWidget = browserWidget;
      }
      
      service.login(options, 
                    function(response) {
        							service.getProfile(true, 
                                         function(data) {
          																	profile = data;
          																	successCallback(data);
        																 }, failureCallback);
      							}, failureCallback);
    } catch (error) {
      failureCallback(error);
    }
  };
  
  var logout = function (successCallback, failureCallback, params) { 
    try {
      	var service = getIdentityService("KonyWeatherAuthentication");
      	service.logout(function(response) {
          profile = null;
          successCallback(response);
      }, failureCallback, params);
    } catch(error) {
      failureCallback(error);
    }
  };
  
  return {
    login,
    logout,
    getProfile: function() {
      return profile;
    }
  };
}();