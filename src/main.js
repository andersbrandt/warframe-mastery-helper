const path = require("path");

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode');
}

import "./js/vendor/foundation.js";
import "./js/tippy/popper.min.js";
import "./js/tippy/tippy.min.js";
import "./js/warframe-data.js";
import "./js/app.js";
import "./js/clock-eidolon.js";
import "./js/clock-orbvallis";

import "./views/beginner-guide.hbs";
import "./views/all-items.hbs";
import "./views/filter.hbs";
import "./views/item.hbs";
import "./views/item-modal.hbs";
import "./views/search.hbs";
import "./views/search-indicator.hbs";
import "./views/status.hbs";
import "./views/pages/help.hbs";
import "./views/pages/stats.hbs";
import "./views/pages/user.hbs";
