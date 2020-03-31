import {useState, useEffect} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const useForm = (initalState, validate, FORM) => {
    const [userData, setUserData] = useState(initalState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {displayName} = userData;
    
    const handleChange = event => {
        // destructuring
      const {name, value} = event.target;
    
        setUserData({
          ...userData,
          [name]: value
        });
      }
      const handleSubmit = async event => {
        event.preventDefault();
        
        setErrors(validate(userData));
        setIsSubmitting(true);

        try {
          if (FORM === 'sign-up') {
          const { user } = await auth.createUserWithEmailAndPassword(userData.email, userData.password);
          createUserProfileDocument(user, {displayName})
          setUserData(initalState);
        }
        } catch (error) {
          console.error(error);
          
        }
      }

      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          // handleSubmit()
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