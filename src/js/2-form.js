const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', renderFormInput);
form.addEventListener('submit', submitFormData);

// ====================== Event listener functions ======================

function renderFormInput(e) {
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();

    const dataToSave = {
        email,
        message
    }

    saveToLs(storageKey, dataToSave);
}

function submitFormData(e) {
    e.preventDefault();

    const data = loadFromLs(storageKey) || {};

    if (data.email && data.message) {
        console.log(data);
        localStorage.removeItem(storageKey);
        form.reset();
    } else {
        alert('Please, fill in both email and message fields before submitting');
    }
}

// ====================== Local storage functions =======================

function saveToLs(key, value) {
    const archive = JSON.stringify(value);
    localStorage.setItem(key, archive);
}

function loadFromLs(key) {
    const retrievedData = localStorage.getItem(key);

    try {
        return JSON.parse(retrievedData);
    } catch {
        return retrievedData;
    }
}

function restoreData() {
    const { email, message } = loadFromLs(storageKey) || {};
    
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
}

restoreData();

// ================== Setting placeholders ==================

const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

emailInput.addEventListener('focus', () => {
    if (!emailInput.value.trim()) {
        emailInput.setAttribute('placeholder', 'Type area');
    }
});

emailInput.addEventListener('blur', () => {
    emailInput.removeAttribute('placeholder');
});

messageTextarea.addEventListener('focus', () => {
    if (!messageTextarea.value.trim()) {
        messageTextarea.setAttribute('placeholder', 'Type area');
    }
});

messageTextarea.addEventListener('blur', () => {
    messageTextarea.removeAttribute('placeholder');
});