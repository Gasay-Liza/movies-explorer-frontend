//хук управления формой и валидации формы
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";

export default function useValidation() {
  const navigate = useNavigate();

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && e.target.validity.patternMismatch) {
      e.target.setCustomValidity(
        "Поле &laquo;Имя&raquo; должно содержать только латиницу, кириллицу, пробел или дефис"
      );
    } else if (name === "email" && !isEmail(value)) {
      e.target.setCustomValidity(
        "Необходимо указать E-mail в формате pochta@yandex.ru"
      );
    } else {
      e.target.setCustomValidity("");
    }
    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: e.target.validationMessage }));
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetValidation = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { navigate, values, errors, handleChange, resetValidation, isValid };
}
