# PIKAVIKA
A simple practice program made by the students of ICT-Camp. Its purpose is to be cloud based online application wich lets user to select a location from the map and input detailed report about failure in city of Tampere's road maintaining network. It allows users to attach a picture and track the response to the reporteted issue.  

### Contributions

[Juuso Koivunen](https://github.com/Jay-Global/) is maintainer for this repository.

Actual contributors:

- [Essi Terho](https://github.com/essij/)
- [Sampo Saikkonen](https://github.com/Pellemasi/)
- [Erkki Rainamo](https://github.com/eskobars/)
- [Teemu Nurmi](https://github.com/TeemuKoodaa/)

Many thanks to BearIT

## Contributing
Changes and improvements are more than welcome! 

I kindly ask to all contributors to make all new changes and features to a `new branch` aka. `feature branch` wich is created from `develop branch`. Name the new branch in a way that it corresponds to the new code or feature you're creating. Reason from creating the `new feature branch` from develop branch is that repos `remote tracking branches` aren't messed up. 

    $ git clone https://github.com/Jay-Global/ICT-Camp-Pikavika.git

    Cloning into 'ICT-Camp-Pikavika'...
    remote: Enumerating objects: 74, done.
    remote: Counting objects: 100% (74/74), done.
    remote: Compressing objects: 100% (41/41), done.
    remote: Total 74 (delta 34), reused 67 (delta 29), pack-reused 0
    Receiving objects: 100% (74/74), 12.22 KiB | 2.44 MiB/s, done.
    Resolving deltas: 100% (34/34), done. 

    $ git status

    On branch main
    Your branch is up to date with 'origin/main'.

    nothing to commit, working tree clean

    $ git branch -r

    origin/HEAD -> origin/main
    origin/develop
    origin/main
    origin/samponTouhut

    $ git switch develop

    branch 'develop' set up to track 'origin/develop'.
    Switched to a new branch 'develop'

    $ git branch

    * develop
      main

    $ git switch -c newfeaturebranch

    Switched to a new branch 'newfeaturebranch'



Pushing those new commits to your `own branch` aka `newfeaturebranch` to others to view and fetch and pull from. This makes collaborating on same issues possible. Before merging to the `main` or `develop` branch create a PR for us together review the code or changes and to decide when and what to merge to the `main branch`
 
If you can, please make sure code fully works before sending the PR, as that will help speed up the process.

## License
PIKAVIKA is licensed under the [MIT license.](https://github.com/Jay-Global/ICT-Camp-Pikavika/blob/main/License.txt)
