module.exports = function (items) {

  for (var i = 0; i < items.array.length; i++) {
		var type = items.array[i]["type"];
		var category = items.array[i]["category"];
		var name = items.array[i]["name"];

		// Add " Strike" to all Zaws
		if (category == "Zaw Component") {
			items.array[i]["name"] = items.array[i]["name"] + " Strike";
			items.array[i]["category"] = "Zaw";
		}

		// Rename type and category for Kubrow
		if (type === "Pets") {
			items.array[i]["type"] = "Companion";
			items.array[i]["category"] = "Kubrow";
		}

		// Rename type and category for Kavat
		if (name.includes("Kavat")) {
			items.array[i]["type"] = "Companion";
			items.array[i]["category"] = "Kavat";
		}

		// Add 'Kitgun' as type to modular secondary
		if (
			name == "Catchmoon" ||
			name == "Rattleguts" ||
			name == "Tombfinger" ||
			name == "Gaze" ||
			name == "Sporelacer" ||
			name == "Vermisplicer"
		) {
			items.array[i]["type"] = "Secondary";
			items.array[i]["category"] = "Kitgun";
		}

		// Rename type and remove category for Amps
		if (category === "Amp") {
			items.array[i]["type"] = "Amp";
			delete items.array[i]["category"];
		}

		// Add a note to Excalibur Umbra that item are fully ranked when obtained
		if (name == "Excalibur Umbra") {
			items.array[i]["specialNote"] = "Item are fully ranked when obtained.";
		}

		// Add a note to Skiajati that item are fully ranked when obtained
		if (name == "Skiajati") {
			items.array[i]["specialNote"] = "Item are fully ranked when obtained.";
		}

		// Add a note to Ignis Wraith that item are limited
		if (name == "Ignis Wraith") {
			items.array[i]["specialNote"] = "Item are limited.";
		}

		// Add a note to Multron that is found in Fortuna
		if (name == "Multron") {
			items.array[i]["acquisition"] =
				items.array[i]["acquisition"] + " (Fortuna)";
		}

		// Change the Kuva Ayanga to a Archwing Gun
		if (name == "Kuva Ayanga") {
			items.array[i]["type"] = "Archwing Gun";
		}

		// Weapons from the Inaros update are mislabeled
		if (name == "Karyst Prime") {
			items.array[i]["category"] = "Dagger";
		}
		if (name == "Panthera Prime") {
			items.array[i]["category"] = "Rifle";
		}

		// Dark Split-Sword are mislabeled
		if (name == "Dark Split-Sword") {
			items.array[i]["category"] = "Dual Swords";
		}

		// Cortege are mislabeled
		if (name == "Cortege") {
			items.array[i]["type"] = "Archwing Gun";
		}

		// Mausolon are mislabeled
		if (name == "Mausolon") {
			items.array[i]["type"] = "Archwing Gun";
		}

		// Label Vulpaphyla as Kavats
		if (items.array[i]["name"].includes("Vulpaphyla")) {
			items.array[i]["category"] = "Kavat";
		}

		// Label Bonewidow as Vehicle / Necramech & add maxLevelCap
		if (name == "Bonewidow") {
			items.array[i]["type"] = "Vehicle";
			items.array[i]["category"] = "Necramech";
			items.array[i]["maxLevelCap"] = 40;
		}

		// Label Voidrig as Vehicle / Necramech & add maxLevelCap, rename
		if (name == "Voidrig") {
			items.array[i]["name"] = "Voidrig Necramech";
			items.array[i]["type"] = "Vehicle";
			items.array[i]["category"] = "Necramech";
			items.array[i]["imageName"] = "voidrig-necramech.png";
			items.array[i]["maxLevelCap"] = 40;
		}

		// Label Morgha
		if (name == "Morgha") {
			items.array[i]["type"] = "Archwing Gun";
			delete items.array[i]["category"];
		}

		// Fix amps being labeled as Misc
		if (items.array[i]["uniqueName"].includes("OperatorAmplifiers")) {
			items.array[i]["type"] = "Amp";
		}

		// Fix Sirocco being mislabeled as Primary Pistol
		if (name == "Sirocco") {
			items.array[i]["type"] = "Amp";
			delete items.array[i]["category"];
		}

		// Fix Ambassador
		if (name == "Ambassador") {
			items.array[i]["type"] = "Primary";
			items.array[i]["category"] = "Rifle";
		}

		// Fix Tenet weapons
		if (name == "Tenet Envoy") {
			items.array[i]["category"] = "Rocket Launcher";
		}
		if (name == "Tenet Tetra") {
			items.array[i]["category"] = "Rifle";
		}

		// Fix Corpus Liches hound weapons
		if (name == "Akaten") {
			items.array[i]["name"] = "Akaten (Hec Hound)";
			items.array[i]["category"] = "Hound attack";
			items.array[i]["wikiaUrl"] = "https://warframe.fandom.com/wiki/Akaten";
		}
		if (name == "Lacerten") {
			items.array[i]["name"] = "Lacerten (Bhaira Hound)";
			items.array[i]["category"] = "Hound attack";
			items.array[i]["wikiaUrl"] = "https://warframe.fandom.com/wiki/Lacerten";
		}
		if (name == "Batoten") {
			items.array[i]["name"] = "Batoten (Dorma Hound)";
			items.array[i]["category"] = "Hound attack";
			items.array[i]["wikiaUrl"] = "https://warframe.fandom.com/wiki/Batoten";
		}

		// Fix companion MOAs Wikia URL
		if (name == "Lambeo Moa") {
			items.array[i]["wikiaUrl"] =
				"https://warframe.fandom.com/wiki/MOA_(Companion)";
		}
		if (name == "Nychus Moa") {
			items.array[i]["wikiaUrl"] =
				"https://warframe.fandom.com/wiki/MOA_(Companion)";
		}
		if (name == "Oloro Moa") {
			items.array[i]["wikiaUrl"] =
				"https://warframe.fandom.com/wiki/MOA_(Companion)";
		}
		if (name == "Para Moa") {
			items.array[i]["wikiaUrl"] =
				"https://warframe.fandom.com/wiki/MOA_(Companion)";
		}

		// Fix Corufell mislabeled as Archwing Melee
		if (name == "Corufell") {
			items.array[i]["type"] = "Melee";
			delete items.array[i]["category"];
		}

		// Temporary: Remove category on all melee weapons
		if (type == "Melee") {
			delete items.array[i]["category"];
		}
	}
  return items;

};
