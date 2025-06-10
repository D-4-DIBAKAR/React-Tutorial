import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik' //useFormik=>Formik
import * as Yup from 'yup'//Yup is a validation library for formik
import TextError from './TextError';
const initialValues = {
     name: '',
     email: '',
     channel: '',
     address: '',
     social: {
          facebook: '',
          twitter: ''
     },
     phoneNumbers: ['', ''],
     phNumbers: ['']
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
                         {/* <ErrorMessage name='name'  >
                              {
                                   (errorMsg) => {
                                        const { message } = errorMsg
                                        return <div className='error'>{message}</div>
                                   }
                              }
                         </ErrorMessage> */}
                    </div>
                    <div className='form-control'>

                         <label htmlFor='email'>
                              E-mail
                         </label>
                         <Field type="email" name="email" id="email" />
                         {/* <ErrorMessage name='email' component={TextError} className='error' /> */}
                         <ErrorMessage name='email' component='div' className='error' />
                    </div>
                    <div className='form-control'>

                    </div>
                    <label htmlFor='channel'>
                         Channel
                    </label>
                    <Field type="text" name="channel" id="channel" />
                    <ErrorMessage name='channel' component='div' className='error' />
                    <div className='form-control'>
                         <label htmlFor='comments'>
                              Comments
                         </label>
                         <Field as='textarea' name="comments" id="comments" />
                         {/* as='textarea' or component='textarea' */}
                    </div>
                    <div className='form-control'>
                         <label htmlFor='address'>
                              Address
                         </label>
                         <Field as='textarea' name="address" id="address" >
                              {
                                   (props) => {
                                        const { field, form, meta } = props
                                        return (
                                             <div>
                                                  <input {...field} type="text" name="address" id="address" />
                                                  {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                             </div>
                                        )
                                   }
                              }
                         </Field>
                    </div>
                    <div className='form-control'>
                         <label htmlFor='facebook'>
                              Facebook Profile
                         </label>
                         <Field type='text' name="social.facebook" id="facebook" />
                    </div>
                    <div className='form-control'>
                         <label htmlFor='twitter'>
                              Twitter Profile
                         </label>
                         <Field type='text' name="social.twitter" id="twitter" />
                    </div>
                    <div className='form-control'>
                         <label htmlFor='primaryPhone'>
                              Primary Phone
                         </label>
                         <Field type='text' name="phoneNumbers[0]" id="primaryPhone" />
                    </div>
                    <div className='form-control'>
                         <label htmlFor='secondaryPhone'>
                              Secondary Phone
                         </label>
                         <Field type='text' name="phoneNumbers[1]" id="secondaryPhone" />
                    </div>
                    <div className='form-control'>
                         <label htmlFor='phNumbers'>
                              List of Phone Numbers
                         </label>
                         <FieldArray name="phNumbers" id="phNumbers" >
                              {
                                   (fieldArrayProps) => {
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values
                                        return (
                                             <div>
                                                  {
                                                       phNumbers.map((phNumber, index) => (
                                                            <div key={index}>
                                                                 <Field name={`phNumbers[${index}]`} />
                                                                 {index > 0 && <button type='button' onClick={() => remove(index)}>_</button>}
                                                            </div>
                                                       ))
                                                  }
                                                  <button type='button' onClick={() => push('')}>+</button>
                                             </div>
                                        )
                                   }
                              }
                         </FieldArray>
                    </div>
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