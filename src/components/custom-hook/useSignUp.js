import {useState} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const useForm = (initalState, validate) => {
    const [userData, setUserData] = useState(initalState);
    const [errors, setErrors] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {displayName, email, password} = userData;
    
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

        if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          const { user } = await auth.createUserWithEmailAndPassword(email, password);
          createUserProfileDocument(user, {displayName})
          setUserData(initalState);
        } catch (error) {
          setErrors({
            signUpError: error.message
          })
        }
      }
      }
      
      return {
          userData,
          handleChange,
          handleSubmit,
          errors,
          isSubmitting
      }
}

export default useForm;