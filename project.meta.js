// ==UserScript==
// @name         Project page changes - url
// @namespace    https://crgstaff.com/
// @version      0.5
// @description  See comments for change list
// @author       You
// @match        https://www.crgstaff.com/Projects/ProjectDetail_Tabbed.aspx*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/jdsan9/kbfix/master/project.meta.js
// @updateURL    https://raw.githubusercontent.com/jdsan9/kbfix/master/project.meta.js
// ==/UserScript==

// Floating project toolbar
var floatingToolbarCss = document.createElement("style");
floatingToolbarCss.type = "text/css";
floatingToolbarCss.innerHTML = ".masterContent > table > tbody > tr:nth-of-type(1) { position:fixed;top:52px;width:100%;display:block;background-color:lemonchiffon;z-index:100; }";
document.body.appendChild(floatingToolbarCss);


// Extend project info box
function findFirstDescendantById(parent, tagname)
{
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
floatingProjectNameCss.innerHTML = "#floatingProjectNameDiv { position:fixed;top:18px;right:25px;display:block;z-index:10000; }";
document.body.appendChild(floatingProjectNameCss);


// Pin tab menu to top bar when scrolled past via jQuery
var pinnedTabMenuCss = document.createElement("style");
pinnedTabMenuCss.type = "text/css";
pinnedTabMenuCss.innerHTML = "#main_main_tbcAll_ulTabContainer.pinned { position: fixed; top: 70px; }";
document.body.appendChild(pinnedTabMenuCss);

var $window = $(window),
    $stickyEl = $('#main_main_tbcAll_ulTabContainer'),
    elTop = $stickyEl.offset().top;
$window.scroll(function() {
    $stickyEl.toggleClass('pinned', $window.scrollTop() > elTop);
});


// Display relevant title information first
var projectPageTitle = document.title;
document.title = projectPageTitle.replace("Project Detail - ", "");


// Override recruit & expert & expert search frames scrollbar
var allTablesProjPage = document.getElementsByTagName("table");
var allTablesProjPageIndex = allTablesProjPage.length;
document.getElementsByTagName("table")[allTablesProjPageIndex - 1].style.display = "none";
document.getElementsByTagName("table")[allTablesProjPageIndex - 2].style.display = "none";
if (document.getElementById("main_main_tbcAllProject_Leads_pnlLeads")) {
    // recruits
    var leadFrame = document.getElementById("main_main_tbcAllProject_Leads_pnlLeads");
    leadFrame.style.height = "100%";
    leadFrame.style.border = "none";
    var leadFrameBorder = document.getElementById("main_main_tbcAll_Placeholder_Project_Leads");
    leadFrameBorder.style.border = "none";
    var leadTableBorder = document.getElementById("main_main_tbcAllProject_Leads_rptLeads_tblRepeater");
    leadTableBorder.style.border = "none";
} else if (document.getElementById("main_main_tbcAllProject_AdvisorSearch_pnlMain")) {
    // expert search
    var expertSearchBorderOuter = document.getElementById("main_main_tbcAll_Placeholder_Project_AdvisorSearch");
    expertSearchBorderOuter.style.border = "none";
    expertSearchBorderOuter.style.height = "inherit";
    var expertSearchBorderInner = document.getElementById("main_main_tbcAllProject_AdvisorSearch_pnlMain");
    expertSearchBorderInner.style.border = "none";
    expertSearchBorderInner.style.height = "inherit";
    var expertSearchTable = document.getElementById("main_main_tbcAllProject_AdvisorSearch__grid__advisorGrid_ctl00__gridAdvisors_DXMainTable").parentNode;
    expertSearchTable.style.height = "inherit";
} else {
    // experts
    var expertFrame = document.getElementById("main_main_tbcAllProject_Experts_pnlExperts");
    expertFrame.style.height = "100%";
    var expertFrameBorder = document.getElementById("main_main_tbcAll_Placeholder_Project_Experts");
    expertFrameBorder.style.border = "none";
};
