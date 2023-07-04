//хук управления формой и валидации формы
import { useState, useCallback  } from "react";
import { useNavigate} from "react-router-dom";

export default function useValidation(){
const navigate = useNavigate();

const [values, setValues] = useState({})
const [errors, setErrors] = useState({})
const [isValid, setIsValid] = useState(false)

const handleChange = (e) => {
    const {name, value} = e.target;
    setValues((values) => ({...values,[name]: value}));
    setErrors((errors) => ({...errors,[name]: e.target.validationMessage
  }));
  setIsValid(e.target.closest("form").checkValidity());
}

  const resetValidation= useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

return {navigate, values, errors, handleChange, resetValidation, isValid};
};