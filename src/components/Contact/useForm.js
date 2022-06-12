import { useState } from 'react';
import { omit } from 'lodash';
const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();
        let name = event.target.name;
        let val = event.target.value;
        validate(event,name,val);

        setValues({
            ...values,
            [name]:val,
        })
    }
  const validate = (event, name, value) => {
    switch (name) {
      case 'firstname':
        if (value.length <= 4) {
          // we will set the error state

          setErrors({
            ...errors,
            username: 'Username atleast have 5 letters',
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, 'username');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };
  return (
        {values,
        errors,
        handleChange,}
);

}

export default useForm
