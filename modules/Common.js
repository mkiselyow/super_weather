const USERS_SERVICE_NAME = "KonyWeatherObjectsSeliuchenko";
const OBJECT_SERVICE_TYPE = {access: 'online'};
const USERS_OBJECT_NAME = "users";

function appservicereq(params) {
  // Launched from other app (ie browser in our case)
  if (params.launchmode == 3) { 

    //#ifdef iphone
      // handleDeeplinkCallback() appears to want a separate .code element, whereas
      // the Google call returns this embedded within the URL property.
      var extractedCode = params.launchparams.URL.split("?")[2].slice(5);
      params.launchparams.code = extractedCode;    
    //#endif
    
    // this should process the short lived 'token' passed from the browser and swap it
    // for the backend token
    handleDeeplinkCallback(params);
  }
}

function  getSDK() {
  return kony.sdk.getCurrentInstance();
}

function getIdentityService(serviceName) {
  return getSDK().getIdentityService(serviceName);
}

function getObjectService(serviceName) {
  return getSDK().getObjectService(serviceName, OBJECT_SERVICE_TYPE);
}

function getDataObject(dataObjectName) {
  var dataObj = new kony.sdk.dto.DataObject(dataObjectName);
  return dataObj;
}

function fetchData(serviceName, dataObject, successCallback, failureCallback) {
  try {
    var objSvc = getObjectService(serviceName);
    var options = {"dataObject":dataObject};

    objSvc.fetch(options, successCallback, failureCallback);
  } catch(error) {
    failureCallback(error);
  }
}

function User(record) {
  return {
    id: record.user_id,
    name: record.full_name
  };
}