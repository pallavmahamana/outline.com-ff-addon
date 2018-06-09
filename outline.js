
browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.create({
     "url": "http://www.outline.com/"+tab.url.replace(/(^\w+:|^)\/\//, '')
});
})