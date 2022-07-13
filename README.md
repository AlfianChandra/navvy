# navvy.js
navvy.js is a Page Section Navigator Javascript Plugin<br>
This plugin requires jQuery, please refer to https://jquery.com

# Installation
### STEP 1: jQuery
Include jQuery into Your project. Use CDN to integrate jquery real quick
```<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>```

### STEP 2: navvy.js
Include `navvy.js` into your code: `<script src='navvy.js'></script>`
### STEP 3: navvy.css
Include <code>navvy.css</code> into Your project for navigation styling: `<link rel='stylesheet' href='navvy.css' />`
Please note that you may also customize the navigation with your own style

# Usage
### Create the Navigation
```html
<div class="navigator">
	<div class="navi navi-item ind-1">
		<span></span>
		<a href="javascript:void(0)" class="action-scroll" data-target=".vm-wrapper">
			<span>1</span>
		</a>
	</div>
	<div class="navi navi-item ind-2">
		<span></span>
		<a href="javascript:void(0)" class="action-scroll" data-target=".vm-section">
			<span>2</span>
		</a>
	</div>
	<div class="navi navi-item ind-3">
		<span></span>
		<a href="javascript:void(0)" class="action-scroll" data-target=".speech">
			<span>3</span>
		</a>
	</div>
</div>
```
Define `data-target` attribute with your target section in `anchor` element to enable navigation `click` event for smooth scrolling

### Linking section to the navigation
```html
<div class="my-section-1" data-indicator=".ind-1">
	<h1>Lorem Ipsum</h1>
	<h2>Some Sentences Here</h1>
</div>
<div class="my-section-2" data-indicator=".ind-2">
	<h1>Lorem Ipsum</h1>
	<h2>Some Sentences Here</h1>
</div>
```
To make sure your Section is linked to the navigation, define `data-indicator` attribute with unique navigation indicator `class` or `id`. For example:`data-indicator='.ind-1'`.

### Running the Function
Assign your sections to the script
```javascript
$(document).ready(function(
  $('.my-section-1').navvy(); //leave the parameter empty since this element on the first order
  $('.my-section-2').navvy([$('.my-section-1')]); //put previous section
)};
```
Sections treated as a stack, so you have to define your previous section in the stack in form of an array of elements if any.
The plugin works by calculating entire height of sections, so you have to provide the previous sections in the parameter.
Here's an example if you applied many sections in a page:
```javascript
  $('.my-section-1').navvy();
  $('.my-section-2').navvy([$('.my-section-1')]);
  $('.my-section-3').navvy([$('.my-section-1'),$('.my-section-2')]);
  $('.my-section-4').navvy([$('.my-section-1'),$('.my-section-2')],$('.my-section-3')]);
  $('.my-section-5').navvy([$('.my-section-1'),$('.my-section-2')],$('.my-section-3'),$('.my-section-4')]);
```
You can see they're actually stacked
