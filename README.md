## init

1. Install packages: `npm install`
1. Edit the database configuration: `config/database.js`
1. Create the database schema: `node scripts/create_database.js`
1. Launch: `node server.js`
1. Visit in your browser at: `http://localhost:8080`
1. http://34.224.86.45:8080/



## DEV notes:<br>

### Oct 5 2017
* AWS: app is running, watching by PM2 (auto restart, node monitring)

### Oct 4 2017
* hotfix
* update for AWS EC2
* AWS: install PM2

### Oct 3 2017
* AWS setup. created 1 EC2 instance
* AWS: install 6.10.1 Node.js
* AWS: install git
* AWS: install MySQL

### Oct 2 2017
* create order-online in-progress
* home page updated (main menu), added folder for assets (css/js/img)
* title/label updated to chinese

### Oct 1 2017
* moved Canada post customer id to config file

### Oct 1 2017
* Added API /api/v1/postoffice (Get Nearest Post Office)

### Sep 30 2017
* added lib node-rest-client for REST API. added Canada Post API call (find postoffice)
* added xml sample folder and non-contract shipment sample
* added node-rest-client for Canada Post API calls
* added conf.json to gitignore (config file for db and session secret)

### Sep 19 2017
* profile page style improved
* added Edit address, fixed primary_address

### Sep 18 2017
* update address api call in-progress
* added Edit address page (form/routes)

### Sep 17 2017
* profile page text updated (Mandarin)
* Profile page - added Edit Address button
* Profile page updated, showing  all addresses
* profile page updated, displaying Addresses

### Sep 16 2017
* routes updated, added addresses to profile page

### Sep 15 2017
* Add New Address form completed, routes and DB updated

### Sep 13 2017
* add address page updated (form completed)

### Sep 13 2017
* profile-address-add page added

### Sep 11 2017
* database updated, added table for addresses

### Aug 20 2017
* edit user page added

### Aug 15 2017
* upgraded to bootstrap v4 beta
* header/top-navbar updated
* routes updated for user profile edit

### Aug 2 2017
* added more field to signup page, passport.js updated

### Aug 1 2017
* improved top-navbar template to handle login or non-login user, improved routes etc
* main-js template added for js
* added a animation to home page

### Jul 31 2017
* routes.js updated, added an api /allusers for testing

### Jul 30 2017
* users table updated, page related to users updated
* api set up in-progress

### Jul 28 2017
* adding template (header and js lib)
* header, top-navbar added


### Jul 27 2017
* init (integrated MySQL, Express 4)
