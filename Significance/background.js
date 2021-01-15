var tabGroups = []

// Creating Tab Groups
var groupName = "";
var url = "";

function tabUpdated(tabId, changeInfo, tab) {
  chrome.tabs.group({
    tabIds: tabId
  })
  if (tab
}

function addTabToGroup(group) {

}

chrome.tabs.onUpdated.addListener(tabUpdated)
