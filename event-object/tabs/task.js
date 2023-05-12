let tabs = Array.from(document.querySelectorAll('div.tab'));
let contentTab = document.querySelectorAll('div.tab__content');

function tabSelect() {
    for (const tab of tabs) {
        tab.className = 'tab';
    }
    for (const content of contentTab){
        content.className = 'tab__content';
    }
    let index = tabs.indexOf(this);
    tabs[index].className = 'tab tab_active';
    contentTab[index].className = 'tab__content tab__content_active'; 
}
for (const item of tabs) {
    item.onclick = tabSelect;
}