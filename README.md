# One Pager Tutorial

This is a tutorial on how to build a simple one pager website using vanilla html css and javascript.


## First Step - setting up file structure and first commit
Clone Repository from GabrielHeinrich
Remote Repository to my new github repository
Push -u my-github master  --to my github repository

Create new branch "setup" and create file and folder structure there
Create and fill LICENSE  --read https://choosealicense.com/
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
  Inside the <main> put sections, i.e. like this --> (section#>div.section-inner-container>div.)*5  <!-- 5 sections with 1 child each: div class="section-inner-container" with 1 child div class="" -->

Fill the sections with text

Finally commit changes in setup to remote, checkout master, merge with html branch and push changes like this
  --> git commit -am "Create basic html structure"
  --> git checkout master
  --> git merge html
  --> ``` This is for pushing the master branch ```
  --> git push
  --> git push -u my-github html