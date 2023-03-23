# git is a version control system tool

# github is a web based platform for hosting git repositories

---

## uses and benefits of git

#### Multiple version of Code

Suppose,
you have a source code that is already running on a server and you want to improve that code.but if you change the source code it could hamper the running code or you may make it worse than improving it.So here's the sollution you can make a copy of the current code and improve the copy code.if you do something wrong in the copy code it will not hamper the service and won't make any problem in source code.it is 100% safe now...here copy means branch...

#### History of changes

When,
you have a large scale project..there are ton of codes..you cann't always remember and track this huge amount of code.if you modify something or try new feature there is change that you may make the whole code unrunable.but if you use git you are safe from this kind of things,you can always take a snapshot of your code and then change the code if something bad happen in code you can always revert to previous code that you have snaped..snap can be taken by commit..

#### Code review

After,
you have write your code you may want to recheck and reconsider that if are really sure that you want to deploy your new version of code in server.You can also recheck the whole process how you have done the whole project.You can compare your previous code with the new code...by deffer

#### Merging

Then,
if you are sure you have done what you wanted then you can merge the code to the source code and you have successfuly improved the source code without hamparing the service..git make it happen..

#### Distributed Development & Collaboration

If,
You are working with a team without git you have to collect code from every member frequently by mail or any other means.But here is a huge change of misunderstanding and miscommunication and make the whole process of development hell.But with git you can have your own repository and a centerl repository.In your own repository you can always get the newest version of your project code from the main repository and you can always push your modified code when you are satisfied with our code.Then you can merge every branch of code and make the project whole..

#### Backup and restore

Suppose,
The whole project was somehow deleted from your computer ,you can always get the code from your commited git and remote repository if you have one.But what will happen if the main server code was deleted somehow you can get the whole project from remote repository or from any other developers codespace who is working on the project.He can push the whole project to the main server.

#### Open source

It is,
open source tools,You can use it free and you can always modify it according to your need.There is no one to stop you from doing so.

---

## HOW TO CONFIGURE GIT

### level of configuration

git have 3 level of configuration

- system level
- global level
- local level

**System level** configuration is saved in `/etc/gitconfig` .all the user of the system is included here.  
    git config --system
**global level** configuration is saved in `~/gitconfig` ..Only the current user in included here.It override System level configuration  
    git config --global
**local level** configuration is saved in `.git/config` ..It include_ only the current repository.Override all level configuration  
     git config --local

### configuring git

    git config --levelOFConfiguratioin whatYouWantToSet value

    user.name for user name use "" if you have space in your name
    user.email for user email address
    core.editor for default editor you want to set
    init.defaultbranch for default branch usually main or master

    -e for configuring in code editor


                          --------HOW TO USE GIT------

## Initialize git ==>

    git init

## Stagging file and folder

    git add .    or
    git add -A   or
    git add --all  or
    git add <--file or folder name-->
    Here  . means all new and modified file and folder and -A means all new,modified and deleted file and folder

## Commiting (taking snap)

    git commit <--file or folder--> -m "message here"  or
    git commit -A -m "message here"
    Here in -A you can also use path or name of the file or folder
            -m means message.without any message you cann't commmit anything

## Check commmit history

    git log                                         to see the history of your commit.Press q to quit from log.
    git log --oneline                               to see the one commit in one line
    git log -p 8digitCommitId                       to see the specific commit
    git log --graph                                 to see like a graph

## Going back to a specific commit or undo or reset

    you can go back to  a specific commit means you can change all your code to that commit.Revert is also like commit it doesn't delete any commit on the other hand it create a new commit and revert all your code to the commit you specified..To Do This write
    git revert fullCommitId                          to revert to a specific commit.
    git revert HEAD                                  to revert to the previous commit.
    git revert fullCommitId or HEAD -m "message"     to give message of the rever commit.

## checking status of files and folder

    git status  for detailed git status
    git status -s for short git status

## creating new branch and shifting to that branch

    git branch <--branch-name-->                    to create a new branch
    git checkout <--branch name-->                  to shift to the branch
                or,
    git branch -b <--branch-name-->                 to create a new branch and shift to that branch

NOTE : You have to be uptodate means you cann't have any modified or staged file or folder to shift between branch.
but when you don't want to commit but you have to shift between branch You can use stash

## temporarily saving files without commitng (Stash)

    stash save your file in a temporary git space.but your code reset to the previouos commit.
    then you can shift between branch and then when you are done with other branch and you came to this branch and want to reset the code to what you had before stashing you can apply the stash......

    git stash save "message to identify this stash"     to  save in stash
    git stash list                                      to see the whole stash list
    git stash apply stash@{index}                       to apply the saved stash

# Hosting your git repository in github

## linking remote repository

first create a new repository and copy the http or ssh url..
http is easy to use but less secure than ssh
ssh is more difficult to use but more secure
git remote to indicate remote repository then write
add to add remote repository link
origin to name the repository link deafult origin
repository link to link repository

    git remote add origin <--repository link-->

## Removing remote repository

    git remote remove origin                         to remove link of remote repository

## Checking remote repository link

    git remote -v                                    to show all remote repository link

## Pushing in remote repository

    git push -u origin main                          to push your code to remote repository

Here, -u means the upstream you have to set the upstream for the push,after this you can just use git push to push origin is the link where you want to push your code.Origin is the default allies of the remote repository link.here main means local main branch and remote main branch,,when both are same you can just say the branch name.

## when your branch name are not same.You can write

    git remote -u origin local-branch:remote-branch

Here, local-branch is the name of the local branch and remote branch is the name of the remote branch.

## Pulling data from the remote repository

    git pull origin main                            to pull from the origin link's main branch

# To clone git repository

    git clone <--URL-->

when you clone git download all the branchs,files,folder,commit everything and make a total clone of the remote repository in the local repository..but when you pull data git only download all the new changes in the remote repository and then merge it with the local repository.if you only want to download all the chanege but don't want to merge with the local repository you can use fetch instead.And then if you want to merge you can do it with git merge..

**\*\***git ignore is yet to come**\*\*\*\***
