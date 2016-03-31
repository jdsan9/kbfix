// ==UserScript==
// @name         KnowledgeBetter
// @namespace    https://crgstaff.com/
// @version      2.3.0
// @description  A complete UX overhaul for KnowledgeBroker. See comments for change list.
// @author       jdsan9
// @grant        none
// @icon         https://www.crgstaff.com/favicon.ico
// @include      https://www.crgstaff.com/*
// @include      https://crgstaff.com/*
// @exclude      https://www.crgstaff.com/Projects/AddEditProject.aspx*
// @exclude      https://crgstaff.com/Projects/AddEditProject.aspx*
// @downloadURL  https://raw.githubusercontent.com/jdsan9/kbfix/master/kbfix.js
// ==/UserScript==


// Global Variables

// Current version
var knowledgeBetterVer = "2.3.0";
// Release notes: User IDs and browser wars (FF EoL)

// Browser detection & FF error
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox === true) {
    var ffErrMsg = "Thank you for using the <b>KnowledgeBetter</b> plugin!<br/>Firefox is no longer supported. Switch to Chrome for additional features and more!<br/>You can hide this message by disabling the monkey plugin above.";
    $('body').append('<div style="position:fixed;top:9px;right:9px;text-align:right;font-size:x-small;z-index:10000;">'+ffErrMsg+'</div>');
    throw new Error( 'Firefox is no longer supported. The KnowledgeBetter script has been halted. Revert to v2.2.x to continue using this plugin. Note that some features may not work correctly or at all.' );
    // Revert to v2.2.x to continue using this plugin.
};

// KnowledgeBetter CSS container
$( 'body' ).append( '<style type="text/css" id="knowledgeBetterCSS"></style>' );
var knowledgeBetterCSS = document.getElementById('#knowledgeBetterCSS');

// Init user variables
if (isChrome === true) {
    var userIDLoc = document.querySelector("#_panelMenu__lblWelcome");
    var userID = userIDLoc.innerText.replace("Welcome ", "");
    userID = "jack"
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
    else { throw new Error( 'Unrecognized user. Please uninstall this plugin.' ); };
};


// Global changes

// New KB logo
document.getElementById("_panelMenu__imgLogo").src = "https://i.imgur.com/6LFyPDi.png";

// Current version as logo title
document.getElementById("_panelMenu__imgLogo").title = "KnowledgeBetter v" + knowledgeBetterVer;

// Remove "KB Search" radio button from TypeAhead
var kbSearchRadioCss = "#_panelMenu__kbtypeahead__popupKBSearch_CSD-1 > table:nth-of-type(1) { display:none !important; }";
$( '#knowledgeBetterCSS' ).append( kbSearchRadioCss );

// Make "Loading..." text a bit more interesting
var loadingLabel = document.querySelector('#_panelMenu__kbtypeahead__loadingKB_TL');
loadingLabel.textContent = "Combobulating Results Matrix...";

// Lock TypeAhead results position to search box [for Chrome]
var lockTypeAheadPositionCss = "#_panelMenu__kbtypeahead__popupKBSearch_PW-1 { top:54px !important; }";
$( '#knowledgeBetterCSS' ).append( lockTypeAheadPositionCss );

// Restyle sticky header bar
$('#_panelMenu').removeClass("dxrpControl_Office2010Blue");
var stickyBarRestyleCss = "#_panelMenu { background: linear-gradient(#B6CDE5, #F7F7F7) !important; border-bottom: #BAC9D8 1px solid; box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.31); height: 55px; } #_panelMenu__lblWelcome { font-size: X-Small !important; }";
$( '#knowledgeBetterCSS' ).append( stickyBarRestyleCss );
var tlCorner = document.querySelector('.dxWeb_rpTopLeftCorner_Office2010Blue');
tlCorner.style.display = "none";
var trCorner = document.querySelector('.dxWeb_rpTopRightCorner_Office2010Blue');
trCorner.style.display = "none";
var blCorner = document.querySelector('.dxWeb_rpBottomLeftCorner_Office2010Blue');
blCorner.style.display = "none";
var brCorner = document.querySelector('.dxWeb_rpBottomRightCorner_Office2010Blue');
brCorner.style.display = "none";

// Make the font part of the 21st century
$('head').append('<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css">');
var fontEntirePage = "body { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } span { font-family: 'Open Sans', sans-serif !important; } .masterContent td { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .tabmenu span { font-size: 12px; } .fieldLabel { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .dxeBase_Office2010Blue { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .dxeListBoxItem_Office2010Blue { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; }";
$( '#knowledgeBetterCSS' ).append( fontEntirePage );

// Make login name more appealing to user
if (isChrome === true) {
    if (uIDrecognize == true) { 
        userIDLoc.innerText = 'Logged in as ' + userFN + ' ' + userLN; 
    };
};


