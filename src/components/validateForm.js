
export const validateForm = (inputValues) => {
    let errors = {};
    let isValid = true;

    if (!inputValues.name.trim()) {
        errors.name = 'Name is required';
        isValid = false;
    }

    if (!inputValues.email.trim()) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
        errors.email = 'Email is invalid';
        isValid = false;
    }

    if (!inputValues.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone number is required';
        isValid = false;
    } else if (!/^\d{7,}$/.test(inputValues.phoneNumber)) {
        errors.phoneNumber = 'Phone number must be at least 7 digits';
        isValid = false;
    }

    return { errors, isValid };
};
