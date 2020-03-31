import {useState, useEffect} from 'react';
import { auth } from '../../firebase/firebase.utils';


const useForm = (initalState, validate) => {
    const [userData, setUserData] = useState(initalState);
    const [errors, setErrors] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {email, password} = userData;
    
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
            await auth.signInWithEmailAndPassword(email, password)
            setUserData(initalState);
            
          } catch (error) {
            setErrors({
              ...errors,
              wrongCredentials: 'Invalid email address or password.'
            })
          }
        }

    }

    // useEffect(() => {
      
    //     async function submitData() {
    //       try {
    //         await auth.signInWithEmailAndPassword(email, password)
    //         setUserData(initalState);
            
    //       } catch (error) {
    //         setErrors({
    //           ...errors,
    //           wrongCredentials: 'Invalid email address or password.'
    //         })
    //       }
    //     }
    //     if (Object.keys(errors).length === 0 && isSubmitting){
    //       submitData();
    //   }
    // }, [errors, isSubmitting])

      
      return {
          userData,
          handleChange,
          handleSubmit,
          errors,
          isSubmitting
      }
}

export default useForm;