# Warframe Mastery Helper

Uses https://github.com/WFCD/warframe-items as data-source


## Install

Run ``composer install`` in terminal

Run ``npm install`` in terminal

Copy file ``public/conf.php.sample`` to ``public/conf.php``

Edit ``$conf["baseUrl"]`` and ``$conf["root"]`` in file ``public/conf.php``

Create file public/version.txt: `touch public/version.txt`

Add environment variables and database-scripts

Run  ``npm run updater && npm start`` in terminal


### Environment variables
``.env`` should contain SAFE_TO_PUBLISH=true


### Database
SQL-scripts are in folder ``/db``, update ``/public/conf.php`` with credentials


## Start
Run ``npm run updater && npm start`` in terminal


## Update Warframe data
Run ``npm run updater`` in terminal to fetch & update data-sources.


## Use FTP sync
Rename ``.ftpconfig.js.sample`` to ``.ftpconfig.js``

Edit ``.ftpconfig.js``

Run ``npm run publish`` in terminal

[![Supported by Warframe Community Developers](https://warframestat.us/wfcd.png)](https://github.com/WFCD "Supported by Warframe Community Developers")
