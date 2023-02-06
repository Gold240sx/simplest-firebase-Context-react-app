Level 1: A course based upon the video link: https://www.youtube.com/watch?v=x62aBvnRCKw&t=327s.
(Please Note: this doesn't in fact actually prevent an un-logged in user from seeing the dashboad. There is a restricted page in his template that he had that i didn't complete. )

Level 2: Auth State Management and loading states with funcitonal hooks and a bit of input verification. This is based moreso on David Gray's tutorial found here: "https://www.youtube.com/watch?v=nI8PYZNFtac".

I've expanded on this in several ways: - Added parenthesis as a valid regex character input for password - Changed the CSS appearance up drastically, convertting it all into SCSS, and taking a much more modular approach. - Added a few more inputs to the Register Page. [ email, ] - transitions - Input icons - a show / hide password button - a remember me button on the login page. - Firebase V9 Backend Setup - React-Router-Dom v6 Setup. (turotial only included a register page)

UserList: - Added multiple inputs and output per project in the (userList), as opposed to the single input/output provided by the tutorial. - changed the deleteDoc click event occurance from clicking on the project li itself (doesnt make any sense) to a fontAwesome trash icon. - AutoCopy Text when clicked - Added tooltips for both AutoCopy success message and Hover Alerts

Ill be branching the remainder of progress off this branch.