// Page-specific changes
if(document.URL.indexOf("ProjectDetail_Tabbed.aspx") >= 0){ 
// Project page changes
    
    // Floating project toolbar
    var floatingToolbarCss = ".kb-main-content > table > tbody > tr:nth-of-type(1) { position:fixed;top:55px;left:0px;width:100%;display:block;border-bottom:#BAC9D8 1px solid;box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.31);background-color:#F7F7F7;z-index:999; } .kb-main-content > table > tbody > tr:nth-of-type(1) > td > a { text-decoration: none !important; } #_panelMenu { border-bottom: none !important; box-shadow: none !important; }";
    $( '#knowledgeBetterCSS' ).append( floatingToolbarCss );
    var topSpacerHeight = document.querySelector('.masterContent');
    topSpacerHeight.style.position = "relative";
    topSpacerHeight.style.top = "16px";
    var projectDetailTitle = document.querySelector(".pageTitle");
    projectDetailTitle.textContent = "";

    // Extend project info box
    function findFirstDescendantById(parent, tagname) {
       parent = document.getElementById(parent);
       var descendants = parent.getElementsByTagName(tagname);
       if ( descendants.length )
           return descendants[0];
       return null;
    }
    var infoBox = findFirstDescendantById("main_projectView__navProjectView_ITC0i0__projectViewDetail_0", "div");
    infoBox.style.height = "560px";
    infoBox.style.border = "solid 3px #E6E6E6";
    infoBox.style.maxWidth = "900px";
    infoBox.style.background = "white";
    
    // Tweak Project Information window location & visuals
    var projectDeetInfoPane = "#main_projectView__navProjectView_GCA0 { margin-top: 30px; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetInfoPane );
    var projectDeetInfoPaneWrap = "#main_projectView__navProjectView_GC0 { background-color: #F7F7F7; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetInfoPaneWrap );
    
    // Project status tag on top right
    var projStatusOnPage = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblStatus_0');
    projStatusOnPage = projStatusOnPage.innerHTML;
    var floatingProjectTag = document.createElement("div");
    floatingProjectTag.innerHTML = projStatusOnPage;
    floatingProjectTag.id = "floatingProjectTagDiv";
    document.body.appendChild(floatingProjectTag);
    var floatingProjectTagCss = "#floatingProjectTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:1000;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(5) { display: none !important; }";
   $( '#knowledgeBetterCSS' ).append( floatingProjectTagCss );

    // Float project title on top right
    var projectNameValue = document.querySelector('.dxnb-ghtext:nth-child(1)').innerHTML;
    var floatingProjectName = document.createElement("div");
    floatingProjectName.innerHTML = projectNameValue;
    floatingProjectName.id = "floatingProjectNameDiv";
    document.body.appendChild(floatingProjectName);
    var floatingProjectNameCss = "#floatingProjectNameDiv { position:fixed;top:58px;right:25px;display:block;z-index:999; } #floatingProjectNameDiv span { font-size:11px !important; }";
    $( '#knowledgeBetterCSS' ).append( floatingProjectNameCss );
    document.getElementById("floatingProjectNameDiv").innerHTML = document.getElementById("floatingProjectNameDiv").innerHTML.replace('(Anonymous)', '<div style="font-size: 11px !important; display: inline; color: red;">(Anonymous)</div>')
    $( '#floatingProjectNameDiv > span > a' ).remove();
    
    // Pin tab menu to top bar when scrolled past via jQuery
    var pinnedTabMenuCss = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 63px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:999;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px #BAC9D8; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
    $( '#knowledgeBetterCSS' ).append( pinnedTabMenuCss );
    var $window = $(window),
        $stickyEl = $('#main_main_tbcAll_ulTabContainer'),
        elTop = $stickyEl.offset().top;
    $window.scroll(function() {
        $stickyEl.toggleClass('pinned', $window.scrollTop() > elTop - 60);
    });

    // Display relevant title information first
    var projectPageTitle = document.title;
    document.title = projectPageTitle.replace("Project Detail - ", "");
    document.title = document.title + " - Knowledge Broker";
    
    // Prevent leftward reclusion of project description box
    var stopHidingOnLeft = "div { text-indent: inherit !important; }";
    $( '#knowledgeBetterCSS' ).append( stopHidingOnLeft );
    
    // Vetting Q&A tab
    var vettingSurveyStyles = "div.questions.ng-scope.ng-isolate-scope { margin-top: 50px; } .questions { border: none !important; }";
    $( '#knowledgeBetterCSS' ).append( vettingSurveyStyles );
    
    // Show last update time/date and user
    var projUp = document.querySelector('#main__lblUpdatedBy').innerHTML;
    var projUpDate = document.querySelector('#main__lblUpdatedByDate').innerHTML;
    var projUpDiv = "<div id='projup'>Last updated by <b class='pudrk'>"+projUp+"</b> on <b class='pudrk'>"+projUpDate+"</b></div>";
    $( 'body' ).append( projUpDiv );
    var projUpStyles = "#projup { position: absolute; top: 88px; right: 10px; color: #BBBBBB; font-size: 9px !important; text-transform: uppercase; } .pudrk { color: #999999; }";
    $( '#knowledgeBetterCSS' ).append( projUpStyles );
    
    
    // Highlight important project details
    
    // Add row selectors
    $("#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-child(2) > table > tbody").attr( "id", "detailBody" );
    $(document).ready(function() {
        $("#detailBody tr").each(function(i) {
            $(this).attr( "id", "detailRow" + (i+1));
        });
    });
    
    // Project details list & container
    var projectDeetTable = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table { margin: 218px 10px 5px 5px !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetTable );
    
    // Set width of project detail table labels column
    var projectDeetLabelCol = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr > td:nth-of-type(1) { width: 140px !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetLabelCol );
    
    // Hide old project name w/ collapse button & center newly styled project name
    var projectDeetNameBar = "#main_projectView__navProjectView_GHE0 { display: none; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetNameBar );
    var projectDeetNewName = document.createElement("div");
    var projectNameActual = projectNameValue;
    projectIdActual = projectNameActual.substring(projectNameActual.indexOf("("));
    projectNameActual = projectNameActual.substring(0, projectNameActual.indexOf("("));
    projectDeetNewName.innerHTML = projectNameActual + '<div id="projectIdActualDiv" style="font-size: 18px !important;">' + projectIdActual + '</div>';
    projectDeetNewName.id = "projectDeetNewNameDiv";
    document.body.appendChild(projectDeetNewName);
    var projectDeetNewNameCss = "#projectDeetNewNameDiv { position:absolute; top:82px; width: 100%; text-align: center; } #projectDeetNewNameDiv span { font-size: 28px !important; text-transform: uppercase; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetNewNameCss );
    document.getElementById("projectIdActualDiv").innerHTML = document.getElementById("projectIdActualDiv").innerHTML.replace('(Anonymous)', '<div style="font-size: 18px !important; display: inline; color: red;">(Anonymous)</div>');
    
    // Move email tracking link to more appropriate location
    $('#projectIdActualDiv > a').attr('id', 'emailTrackingLink');
    $( '#emailTrackingLink' ).appendTo( 'body' );
    var emailTrackingLinkStyle = "#emailTrackingLink { position: absolute; top: 102px; right: 10px; text-decoration: none; text-transform: uppercase; font-size: 9px; font-weight: bold; color: #999999; }";
    $( '#knowledgeBetterCSS' ).append( emailTrackingLinkStyle );
    
    // 1 Client Company
    var projectDeetClientCom = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClient_0');
    projectDeetClientCom.style.fontSize = "20px";
    projectDeetClientCom.style.fontWeight = "bold";
    projectDeetClientCom.style.textDecoration = "none";
    var projectDeetClientComLabel = "#detailRow1 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClientComLabel );
    var projectDeetClientComPos = "#detailRow1 > td:nth-of-type(2) { position: absolute; top: 72px; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClientComPos );
    
    // 2 Client Analyst 6
    var projectDeetClientAnalyst = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkContact_0');
    projectDeetClientAnalyst.style.fontSize = "15px";
    projectDeetClientAnalyst.style.textDecoration = "none";
    var projectDeetClientAnalystLabel = "#detailRow6 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClientAnalystLabel );
    var projectDeetClientAnalystPos = "#detailRow6 > td:nth-of-type(2) { position: absolute; top: 102px; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClientAnalystPos );
    
    // 7 Client Code 11
    var projectDeetClientCode = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblClientCode_0').innerHTML;
    if (projectDeetClientCode == "") {
        var projectDeetClientCodeHidden = "#detailRow11 { display: none !important; }";
        $( '#knowledgeBetterCSS' ).append( projectDeetClientCodeHidden );
    };
     
    // 8 Client Company Type 12
    var clientTypeRaw = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblCompanyType_0');
    if (clientTypeRaw.innerHTML === "HedgeFund") {
        clientTypeRaw.innerHTML = "Hedge Fund";
    } else if (clientTypeRaw.innerHTML === "PrivateEquity") {
        clientTypeRaw.innerHTML = "Private Equity";
    } else if (clientTypeRaw.innerHTML === "MutualFund") {
        clientTypeRaw.innerHTML = "Mutual Fund";
    } else if (clientTypeRaw.innerHTML === "ConsultingFirm") {
        clientTypeRaw.innerHTML = "Consulting Firm";
    } else if (clientTypeRaw.innerHTML === "InvestmentAdvisor") {
        clientTypeRaw.innerHTML = "Investment Advisor";
    } else {
        clientTypeRaw = clientTypeRaw;
    };
    var projectDeetClTypeLabel = "#detailRow12 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClTypeLabel );
    var projectDeetClType = "#detailRow12 > td:nth-of-type(2) { top: 130px; padding-left: 97px; position: absolute; font-size: 9px !important; text-transform: uppercase; font-weight: bold; } #detailRow12 > td:nth-of-type(2):before { content: '| client type is '; font-weight: normal; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClType );
    
    // Highlght Target Companies
    var projectDeetTargets = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblTargetCompanies_0');
    if (projectDeetTargets.innerHTML != "None") {
        projectDeetTargets.style.color = "red";
        projectDeetTargets.style.fontWeight = "bold";
    };  
    
    // 17 AM info 21
    var projectDeetAMLabel = "#detailRow21 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetAMLabel );
    var projectDeetAM = "#detailRow21 > td:nth-of-type(2) { position: absolute; top: 160px; font-size: 14px !important; font-weight: bold; } #detailRow21 > td:nth-of-type(2):after { content: ' Account Manager'; font-size: 9px; font-weight: normal; text-transform: uppercase; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetAM );
    
    // 18 PM info 22
    var projectDeetPMLabel = "#detailRow22 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetPMLabel );
    var projectDeetPM = "#detailRow22 > td:nth-of-type(2) { position: absolute; top: 180px; font-size: 14px !important; font-weight: bold; } #detailRow22 > td:nth-of-type(2):after { content: ' Project Manager'; font-size: 9px; font-weight: normal; text-transform: uppercase; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetPM );
    
    // 19 Primary Associate info 23
    var projectDeetPALabel = "#detailRow23 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetPALabel );
    var projectDeetPA = "#detailRow23 > td:nth-of-type(2) { position: absolute; top: 210px; font-size: 14px !important; font-weight: bold; } #detailRow23 > td:nth-of-type(2):after { content: ' Primary Associate'; font-size: 9px; font-weight: normal; text-transform: uppercase; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetPA );
    
    // 20 Secondary Associate(s) info 24
    var projectDeetSALabel = "#detailRow24 > td:nth-of-type(1) { display: none !important; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetSALabel );
    var projectDeetSA = "#detailRow24 > td:nth-of-type(2) { position: absolute; top: 230px; font-size: 14px !important; font-weight: bold; } #detailRow24 > td:nth-of-type(2):after { content: ' Secondary Associate(s)'; font-size: 9px; font-weight: normal; text-transform: uppercase; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetSA );
    var getSAInfo = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblResearchers_0');
    if (getSAInfo.innerHTML === "None") {
        var hideSAInfo = "#detailRow24 { display: none !important; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table { margin: 198px 10px 5px 5px !important; }";
        $( '#knowledgeBetterCSS' ).append( hideSAInfo );
    };
    
    // 23 Cloned Project ID 27
    var clonedProjID = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblClonedProjectId_0').innerHTML;
    if (clonedProjID == "") {
        var clonedProjIDHidden = "#detailRow27 { display: none !important; }";
        $( '#knowledgeBetterCSS' ).append( clonedProjIDHidden );
    };
    
    // 24 Client Requested Calls 28
    var nCalls = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblClientRequestedCalls_0').innerHTML;
    if (nCalls == "") {
        var nCallsHidden = "#detailRow28 { display: none !important; }";
        $( '#knowledgeBetterCSS' ).append( nCallsHidden );
    };
    document.querySelector('#detailRow24 > td:nth-child(1) > span').innerHTML = "&#8470; Calls Requested:";
    
    // 25 Highlight if end date has passed 29
    var projEndDateRaw = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblProjectEndDate_0').innerHTML;
    if (projEndDateRaw != "") {
        var projEndMonth = parseInt(projEndDateRaw.split("/")[0]);
        var projEndDay = parseInt(projEndDateRaw.split("/")[1]);
        var projEndYear = parseInt(projEndDateRaw.split("/")[2]);
        var projEndDate = new Date();
        projEndDate.setFullYear(projEndYear, projEndMonth - 1, projEndDay);
        var todayDate = new Date();
        var numDaysBetween = function(d1, d2) {
            var diff = Math.abs(d1.getTime() - d2.getTime());
            return diff / 86400000;
        };
        var timeDiff = numDaysBetween(projEndDate, todayDate);
        if (todayDate > projEndDate) {
            var projEndDatePassed = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblProjectEndDate_0 { color: red !important; font-weight: bold !important; }";
            $( '#knowledgeBetterCSS' ).append( projEndDatePassed );
        } else if (timeDiff <= 3) {
            var projEndDateNear = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblProjectEndDate_0 { color: #E09100 !important; font-weight: bold !important; }";
            $( '#knowledgeBetterCSS' ).append( projEndDateNear );
        };
    } else {
        var projEndDateMissing = "#detailRow29 { display: none; }";
        $( '#knowledgeBetterCSS' ).append( projEndDateMissing );
    };
    
    // View Client Rules button
    jQuery(document).ready(function() {
        var $ca = jQuery('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkContact_0'),
        $vcr = $('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClientRule_0').insertAfter($ca);
        $vcr.css({
            position : 'absolute',
            top : '28px',
            left : '2px'
        });
    });
    var projectDeetClientRule = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClientRule_0 { text-decoration: none; text-transform: uppercase; font-size: 10px; cursor: pointer; z-index: 10; }";
    $( '#knowledgeBetterCSS' ).append( projectDeetClientRule ); 
    
    // Highlight if current user is listed in project details [Chrome-only]
    if (isChrome === true) {
        if ( uIDrecognize === true) {
            var uFLNregex = new RegExp(userFN+" "+userLN, "g");
            $("#main_projectView__navProjectView_ITC0i0__projectViewDetail_0").html($("#main_projectView__navProjectView_ITC0i0__projectViewDetail_0").html().replace(uFLNregex,"<div style='display: inline; color: green;'>"+userFN+" "+userLN+"</div>"));
        };
    };
    
    // Copy project name [After detail tweaks for clean project name/ID]
    var projectNameAndId = document.querySelector('#projectDeetNewNameDiv');
    projectNameAndId = projectNameAndId.textContent;
    $( 'body' ).append( "<img src='http://i.imgur.com/HwRdEjY.png' id='textAreaCopyBtn' title='Copy project name & ID to clipboard' class='js-textareacopybtn' onmouseover='this.src=\"http://i.imgur.com/8Ik1YW8.png\"' onmouseout='this.src=\"http://i.imgur.com/HwRdEjY.png\"'></img>" );
    $( 'body' ).append( "<textarea readonly class='js-copytextarea' style='position:fixed;top:-1000px;left:-1000px;'>" + projectNameAndId + "</textarea>" );
    $( 'body' ).append( "<div id='copySuccessful'>Copied!</div>" );
    var copyInfoBtnStyles = "#textAreaCopyBtn { position: fixed; top: 53px; right: 0px; cursor: pointer; z-index: 10000; padding: 5px; }";
    var copiedSuccessfulAnim = "@keyframes copiedSuccess { from { opacity: 1; } to { opacity: 0; } } .copyClicked { animation-name: copiedSuccess; animation-duration: 1s; animation-timing-function: ease-out; }"
    var copySuccessfulStyles = "#copySuccessful { position: fixed; top: 12px; right: 10px; font-size: 30px; font-weight: bold; color: white; text-shadow: black 2px 2px 8px; z-index: 9999; opacity: 0; }";
    $( '#knowledgeBetterCSS' ).append( copyInfoBtnStyles + copiedSuccessfulAnim + copySuccessfulStyles );
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    copyTextareaBtn.addEventListener('click', function(event) {
        var copyTextarea = document.querySelector('.js-copytextarea');
        copyTextarea.select();
        document.execCommand('copy');
        $( '#copySuccessful' ).addClass('copyClicked');
        setTimeout(function(){
            $( '#copySuccessful' ).removeClass('copyClicked');
        }, 1000);
    });
    
        
    // Project page tab-specific changes
    var allTablesProjPage = document.getElementsByTagName("table");
    var allTablesProjPageIndex = allTablesProjPage.length;
    document.getElementsByTagName("table")[allTablesProjPageIndex - 1].style.display = "none";
    document.getElementsByTagName("table")[allTablesProjPageIndex - 2].style.display = "none";
    $( '#form1 > div.masterContent > div > table > tbody > tr:nth-child(5)' ).css( 'display', 'none' )
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
        
        // Highlight logged-in user's recruiting history [Chrome-only]
        if (isChrome === true) {
            if ( uIDrecognize === true) {
                var uIDregex = new RegExp(userIDTag, "g");
                $("#main_main_tbcAllProject_Leads_pnlLeads").html($("#main_main_tbcAllProject_Leads_pnlLeads").html().replace(uIDregex,'<div style="display: inline; color: green; font-weight: bold;">'+userIDTag+'</div>'));
            };
        };
            
        // Bundle & sort leads
        /*
        var leadRow = $("#main_main_tbcAllProject_Leads_rptLeads_tblRepeater > tbody > tr");
        for(var i = 0; i < leadRow.length; i+=3) {
            leadRow.slice(i, i+3).wrapAll("<tbody class='lead'></tbody>");
        };
        $( ".lead:odd" ).addClass( "leadalt" );
        var leadRowStyle = ".lead > tr { background-color: inherit !important; } .leadalt > tr { background-color: #F7F7F7 !important; }";
        $( '#knowledgeBetterCSS' ).append( leadRowStyle );
        */
        
        
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
        pinnedTabMenuCss2 = "table.pinned { position: fixed;top: 75px;left: 0px;z-index: 1011;width: 100%;background-color: #F7F7F7; } #main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 96px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:1010;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px black; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
        $( '#knowledgeBetterCSS' ).append( pinnedTabMenuCss2 );
        var tableExSearch = findFirstDescendantById("main_projectView__navProjectView_ITC0i0__projectViewDetail_0", "table");
        tableExSearch.id = "exSearchToolbar";
        var $window2 = $(window),
            $stickyEl2 = $('#main_main_tbcAllProject_AdvisorSearch__grid__advisorGrid').children().eq(19),
            elTop2 = $stickyEl2.offset().top;
        $window2.scroll(function() {
            $stickyEl2.toggleClass('pinned', $window2.scrollTop() > elTop2 - 60);
        });
        
    } else if (document.getElementById("main_main_tbcAllProject_Experts_pnlExperts")) {
        // Experts 
        
        // Remove inner scrollbar
        var expertFrame = document.getElementById("main_main_tbcAllProject_Experts_pnlExperts");
        expertFrame.style.height = "100%";
        var expertFrameBorder = document.getElementById("main_main_tbcAll_Placeholder_Project_Experts");
        expertFrameBorder.style.border = "none";
        
    } else if (document.getElementById("main_main_tbcAllProject_Vetting_grdVetting")) {
        // Vetting
        
        // Remove inner scrollbar
        var vettingFrame = "#main_main_tbcAllProject_Vetting_grdVetting > tbody > tr > td > div:nth-of-type(2) { height: inherit !important; }";
        $( '#knowledgeBetterCSS' ).append( vettingFrame );
        
    } else if (document.getElementById("main_main_tbcAll_Placeholder_Project_Surveys")) {
        // Vetting Q&A
        var vettingQAFrame = ".project-details-survey-grid .survey-results-container { max-height: inherit; } .project-details-survey-grid { max-height: inherit; } #main_main_tbcAll_Placeholder_Project_Surveys { height: inherit !important; }";
        $( '#knowledgeBetterCSS' ).append( vettingQAFrame );
    };    

} else if(document.URL.indexOf("CurrentProjects.aspx") >= 0) {
// Current Projects page changes
    
    // Actual page title
    document.title = "Current Projects - Knowledge Broker";
    
    // Remove inner vertical scroll on projects list
    var currentProjectsFrame = document.getElementById("main_projectsBrowseView_ctl00_gvProjects_DXMainTable");
    currentProjectsFrame.style.height = "100%";
    var currentProjectsCss = "#main_projectsBrowseView_ctl00_trProjects > td > table > tbody > tr > td > div:nth-of-type(2) { height:inherit !important; }";
    $( '#knowledgeBetterCSS' ).append( currentProjectsCss );

    // Projects count
    var findInCurrents = document.getElementById("main_projectsBrowseView_ctl00_gvProjects_DXMainTable").innerHTML;
    var countPriority = findInCurrents.split("Priority</label>").length-1
    var countActive = findInCurrents.split("Active</label>").length-1
    var floatingProjectCount = document.createElement("div");
    floatingProjectCount.innerHTML = "<font color='red'>Priority</font>: "+countPriority+" | <font color='orange'>Active</font>: "+countActive;
    floatingProjectCount.id = "floatingProjectCountDiv";
    document.body.appendChild(floatingProjectCount);
    var floatingProjectCountCss = "#floatingProjectCountDiv { position:fixed;top:20px;right:25px;display:block;z-index:10000;font-weight:bold; }";
    $( '#knowledgeBetterCSS' ).append( floatingProjectCountCss );
    
} else if(document.URL.indexOf("MemberProfile_Tabbed.aspx") >= 0) {
// Expert Profile page changes
    
    // Display relevant title information first
    var expertProfilePageTitle = document.title;
    document.title = expertProfilePageTitle.replace("Expert Profile - ", "");
    document.title = document.title + " - Knowledge Broker";
    
    // Hide old expert name w/ collapse button & center newly styled expert name
    var expertNameValue = document.querySelector('.dxnb-ghtext:nth-child(1)').innerHTML;
    var expertDeetNameBar = "#main__navAdvisorProfile_GHE0 { display: none; }";
    $( '#knowledgeBetterCSS' ).append( expertDeetNameBar );
    var expertDeetNewName = document.createElement("div");
    var expertNameActual = expertNameValue;
    expertIdActual = expertNameActual.substring(expertNameActual.indexOf("("));
    expertNameActual = expertNameActual.substring(0, expertNameActual.indexOf("("));
    expertDeetNewName.innerHTML = expertNameActual + '<div id="expertIdActualDiv" style="font-size: 18px !important;">' + expertIdActual + '</div>';
    expertDeetNewName.id = "expertDeetNewNameDiv";
    document.body.appendChild(expertDeetNewName);
    var expertDeetNewNameCss = "#expertDeetNewNameDiv { position:absolute; top:82px; width: 100%; text-align: center; } #expertDeetNewNameDiv span { font-size: 28px !important; text-transform: uppercase; } #main__navAdvisorProfile_GC0.dxnbGroupContent_Office2010Blue { padding: 0px !important; } .masterContent { background: #F7F7F7; } #main__navAdvisorProfile { padding-top: 30px; }";
    $( '#knowledgeBetterCSS' ).append( expertDeetNewNameCss );
    
    // Adjust header for data review info
    $("#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0_lblCurrentReviewer_0").appendTo("#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lnkEFMReviewRequired_0");
    
    // Copy expert name
    var expertNameAndId = document.querySelector('#expertDeetNewNameDiv');
    expertNameAndId = expertNameAndId.textContent;
    $( 'body' ).append( "<img src='http://i.imgur.com/HwRdEjY.png' id='textAreaCopyBtn' title='Copy expert name & ID to clipboard' class='js-textareacopybtn' onmouseover='this.src=\"http://i.imgur.com/8Ik1YW8.png\"' onmouseout='this.src=\"http://i.imgur.com/HwRdEjY.png\"'></img>" );
    $( 'body' ).append( "<textarea class='js-copytextarea' style='position:fixed;top:-1000px;left:-1000px;'>" + expertNameAndId + "</textarea>" );
    $( 'body' ).append( "<div id='copySuccessful'>Copied!</div>" );
    var copyInfoBtnStyles = "#textAreaCopyBtn { position: fixed; top: 52px; right: 0px; cursor: pointer; z-index: 10000; padding: 5px; }";
    var copiedSuccessfulAnim = "@keyframes copiedSuccess { from { opacity: 1; } to { opacity: 0; } } .copyClicked { animation-name: copiedSuccess; animation-duration: 1s; animation-timing-function: ease-out; }"
    var copySuccessfulStyles = "#copySuccessful { position: fixed; top: 12px; right: 10px; font-size: 30px; font-weight: bold; color: white; text-shadow: black 2px 2px 8px; z-index: 9999; opacity: 0; }";
    $( '#knowledgeBetterCSS' ).append( copyInfoBtnStyles + copiedSuccessfulAnim + copySuccessfulStyles );
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    copyTextareaBtn.addEventListener('click', function(event) {
        var copyTextarea = document.querySelector('.js-copytextarea');
        copyTextarea.select();
        document.execCommand('copy');
        $( '#copySuccessful' ).addClass('copyClicked');
        setTimeout(function(){
            $( '#copySuccessful' ).removeClass('copyClicked');
        }, 1000);
    });
    
    // Float expert name in top right
    var floatingExpertName = document.createElement("div");
    floatingExpertName.innerHTML = expertNameAndId;
    floatingExpertName.id = "floatingExpertNameDiv";
    document.body.appendChild(floatingExpertName);
    var floatingExpertNameCss = "#floatingExpertNameDiv { position:fixed;top:55px;right:25px;font-weight:bold;font-size:Small;display:block;z-index:999; }";
    $( '#knowledgeBetterCSS' ).append( floatingExpertNameCss );
    
    // LinkedIn Profile Card
    if (document.getElementById("main_lnkLinkedIn")) {
        var liProfileDirty = document.getElementById("main_lnkLinkedIn").getAttribute("onclick");
        liProfileURLStep = liProfileDirty.replace("javascript:return _b('", "");
        liProfileURLClean = liProfileURLStep.replace("',800,750);", "");
        $( 'body' ).append('<div id="licardWrapper"><script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/MemberProfile" data-id="' + liProfileURLClean + '" data-format="inline"></script></div>');
        $( '#licardWrapper' ).addClass( 'licardHide' );
        $( '#main_lnkLinkedIn' ).after('<div id="licardtoggle">Toggle Profile Card</div>');
        var linkedinCard = "#licardWrapper { position: fixed; top: 110px; left: 40px; box-shadow: rgba(51, 51, 51, 0.5) 4px 4px 12px; z-index: 999; } #licardtoggle { display: inline; border-bottom: 1px dotted; color: #3300ff; margin-left: 7px; cursor: pointer; } .licardHide { display:none !important; }";
        $( '#knowledgeBetterCSS' ).append( linkedinCard );
        var licardBtn = document.querySelector('#licardtoggle');
        licardBtn.addEventListener('click', function(event) {
            $( '#licardWrapper' ).toggleClass('licardHide');
        });
    };
    
    // EXPERT or PROSPECT tag on top right
    var expertTagOrProspectTag = document.querySelector('#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lblPresentableLabelValue_0');
    expertTagOrProspectTag = expertTagOrProspectTag.innerHTML;
    if (expertTagOrProspectTag === "Prospect") {
        // Show Prospect
        var floatingExpertTag = document.createElement("div");
        floatingExpertTag.innerHTML = "Prospect";
        floatingExpertTag.id = "floatingExpertTagDiv";
        document.body.appendChild(floatingExpertTag);
        var floatingExpertTagCss = "#floatingExpertTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:9999;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; }";
        $( '#knowledgeBetterCSS' ).append( floatingExpertTagCss );
        document.getElementById("expertIdActualDiv").innerHTML = document.getElementById("expertIdActualDiv").innerHTML.replace('(Expert ID:', '(Prospect ID:')
    } else {
        // Show Expert
        var floatingExpertTag = document.createElement("div");
        floatingExpertTag.innerHTML = "Expert";
        floatingExpertTag.id = "floatingExpertTagDiv";
        document.body.appendChild(floatingExpertTag);
        var floatingExpertTagCss = "#floatingExpertTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:9999;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; }";
        $( '#knowledgeBetterCSS' ).append( floatingExpertTagCss );
    };
    
    // Employment history & TPA layout bug fix for new font
    var expEmpHxFix = "#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstEmployment_0_D { height: inherit !important; } #main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstEmployment_0_D table tbody tr td { font-size: 11px !important; }";
    $( '#knowledgeBetterCSS' ).append( expEmpHxFix );
    var expTPAFix = "#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstThirdParty_0_D { height: inherit !important; } #main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstThirdParty_0_D table tbody tr td { font-size: 11px !important; }";
    $( '#knowledgeBetterCSS' ).append( expTPAFix );
    
    // Pin tool bar to top
    var floatingExpertToolsCss = "#main_divEditLinks { position:fixed;top:55px;left:0px;width:100%;height:20px;display:block;border-bottom:#BAC9D8 1px solid;box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.31);background-color:#F7F7F7;z-index:999; } #_panelMenu { border-bottom: none !important; box-shadow: none !important; } #main_divEditLinks a { text-decoration: none; }";
    $( '#knowledgeBetterCSS' ).append( floatingExpertToolsCss );
    var topSpacerHeight = document.querySelector('.masterContent');
    topSpacerHeight.style.position = "relative";
    topSpacerHeight.style.top = "16px";
    
    // Pin tab menu to top bar when scrolled past via jQuery
    var pinnedTabMenuCss3 = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 63px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:999;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px #BAC9D8; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
    $( '#knowledgeBetterCSS' ).append( pinnedTabMenuCss3 );
    var $window = $(window),
        $stickyEl = $('#main_main_tbcAll_ulTabContainer'),
        elTop = $stickyEl.offset().top;
    $window.scroll(function() {
        $stickyEl.toggleClass('pinned', $window.scrollTop() > elTop - 60);
    });
    
    // Expand and restyle expert bio
    var expInfoBox = "#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0 > table:nth-of-type(3) > tbody > tr > td:nth-of-type(1) > div:nth-of-type(1) { height: 380px !important; border: solid 3px #E6E6E6 !important; background: white; }";
    $( '#knowledgeBetterCSS' ).append( expInfoBox );
    
    // Do Not Use button restyle & reconfigure
    $("#main_lnkDoNotUseReactivate").appendTo("body");
    document.querySelector('#main_lnkDoNotUseReactivate').innerHTML = "Do Not Use";
    var doNotUseBtnCss = "#main_lnkDoNotUseReactivate { position: absolute; top: 88px; right: 8px; text-decoration: none; z-index: 980; opacity: 0.75; } #main_lnkDoNotUseReactivate:hover { opacity: 1; color: red; } #main_lnkDoNotUseReactivate:hover:before { content: 'Flag this profile as '; }";
    $( '#knowledgeBetterCSS' ).append( doNotUseBtnCss );
    
    // Highlight logged-in user history notes [Chrome-only]
    if (document.getElementById("main_main_tbcAllHistory_pnlNotes")) {
        if (isChrome === true) {
            if ( uIDrecognize === true) {
                var pofileUIDregex = new RegExp(userIDTag, "g");
                $("#main_main_tbcAllHistory_pnlNotes").html($("#main_main_tbcAllHistory_pnlNotes").html().replace(pofileUIDregex,'<div style="display: inline; color: green; font-weight: bold;">'+userIDTag+'</div>'));
            };
        };
    };
    
} else if(document.URL.indexOf("Overview.aspx") >= 0) {
// Overview page changes
    
    // Verbals count
    if (document.getElementById("main__overviewMetrics__dockZoneBottomRight_ctl03_ctl00_rpPanel_HTC__title_0")) {
        var verbalString = "gvVerbals_DXDataRow";
        var findSource = document.getElementsByTagName('html')[0].innerHTML;
        var numVerbals = findSource.split(verbalString).length-1;
        document.querySelector("#main__overviewMetrics__dockZoneBottomRight_ctl03_ctl00_rpPanel_HTC__title_0").innerText = "MY VERBALS | "+numVerbals+" outstanding";
    };

} else if(document.URL.indexOf("AddEditMember.aspx") >= 0) {
    // Add & Edit Member page changes
    
    // Hide "Save and Email" button [awkward misclick]
    var hideSaveAndEmail = document.getElementById("main__addEditViewAdvisor__btnSaveAndEmail");
    hideSaveAndEmail.style.display = "none";
    
} else if(document.URL.indexOf("UpdateProject.aspx") >= 0) {
    // Update Projects page
    
    // Remove project descriptions
    var killUpdateDescription = "#main_p > table > tbody > tr > td:nth-of-type(1) > table > tbody > tr:nth-of-type(4) { display:none !important; }";
    $( '#knowledgeBetterCSS' ).append( killUpdateDescription );
    
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
    
    // Employment history layout bugfix for new font
    var expEmpHxFix = "#main_addProspectControl__roundPanel__employmentHistory__lstEmployment_D.dxlbd { height: inherit !important; } #main_addProspectControl__roundPanel__employmentHistory__lstEmployment_D.dxlbd table tbody tr td { font-size: 11px !important; }";
    $( '#knowledgeBetterCSS' ).append( expEmpHxFix );
    
    /* Holding during debug: finding event trigger
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
    
    // Set default source - Recruiter Corporate
    var setDefaultSource = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_I");
    setDefaultSource.value = "Recruiter Corporate";
    var setDefaultSourceID = document.getElementById("main_addProspectControl__roundPanel__ddlResearchSource_VI");
    setDefaultSourceID.value = "151";
    document.querySelector('#main_addProspectControl__roundPanel__ddlResearchSource_I').dispatchEvent(new Event("aspxETextChanged('main_addProspectControl__roundPanel__ddlResearchSource')"))
    */
    
};



