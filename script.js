const staff = document.getElementById("staff");
const vendor = document.getElementById("vendor");
const calendar = document.getElementById("calendar")
const Reimbursement = () => {
    vendor.style.display = 'none';
    staff.style.display = 'block';
    calendar.style.display = 'none';

}


const Payment = () => {
    staff.style.display = 'none';
    vendor.style.display = 'block';
    calendar.style.display = 'none';
}


const date = () => {
    staff.style.display = 'none';
    vendor.style.display = 'none';
    calendar.style.display = 'block';

    const smallBoxes = document.querySelectorAll('.small-box');
    smallBoxes.forEach(box => {
        box.style.paddingBottom = '20%';
    });
}





document.addEventListener("DOMContentLoaded", function () {
    vendor.style.display = 'none';
    calendar.style.display = 'none';

});





document.addEventListener('DOMContentLoaded', function () {
    const sidebars = document.querySelectorAll('.sidebar');
    sidebars.forEach(sidebar => {
        sidebar.addEventListener('click', function () {
            clearActiveSidebar();
            this.classList.add('active');
        });
    });
});

function clearActiveSidebar() {
    const sidebars = document.querySelectorAll('.sidebar');
    sidebars.forEach(sidebar => {
        sidebar.classList.remove('active');
    });
}






