// import React, { useState } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function DatePicker(props) {
     const { label, name, ...rest } = props
     return (
          <div className='form-control'>
               <label htmlFor={name}>{label}</label>
               <Field id={name} name={name} {...rest} >
                    {({ form, field }) => {
                         const { setFieldValue } = form
                         const { value } = field
                         return <DateView id={name} {...rest} {...field} selected={value} onChange={date => setFieldValue(name, date)} dateFormat='dd/MM/yyyy' />
                    }}
               </Field>
               <ErrorMessage name={name} component={TextError} />
          </div>
     )
}

export default DatePicker