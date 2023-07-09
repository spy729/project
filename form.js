const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = [ 
"Golden Estate", 
"AgeWell Foundation",
"Nirmal Chhaya", 
"Panchvati", 
"Sai Sahara Old Age",
"Vardaan Hospital", 
"Panchvati", 
"Age Ventures India", 
"Age Ventures India", 
"Vrishram Vridh Ashram Sheows", 


"Ashirwad Old Age Home",
"Home Silver Lining Old Age Home", 
"Triveni Devi Vridhashram", 



"Sandhya Senior Citizen Home", 
"Archon Care Home For Seniors", 
"St. Marys Home For The Old Aged Women", 
"The Second Inning Home", ];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">You Can Choose Another One</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));