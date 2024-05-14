const $_ = className => document.querySelector(`.${className}`);

const updateValue = (inp, out) => {
  const { value } = inp;
  out.innerText = value;
};

const setValueToEmpty = elem => (elem.textContent = "");

const setValue = (elem, value) => (elem.textContent = value);

const isNumber = str => {
  const numberRegEx = /^[0-9\s]+$/;
  return numberRegEx.test(str);
};

const elemValue = elem => elem.value.trim()

const dateErrorElem = $_("red-error__date");

const nameElem = { input: $_("inp-name"), output: $_("out-name"), error: $_("red-error__name") };
const numberElem = { input: $_("inp-number"), output: $_("out-number"), error: $_("red-error__number") };
const date1Elem = { input: $_("inp-date1"), output: $_("out-date1"), error: dateErrorElem };
const date2Elem = { input: $_("inp_date2"), output: $_("out-date2"), error: dateErrorElem };
const cvElem = { input: $_("inp-cv2"), output: $_("out-cv2"), error: $_("red-error__cv2") };

const separateByFour = str => {
  return str ? str.match(/.{1,4}/g).join(" ") : "";
};
nameElem.input.addEventListener("input", e => {
  let result = separateByFour(e.target.value);
  outnumber.textContent = result;
});

let button = $_("click-b");

nameElem.input.addEventListener("input", () => setValueToEmpty(nameElem.error));
numberElem.input.addEventListener("input", () => setValueToEmpty(numberElem.error));
date1Elem.input.addEventListener("input", () => setValueToEmpty(date1Elem.error));
cvElem.input.addEventListener("input", () => setValueToEmpty(cvElem.error));

button.addEventListener("click", event => {
  event.preventDefault();
  let username = elemValue(nameElem.input);
  let usernumber = elemValue(numberElem.input);
  let userdate1 = elemValue(date1Elem.input);
  let userdate2 = elemValue(date2Elem.input);
  let usercv2 = elemValue(cvElem.input);
  let isvalid = false;
  if (!username) {
    setValue(nameElem.error, "Writing the name and surname is mandatory!");
  } else if (!/^[\w\s]+$/.test(username)) {
    setValue(nameElem.error, "Use only letters!");
  } else if (username.length < 5) {
    setValue(nameElem.error, "Write the full name and surname!");
  } else {
    setValueToEmpty(nameElem.error);
    isvalid = true;
  }
  if (!usernumber) {
    setValue(numberElem.error, "It is mandatory to write the card number!");
  } else if (!isNumber(usernumber)) {
    setValue(numberElem.error, "Use only numbers!");
  } else if (usernumber.length < 16) {
    setValue(numberElem.error, "Enter the card number in full!");
  } else {
    setValueToEmpty(numberElem.error);
    isvalid = true;
  }
  if (!userdate1 || !userdate2) {
    setValue(dateErrorElem, "is nessessary!");
  } else if (!isNumber(userdate1) || !isNumber(userdate2)) {
    setValue(dateErrorElem, "Use only numbers!");
  } else if (userdate1.length < 2 || userdate2.length < 2) {
    setValue(dateErrorElem, "Please write the date in full!");
  } else {
    setValueToEmpty(dateErrorElem);
    isvalid = true;
  }
  if (!usercv2) {
    setValue(cvElem.error, "is nessessary!");
  } else if (!isNumber(usercv2)) {
    setValue(cvElem.error, "Use only numbers!");
  } else if (usercv2.length < 3) {
    setValue(cvElem.error, "Please write the date in full!");
  } else {
    setValueToEmpty(cvElem.error);
    isvalid = true;
  }
  if (isvalid) {
    form.classList.add("hidden");
    formcomplet.classList.add("block");
    formcomplet.classList.add("flex");
  }
});
let form = $_("form");
let formcomplet = $_("form-complet");