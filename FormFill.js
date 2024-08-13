const optionIndexToSelect = 4 // Set this to the index of the option you want to select (0 for first option, 1 for second, etc.)

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    const radiosInGroup = document.getElementsByName(radio.name);
    if (radiosInGroup[optionIndexToSelect]) {
        radiosInGroup[optionIndexToSelect].checked = true;
    }
});
