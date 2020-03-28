import {useState, useEffect} from 'react';


const useForm = (initalState, validate) => {
    const [userData, setUserData] = useState(initalState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    
    const handleChange = event => {
        // destructuring
      const {name, value} = event.target;
    
        setUserData({
          ...userData,
          [name]: value
        });
      }
      const handleSubmit = event => {
        event.preventDefault();
        
        setErrors(validate(userData));
        setIsSubmitting(true);
      }


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            console.log('Submitted successfully.')
            
        }
      }, [errors]);
    
      
      return {
          userData,
          handleChange,
          handleSubmit,
          errors,
          isSubmitting
      }
}

export default useForm;