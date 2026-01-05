What is a Personal Access Token (PAT)?

A Personal Access Token (PAT) is a secure authentication mechanism used to access GitHub 
instead of a password.

Why Did GitHub Introduce PAT?

GitHub removed password-based authentication for Git operations over HTTPS for security reasons.

Problems with passwords:

Easy to leak,Hard to restrict permissions,Same password often reused

Benefits of PAT:

More secure,Permission-based access,Can be revoked anytime

When Do We Use a PAT?

You need a PAT when:
Pushing or pulling code using HTTPS

Authenticating Git from terminal

PAT is NOT required if: You use SSH authentication


How to Generate a GitHub PAT Steps:

Go to GitHub → Settings

Developer settings

Personal access tokens

Generate new token

Select:

Token type

Expiration date

Required scopes

Generate token

Copy and store securely
--------------------------------------------------------------------------------------------------
What is Collaboration in GitHub?

Collaboration means multiple developers working on the same codebase without breaking 
each other’s work.

In GitHub, collaboration is primarily done using:
Forks
Branches
Pull Requests (PRs)


What is a Fork?
A fork is a personal copy of someone else’s repository under your GitHub account.

Why Fork is Needed:
You don’t have write access to the original repo
Safe experimentation without affecting original code


Fork vs Clone (Very Important)
Feature	        Fork	                Clone

Location	    GitHub (cloud)	        Local machine
Ownership	    Your GitHub account	    Your system
Use case	    Contributing	        Development
Needed for PR	✅ Yes	               ❌ No



Complete Fork & PR Workflow (Step-by-Step)

🔹 Step 1: Fork the Repository

Click Fork on GitHub

Repo appears in your account

🔹 Step 2: Clone Your Fork
git clone https://github.com/your-username/repo-name.git

🔹 Step 3: Create a Feature Branch
git checkout -b feature-branch


📌 Best Practice:
Never work directly on main.

🔹 Step 4: Make Changes & Commit
git add .
git commit -m "Add feature X"

🔹 Step 5: Push Changes to Your Fork
git push origin feature-branch

🔹 Step 6: Create a Pull Request (PR)

Go to original repository

Click New Pull Request

Select:

Base repo → original

Compare repo → your fork

📌 This requests the maintainer to review and merge your changes.


What is a Pull Request (PR)?

A Pull Request is a request to merge your changes into another repository or branch.

PR Includes:

Code changes
Commit history
Description
Review comments
Approval or rejection