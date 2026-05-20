# Auth & Authorization (Simplified!) 

## 1. Authentication vs Authorization: What's the difference?

### Authentication (Who are you?)
When an unknown user wants to open/access their account, they have to prove they are actually the owner of that account.
* **How it works:** They provide their email and password.
* **The check:** If these match what is in the Database (DB), we grant access!
* **In simple words:** Checking if a user is a valid user and has the right to access their account.

### Authorization (What can you do?)
Once a user is logged in, we have to check what they are actually allowed to do on the website.
* **Example:** A user wants to edit the username in a profile.
* **The check:** Does this user have the rights to edit this profile?
  * **Yes?** --> They can edit!
  * **No?** --> They can't. If they don't have the rights, the user is not an authorized person to make those changes.

---

## 2. The Big Problem: Servers are Forgetful! 

Normally, when a browser (**Chrome**) talks to a server (**Instagram**), it looks like this:

```text
[Instagram Server]                                    [Chrome Browser]
                                                   
  login id and password?   <-----------------------   Requests to login
  
  Okay, Authenticated user! ---------------------->   Sends credentials (ID & password)
```

But here is the catch: **Servers are forgetful.** 
As soon as you request a new page or click on something else, the server forgets who you are and asks you to log in all over again! To solve this, we use **"Cookies and Sessions"** (or **Tokens**).

---

## 3. How Cookies, Sessions, and Tokens Save the Day! 

Instead of asking you to log in on every single request, the server uses a special string (a **Token**):

```text
[Instagram Server]                                    [Chrome Browser]
                                                   
  Who are you?             <-----------------------   Sends request for a profile page
  
  Access granted!          <-----------------------   Sends login credentials
  (Generates a TOKEN key)
  
  Sends TOKEN key ----------> [Stores Token] 
  
  Reads attached TOKEN.
  "Ah, it's you! Welcome!" <-----------------------   Sends new request + ATTACHED TOKEN
```

### Step-by-Step Flow:
1. **Login:** Chrome sends a login request with credentials.
2. **Verification & Generation:** The server checks the database, authenticates the user, and generates a unique string called a **TOKEN**.
3. **Sending the Token:** The server sends this token string back to Chrome, where it gets stored (e.g., in a cookie).
4. **Automatic Attachment:** For every next request you make, Chrome automatically attaches this token string to the request and sends it back to the server.
5. **No More Logins:** The server sees the token, verifies it, and knows you are the authenticated user—no login screen required!
