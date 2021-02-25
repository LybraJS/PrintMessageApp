function submit () {
    if (document.getElementById('input').value === '') {
        document.getElementById('message-delivered').innerHTML = 'Please enter a message'
        document.getElementById('message-delivered').style.color = 'red'
        document.getElementById('message-output').innerHTML = 'Message Output'
    }
    else {
        document.getElementById('message-delivered').innerHTML = 'Message submitted';
        document.getElementById('message-delivered').style.color = 'limegreen'
        document.getElementById('message-output').innerHTML = document.getElementById('input').value;

    }
}