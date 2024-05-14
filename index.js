let outname = document.querySelector(".out-name")
let inpname = document.querySelector(".inp-name")
function updateValuename(){
    let dd = inpname.value;
    outname.innerText = dd
}
let outnumber = document.querySelector(".out-number")
let inpnumber = document.querySelector(".inp-number")
function updateValuenumber(){
    let aa = inpnumber.value;
    outnumber.innerText = aa
}
let outdate1 = document.querySelector(".out-date1")
let inpdate1 = document.querySelector(".inp-date1")
function updateValuedate1(){
    let cc1 = inpdate1.value;
    outdate1.innerText = cc1
}
let outdate2 = document.querySelector(".out-date2")
let inpdate2 = document.querySelector(".inp-date2")
function updateValuedate2(){
    let cc2 = inpdate2.value;
    outdate2.innerText = cc2
}
let outcv2 = document.querySelector(".out-cv2")
let inpcv2 = document.querySelector(".inp-cv2")
function updateValuecv22(){
    let gg = inpcv2.value;
    outcv2.innerText = gg
}
const separateByFour = (str) => {
    return str ? str.match(/.{1,4}/g).join(" "):''
}
inpnumber.addEventListener("input",function(e){
    let result = separateByFour(e.target.value)
    outnumber.textContent = result
})



let inputname = document.querySelector(".inp-name")
let pErrorname = document.querySelector(".red-error__name")
// 
let inputnumber = document.querySelector(".inp-number")
let pErrornumber = document.querySelector(".red-error__number")
// 
let inputdate1 = document.querySelector(".inp-date1")
let inputdate2 = document.querySelector(".inp-date2")
let pErrordate = document.querySelector(".red-error__date")
// 
let inputcv2 = document.querySelector(".inp-cv2")
let pErrorcv2 = document.querySelector(".red-error__cv2")
let button = document.querySelector(".click-b")
inputname.addEventListener('input', function () {
    pErrorname.textContent = "";
})
inputnumber.addEventListener('input', function(){
    pErrornumber.textContent = '';
})
inputdate1.addEventListener('input', function(){
    pErrordate.textContent = '';
})
inputcv2.addEventListener('input', function(){
    pErrorcv2.textContent = '';
})
button.addEventListener("click", function(event) {
    event.preventDefault();
    let username = inputname.value.trim();
    let usernumber = inputnumber.value.trim();
    let userdate1 = inputdate1.value.trim();
    let userdate2 = inputdate2.value.trim();
    let usercv2 = inputcv2.value.trim();
    let isvalid = true
    if (username === '') {
        pErrorname.textContent = 'Writing the name and surname is mandatory!';
        isvalid = false;
    }else if (!/^[A-Za-z\s]+$/.test(username)) {
        pErrorname.textContent = 'Use only letters!'
        isvalid = false;
    }else if (username.length < 5) {
        pErrorname.textContent = 'Write the full name and surname!'
        isvalid = false;
    } else {
        pErrorname.textContent = "";
    }
    if (usernumber === '') {
        pErrornumber.textContent = 'It is mandatory to write the card number!';
        isvalid = false;
    }else if (!/^[0-9\s]+$/.test(usernumber)) {
        pErrornumber.textContent = 'Use only numbers!'
        isvalid = false;
    }else if (usernumber.length < 16) {
        pErrornumber.textContent = 'Enter the card number in full!'
        isvalid = false;
    }else {
        pErrornumber.textContent = "";
    }
    if (userdate1 === '') {
        pErrordate.textContent = 'is nessessary!';
        isvalid = false;
    }else if (!/^[0-9]+$/.test(userdate1)) {
        pErrordate.textContent = 'Use only numbers!'
        isvalid = false;
    }else if (userdate1.length < 2) {
        pErrordate.textContent = 'Please write the date in full!'
        isvalid = false;
    }else {
        pErrordate.textContent = "";
    }
    if (userdate2 === '') {
        pErrordate.textContent = 'is nessessary!';
        isvalid = false;
    }else if (!/^[0-9]+$/.test(userdate2)) {
        pErrordate.textContent = 'Use only numbers!'
        isvalid = false;
    }else if (userdate2.length < 2) {
        pErrordate.textContent = 'Please write the date in full!'
        isvalid = false;
    }else {
        pErrordate.textContent = "";
    }
    if (usercv2 === '') {
        pErrorcv2.textContent = 'is nessessary!';
        isvalid = false;
    }else if (!/^[0-9]+$/.test(usercv2)) {
        pErrorcv2.textContent = 'Use only numbers!'
        isvalid = false;
    }else if (usercv2.length < 3) {
        pErrorcv2.textContent = 'Please write the date in full!'
        isvalid = false;
    }else {
        pErrorcv2.textContent = "";
    }
    if (isvalid) {
        form.style.display = "none"
        formcomplet.style.display = "block"
        formcomplet.style.display = "flex"
    }
})
let form = document.querySelector(".form")
let formcomplet = document.querySelector(".form-complet")
