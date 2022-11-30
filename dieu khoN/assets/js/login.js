let css=(css) => document.querySelector(css);

const usernameEl = css('#username'),
emailEl = css('#email'),

form = css('#form-register'),
phoneEl = css('#phone');





const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl,'Email cannot be blank');
    }else if (!isEmailValid(email)){
        showError(emailEl,'Email is not valid');
    }else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPhone =() => {
    let valid = false;
    const phone = phoneEl.value.trim()
    if(!isRequired(phone)){
        showError(phoneEl,'Phone cannot be blank');
    }else if (!isPhoneValid(phone)){
        showError(phoneEl,'Phone is not valid');
    }else{
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;

};



const isEmailValid = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const isPhoneValid= (phone) => {
    const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return re.test(phone);
}



const isRequired = value => value === '' ? false : true;
const isBetween = (length,min,max) => length < min || length > max ? false : true;

const showError = (input,message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit',function(e){
e.preventDefault();

    let 
        isEmailValid = checkEmail(),
        
        isPhoneValid = checkPhone();

    let isFormValid = isUsenameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPhoneValid

    if(isFormValid){

    }
});

const debounce = (fn,delay = 1) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        },delay);
    };
};

form.addEventListener('input',debounce(function(e){
    switch(e.target.id){
        
        case 'email':
            checkEmail();
            break;
       
        case 'phone':
            checkPhone();
            break;
    }
}));

