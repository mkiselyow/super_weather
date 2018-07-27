define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for searchBox **/
    AS_TextField_g8fbaf61ce2148828945b925293c96c3: function AS_TextField_g8fbaf61ce2148828945b925293c96c3(eventobject, changedtext) {
        var self = this;
        return self.onMapSearchSuggestions.call(this);
    },
    /** onRowClick defined for resultsList **/
    AS_Segment_c0225f97aae840c99e5e3561e90b93a5: function AS_Segment_c0225f97aae840c99e5e3561e90b93a5(eventobject, sectionNumber, rowNumber) {
        var self = this;

        function SHOW_ALERT__fb646b5885f44f7db81571a185ece049_True() {
            self.addLocation.call(this);
        }
        function SHOW_ALERT__fb646b5885f44f7db81571a185ece049_False() {}
        function SHOW_ALERT__fb646b5885f44f7db81571a185ece049_Callback(response) {
            if (response === true) {
                SHOW_ALERT__fb646b5885f44f7db81571a185ece049_True();
            } else {
                SHOW_ALERT__fb646b5885f44f7db81571a185ece049_False();
            }
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "Add city",
            "yesLabel": "Yes",
            "noLabel": "No",
            "message": "Do you want to add selected city?",
            "alertHandler": SHOW_ALERT__fb646b5885f44f7db81571a185ece049_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});