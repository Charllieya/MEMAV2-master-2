window.onload = function() {
    const supplyBtn = document.getElementById('btn-supply');
    const contactsBtn = document.getElementById('btn-contacts');
    if (supplyBtn) {
        supplyBtn.addEventListener("click", () => {
            console.log("SUPPLIES CHECKLIST");
        });
        if (contactsBtn) {
            contactsBtn.addEventListener("click", () => {
                console.log("EMERGENCY CONTACTS");
            });
        }
    }
}