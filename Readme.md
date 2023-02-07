To get the local .env files working for Firebase Deploy:
run these commands in the cli:

-   firebase use --add ...dev
-   firebase use --add ...prod

Level 1: A course based upon the video link: https://www.youtube.com/watch?v=x62aBvnRCKw&t=327s.
(Please Note: this doesn't in fact actually prevent an un-logged in user from seeing the dashboad. There is a restricted page in his template that he had that i didn't complete. )

Level 2: Auth State Management and loading states with funcitonal hooks and a bit of input verification. This is based moreso on David Gray's tutorial found here: "https://www.youtube.com/watch?v=nI8PYZNFtac".

I've expanded on this in several ways: - Added parenthesis as a valid regex character input for password - Changed the CSS appearance up drastically, convertting it all into SCSS, and taking a much more modular approach. - Added a few more inputs to the Register Page. [ email, ] - transitions - Input icons - a show / hide password button - a remember me button on the login page. - Firebase V9 Backend Setup - React-Router-Dom v6 Setup. (turotial only included a register page)

UserList: - Added multiple inputs and output per project in the (userList), as opposed to the single input/output provided by the tutorial. - changed the deleteDoc click event occurance from clicking on the project li itself (doesnt make any sense) to a fontAwesome trash icon. - AutoCopy Text when clicked - Added tooltips for both AutoCopy success message and Hover Alerts

Ill be branching the remainder of progress off this branch.

Level 3. Multi-User-Role Authentication, Axios, JWT, + cookies
requires the nodeJS backend server deployment spoken about here: "https://youtu.be/brcHK3P6ChQ?t=2365". The webserver source code is here: 'https://github.com/gitdagray/nodejs_web_server " Add localhost port 3000 to allowed origins.
The React Login Authentication Series:

1. React Register Form with Validation, Axios and a11y: https://youtu.be/brcHK3P6ChQ
2. React User Login and Authentication with Axios: https://youtu.be/X3qyxo_UTR4
3. React Protected Routes | Role-Based Authorization: https://youtu.be/oUZjO00NkhY
4. React Login Authentication with JWT Access, refresh Tokens, Cookies and Axios: https://www.youtube.com/watch?v=nI8PYZNFtac

Level 3 (Modified) Notes: I realized that the tutorial was much more geared to a node.js server. Firebase also includes it's own automatic signout which was part of the reason, we were using axios in the first place. I searched and found a funciton on SO and included a modified variation of it for use with this project. The file is called useTimedSignout in the hooks folder and is currrently untested. The other reason I planned on utilizing axios is to encrypt data to and from firebase. I plan on utilizing this tutorial here: 'https://www.youtube.com/watch?v=dDVicLcbOZ4" but did a quick google search and realized that all firebase services are end-to-end encrypted; so it'c better to just keep things simple-(ish).

The Level 3 will include minor UI tweaks, updates to state and error reporting, Aria and screenreader accesssibility tweaks and userRoleAuthentication, based upon a configurable authorization tree predefining the roles. idk how i plan to encorporate that into context but i'll keep this updated when i figure that out.

// [ CURRENT] //

Level 4 will include an update to encorporate most firebase 9 variation functions into their own hooks.

Level 5 will incorporate cloud functions for things like email notifications on user signup or drip email campaigns via the app and sendgrid.
