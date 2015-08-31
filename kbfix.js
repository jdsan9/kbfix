// ==UserScript==
// @name         KB Updates
// @namespace    https://crgstaff.com/
// @version      1.7.1
// @description  Increasing usability of KB. See comments for change list.
// @author       JS
// @grant        none
// @icon         https://www.crgstaff.com/favicon.ico
// @include      https://www.crgstaff.com/Projects/ProjectDetail_Tabbed.aspx*
// @include      https://www.crgstaff.com/Members/MemberProfile_Tabbed.aspx*
// @include      https://www.crgstaff.com/Projects/CurrentProjects.aspx
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/jdsan9/kbfix/master/kbfix.js
// ==/UserScript==

// Release notes: 1.7.1 - Scroll to top bugfix

if(document.URL.indexOf("ProjectDetail_Tabbed.aspx") >= 0){
    // Project page changes
    
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

} else if(document.URL.indexOf("CurrentProjects.aspx") >= 0) {
    // Current Projects page changes
    
    // Remove inner vertical scroll on projects list
    var currentProjectsFrame = document.getElementById("main_projectsBrowseView_ctl00_gvProjects_DXMainTable");
    currentProjectsFrame.style.height = "100%";
    var currentProjectsCss = document.createElement("style");
    currentProjectsCss.type = "text/css";
    currentProjectsCss.innerHTML = "#main_projectsBrowseView_ctl00_trProjects > td > table > tbody > tr > td > div:nth-of-type(2) { height:inherit !important; }";
    document.body.appendChild(currentProjectsCss);

    // Actual page title
    document.title = "Current Projects";
    
} else if(document.URL.indexOf("MemberProfile_Tabbed.aspx") >= 0) {
    // Expert Profile page changes
    
    // Display relevant title information first
    var expertProfilePageTitle = document.title;
    document.title = expertProfilePageTitle.replace("Expert Profile - ", "");
};

// Global changes

// Scroll to top button in bottom left
var backToTopCss = document.createElement("style");
backToTopCss.type = "text/css";
backToTopCss.innerHTML = "#backToTopDiv { position:fixed;bottom:10px;right:10px;display:block;z-index:20000; } .scrollToTop{ background: whiteSmoke; text-decoration: none; display:none; } .scrollToTop:hover{ text-decoration:none; }";
document.body.appendChild(backToTopCss);
var backToTop = document.createElement("div");
backToTop.innerHTML = '<a href="#" class="scrollToTop"><img src="http://i.imgur.com/jcHVeh6.png" height="30px" width="30px" /></a>';
backToTop.id = "backToTopDiv";
document.body.appendChild(backToTop);
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
