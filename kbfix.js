// ==UserScript==
// @name         KB Updates
// @namespace    https://crgstaff.com/
// @version      1.14.1
// @description  Increasing usability of KB. See comments for change list.
// @author       JS
// @grant        none
// @icon         https://www.crgstaff.com/favicon.ico
// @include      https://www.crgstaff.com/*
// @include      https://crgstaff.com/*
// @exclude      https://www.crgstaff.com/Projects/AddEditProject.aspx*
// @exclude      https://crgstaff.com/Projects/AddEditProject.aspx*
// @downloadURL  https://raw.githubusercontent.com/jdsan9/kbfix/master/kbfix.js
// ==/UserScript==


var kbfixver = "1.14.1";
// Release notes: Bugfix at Expert Profile toolbar


// Init user variables
/* Holding during FF debugging
var userLoginNameLoc = document.querySelector("#_panelMenu__lblWelcome");
var userLoginNameText = userLoginNameLoc.innerText;
var userLoginName = userLoginNameText.replace("Welcome ", "");
if (userLoginName == "jsanders") var userIdTag = "Sanders, J.";
if (userLoginName == "parmes") var userIdTag = "Armes, P.";
if (userLoginName == "khuynh") var userIdTag = "Huynh, K.";
if (userLoginName == "swinter") var userIdTag = "Winter, S.";
if (userLoginName == "jforman") var userIdTag = "Forman, J.";
if (userLoginName == "lfarquhar") var userIdTag = "Farquhar, L.";
if (userLoginName == "ksanders") var userIdTag = "Sanders, K.";
*/


// Global changes


// New KB logo
document.getElementById("_panelMenu__imgLogo").src = "https://i.imgur.com/6LFyPDi.png";

// Display current version
$("#_panelMenu__imgLogo").after("<div id='kbfixver' style='display:inline;vertical-align:top;font-size:7px;'>v"+kbfixver+"</div>");

// Remove "KB Search" radio button from TypeAhead
var kbSearchRadioCss = document.createElement("style");
kbSearchRadioCss.type = "text/css";
kbSearchRadioCss.innerHTML = "#_panelMenu__kbtypeahead__popupKBSearch_CSD-1 > table:nth-of-type(1) { display:none !important; }";
document.body.appendChild(kbSearchRadioCss);

// Make "Loading..." text a bit more interesting
var loadingLabel = document.querySelector('#_panelMenu__kbtypeahead__loadingKB_TL');
loadingLabel.textContent = "Combobulating Results Matrix...";

// Lock TypeAhead results position to search box
var lockTypeAheadPositionCss = document.createElement("style");
lockTypeAheadPositionCss.type = "text/css";
lockTypeAheadPositionCss.innerHTML = "#_panelMenu__kbtypeahead__popupKBSearch_PW-1 { top:50px !important; }";
document.body.appendChild(lockTypeAheadPositionCss);


