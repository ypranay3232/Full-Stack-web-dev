How Does Web Works ? 

The Bigger Picture : When a user enters a Domain Name or search for something Browser --> Finds a serve and establish a secure Connection --> Then ask for data user requested --> Serer responds with a reply --> Browser renders the Pixels.


Step 0 :

When a user Types (Something.com or How to learn to code ? ) in a browser, 
Browser first Checks : 
if it has ip cached 
did user previously searched the same site ?
Is it in DNS cache 

if yes go to the server because we have info about the site

if NO ? 

STEP 1 : 

DNS (Domain name system that translates names into addresses)
Computers dont understand Domain names, They take ip addresses so : 
Google.com becomes --> 142.250.190.14

DNS is a kind of phone book that maps Domain Names to it's addresses 
---------------------------------------------------------------------

So the Dns LookUp Chain is performed by checking : 
Browser cache

OS cache

Router cache

ISP DNS

Root DNS

TLD DNS (.com)

Authoritative DNS (Google’s DNS)

Final answer returned:

google.com → 142.250.190.14
---------------------------------------------------------------------
STEP 2 : Tcp Connection 
Browser needs to know where the Server is located at ? and How to connect securely ?

Browser uses 3 way handshake : After getting the ip address from DNS Browser makes a HTTP request to that server.

SYN : Synchronize message (can we talk) 
SYN + ACK : Ok i got your message what happened ? 
ACK : Cool lets talk ! 
---------------------------------------------------------------------
STEP 3 : 
Now TLS Transport layer security kicks in WHile handshaking 
- without TLS : ISP can read your data (no security), Hackers can sniff passwords etc

What does TLS do : 
Verifies Server identity by providing a certificate : 
Then Negotiates encryption keys 
encrypts data 
----------------------------
TLS Flow (Simplified)

Browser: “I want HTTPS”

Server: “Here’s my certificate”

Browser: “Certificate verified”

Keys exchanged

Encrypted tunnel established
----------------------------------------------------------------------
STEP 4 :  Browser ask for something (HTTP request)

GET / HTTP/1.1
Host: google.com
User-Agent: Chrome

HTTP is stateless unless used some cookies or session storages
---------------------------------------------------------------------------
STEP 5 : Server Process the request 

Request hits Load Balancer

Goes to Web Server (Nginx/Apache)

Routed to Backend App

App may query Database

Response generated
-------------------------------------------------------------------------
STEP 6 : Browser responds with a HTTP response 

200 OK
Content-Type: text/html
with : HTML,CSS links,JS files,Images
---------------------------------------------------------------------------
STEP 7 : Browser rendering (pixels on screen)
Browser Rendering Pipeline

Parse HTML → DOM

Parse CSS → CSSOM

Combine → Render Tree

Layout → positions

Paint → pixels

JS execution