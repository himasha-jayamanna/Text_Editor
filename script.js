// Function to make selected text bold
function bold() {
    document.execCommand('bold', false, null);
}

// Function to underline selected text
function underline() {
    document.execCommand('underline', false, null);
}

// Function to make selected text italic
function italic() {
    document.execCommand('italic', false, null);
}

// Function to change font color
function openColorPicker() {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.click(); // Simulate a click on the hidden color picker
}

// Listen for the change event on the color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', function() {
    const color = colorPicker.value;
    document.execCommand('foreColor', false, color);
});

// Functions to align text
function left() {
    document.execCommand('justifyLeft', false, null);
}

function center() {
    document.execCommand('justifyCenter', false, null);
}

function right() {
    document.execCommand('justifyRight', false, null);
}

function justify(){
    document.execCommand("justifyFull",false,null);
}

// Functions for undo and redo
function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}

//Function for placeholder
const content = document.getElementById('content');
const placeholder = content.querySelector('.placeholder');

content.addEventListener('input', function() {
    const contentText = this.textContent.trim();
    if (contentText !== '') {
        placeholder.style.display = 'none';
    } else {
        placeholder.style.display = 'block';
    }
});

// Function to adjust the height of the content area based on its content
function adjustHeight() {
    const minHeight= 400;
    content.style.height = 'auto';
    content.style.height =Math.max (minHeight,content.scrollHeight) + 'px';
}

content.addEventListener('input', adjustHeight);

adjustHeight();