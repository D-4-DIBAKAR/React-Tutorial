/* eslint-disable no-unused-vars */
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
     const dropDownOptions = [
          { key: "Select an option", value: '' },
          { key: "Option 1", value: 'option 1' },
          { key: "Option 2", value: 'option 2' },
          { key: "Option 3", value: 'option 3' }
     ]
     const radioOptions = [

          { key: "Option 1", value: 'radio-option 1' },
          { key: "Option 2", value: 'radio-option 2' },
          { key: "Option 3", value: 'radio-option 3' }
     ]
     const checkboxOptions = [

          { key: "Option 1", value: 'checkbox-option 1' },
          { key: "Option 2", value: 'checkbox-option 2' },
          { key: "Option 3", value: 'checkbox-option 3' }
     ]
     const initialValues = {
          email: '',
          description: '',
          selectOptions: '',
          radioOptions: '',
          checkboxOptions: [],
          birthDate: null
     }
     const validationSchema = Yup.object({
          email: Yup.string().required("Required").email(),
          description: Yup.string().required("Required"),
          selectOptions: Yup.string().required("Required"),
          radioOptions: Yup.string().required("Required"),
          checkboxOptions: Yup.array().required("Required"),
          birthDate: Yup.date().required("Required").nullable()
     })
     const onSubmit = (values) => {

          console.log("Values : ", values);
          console.log("Saved data :", JSON.parse(JSON.stringify(values)))
     }
     return (
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               {formik => (
                    <Form>
                         <FormikControl control='input' label='Email' name='email' />
                         <FormikControl control='textarea' label='Description' name='description' />
                         <FormikControl control='select' label='Select an option' name='selectOptions' options={dropDownOptions} />
                         <FormikControl control='radio' label='Select an option' name='radioOptions' options={radioOptions} />
                         <FormikControl control='checkbox' label='Pick an option' name='checkboxOptions' options={checkboxOptions} />
                         <FormikControl control='date' label='Pick a date' name='birthDate' />
                         <button type="submit">Submit</button>

                    </Form>
               )}
          </Formik>
     )
}

export default FormikContainer