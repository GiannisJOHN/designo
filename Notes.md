#### Folder and File Organization
---


FOLDERS
- Utils: 
01. Here you can find utility, pure, reusable functions that render lists inside components. This approach is very useful to keep components short and visually clean.

- Components:
01. shared components

- Pages:
inside folder of pages containing all unique components


---
FILES
- index.js: uses react-router to render pages
- app: includes navbar, footer, call-to-action-bottom and {props.children} of each page


---
IDEAS
01. if a component is reusable but specific to a page and has a relative name, like links to "home", contain it in the same folder as the page
02. use more descriptive names for components, it can work as a type of documentation
03. shared components keep the classic one there: navbar, footer
04. app component is a unique component that should be placed on the same level as index.js

---
COMPONENT NAMES

shared components
01. navbar
02. footer
03. call-to-action-bottom
04. page-top-header
05. navigation-links-middle

pages/components
01. home
02. about
03. locations
04. products
05. contact


#### Improve

01. improve naming for links (to the Locations page) that appear on the About and Contact page. Also, the place in folder structure.