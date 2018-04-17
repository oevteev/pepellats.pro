git add .
git commit -am "Deploy in Heroku"
git push heroku master -f

## If deploy to heroku have to comment code in 'serv.connect.js'

##!! git push heroku master says “Everything up-to-date”, but the app is not current !!!!
## see https://stackoverflow.com/questions/21947406/git-push-heroku-master-says-everything-up-to-date-but-the-app-is-not-current

## 1.
## Kindly confirm your current branch is master.
# git branch

##If the pointer is not pointing the master, then check out to master branch
# git checkout master

##Commit your changes and try to push to heroku
## git commit -am "xxxyyzzz"
## git push heroku master

## OR 2.
#git checkout master
#git pull
#sh deploy.sh

## OR 3.
# git push -f origin master
# git push -f heroku master
