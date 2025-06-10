import { useFormik } from 'formik'
import * as Yup from 'yup'//Yup is a validation library for formik
const initialValues = {
     name: '',
     email: '',
     channel: ''
     //This refers to name attributes in input field
}
const onSubmit = (values) => {
     console.log("Values : ", values);

}
// const validate = (values) => {
//      //values.name,values.email,values.channel
//      //errors.name, errors.email,errors.channel
//      //errors.name='This field is required'

//      let errors = {}
//      if (!values.name) {
//           errors.name = 'Required'
//      }
//      if (!values.email) {
//           errors.email = 'Required'
//      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//           errors.email = 'Invalid email format'
//      }
//      if (!values.channel) {
//           errors.channel = 'Required'
//      }
//      return errors
//      //Must return object, keys refer to name attribute, error message is a string
// } 
//Using Yup for validation now instead of above function validate
const validationSchema = Yup.object({
     name: Yup.string().required('Required!'),
     email: Yup.string().email('Invalid email format').required('Required!'),
     channel: Yup.string().required('Required!')
})
function OldYoutubeForm() {

     const formik = useFormik({
          initialValues,
          onSubmit,
          // validate,
          validationSchema
     })
     // console.log("Form Values : ", formik.values);
     // console.log("Form Errors : ", formik.errors);
     // console.log("Visited Fields : ", formik.touched);//Touched Fields with handle blur

     return (
          <div>
               <form onSubmit={formik.handleSubmit}>
                    <div className='form-control'>

                         <label htmlFor='name'>
                              Name
                         </label>
                         <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                         {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                    </div>
                    <div className='form-control'>

                         <label htmlFor='email'>
                              E-mail
                         </label>
                         <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                         {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div > : null}
                    </div>
                    <div className='form-control'>

                    </div>
                    <label htmlFor='channel'>
                         Channel
                    </label>
                    <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                    <button type='submit'>Submit</button>
               </form>
          </div>
     )
}

export default OldYoutubeForm

/**
 * Managing the form state
 * Handling form submission
 * Validation & error messages
 */