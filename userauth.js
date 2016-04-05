function initUsers() {
     var userIDLoc = document.querySelector("#_panelMenu__lblWelcome");
     var userID = userIDLoc.innerText.replace("Welcome ", "");
          if (userID == "jsanders") { uIDrecognize = true; var userIDTag = "Sanders, J."; var userFN = "Joe"; var userLN = "Sanders"; }
     else if (userID == "parmes") { uIDrecognize = true; var userIDTag = "Armes, P."; var userFN = "Pippa"; var userLN = "Armes"; }
     else if (userID == "swinter") { uIDrecognize = true; var userIDTag = "Winter, S."; var userFN = "Sarah"; var userLN = "Winter"; }
     else if (userID == "ksanders") { uIDrecognize = true; var userIDTag = "Sanders, K."; var userFN = "Kevin"; var userLN = "Sanders"; }
     else if (userID == "ebrooks") { uIDrecognize = true; var userIDTag = "Brooks, E."; var userFN = "Eric"; var userLN = "Brooks"; }
     else if (userID == "agilmore") { uIDrecognize = true; var userIDTag = "Gilmore, A."; var userFN = "Austin"; var userLN = "Gilmore"; }
     else if (userID == "dmarina") { uIDrecognize = true; var userIDTag = "Marina, D."; var userFN = "David"; var userLN = "Marina"; }
     else if (userID == "emabunga") { uIDrecognize = true; var userIDTag = "Mabunga, E."; var userFN = "Elicia"; var userLN = "Mabunga"; }
     else if (userID == "awillard") { uIDrecognize = true; var userIDTag = "Willard, A."; var userFN = "Andy"; var userLN = "Willard"; }
     else if (userID == "klindholm") { uIDrecognize = true; var userIDTag = "Lindholm, K."; var userFN = "Kyle"; var userLN = "Lindholm"; }
     else if (userID == "zwienandt") { uIDrecognize = true; var userIDTag = "Wienandt, Z."; var userFN = "Zach"; var userLN = "Wienandt"; }
     else { throw new Error( 'Unrecognized user. Please uninstall this plugin.' ); };
};
