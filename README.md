# Auto-Select Radio Button Script

## Overview

This document explains how a JavaScript snippet is used to automatically select a specific radio button from a group of radio buttons on a web page. The script identifies all radio buttons, groups them by their `name` attribute, and selects a radio button based on a specified index.

## Detailed Explanation

1. **Selection Index:**

   - The script starts by defining an index (`optionIndexToSelect`) that determines which radio button in a group should be selected.
   - The index is zero-based, meaning an index of `4` refers to the fifth radio button in the group.

2. **Identifying Radio Buttons:**

   - The script finds all radio buttons on the page using a selector that targets input elements of type `radio`.
   - For each radio button found, the script retrieves all other radio buttons that share the same `name` attribute, grouping them together.

3. **Selecting the Radio Button:**
   - The script checks if a radio button exists at the specified index within the group.
   - If the radio button exists, it is selected by setting its `checked` property to `true`, effectively simulating a user click.

## How to Execute the Script

To execute this script on a web page, follow these steps:

1. **Access the Web Page:**

   - Navigate to the web page that contains the radio buttons you want to manipulate.

2. **Open Developer Tools:**

   - Access the Developer Tools in your browser. This can usually be done by pressing `F12`, `Ctrl+Shift+I` (Windows/Linux), or `Cmd+Option+I` (Mac).

3. **Use the Console:**

   - In the Developer Tools, select the "Console" tab.Write allow pasting then paste and run JavaScript code.

4. **Run the Script:**
   - Paste the provided script into the console and press `Enter`.
   - The radio button at the specified index will be selected automatically.

## Important Considerations

- **Index Range:** Ensure the index used is within the range of available radio buttons in each group. If the index is out of bounds, no radio button will be selected.
- **Script Timing:** The script assumes that the radio buttons are already rendered on the page when it runs. If the radio buttons are dynamically loaded after the page has fully rendered, this script may need to be executed afterward.

## Use Cases

This script is useful in scenarios where you need to automate the selection of radio buttons, such as for testing purposes, form automation, or other web development tasks.

## Additional Notes

- The script operates on radio buttons based on their grouping by the `name` attribute. Each group is treated independently, and only one radio button in each group can be selected at a time.
- This script does not handle edge cases like dynamically loaded content or radio buttons with differing structures. For those scenarios, additional logic may be required.
