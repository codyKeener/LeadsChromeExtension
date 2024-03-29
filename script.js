let myLeads = [];
const inputEl = document.getElementById("input-el", "inputEl");
const inputBtn = document.getElementById("input-btn", "inputBtn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
    console.log(myLeads);
})

function renderLeads() {
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
    for (let i = 0; i < myLeads.length; i++) {
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