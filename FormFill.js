const optionIndexToSelect = 4;
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  const radiosInGroup = document.getElementsByName(radio.name);
  if (radiosInGroup[optionIndexToSelect]) {
    radiosInGroup[optionIndexToSelect].checked = true;
  }
});
