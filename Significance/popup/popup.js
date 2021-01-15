// // Create the Color Picker
// const pickr = Pickr.create({
//     el: '.color-picker',
//     theme: 'nano',
//
//     swatches: [
//         'rgba(244, 67, 54, 1)',
//         'rgba(233, 30, 99, 1)',
//         'rgba(156, 39, 176, 1)',
//         'rgba(103, 58, 183, 1)',
//         'rgba(63, 81, 181, 1)',
//         'rgba(33, 150, 243, 1)',
//         'rgba(3, 169, 244, 1)',
//         'rgba(0, 188, 212, 1)',
//         'rgba(0, 150, 136, 1)',
//         'rgba(76, 175, 80, 1)',
//         'rgba(139, 195, 74, 1)',
//         'rgba(205, 220, 57, 1)',
//         'rgba(255, 235, 59, 1)',
//         'rgba(255, 193, 7, 1)'
//     ],
//
//     components: {
//
//         // Main components
//         preview: true,
//         opacity: true,
//         hue: true,
//
//         // Input / output Options
//         interaction: {
//             hex: true,
//             rgba: true,
//             hsla: false,
//             hsva: false,
//             cmyk: false,
//             input: true,
//             clear: true,
//             save: true
//         }
//     }
// });

var background = chrome.extension.getBackgroundPage();

function createSmartTabGroup() {
  background.groupName = document.getElementById("groupName").value
  background.url = document.getElementById("URL").value
}

var createTabGroupButton = document.getElementById("createSmartTabGroup");
createTabGroupButton.addEventListener("click", createSmartTabGroup);
