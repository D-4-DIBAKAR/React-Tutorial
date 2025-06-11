import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
function CheckBox(props) {
     const { label, name, options, ...rest } = props
     return (
          <div className='form-control'>
               <label htmlFor={name}>{label}</label>
               <Field id={name} name={name} {...rest} >
                    {
                         ({ field }) => {
                              return (
                                   options.map((option) => {
                                        // console.log(field.value);

                                        return (
                                             <React.Fragment key={option.key}>
                                                  <input
                                                       type="checkbox"
                                                       id={option.key}
                                                       {...field}
                                                       value={option.value}
                                                       checked={field.value.includes(option.value)} />
                                                  <label htmlFor={option.key}>{option.key}</label>
                                             </React.Fragment>
                                        )
                                   })
                              )
                         }
                    }
               </Field>
               <ErrorMessage name={name} component={TextError} />
          </div>
     )
}

export default CheckBox

/**
 * lIST OF PROPS
 * control
 * name
 * label
 * options=[{key:value}]
 */