# Missing items

- Only one MOA gives mastery rank in game menu

- Only one K-Drive gives mastery rank in game menu

- K-Drive will not display as ranked due to a bug


## Tier-list are disabled

Removal of all but weapons happened 2019.03.15

https://github.com/weblue/wanna_b_tierlist/commit/8483698b2b49d0396168594e897027c86baf9940#diff-09703098c69f3c7fccc211e0a0091959 

Using data-file from commit preceding change 

https://raw.githubusercontent.com/weblue/wanna_b_tierlist/362af0205fa639cd8471e3cf55bc3160ea8fbb68/js/thelist.json

# TODO / BUGS

- Fix publish.js (Uploading all files, not just updated files)

- Add all chinese uniques, and a defaulted setting in Profile "Hide all items unique to chinese version"

- Fix ugly SQL in class User.php

- Spinner when saving

- fix hardcoded path in user-auth.php & admin-auth.php - Maybe not possible

- https://webpack.js.org/guides/build-performance/ < start using include

- Look into "Comes with Sentinel", change to Companion or use DE's new "Robotics" and "Beast"

- Remove these images from image folder 'Secondary'
	
	- Cryotra
	- Multron
	- Tazicor
	- Vulcax

- Remove types "Misc" in updater.js ?

- ? Add login by token (login.php?token=aafc-4423-ff44-99-etc)

- ? Add cache-busting to .css and .js


## Missing gear

None right now


## Oddities

Market retired 2: Snipetron & Machete (available as rewards)

Founders 3: Excalibur Prime, Lato Prime, Skana Prime

Chinese version only: Prisma Machete


## Other

API https://docs.warframestat.us/#tag/data%2Fpaths%2F~1weapons%2Fget

About-page / data: add version and date to all fetched resources


## Cycle on Earth:

Day Phase: 12:00pm to 4:00 pm, 8:00pm to 12:00am, 4:00am to 8:00am

Night Phase: 4:00pm to 8:00pm, 12:00am to 4:00am, 8:00am to 12:00pm


## Data sources of interest

https://github.com/WFCD/warframe-items/tree/development/data/json

## DE generated

		"http://content.warframe.com/MobileExport/Manifest/ExportWeapons.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportUpgrades.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportManifest.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportSentinels.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportResources.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportDrones.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportCustoms.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportFlavour.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportKeys.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportGear.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportRelicArcane.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportRegions.json",
		"http://content.warframe.com/MobileExport/Manifest/ExportWarframes.json"

## User generated

http://warframe.wikia.com/wiki/Module:Weapons/data?action=edit textarea#wpTextbox1

https://api.warframestat.us/weapons

https://api.warframestat.us/warframes

https://api.warframestat.us/drops/search/Trinity

http://warframe.wikia.com/api.php


### Warframe stats

https://github.com/WFCD/api-spec

https://api.warframestat.us/routes

https://api.warframestat.us/weapons

https://api.warframestat.us/warframes

https://api.warframestat.us/drops/search/Trinity

https://api.warframestat.us/pc/fissures


### Official data

http://content.warframe.com/dynamic/worldState.php

https://n8k6e2y6.ssl.hwcdn.net/repos/hnfvc0o3jnfvc873njb03enrf56.html  (Official Drop Data Website)

https://n8k6e2y6.ssl.hwcdn.net/repos/hnfvc0o3jnfvc873njb03enrf56.html#blueprintLocations


### Wikia

http://warframe.wikia.com/wiki/Module:Weapons/data

http://warframe.wikia.com/wiki/Module:Weapons/data?action=edit textarea#wpTextbox1


### Other data sources

https://github.com/WFCD/warframe-location-query

http://xenogelion.com/Hidden/Relics.json

https://drops.warframestat.us/

https://github.com/Ogg-Technologies/warframe-database

https://github.com/GuillaumeD84/Warmory/blob/master/composer.json


## Future development

This need to be released as a real web-app, not just a proof-of-concept.

React can be a usefull library, if cheap hosting are found this should be built in Node.


**Features needed**

- More stable and robust module-system for scraping, it should be easy to add a new data-source, scrape it and map the data.

- Scraper need a filter/hook system for manipulation of data ("Ack and Brunt" vs "Ack & Brunt")

- JWT tokens (or similar) for login and refresh

- Item-state are distributed among all logged in clients for a user

- Add info on acquisition, like drop-locations for Primes and resources needed for parts. All this should be searchable (Argon + filter:unranked)

- Smarter and more effective search

- WAY better filter and indicators for search. Should be possible to filter all available types.

- Proper system for routes, endpoints and navigation (menu) with indicators for active tab + location that can be reloaded


**Features wanted**

- Todo list with possibility to add the resources needed for crafting an item

- Better logging and saving of items, add at least timestamp for checking

- Graphs and better presentatation of user's mastery progress over time

- Possibility for users to add notes per item

- Pull some logic from here https://github.com/lyneca/eidoclock and show the time on Eidolon?


**Goal**

- The outspoken goal for this app is to be accepted as an Official Community Fansite [https://www.warframe.com/community/fansites]

- The long-time goal for this app is to be THE app for mastery-help
