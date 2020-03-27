# One Pager Tutorial

This is a tutorial on how to build a simple one pager website using vanilla html css and javascript.

## First Step - setting up file structure and first commit

Clone Repository from GabrielHeinrich
Remote Repository to my new github repository
Push -u my-github master --to my github repository

Create new branch "setup" and create file and folder structure there
Create and fill LICENSE --read https://choosealicense.com/
Add default structure to index.html with links to stylesheet and other imported styles

Now do first commit to the setup branch
git commit -am "first commit with filetree"
or: git add . --> git commit -m "my text here"

Checkout to master
Merge from master with setup
Push master to my-github repository --> git push
Also push the setup branch to my github repository --> git push -u my-github setup

## Second Step - Creating html structure

Inside the html file now create structure. In our Example like this --> <header></header> <main></main> <footer></footer>
Inside the <main> put sections, i.e. like this --> (section#>div.section-inner-container>div.)\*5 <!-- 5 sections with 1 child each: div class="section-inner-container" with 1 child div class="" -->

Fill the sections with text

Finally commit changes in setup to remote, checkout master, merge with html branch and push changes like this
--> git commit -am "Create basic html structure"
--> git checkout master
--> git merge html
--> `This is for pushing the master branch`
--> git push
--> git push -u my-github html

## Third Step - Add some styling (CSS)

First we add default CSS-settings to the document (\*, li, img, button, body)

```css
* {padding: 0;margin: 0;outline: none;box-shadow: none;box-sizing: border-box;} --> sets default margin, padding to 0; Outline would be outside the border, we set it default to 0; box-shadow none; box-sizing: border-box means, that padding and margin are being substracted from the given Height & width of the box, instead of being added.

li {list-style-type: none;} --> leaves out the list-dots

img {width: 100%;  object-fit: cover;} --> default img setting to cover the whole parent container and cover other elements; object fit will zoom the picture to fit the given width and otherwise cut the edges - with fill it would always be fully displayed

button {  border: none;  background: none;} --> sets default button styling
```


Then go to section layout.
--> look up comments in the style.css

## Third step - Navigation bar

Now we set up the navigation of the site.

First we add the html-code for the navigation menu as an unordered list in an extra `html <nav>` element.

Adding styling to the navigation logo. Adjusting styling of the nav-list as a flexbox. Look at the CSS-Code!

We apply smooth scrolling through the CSS-command:

````css
html {
  scroll-behavior: smooth;
} ```
````

We set the styling of navigation and some link comfort.

## Fourth step - making the page responsive

Problems appear, when inspecting the onepager in responsive mode: headings too big, navigation bar crashes, showcase and elements sections are looking weird, social links.

Using media-queries we cann add an additional styling, when the given conditions apply:

`````css
@media (max-width: 600px) {
  selector { properties: Values; }
  selector { properties: Values; }
  selector { properties: Values; }
} ````
`````

## Fifth step - mobile navigation; adding Java Script

We add a button to the menu bar, which applies at max-width of 600px. The menu should hide and we acces a dropdown via button.
In Html we add the sections and classes for the button as well as the hidden elements - inside the nav element.
In CSS we give the new classes attributes so that they hide and be responsive.

After this we add code for the slide menu itself.
Starting with html code again - inside the nav element.
Next adding CSS to the new html classes inside nav.

### Java Script

New file index.js
create link from html to js in the head

```html
<script src="index.js" defer></script>
```

Now create variables for our functions of expanding and collapsing the menu bar as well as for the buttons expand and collapse.
These are joined in an

```js
addEventListener("click", --name of the function--)
```

## From here on it's customization
