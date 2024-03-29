let myLeads = [];
const inputEl = document.getElementById("input-el", "inputEl");
const inputBtn = document.getElementById("input-btn", "inputBtn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

/* In the inputBtn even listener below, the myLeads array gets added to localStorage. This line checks if there is anything
in localStorage and if so, adds that value to the listItems */
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    // ulEl.innerHTML = "";

    // This was my first idea for this
    // for (let i = 0; i < myLeads.length; i++) {
    //     let li = document.createElement("li");
    //     li.appendChild(document.createTextNode(myLeads[i]));
    //     ulEl.appendChild(li);
    // }

    // This is the way they did it on Scrimba at first
    // for (let i = 0; i < myLeads.length; i++) {
    //     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // }

    // And this is the way Scrimba said to do it
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
            listItems += `
                <li>
                    <a target='_blank' rel='noreferrer noopener' href='https://${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
        `;
    }

    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
})

tabBtn.addEventListener("click", function() {
    //I found this method when I Googled. This will work in a browser window but not in a Chrome Extension
    //myLeads.push(window.location.href);

    //but Scrimba saidto do it this way because of the way Chrome works
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})