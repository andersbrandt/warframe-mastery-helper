# Missing items

None right now

## Tier-list are disabled

Removal of all but weapons happened 2019.03.15

https://github.com/weblue/wanna_b_tierlist/commit/8483698b2b49d0396168594e897027c86baf9940#diff-09703098c69f3c7fccc211e0a0091959 

Using data-file from commit preceding change 

https://raw.githubusercontent.com/weblue/wanna_b_tierlist/362af0205fa639cd8471e3cf55bc3160ea8fbb68/js/thelist.json

# TODO / BUGS

- Fix ugly SQL in class User.php

- Spinner when saving

- fix hardcoded path in user-auth.php & admin-auth.php - Maybe not possible

- https://webpack.js.org/guides/build-performance/ < start using include for faster webpack-performance


**Features needed**

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
