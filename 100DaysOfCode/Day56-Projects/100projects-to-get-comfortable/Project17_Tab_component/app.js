const tabsBox = document.querySelector(".tabs-box");
const allTabs = document.querySelectorAll(".tab");
const arrowIcons = document.querySelectorAll(".icon i");

const handleIcons = () => {
    let scrollVal = Math.ceil(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    // Show/hide arrows based on scroll position
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal + 1 ? "flex" : "none";
}

// Function to set active tab
const setActiveTab = (tab) => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.parentElement.id === "left" ? -340 : 340;
        tabsBox.scrollLeft += scrollAmount;
        setTimeout(() => handleIcons(), 400);
    });
});

allTabs.forEach(tab => {
    // Click to select
    tab.addEventListener("click", () => setActiveTab(tab));

    // Keyboard support: Press "Enter" to select
    tab.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            setActiveTab(tab);
        }
    });
});

tabsBox.addEventListener("scroll", handleIcons);

// Run on startup
handleIcons();