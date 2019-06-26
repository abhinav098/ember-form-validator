# ember-form-validator

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-form-validator`
* `npm install && bower install`

## Usage

* Add `{{validate-inputs}}` at top of your form
* We need to pass the `css-selectors` of the element we need to validate
* For example
```
{{validate-inputs
  elementCssIdentifiersArrayJson='["#people-count", "#description", ".district-selector select"]'
  errorClass='form__control--error'
  buttonId='#request-submit'
}}
```
* `elementCssIdentifiersArrayJson` will be the json of list of `css-selectors` for your form elements.
* `errorClass` is for applying some error css defined in your project.
* `buttonId` will be the id for submit button present for your form.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

# Contact

For any issues contact the author at  `abhinav.garg1218@gmail.com`

Thanks
