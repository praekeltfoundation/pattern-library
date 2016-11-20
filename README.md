# Pattern-library
Pattern Library - help build cohesive, consistent user experience
- We will set our team’s workflow
- Establish common vocabulary between disciplines
- Establish browser, device, performance, and accessibility testing

Praekelt Design Systems Future Wordflow
https://www.dropbox.com/sh/txg24uq9v8rssdk/AABaHe_eZWCDpLFkazEeNRpea?dl=0&preview=Proposed-New-Workflow.pdf

Presentation
https://docs.google.com/presentation/d/1CG2qEKEPECLOdVnwYJKlGC9bvtFNm8tpCL10HHYLMdY/edit#slide=id.g16e14e1b67_0_0

End Product
http://molodesignsystem.com

Other Examples
http://rizzo.lonelyplanet.com/styleguide/ui-components/cards

Pattern Lab Setup
https://github.com/gulpjs/gulp-cli/issues/84
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md


Styleguide

- Whitespaces
- Folder Structure
http://timhartmann.net/frontend-development/scss-styleguide-with-bem-oocss-smacss/
scss/
|-  _base.scss

|-  _layout.scss/
    |- _l-grid.scss

|-  _modules/
    |- _m-buttons.scss
    |- _m-tabs.scss

|-  _state/
    |- _s-buttons.scss
    |- _s-tabs.scss
|-  _application.scss

stylesheet/
|- application.css

Note:
1. For each new module make a new file for it
2. Prefix filenames
3. Partials get a underscore as a prefix
4. One single file for importing all partials like application.scss

# Pattern-library Hosting and Versioned Releases



  PATTERN LIBRARY - APPROACH

  - Describe problem []
  - Chosen solution and rational
  - Related patterns
  - QA instructions
  - User testing results

  WHAT IS CURRENTLY ON PATTERN LAB - PATTERN LIBRARY
  - LIVE VISUAL UI
  - HTML,CSS AND NOTES ON EACH PATTERN

  PATTERN LIBRARY
  - NAVIGATION FLOW
    - LAYER BLOCK NAME - BLOCK REORDERING [INCREASE ON 5 NUMBER IN-BETWEEN TO ALLOW FOR NEW BLOCKS IN FUTURE]
      - SUBLAYER BLOCKS
        - PATTERN NAME
        - HTML BLOCK STRUCTURE - CLASS NAMES
        - CSS STYLE

  REASON TO USE PATTERN LAB
  - Easy to setup and establish our pattern library footprint
  - Easily setup patterns and their relationship
  - Establish naming methodology [FUNCTION BABED NAME]
  - Establish CSS independent rules   

  FUTURE PLANS - TO DO
  - A way of dealing with obsolete code
  - Git releases and versioning
  - Set up config rules that patterns should adhere to to prevent patterns from being changed and enforce modularity
    - We will add new patterns only when existing ones are no longer satisfactory
    - Because PATTERNS are not dogma - we will consistently review and change patterns based on:
      - A standard functionality in the market
      - Changed behavior in user testing or A/M testing result
    - We need to stuck a balance between stability and change

  Idea - Version Pattern Library
       - Projects include latest release - a ways to import/include/extend individual components
       - Tag old and new code implementation

  CURRENT ISSUES FACED
  - Customizing and theming Pattern Lap
  - Lack of Django-integration for Django template source-code beyond HTML [We need to investigate further]

  LESSON
  IT WILL TAKE FURTHER ITERATIONS TO PRODUCE WORKABLE LEAN - THAT IS MORE MODULAR AND AGILE

  Pattern Lap | Testing

  Test for:
  -  code control
  - for screen sizes
  - user interaction methods
  - different browsers
  - devices capability

  To Achieve
  - document the design systems in one place
  - break design into modular components
  - offer an environmentfor testing and debugging bugs
  - team collaboration

- The PL must be repeatedly tested on a set of quality checks and steps to release and roll-out changes
- The tests should be automated as part of a CI(continuous integration)  
- Spot regression errors

STEPS:
  The entire system must be:
  - Build [check]
  - Testing
  - Bundled [check]
  - Versioned
  - Documented [check]
  - Deployed automatically [check]

  How to do Testing
  Outcomes displays on Github repository:
  -  Build Status
  - Test results
  - Dependency status

References
  https://tinnedfruit.com/2016/09/12/why-and-how-to-test-your-pattern-library.html
  https://tinnedfruit.com/2016/09/20/why-and-how-to-test-your-pattern-library-2.html
  https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935#.pkds4iw3j

Rebuild NodeSass
npm rebuild node-sass
