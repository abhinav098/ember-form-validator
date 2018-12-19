import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super();
    let elementArray = JSON.parse(this.get('elementCssIdentifiersArrayJson'));
    let errorClass = this.get('errorClass');
    let buttonId = this.get('buttonId');

    Ember.run.scheduleOnce('afterRender', this, function(){
      validateInputs();
      validateForm();
    });

    function validateInputs(){
      elementArray.forEach(selector => {
        Ember.$(selector).focusout(function(){
          return checkInput(this);
        });
      });

      elementArray.forEach(selector => {
        Ember.$(selector).focus(function(){
          return removeHighlight(this);
        });
      });
    }

    function checkInput(element){
      var parent = Ember.$(element).parent();
      var value = Ember.$(element).val();

      if(value === undefined || value.length === 0 || value === "") {
        parent.addClass(errorClass);
      } else {
        parent.removeClass(errorClass);
      }
    }

    function removeHighlight(element){
      var parent = Ember.$(element).parent();
      parent.removeClass(errorClass);
    }

    function validateForm(){
      Ember.$(buttonId).click(function(){
        elementArray.forEach(selector => {
          return checkInput(selector);
        });
        if(Ember.$(errorClass).length > 0) { return false; }
      });
    }
  }
});
