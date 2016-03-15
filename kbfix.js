// ==UserScript==
// @name         KnowledgeBetter
// @namespace    https://crgstaff.com/
// @version      2.1.0
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


var kbfixver = "2.1.0";
// Release notes: Expert profile visual tweaks


// Global changes


// New KB logo
document.getElementById("_panelMenu__imgLogo").src = "https://i.imgur.com/6LFyPDi.png";

// Current version as logo title
document.getElementById("_panelMenu__imgLogo").title = "KnowledgeBetter v" + kbfixver;

// Remove "KB Search" radio button from TypeAhead
var kbSearchRadioCss = document.createElement("style");
kbSearchRadioCss.type = "text/css";
kbSearchRadioCss.innerHTML = "#_panelMenu__kbtypeahead__popupKBSearch_CSD-1 > table:nth-of-type(1) { display:none !important; }";
document.body.appendChild(kbSearchRadioCss);

// Make "Loading..." text a bit more interesting
var loadingLabel = document.querySelector('#_panelMenu__kbtypeahead__loadingKB_TL');
loadingLabel.textContent = "Combobulating Results Matrix...";

// Lock TypeAhead results position to search box [for Chrome]
var lockTypeAheadPositionCss = document.createElement("style");
lockTypeAheadPositionCss.type = "text/css";
lockTypeAheadPositionCss.innerHTML = "#_panelMenu__kbtypeahead__popupKBSearch_PW-1 { top:54px !important; }";
document.body.appendChild(lockTypeAheadPositionCss);

// Restyle sticky header bar
$('#_panelMenu').removeClass("dxrpControl_Office2010Blue");
var stickyBarRestyleCss = document.createElement("style");
stickyBarRestyleCss.type = "text/css";
stickyBarRestyleCss.innerHTML = "#_panelMenu { background: linear-gradient(#B6CDE5, #F7F7F7) !important; border-bottom: #BAC9D8 1px solid; box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.31); height: 55px; }";
document.body.appendChild(stickyBarRestyleCss);
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
var fontEntirePage = document.createElement("style");
fontEntirePage.type = "text/css";
fontEntirePage.innerHTML = "body { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } span { font-family: 'Open Sans', sans-serif !important; } .masterContent td { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .tabmenu span { font-size: 12px; } .fieldLabel { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .dxeBase_Office2010Blue { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; } .dxeListBoxItem_Office2010Blue { font-family: 'Open Sans', sans-serif !important; font-size: 12px !important; }";
document.body.appendChild(fontEntirePage);


