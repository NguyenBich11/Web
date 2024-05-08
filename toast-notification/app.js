const btnSuccess = document.getElementById('btnSuccess');
const btnWarning = document.getElementById('btnWarning');
const btnError = document.getElementById('btnError');

btnSuccess.addEventListener('click', () => {
    createToast('success', 8000);
});

btnWarning.addEventListener('click', () => {
    createToast('warning', 8000);
});

btnError.addEventListener('click', () => {
    createToast('error', 8000);
});

function createToast(status, timeout) {
    var toast = document.createElement('div');
    var toastList = document.getElementById('toasts');

    let templateInner = ``;

    switch(status) {
        case 'success':
            templateInner = 
            `
                <i class="fa-solid fa-circle-check"></i>
                <span class="message">This is Success message</span>
                <span class="countdown"></span>
            `;
            break;
        case 'warning':
            templateInner = 
            `
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class="message">This is Warning message</span>
                <span class="countdown"></span>
            `;
            break;
        case 'error':
            templateInner = 
            `
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span class="message">This is Error message</span>
                <span class="countdown"></span>
            `;
        default:
            break;
    }

    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = templateInner;
    toastList.appendChild(toast);

    timeout = timeout || 4000;
    setTimeout(function() {
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, timeout);

    setTimeout(function() {
        toast.remove();
    }, timeout + 2000);
}