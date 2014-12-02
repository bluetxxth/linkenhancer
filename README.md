linkenhancer
============

<strong>jQuery link beautifier.</strong>


<strong>About:</strong>
<p>This plugin is developed having in mind very long lists of links like the ones which usually are located on the footer or the byline section. However it can also be used for any element containing text.</p>

<strong>Features:</strong>
 <ul> 
                           <li>Change font color</li>
                           <li>Change font background color</li>
                           <li>Change font size</li>
                           <li>Change font style</li>
                           <li>Change font weigth</li>
                        </ul>
<strong>Limitations:</strong>
<p>The link-enhancer plugin accepts six parameters which are:</p>

<p>
.linkEnhancer(color, backgroundcolor, fontsize, fontstyle, fontweight, hovercolor);
It has to have all the parameters set, even if it is to either null or empty like so:</p>

<p>.linkEnhancer('#00FF00', null,'15px','open-sans', '900','magenta');</p>

<p>or

<p>.linkEnhancer('#00FF00', '','15px','open-sans', '900','magenta');</p>
<p>Notice: The second parameter from the left, that which corresponds to background-color 
has been omited either by writting null or by including two singlequotes with nothing inside.</p>

<strong>Download</strong>:
<p>Download one of the following two versions or clone tbe entire project from git hub:</p>

  <p><a target="_blank" href = "https://github.com/bluetxxth/linkenhancer" >Clone from GitHub</a></p>

<strong>Install:</strong>
<p>
<ol>
 <li>Downlod and extract the copy from the link above into your js folder</li>
 <li>Place the code script reference below right after the footer</li>
 <li>copy the lines below and paste it in your main.js file</li>
 </ol>

</p>

  			/**
           * Adjust your settings here
           *
            $(document).ready(function(){
               &nbsp; &nbsp; console.log('start script');
               &nbsp;&nbsp; $('.references')&nbsp;/*set target here*/
               &nbsp;&nbsp;.linkEnhancer('open-sans' );&nbsp;/*set options here*/
            });
            
<p><strong>Note:</strong> the two commented lines indicate the places where you can customize</p>

In the line starting with .linkEnhancer('open-sans') there is only one option set but you can set more or none at all, in which case the plugin will use its defaults.

<strong>Example:</strong>

linkEnhancer('orange','white','80px','bauhaus', '900','magenta');