// Frenchie tax [Chrome-only]
if (isChrome === true) {
    if ( uIDrecognize === true) {
        if (userID == "parmes" || userID == "jsanders" || userID == "ksanders" ) {
            $( 'body' ).append( '<div id="frenchiebtn" style="position: fixed; bottom: 5px; right: 5px; cursor: pointer;">[+]</div>' );
            $( 'body' ).append( '<div id="frenchie" class="frenchieHide" style="position: fixed; bottom: 2px; right: 0px; height: 83px; width: 100px; transform: scaleX(-1); z-index: 10; background: url(\'http://static.wixstatic.com/media/e41b48_54ff68b1a20a4f32bd61e7e8744712a5.gif\'); background-size: contain;"></div>' );
            var frenchieBtnMagic = ".frenchieHide { display:none }";
            $( '#knowledgeBetterCSS' ).append( frenchieBtnMagic );
            var frenchieBtn = document.querySelector('#frenchiebtn');
            frenchieBtn.addEventListener('click', function(event) {
                $( '#frenchiebtn' ).addClass('frenchieHide');
                $( '#frenchie' ).removeClass('frenchieHide');
            });
            var frenchiePic = document.querySelector('#frenchie');
            frenchiePic.addEventListener('click', function(event) {
                $( '#frenchie' ).addClass('frenchieHide');
                $( '#frenchiebtn' ).removeClass('frenchieHide');
            });
        };
    };
};


// Source signature
$("html").before("<!-- Injected with KnowledgeBetter v" + knowledgeBetterVer + " -->");


// for AG
// document.title = document.title.replace("- Knowledge Broker", "");
