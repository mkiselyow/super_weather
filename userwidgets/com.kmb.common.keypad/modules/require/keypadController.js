define(function() {

	return {
		keypadChar: '',
		setChar: function(par){
			this.keypadChar = par;
			this.view.txtKeypad.text = par;
		},
		clearChar: function(){
			this.view.txtKeypad.text = '';
			this.keypadChar = '';
		},
	};
});