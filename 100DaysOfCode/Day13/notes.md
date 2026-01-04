Git Basics – Branching, Merging & Recovery (Notes)

## 1️⃣ What is a Git Branch?
A branch in Git represents an independent line of development.

    Think of Git as a tree

    Each branch is a separate path

    Each commit is like a leaf/node representing a change

    Changes made in one branch do not affect other branches until merged

**Why branches are important:**

    Work on features independently

    Avoid breaking the main (production) code

    Enable parallel development in teams

## 2️⃣ Checking Current Repository Status
```
git status
```

**Shows:**

    Current branch

    Modified files

    Staged files (ready to commit)

    Untracked files

## 📌 Interview explanation:
```
git status
```
**helps developers understand the current state of their working directory and staging area.**

## 3️⃣ Viewing and Managing Branches
```
git branch
```
    Lists all local branches

    * indicates the current branch

**Rename a Branch**
```git branch -M new-branch-name
```


## 📌 Commonly used to rename:

**master → main**



## 4️⃣ Creating & Switching Branches
**Create and switch to a new branch**
```
git checkout -b branch-name
```

    What this does:

    Creates a new branch

    Switches (checkouts) to it immediately

## 📌 Used when starting:

    A new feature

    A bug fix

    An experiment

## 5️⃣ Deleting a Branch
**Delete a local branch**
```
git branch -d branch-name
```

**Deletes only if branch is already merged**

**Force delete**
```
git branch -D branch-name
```

## 📌 Best practice:
Delete feature branches after successful merge to keep repo clean.

## 6️⃣ Staging & Unstaging Files
Stage a file
```git add filename```

**Unstage a file**
```git rm --cached filename```


## 📌 Key concept:

    Working Directory → where you edit files

    Staging Area → where you prepare commits

    Repository → committed history

## 7️⃣ Merge Conflicts (IMPORTANT ⭐)
What is a Merge Conflict?

    Occurs when:

    Same file

    Same lines

    Modified in different branches

    Git cannot decide which change to keep

**How Git shows conflicts:**
<<<<<<< HEAD
Current branch changes
=======
Incoming branch changes
>>>>>>> branch-name

**How to Resolve Merge Conflicts:**

    Open the conflicted file

    Decide:

    Accept current changes

    Accept incoming changes

    Combine both

    Remove conflict markers

    Stage the file

    Commit the merge


## 8️⃣ Resetting Changes (Undoing Mistakes)
Soft Reset
```
git reset --soft HEAD~1
```

Undo commit

Keeps changes staged

Hard Reset ⚠️
```
git reset --hard HEAD~1
```

Deletes commit

Deletes changes permanently


## 9️⃣ Reverting Commits (Safe Undo)
Revert a commit
```
git revert commit-hash
```

    Creates a new commit

    Does NOT delete history

    Safe for shared branches

##🔟 Creating a GitHub Repository (Basic Flow)

    Go to GitHub

    Click New Repository

    Add name & visibility

    Copy remote URL

    Connect local repo:
```
git remote add origin repo-url
git branch -M main
git push -u origin main
```