// Page-specific changes
if(document.URL.indexOf("ProjectDetail_Tabbed.aspx") >= 0){ 
// Project page changes
    
    // Floating project toolbar
    var floatingToolbarCss = document.createElement("style");
    floatingToolbarCss.type = "text/css";
    floatingToolbarCss.innerHTML = ".kb-main-content > table > tbody > tr:nth-of-type(1) { position:fixed;top:52px;left:0px;width:100%;display:block;border-bottom:black 1px solid;box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.31);background-color:#F7F7F7;z-index:100; }";
    document.body.appendChild(floatingToolbarCss);
    var topSpacerHeight = document.querySelector('.masterContent');
    topSpacerHeight.style.position = "relative";
    topSpacerHeight.style.top = "16px";
    var projectDetailTitle = document.querySelector(".pageTitle");
    projectDetailTitle.textContent = "Project Tools and Resources";

    // Extend project info box
    function findFirstDescendantById(parent, tagname) {
       parent = document.getElementById(parent);
       var descendants = parent.getElementsByTagName(tagname);
       if ( descendants.length )
           return descendants[0];
       return null;
    }
    var infoBox = findFirstDescendantById("main_projectView__navProjectView_ITC0i0__projectViewDetail_0", "div");
    infoBox.style.height = "550px";

    // Float project title on top right
    var projectNameValue = document.querySelector('.dxnb-ghtext:nth-child(1)').innerHTML;
    var floatingProjectName = document.createElement("div");
    floatingProjectName.innerHTML = projectNameValue;
    floatingProjectName.id = "floatingProjectNameDiv";
    document.body.appendChild(floatingProjectName);
    var floatingProjectNameCss = document.createElement("style");
    floatingProjectNameCss.type = "text/css";
    floatingProjectNameCss.innerHTML = "#floatingProjectNameDiv { position:fixed;top:8px;right:10px;display:block;z-index:10000; }";
    document.body.appendChild(floatingProjectNameCss);

    // Pin tab menu to top bar when scrolled past via jQuery
    var pinnedTabMenuCss = document.createElement("style");
    pinnedTabMenuCss.type = "text/css";
    pinnedTabMenuCss.innerHTML = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 57px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:199;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px black; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
    document.body.appendChild(pinnedTabMenuCss);
    var $window = $(window),
        $stickyEl = $('#main_main_tbcAll_ulTabContainer'),
        elTop = $stickyEl.offset().top;
    $window.scroll(function() {
        $stickyEl.toggleClass('pinned', $window.scrollTop() > elTop + 50);
    });

    // Display relevant title information first
    var projectPageTitle = document.title;
    document.title = projectPageTitle.replace("Project Detail - ", "");
    document.title = document.title + " - Knowledge Broker";
    
    // Prevent leftward reclusion of project description box
    var stopHidingOnLeft = document.createElement("style");
    stopHidingOnLeft.type = "text/css";
    stopHidingOnLeft.innerHTML = "div { text-indent: inherit !important; }";
    document.body.appendChild(stopHidingOnLeft);

    // Tab-specific changes
    var allTablesProjPage = document.getElementsByTagName("table");
    var allTablesProjPageIndex = allTablesProjPage.length;
    document.getElementsByTagName("table")[allTablesProjPageIndex - 1].style.display = "none";
    document.getElementsByTagName("table")[allTablesProjPageIndex - 2].style.display = "none";
    if (document.getElementById("main_main_tbcAllProject_Leads_pnlLeads")) {
        // Recruits 
        
        // Remove inner scrollbar
        var leadFrame = document.getElementById("main_main_tbcAllProject_Leads_pnlLeads");
        leadFrame.style.height = "100%";
        leadFrame.style.border = "none";
        var leadFrameOuter = document.getElementById("main_main_tbcAll_Placeholder_Project_Leads");
        leadFrameOuter.style.border = "none";
        var leadTable = document.getElementById("main_main_tbcAllProject_Leads_rptLeads_tblRepeater");
        leadTable.style.border = "none";
        
        // Count displayed
        var recruitCountLoc = document.querySelector(".recordTotla");
        var recruitCount = recruitCountLoc.textContent;
        var findInSource = document.getElementsByTagName('html')[0].innerHTML;
        var numRecruits = "main_main_tbcAllProject_Leads_rptLeads_trNote";
        var recruitCountDisplayed = findInSource.split(numRecruits).length-1;
        recruitCountLoc.textContent = recruitCount+" | "+recruitCountDisplayed+" Displayed";
        
        // Rank drop down
        var leadTableDig1 = leadTable.firstChild;
        leadTableDig1.id = "leadContainer";
        var leadTableDig2 = leadTableDig1.firstChild;
        var leadTableMotherlode = leadTableDig2;
        $("#leadContainer tr").each(function(idx, elem) {
            $(elem).addClass("tile" + (idx % 3 + 1));
        });
        
        
    } else if (document.getElementById("main_main_tbcAllProject_AdvisorSearch_pnlMain")) {
        // Expert search 
        
        // Remove inner scrollbar
        function expertSearchPageChange () {
            var expertSearchBorderOuter = document.getElementById("main_main_tbcAll_Placeholder_Project_AdvisorSearch");
            expertSearchBorderOuter.style.border = "none";
            expertSearchBorderOuter.style.height = "inherit";
            var expertSearchBorderInner = document.getElementById("main_main_tbcAllProject_AdvisorSearch_pnlMain");
            expertSearchBorderInner.style.border = "none";
            expertSearchBorderInner.style.height = "inherit";
            var expertSearchTable = document.getElementById("main_main_tbcAllProject_AdvisorSearch__grid__advisorGrid_ctl00__gridAdvisors_DXMainTable").parentElement;
            expertSearchTable.style.height = "inherit";
        };
        document.querySelector(".dxpPageNumber_Office2010Blue").onclick = addEventListener("mousemove", expertSearchPageChange);
        
	    // Float search toolbar when scrolled past
        pinnedTabMenuCss.innerHTML = "table.pinned { position: fixed;top: 68px;left: 0px;z-index: 205;width: 100%;background-color: #F7F7F7; } #main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 90px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:199;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px black; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
        var tableExSearch = findFirstDescendantById("main_projectView__navProjectView_ITC0i0__projectViewDetail_0", "table");
        tableExSearch.id = "exSearchToolbar";
        var $window2 = $(window),
            $stickyEl2 = $('#main_main_tbcAllProject_AdvisorSearch__grid__advisorGrid').children().eq(19),
            elTop2 = $stickyEl2.offset().top;
        $window2.scroll(function() {
            $stickyEl2.toggleClass('pinned', $window2.scrollTop() > elTop2);
        });
        
    } else if (document.getElementById("main_main_tbcAllProject_Experts_pnlExperts")) {
        // Experts 
        
        // Remove inner scrollbar
        var expertFrame = document.getElementById("main_main_tbcAllProject_Experts_pnlExperts");
        expertFrame.style.height = "100%";
        var expertFrameBorder = document.getElementById("main_main_tbcAll_Placeholder_Project_Experts");
        expertFrameBorder.style.border = "none";
    };

} else if(document.URL.indexOf("CurrentProjects.aspx") >= 0) {
// Current Projects page changes
    
    // Actual page title
    document.title = "Current Projects - Knowledge Broker";
    
    // Remove inner vertical scroll on projects list
    var currentProjectsFrame = document.getElementById("main_projectsBrowseView_ctl00_gvProjects_DXMainTable");
    currentProjectsFrame.style.height = "100%";
    var currentProjectsCss = document.createElement("style");
    currentProjectsCss.type = "text/css";
    currentProjectsCss.innerHTML = "#main_projectsBrowseView_ctl00_trProjects > td > table > tbody > tr > td > div:nth-of-type(2) { height:inherit !important; }";
    document.body.appendChild(currentProjectsCss);

    // Projects count
    var findInCurrents = document.getElementById("main_projectsBrowseView_ctl00_gvProjects_DXMainTable").innerHTML;
    var countPriority = findInCurrents.split("Priority").length-1
    var countActive = findInCurrents.split("Active").length-1
    var floatingProjectCount = document.createElement("div");
    floatingProjectCount.innerHTML = "<font color='red'>Priority</font>: "+countPriority+" | <font color='orange'>Active</font>: "+countActive;
    floatingProjectCount.id = "floatingProjectCountDiv";
    document.body.appendChild(floatingProjectCount);
    var floatingProjectCountCss = document.createElement("style");
    floatingProjectCountCss.type = "text/css";
    floatingProjectCountCss.innerHTML = "#floatingProjectCountDiv { position:fixed;top:20px;right:25px;display:block;z-index:10000;font-weight:bold; }";
    document.body.appendChild(floatingProjectCountCss);
    
} else if(document.URL.indexOf("MemberProfile_Tabbed.aspx") >= 0) {
// Expert Profile page changes
    
    // Display relevant title information first
    var expertProfilePageTitle = document.title;
    document.title = expertProfilePageTitle.replace("Expert Profile - ", "");
    document.title = document.title + " - Knowledge Broker";
    
    
} else if(document.URL.indexOf("Overview.aspx") >= 0) {
// Overview page changes
    
    // Verbals count
    if (document.getElementById("main__overviewMetrics__dockZoneBottomRight_ctl03_rpPanel_HTC__title_0")) {
        var verbalString = "gvVerbals_DXDataRow";
        var findSource = document.getElementsByTagName('html')[0].innerHTML;
        var numVerbals = findSource.split(verbalString).length-1;
        document.querySelector("#main__overviewMetrics__dockZoneBottomRight_ctl03_rpPanel_HTC__title_0").innerText = "MY VERBALS | "+numVerbals+" outstanding";
    };

} else if(document.URL.indexOf("AddEditMember.aspx") >= 0) {
    // Add & Edit Member page changes
    
    // Prevent autofilling researcher password [not working]
    // $( "#form1" ).attr( "autocomplete", "off" );
    
    // Hide "Save and Email" button [awkward misclick]
    var hideSaveAndEmail = document.getElementById("main__addEditViewAdvisor__btnSaveAndEmail");
    hideSaveAndEmail.style.display = "none";
    
} else if(document.URL.indexOf("UpdateProject.aspx") >= 0) {
    // Update Projects page
    
    // Remove project descriptions
    var killUpdateDescription = document.createElement("style");
    killUpdateDescription.type = "text/css";
    killUpdateDescription.innerHTML = "#main_p > table > tbody > tr > td:nth-of-type(1) > table > tbody > tr:nth-of-type(4) { display:none !important; }";
    document.body.appendChild(killUpdateDescription);
    
    // Remove inner scroll
    var updateProjectsFrame = document.getElementById("main_p");
    updateProjectsFrame.style.height = "inherit";
    
    // Actual page title
    document.title = "Update Projects";
    
} else if(document.URL.indexOf("SearchResults.aspx") >= 0) {
    // Apollo Search page
    
    // Counter search term obfuscation in title
    var projectPageTitle = document.title;
    document.title = projectPageTitle.replace("Apollo Keyword Search - ", "");
    document.title = document.title + " - Knowledge Broker";
    
    // Remove inner scroll
    function searchResultsExpand () {
        var searchResults = document.getElementById("main__grid__advisorGrid_ctl00__gridAdvisors_DXMainTable");
        var searchResults = searchResults.parentElement;
        searchResults.style.height = "inherit !important";
    };
    document.addEventListener("load", searchResultsExpand);
    document.addEventListener("mousemove", searchResultsExpand);
    
} else if(document.URL.indexOf("AddProspect.aspx") >= 0){
    // Add Prospect page
    
    // Actual page title
    document.title = "Add Prospect";
    
    /* Hold for debug: finding validation script trigger
    // Set default country - UNITED STATES
    var setDefaultCountry = document.getElementById("main_addProspectControl__roundPanel__ddlCountry_I");
    setDefaultCountry.value = "UNITED STATES";
    var setDefaultCountryID = document.getElementById("main_addProspectControl__roundPanel__ddlCountry_VI");
    setDefaultCountryID.value = "US";
    
    // Set default angle - Industry Expert
    var setDefaultAngle = document.getElementById("main_addProspectControl__roundPanel__ddlAngles_I");
    setDefaultAngle.value = "Industry Expert";
    var setDefaultAngleID = document.getElementById("main_addProspectControl__roundPanel__ddlAngles_VI");
    setDefaultAngleID.value = "8";
    
    // Logic for non-recruiter sources
    var userLoginNameLoc = document.querySelector("#_panelMenu__lblWelcome");
    var userLoginNameText = userLoginNameLoc.innerText;
    var userLoginName = userLoginNameText.replace("Welcome ", "");
    if (userLoginName == "parmes") {
        // Set default source - LinkedIn
        var setDefaultSource = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_I");
        setDefaultSource.value = "LinkedIn";
        var setDefaultSourceID = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_VI");
        setDefaultSourceID.value = "8";
    } else {
        // Set default source - Recruiter Corporate
        var setDefaultSource = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_I");
        setDefaultSource.value = "Recruiter Corporate";
        var setDefaultSourceID = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_VI");
        setDefaultSourceID.value = "151";
    };
    */
    
};



// Source signature
$("html").before("<!-- Injected with KBFix -->");
