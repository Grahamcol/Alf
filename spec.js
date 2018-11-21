// spec.js

describe('ADF Demo App', function() {

 it('has settings page', function() {
	browser.get('http://qaexercise.envalfresco.com/settings');
	element(by.css('.mat-select-value')).click();
	var select = element(by.css('mat-select-value'));
	select.$('[mat-option-text="ECM"]').click();
	browser.sleep(1000000);
	element(by.css('.mat-button-wrapper')).click();
	element(by.id('username')).sendKeys('guest@example.com');
	element(by.id('password'));
	browser.get('http://qaexercise.envalfresco.com/files');
		
  });

});