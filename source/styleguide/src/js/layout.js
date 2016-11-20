/*!
 * Simple Layout Rendering for Pattern Lab
 *
 * Copyright (c) 2014 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 */


try {

  /* load pattern nav */
  var template         = document.getElementById("pl-pattern-nav-template");
  var templateCompiled = Hogan.compile(template.innerHTML);
  var templateRendered = templateCompiled.render(navItems);
  document.getElementById("pl-pattern-nav-target").innerHTML = templateRendered;

/*  var headerParam = {
    "title":"<title id=\"title\">Pattern Library</title>"
  },
  htmlStart = document.getElementsByTagName('head');

  //Load header
  var template         = htmlStart;
  var templateCompiled = Hogan.compile(template.innerHTML);
  var templateRendered = templateCompiled.render(headerParam);
  htmlStart.innerHTML = templateRendered;
  console.log("Get first tag",htmlStart);
*/

  /* load ish controls */
  var template         = document.getElementById("pl-ish-controls-template");
  var templateCompiled = Hogan.compile(template.innerHTML);
  var templateRendered = templateCompiled.render(ishControls);
  document.getElementById("sg-controls").innerHTML = templateRendered;

} catch(e) {

  var message = "<h1>Nothing Here Yet</h1><p>Please generate your site before trying to view it.</p>";
  document.getElementById("pl-pattern-nav-target").innerHTML = message;

}
