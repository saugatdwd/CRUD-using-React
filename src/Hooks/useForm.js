import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [inputValues, setInputValues] = useState(initialState);

    const resetForm = () => {
        setInputValues({initialState});
    }

    const handleInputChange = ({target}) => {
        console.log(target, 'target');
        setInputValues({
            ...inputValues,
            [target?.name]:  target?.value ?? '',
            
        });

    
    }

    const clearSingleValue = (key) => {
        setInputValues({...inputValues, [key] : null})
    }

    return {
        inputValues,
        handleInputChange,
        resetForm,
        clearSingleValue
    }
}
