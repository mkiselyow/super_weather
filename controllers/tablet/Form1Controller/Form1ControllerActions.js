define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for logInBtn **/
    AS_Button_dcabcac55a274edfb23c036aae712111: function AS_Button_dcabcac55a274edfb23c036aae712111(eventobject) {
        var self = this;
        return self.logIn.call(this);
    },
    /** onClick defined for logOutBtn **/
    AS_Button_a4c5c333f14340b6a6b4b44397c2324d: function AS_Button_a4c5c333f14340b6a6b4b44397c2324d(eventobject) {
        var self = this;
        return self.logOut.call(this);
    },
    /** onClick defined for loadProfile **/
    AS_Button_b4bd232908d54be2bfa4cf6d099fad97: function AS_Button_b4bd232908d54be2bfa4cf6d099fad97(eventobject) {
        var self = this;
        return self.loadProfile.call(this);
    },
    /** onClick defined for loadWeatherBtn **/
    AS_Button_bb39cb0656eb4b8b9b1dafb60d837ca4: function AS_Button_bb39cb0656eb4b8b9b1dafb60d837ca4(eventobject) {
        var self = this;
        return self.invokeWeatherApi.call(this);
    },
    /** onClick defined for showWeatherListBtn **/
    AS_Button_f3d0dd273d0b4dac89fa0bdcbfdad75d: function AS_Button_f3d0dd273d0b4dac89fa0bdcbfdad75d(eventobject) {
        var self = this;
        return self.navigateToWeatherListScreen.call(this);
    },
    /** onClick defined for addUserDataBtn **/
    AS_Button_h99f9cae082343e1ae5e7cee41d86f50: function AS_Button_h99f9cae082343e1ae5e7cee41d86f50(eventobject) {
        var self = this;
        return self.navigateToAddUserScreen.call(this);
    }
});