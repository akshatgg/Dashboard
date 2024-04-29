const staff= document.getElementById("staff");
const vendor=document.getElementById("vendor");

const Reimbursement=()=>{
    vendor.style.display='none';
    staff.style.display='block';

}


const Payment=()=>{
    staff.style.display='none';
    vendor.style.display='block';

}




document.addEventListener("DOMContentLoaded", function() {
    vendor.style.display = 'none';
});




















