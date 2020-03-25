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

````* {padding: 0;margin: 0;outline: none;box-shadow: none;box-sizing: border-box;} --> sets default margin, padding to 0; Outline would be outside the border, we set it default to 0; box-shadow none; box-sizing: border-box means, that padding and margin are being substracted from the given Height & width of the box, instead of being added.

li {list-style-type: none;} --> leaves out the list-dots

img {width: 100%;  object-fit: cover;} --> default img setting to cover the whole parent container and cover other elements; object fit will zoom the picture to fit the given width and otherwise cut the edges - with fill it would always be fully displayed

button {  border: none;  background: none;} --> sets default button styling ```

Then go to section layout.
--> look up comments in the style.css
````
