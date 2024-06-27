document.addEventListener('DOMContentLoaded', function() {
    const message = document.createElement('p');
    message.textContent = 'This message is added by JavaScript!';
    document.querySelector('.container').appendChild(message);
});
