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