// Page-specific changes
if(document.URL.indexOf("ProjectDetail_Tabbed.aspx") >= 0){ 
// Project page changes
    
    // Floating project toolbar
    var floatingToolbarCss = document.createElement("style");
    floatingToolbarCss.type = "text/css";
    floatingToolbarCss.innerHTML = ".kb-main-content > table > tbody > tr:nth-of-type(1) { position:fixed;top:55px;left:0px;width:100%;display:block;border-bottom:#BAC9D8 1px solid;box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.31);background-color:#F7F7F7;z-index:999; } #_panelMenu { border-bottom: none !important; box-shadow: none !important; }";
    document.body.appendChild(floatingToolbarCss);
    var topSpacerHeight = document.querySelector('.masterContent');
    topSpacerHeight.style.position = "relative";
    topSpacerHeight.style.top = "16px";
    var projectDetailTitle = document.querySelector(".pageTitle");
    projectDetailTitle.textContent = "Project Tools";

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
    infoBox.style.background = "white";
    
    // Project status tag on top right
    var projStatusOnPage = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblStatus_0');
    projStatusOnPage = projStatusOnPage.innerHTML;
    var floatingProjectTag = document.createElement("div");
    floatingProjectTag.innerHTML = projStatusOnPage;
    floatingProjectTag.id = "floatingProjectTagDiv";
    document.body.appendChild(floatingProjectTag);
    var floatingProjectTagCss = document.createElement("style");
    floatingProjectTagCss.type = "text/css";
    floatingProjectTagCss.innerHTML = "#floatingProjectTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:1000;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(5) { display: none !important; }";
    document.body.appendChild(floatingProjectTagCss);

    // Float project title on top right
    var projectNameValue = document.querySelector('.dxnb-ghtext:nth-child(1)').innerHTML;
    var floatingProjectName = document.createElement("div");
    floatingProjectName.innerHTML = projectNameValue;
    floatingProjectName.id = "floatingProjectNameDiv";
    document.body.appendChild(floatingProjectName);
    var floatingProjectNameCss = document.createElement("style");
    floatingProjectNameCss.type = "text/css";
    floatingProjectNameCss.innerHTML = "#floatingProjectNameDiv { position:fixed;top:56px;right:10px;display:block;z-index:999; }";
    document.body.appendChild(floatingProjectNameCss);
    document.getElementById("floatingProjectNameDiv").innerHTML = document.getElementById("floatingProjectNameDiv").innerHTML.replace('(Anonymous)', '<div style="font-size: 12px !important; display: inline; color: red;">(Anonymous)</div>')
    
    // Pin tab menu to top bar when scrolled past via jQuery
    var pinnedTabMenuCss = document.createElement("style");
    pinnedTabMenuCss.type = "text/css";
    pinnedTabMenuCss.innerHTML = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 63px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:999;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px #BAC9D8; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
    document.body.appendChild(pinnedTabMenuCss);
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
    var stopHidingOnLeft = document.createElement("style");
    stopHidingOnLeft.type = "text/css";
    stopHidingOnLeft.innerHTML = "div { text-indent: inherit !important; }";
    document.body.appendChild(stopHidingOnLeft);
    
    // Vetting Q&A for all
    $('#main_tbcAlltab10').removeClass("invisible");
    
    // Highlight important project details
    
    // Client Company
    var projectDeetClientCom = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClient_0');
    projectDeetClientCom.style.fontSize = "20px";
    projectDeetClientCom.style.fontWeight = "bold";
    projectDeetClientCom.style.textDecoration = "none";
    var projectDeetClientComLabel = document.createElement("style");
    projectDeetClientComLabel.type = "text/css";
    projectDeetClientComLabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(1) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetClientComLabel);
    var projectDeetClientComPos = document.createElement("style");
    projectDeetClientComPos.type = "text/css";
    projectDeetClientComPos.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2) { position: absolute; top: 72px; }";
    document.body.appendChild(projectDeetClientComPos);
    
    // Client Analyst
    var projectDeetClientAnalyst = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkContact_0');
    projectDeetClientAnalyst.style.fontSize = "15px";
    projectDeetClientAnalyst.style.textDecoration = "none";
    var projectDeetClientAnalystLabel = document.createElement("style");
    projectDeetClientAnalystLabel.type = "text/css";
    projectDeetClientAnalystLabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(2) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetClientAnalystLabel);
    var projectDeetClientAnalystPos = document.createElement("style");
    projectDeetClientAnalystPos.type = "text/css";
    projectDeetClientAnalystPos.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(2) > td:nth-of-type(2) { position: absolute; top: 102px; }";
    document.body.appendChild(projectDeetClientAnalystPos);
    
    // Target Companies
    var projectDeetTargets = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblTargetCompanies_0');
    projectDeetTargets.style.color = "red";
    projectDeetTargets.style.fontWeight = "bold";
    
    // Project details list & container
    var projectDeetTable = document.createElement("style");
    projectDeetTable.type = "text/css";
    projectDeetTable.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table { margin: 218px 10px 5px 5px !important; }";
    document.body.appendChild(projectDeetTable);
    
    // 'View Client Rules' button
    var projectDeetClientRule = document.createElement("style");
    projectDeetClientRule.type = "text/css";
    projectDeetClientRule.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClientRule_0 { text-decoration: none; text-transform: uppercase; font-size: 10px; cursor: pointer; z-index: 10; }";
    jQuery(document).ready(function() {
        var $ca = jQuery('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkContact_0'),
        $vcr = $('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lnkClientRule_0').insertAfter($ca);
        $vcr.css({
            position : 'absolute',
            top : '28px',
            left : '2px'
        });
    });
    document.body.appendChild(projectDeetClientRule);
    
    // Hide old project name w/ collapse button & center newly styled project name
    var projectDeetNameBar = document.createElement("style");
    projectDeetNameBar.type = "text/css";
    projectDeetNameBar.innerHTML = "#main_projectView__navProjectView_GHE0 { display: none; }";
    document.body.appendChild(projectDeetNameBar);
    var projectDeetNewName = document.createElement("div");
    var projectNameActual = projectNameValue;
    projectIdActual = projectNameActual.substring(projectNameActual.indexOf("("));
    projectNameActual = projectNameActual.substring(0, projectNameActual.indexOf("("));
    projectDeetNewName.innerHTML = projectNameActual + '<div id="projectIdActualDiv" style="font-size: 18px !important;">' + projectIdActual + '</div>';
    projectDeetNewName.id = "projectDeetNewNameDiv";
    document.body.appendChild(projectDeetNewName);
    var projectDeetNewNameCss = document.createElement("style");
    projectDeetNewNameCss.type = "text/css";
    projectDeetNewNameCss.innerHTML = "#projectDeetNewNameDiv { position:absolute; top:82px; width: 100%; text-align: center; } #projectDeetNewNameDiv span { font-size: 28px !important; text-transform: uppercase; }";
    document.body.appendChild(projectDeetNewNameCss);
    document.getElementById("projectIdActualDiv").innerHTML = document.getElementById("projectIdActualDiv").innerHTML.replace('(Anonymous)', '<div style="font-size: 18px !important; display: inline; color: red;">(Anonymous)</div>')
    
    // Tweak Project Information window location & visuals
    var projectDeetInfoPane = document.createElement("style");
    projectDeetInfoPane.type = "text/css";
    projectDeetInfoPane.innerHTML = "#main_projectView__navProjectView_GCA0 { margin-top: 30px; }";
    document.body.appendChild(projectDeetInfoPane);
    var projectDeetInfoPaneWrap = document.createElement("style");
    projectDeetInfoPaneWrap.type = "text/css";
    projectDeetInfoPaneWrap.innerHTML = "#main_projectView__navProjectView_GC0 { background-color: #F7F7F7; }";
    document.body.appendChild(projectDeetInfoPaneWrap);
    
    // Set width of project detail table labels column
    var projectDeetLabelCol = document.createElement("style");
    projectDeetLabelCol.type = "text/css";
    projectDeetLabelCol.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr > td:nth-of-type(1) { width: 140px !important; }";
    document.body.appendChild(projectDeetLabelCol);
    
    // AM info
    var projectDeetAMLabel = document.createElement("style");
    projectDeetAMLabel.type = "text/css";
    projectDeetAMLabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(17) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetAMLabel);
    var projectDeetAM = document.createElement("style");
    projectDeetAM.type = "text/css";
    projectDeetAM.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(17) > td:nth-of-type(2) { position: absolute; top: 160px; font-size: 12px; font-weight: bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(17) > td:nth-of-type(2):after { content: ' Account Manager'; font-size: 8px; font-weight: normal; text-transform: uppercase; }";
    document.body.appendChild(projectDeetAM);
    
    // PM info
    var projectDeetPMLabel = document.createElement("style");
    projectDeetPMLabel.type = "text/css";
    projectDeetPMLabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(18) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetPMLabel);
    var projectDeetPM = document.createElement("style");
    projectDeetPM.type = "text/css";
    projectDeetPM.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(18) > td:nth-of-type(2) { position: absolute; top: 180px; font-size: 12px; font-weight: bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(18) > td:nth-of-type(2):after { content: ' Project Manager'; font-size: 8px; font-weight: normal; text-transform: uppercase; }";
    document.body.appendChild(projectDeetPM);
    
    // Primary Associate info
    var projectDeetPALabel = document.createElement("style");
    projectDeetPALabel.type = "text/css";
    projectDeetPALabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(19) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetPALabel);
    var projectDeetPA = document.createElement("style");
    projectDeetPA.type = "text/css";
    projectDeetPA.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(19) > td:nth-of-type(2) { position: absolute; top: 210px; font-size: 12px; font-weight: bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(19) > td:nth-of-type(2):after { content: ' Primary Associate'; font-size: 8px; font-weight: normal; text-transform: uppercase; }";
    document.body.appendChild(projectDeetPA);
    
    // Secondary Associate(s) info
    var projectDeetSALabel = document.createElement("style");
    projectDeetSALabel.type = "text/css";
    projectDeetSALabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(20) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetSALabel);
    var projectDeetSA = document.createElement("style");
    projectDeetSA.type = "text/css";
    projectDeetSA.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(20) > td:nth-of-type(2) { position: absolute; top: 230px; font-size: 12px; font-weight: bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(20) > td:nth-of-type(2):after { content: ' Secondary Associate(s)'; font-size: 8px; font-weight: normal; text-transform: uppercase; }";
    document.body.appendChild(projectDeetSA);
    var getSAInfo = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblResearchers_0');
    if (getSAInfo.innerHTML === "None") {
        var hideSAInfo = document.createElement("style");
        hideSAInfo.type = "text/css";
        hideSAInfo.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(20) { display: none !important; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table { margin: 198px 10px 5px 5px !important; }";
        document.body.appendChild(hideSAInfo);
    };
    
    // Client Company Type
    var clientTypeRaw = document.querySelector('#main_projectView__navProjectView_ITC0i0__projectViewDetail_0__lblCompanyType_0');
    if (clientTypeRaw.innerHTML === "HedgeFund") {
        clientTypeRaw.innerHTML = "Hedge Fund";
    } else if (clientTypeRaw.innerHTML === "PrivateEquity") {
        clientTypeRaw.innerHTML = "Private Equity";
    } else if (clientTypeRaw.innerHTML === "MutualFund") {
        clientTypeRaw.innerHTML = "Mutual Fund";
    } else if (clientTypeRaw.innerHTML === "ConsultingFirm") {
        clientTypeRaw.innerHTML = "Consulting Firm";
    } else {
        clientTypeRaw = clientTypeRaw;
    };
    var projectDeetClTypeLabel = document.createElement("style");
    projectDeetClTypeLabel.type = "text/css";
    projectDeetClTypeLabel.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(8) > td:nth-of-type(1) { display: none !important; }";
    document.body.appendChild(projectDeetClTypeLabel);
    var projectDeetClType = document.createElement("style");
    projectDeetClType.type = "text/css";
    projectDeetClType.innerHTML = "#main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(8) > td:nth-of-type(2) { top: 130px; padding-left: 97px; position: absolute; font-size: 9px !important; text-transform: uppercase; font-weight: bold; } #main_projectView__navProjectView_ITC0i0__projectViewDetail_0 > table > tbody > tr > td:nth-of-type(2) > table > tbody > tr:nth-of-type(8) > td:nth-of-type(2):before { content: '| client type is '; font-weight: normal; }";
    document.body.appendChild(projectDeetClType);

    
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
        
        // Hyperlink Project ID
        //document.body.innerHTML = document.body.innerHTML.replace(') Note :', '">View Project</a> - Note:');
        //document.body.innerHTML = document.body.innerHTML.replaceAll('(ID:', "<a href='https://www.crgstaff.com/Projects/ProjectDetail_Tabbed.aspx?ID=");
        //document.body.innerHTML = document.body.innerHTML.replaceAll(' | <b>', '</a> | <b>');
        //document.body.innerHTML = document.body.innerHTML.replaceAll('&lt;br&gt;&lt;', '<br><');
        //document.body.innerHTML = document.body.innerHTML.replaceAll('&gt;', '>');
        
        // Rank drop down
        //var leadTableDig1 = leadTable.firstChild;
        //leadTableDig1.id = "leadContainer";
        //var leadTableDig2 = leadTableDig1.firstChild;
        //var leadTableMotherlode = leadTableDig2;
        //$("#leadContainer tr").each(function(idx, elem) {
        //    $(elem).addClass("tile" + (idx % 3 + 1));
        //});
        
        
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
        pinnedTabMenuCss.innerHTML = "table.pinned { position: fixed;top: 75px;left: 0px;z-index: 1005;width: 100%;background-color: #F7F7F7; } #main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 96px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:1010;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px black; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
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
        var vettingFrame = document.createElement("style");
        vettingFrame.type = "text/css";
        vettingFrame.innerHTML = "#main_main_tbcAllProject_Vetting_grdVetting > tbody > tr > td > div:nth-of-type(2) { height: inherit !important; }";
        document.body.appendChild(vettingFrame);
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
    var countPriority = findInCurrents.split("Priority</label>").length-1
    var countActive = findInCurrents.split("Active</label>").length-1
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
    
    // EXPERT or PROSPECT tag on top right
    var expertTagOrProspectTag = document.querySelector('#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lblPresentableLabelValue_0');
    expertTagOrProspectTag = expertTagOrProspectTag.innerHTML;
    if (expertTagOrProspectTag === "Prospect") {
        // Show Prospect
        var floatingExpertTag = document.createElement("div");
        floatingExpertTag.innerHTML = "Prospect";
        floatingExpertTag.id = "floatingExpertTagDiv";
        document.body.appendChild(floatingExpertTag);
        var floatingExpertTagCss = document.createElement("style");
        floatingExpertTagCss.type = "text/css";
        floatingExpertTagCss.innerHTML = "#floatingExpertTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:9999;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; }";
        document.body.appendChild(floatingExpertTagCss);
    } else {
        // Show Expert
        var floatingExpertTag = document.createElement("div");
        floatingExpertTag.innerHTML = "Expert";
        floatingExpertTag.id = "floatingExpertTagDiv";
        document.body.appendChild(floatingExpertTag);
        var floatingExpertTagCss = document.createElement("style");
        floatingExpertTagCss.type = "text/css";
        floatingExpertTagCss.innerHTML = "#floatingExpertTagDiv { position:fixed;top:-10px;right:10px;display:block;z-index:9999;font-size:60px !important;opacity:.1;text-transform:uppercase;font-weight:bold; }";
        document.body.appendChild(floatingExpertTagCss);
    };
    
    // Employment history layout bugfix for new font
    var expEmpHxFix = document.createElement("style");
    expEmpHxFix.type = "text/css";
    expEmpHxFix.innerHTML = "#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstEmployment_0_D { height: inherit !important; } #main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0__lstEmployment_0_D table tbody tr td { font-size: 11px !important; }";
    document.body.appendChild(expEmpHxFix);
    
    // Pin tool bar to top
    var floatingExpertToolsCss = document.createElement("style");
    floatingExpertToolsCss.type = "text/css";
    floatingExpertToolsCss.innerHTML = "#main_divEditLinks { position:fixed;top:55px;left:0px;width:100%;height:20px;display:block;border-bottom:#BAC9D8 1px solid;box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.31);background-color:#F7F7F7;z-index:999; } #_panelMenu { border-bottom: none !important; box-shadow: none !important; } #main_divEditLinks a { text-decoration: none; }";
    document.body.appendChild(floatingExpertToolsCss);
    var topSpacerHeight = document.querySelector('.masterContent');
    topSpacerHeight.style.position = "relative";
    topSpacerHeight.style.top = "16px";
    
    // Pin tab menu to top bar when scrolled past via jQuery
    var pinnedTabMenuCss = document.createElement("style");
    pinnedTabMenuCss.type = "text/css";
    pinnedTabMenuCss.innerHTML = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 63px;left: 0px;background-color: #F7F7F7;width: 100%;text-align: center;z-index:999;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.31);border-bottom:solid 1px #BAC9D8; } .tabmenu span, span.active { background:inherit;border:none;padding:2px 15px 2px 15px; } .tabmenu span.active, span.active:hover { border-bottom:none;cursor:pointer;color: #DE1944;background: none; } .tabmenu { padding:4px;text-align:center; } .tabmenu span:hover { background: none;color: black; }";
    document.body.appendChild(pinnedTabMenuCss);
    var $window = $(window),
        $stickyEl = $('#main_main_tbcAll_ulTabContainer'),
        elTop = $stickyEl.offset().top;
    $window.scroll(function() {
        $stickyEl.toggleClass('pinned', $window.scrollTop() > elTop - 60);
    });
    
    // Hide old expert name w/ collapse button & center newly styled expert name
    var expertNameValue = document.querySelector('.dxnb-ghtext:nth-child(1)').innerHTML;
    var expertDeetNameBar = document.createElement("style");
    expertDeetNameBar.type = "text/css";
    expertDeetNameBar.innerHTML = "#main__navAdvisorProfile_GHE0 { display: none; }";
    document.body.appendChild(expertDeetNameBar);
    var expertDeetNewName = document.createElement("div");
    var expertNameActual = expertNameValue;
    expertIdActual = expertNameActual.substring(expertNameActual.indexOf("("));
    expertNameActual = expertNameActual.substring(0, expertNameActual.indexOf("("));
    expertDeetNewName.innerHTML = expertNameActual + '<div id="expertIdActualDiv" style="font-size: 18px !important;">' + expertIdActual + '</div>';
    expertDeetNewName.id = "expertDeetNewNameDiv";
    document.body.appendChild(expertDeetNewName);
    var expertDeetNewNameCss = document.createElement("style");
    expertDeetNewNameCss.type = "text/css";
    expertDeetNewNameCss.innerHTML = "#expertDeetNewNameDiv { position:absolute; top:82px; width: 100%; text-align: center; } #expertDeetNewNameDiv span { font-size: 28px !important; text-transform: uppercase; } #main__navAdvisorProfile_GC0.dxnbGroupContent_Office2010Blue { padding: 0px !important; } .masterContent { background: #F7F7F7; } #main__navAdvisorProfile { padding-top: 30px; }";
    document.body.appendChild(expertDeetNewNameCss);
    
    // Expand and restyle expert bio
    var expInfoBox = document.createElement("style");
    expInfoBox.type = "text/css";
    expInfoBox.innerHTML = "#main__navAdvisorProfile_ITC0i0__advisorProfileDetail_0 > table:nth-of-type(3) > tbody > tr > td:nth-of-type(1) > div:nth-of-type(1) { height: 380px !important; border: solid 3px #E6E6E6 !important; background: white; }";
    document.body.appendChild(expInfoBox);
    
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
    
    // Employment history layout bugfix for new font
    var expEmpHxFix = document.createElement("style");
    expEmpHxFix.type = "text/css";
    expEmpHxFix.innerHTML = "#main_addProspectControl__roundPanel__employmentHistory__lstEmployment_D.dxlbd { height: inherit !important; } #main_addProspectControl__roundPanel__employmentHistory__lstEmployment_D.dxlbd table tbody tr td { font-size: 11px !important; }";
    document.body.appendChild(expEmpHxFix);
    
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



// Source signature
$("html").before("<!-- Injected with KnowledgeBetter v" + kbfixver + " -->");
