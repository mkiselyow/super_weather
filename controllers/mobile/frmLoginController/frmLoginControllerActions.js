define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for logInBtn **/
    AS_Button_c38ff98e68444c6bb4421ab34775cde4: function AS_Button_c38ff98e68444c6bb4421ab34775cde4(eventobject) {
        var self = this;
        return self.logIn.call(this);
    },
    /** onClick defined for logOutBtn **/
    AS_Button_ga42c42a522949ee98fca83b9701acb8: function AS_Button_ga42c42a522949ee98fca83b9701acb8(eventobject) {
        var self = this;
        return self.logOut.call(this);
    },
    /** onClick defined for loadProfile **/
    AS_Button_efcc4358eceb4c8b86c97c14c7fe8545: function AS_Button_efcc4358eceb4c8b86c97c14c7fe8545(eventobject) {
        var self = this;
        return self.loadProfile.call(this);
    },
    /** onClick defined for loadWeatherBtn **/
    AS_Button_i046c124f22945debaf62c0b9d694383: function AS_Button_i046c124f22945debaf62c0b9d694383(eventobject) {
        var self = this;
        return self.invokeWeatherApi.call(this);
    },
    /** onClick defined for showWeatherListBtn **/
    AS_Button_e94d449b6f754bb2b0d52b601571f320: function AS_Button_e94d449b6f754bb2b0d52b601571f320(eventobject) {
        var self = this;
        return self.navigateToWeatherListScreen.call(this);
    },
    /** onClick defined for addUserDataBtn **/
    AS_Button_aa295ebae9fd452b8c0d47dd3ee9c870: function AS_Button_aa295ebae9fd452b8c0d47dd3ee9c870(eventobject) {
        var self = this;
        return self.navigateToAddUserScreen.call(this);
    },
    /** onClick defined for addCityBtn **/
    AS_Button_b2e789916faf44bda9ee0d32682f100e: function AS_Button_b2e789916faf44bda9ee0d32682f100e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAddNewLocation");
        ntf.navigate();
    },
    /** onDeviceBack defined for frmLogin **/
    AS_Form_i2e02f4312394c35a564b40f0796005c: function AS_Form_i2e02f4312394c35a564b40f0796005c(eventobject) {
        var self = this;
        kony.application.exit();
    }
});