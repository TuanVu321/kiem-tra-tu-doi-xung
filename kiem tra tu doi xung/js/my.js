
function checkPalindrome(str) {
    
    if (str[0] === str[str.length - 1] && str.length > 1) {
        checkPalindrome(str.substring(1, str.length - 1));
        return true
    } else {
        return false
    }
}

function display() {
    let text = prompt('Hay nhap vao mot chuoi');
 
    if (checkPalindrome(text) === true) {
        alert('dung');
    } else {
        alert('sai');
    }
}

display();
