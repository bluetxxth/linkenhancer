linkenhancer
============

a jQuery link beautifier.


About:
This plugin is developed having in mind very long lists of links like the ones which usually are located on the footer or the byline section. However it can also be used for any element containing text.

Features:
Change font color
Change font background color
Change font size
Change font style
Change font weigth
Limitations:
The link-enhancer plugin accepts six parameters which are:

.linkEnhancer(color, backgroundcolor, fontsize, fontstyle, fontweight, hovercolor);
It has to have all the parameters set, even if it is to either null or empty like so:

.linkEnhancer('#00FF00', null,'15px','open-sans', '900','magenta');
or

.linkEnhancer('#00FF00', '','15px','open-sans', '900','magenta');
Notice: The second parameter from the left, that which corresponds to background-color has been omited either by writting null or by including two singlequotes with nothing inside.

Download:
Download one of the following two versions:

jquery.linkenhancer.min.js

jquery.linkenhancer.js

or

Clone from GitHub

Install:
1.Downlod and extract the copy from the link above into your js folder
2.Place the code script reference below right after the footer
  <script src="your/path/to/the/linkenhancer.jquery.min.js"></script>
3Copy the lines below and paste it in your main.js file
/**
* Adjust your settings here
*/
$(document).ready(function(){
    console.log('start script');
   $('.references') /*set target here*/
  .linkEnhancer('open-sans' ); /*set options here*/
});

Note: the two commented lines indicate the places where you can customize

In the line starting with .linkEnhancer('open-sans') there is only one option set but you can set more or none at all, in which case the plugin will use its defaults.

Example:
linkEnhancer('orange','white','80px','bauhaus', '900','magenta');
