import { Formik, Form, Field, ErrorMessage } from 'formik' //useFormik=>Formik
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
const validationSchema = Yup.object({
     name: Yup.string().required('Required!'),
     email: Yup.string().email('Invalid email format').required('Required!'),
     channel: Yup.string().required('Required!')
})
function YoutubeForm() {

     // console.log("Form Values : ", formik.values);
     // console.log("Form Errors : ", formik.errors);
     // console.log("Visited Fields : ", formik.touched);//Touched Fields with handle blur

     return (
          <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}
          >
               <Form>
                    <div className='form-control'>

                         <label htmlFor='name'>
                              Name
                         </label>
                         <Field type="text" name="name" id="name" />
                         <ErrorMessage name='name' component='div' className='error' />
                    </div>
                    <div className='form-control'>

                         <label htmlFor='email'>
                              E-mail
                         </label>
                         <Field type="email" name="email" id="email" />
                         <ErrorMessage name='email' component='div' className='error' />
                    </div>
                    <div className='form-control'>

                    </div>
                    <label htmlFor='channel'>
                         Channel
                    </label>
                    <Field type="text" name="channel" id="channel" />
                    <ErrorMessage name='channel' component='div' className='error' />
                    <button type='submit'>Submit</button>
               </Form>
          </Formik>
     )
}

export default YoutubeForm

/**
 * Formik Component
 * ----------------
 * Formik : Manages the form state
 * Form : Handles form submission
 * Field : Handles input fields
 * Error Message : Handles error messages
 */