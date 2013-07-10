qx.Class.define('wl.lang.Validation', {
  extend: qx.core.Object,
  statics: {
    success: function(value){
      return new wl.lang.Success(value);
    },
    failure: function(value){
      return new wl.lang.Failure(value);
    }
  },
  construct: function(value){
    this.base(arguments);
    this._value = value;
  },
  members: {
    getValue: function(){
      return this._value;
    },
    map: function(){
      return this;
    },
    failure: function(){
      return this;
    },
    success: function(){
      return this;
    },
    isSuccess: function(){},
    isFailure: function(){
      return !this.isSuccess();
    }
  }
});