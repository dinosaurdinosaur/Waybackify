openWayBack = function(){
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		window.open("http://web.archive.org/web/*/"+url);
	});
};

openWayBackLink = function(){
	alert("Yes");
//	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//		var url = tabs[0].url;
//		window.open("http://web.archive.org/web/*/"+url);
//	});
};

chrome.browserAction.onClicked.addListener(function(tab) {
	openWayBack();
});

chrome.contextMenus.create({
	title: "Open Page in Way Back Machine",
	contexts:["page", "frame", "selection"],
	onclick: openWayBack
});

chrome.contextMenus.create({
	title: "Open Link in Way Back Machine",
	contexts:["link"],
	onclick: openWayBackLink
});

