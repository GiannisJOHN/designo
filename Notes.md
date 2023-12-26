#### Folder and File Organization
---


FOLDERS
- Utils: 
01. Here you can find utility, pure, reusable functions that render lists inside components. This approach is very useful to keep components short and visually clean.


The idea behind this __renderItems__ function is to provide a generic way to render a list of items using a specified React component (Component). By passing in the data array and the component to be used for rendering each item, you create a reusable and flexible function.

This is a common pattern in React applications. It allows you to abstract the rendering logic away from the component that calls renderItems, making the code more modular. The calling component can focus on providing the data and the component to be rendered, while the renderItems function takes care of the mapping and rendering process.

In essence, it promotes reusability and separation of concerns, making your codebase more maintainable and easier to understand.

In React, it's generally a good practice to avoid directly modifying the components themselves, and instead, focus on creating new instances or variations of components. This helps maintain the immutability of components, making the code more predictable and easier to reason about.

In the case of __renderItems__, it adheres to this principle by creating new instances of the specified component for each item in the data array, rather than modifying the original component.

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
02. repeat markdown vs extensive css manipulation. What should I do with the responsive nav menu


#### To-Do 
01. responsive form __DONE__
02. navbar __DONE__
03. placeholder for about images
04. add circles
05. links to the Location page not working
06. make the burger menu functional __DONE__

#### comment imports
small letters, in order below

icons and images
components
custom hooks
utility functions
css
data

#### a new approach to handling class additions and removals conditionally
Create a separate object 'theme' that includes classes (strings) and functions which will return the corresponding class conditionally. With this approach, you can handle the conditions much easier keeping the JSX clean. Also, it is very easy to test this simple JavaScript object because it can be placed outside a react component.

#### css
In the context of a naming convention, "structural" refers to the structure or nature of the element being named. It suggests that the names are based on the inherent characteristics or functionality of the elements, rather than their position or visual attributes. So, when you use a structural naming convention, you focus on describing what the elements are in terms of their function or purpose within a structure.
