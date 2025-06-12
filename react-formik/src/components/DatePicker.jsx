import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function DatePicker(props) {
     const { label, name, ...rest } = props;

     return (
          <div className="form-control">
               <label htmlFor={name}>{label}</label>


               <Field name={name}>
                    {({ form, field }) => {
                         // console.log("Form : ", form);

                         const { setFieldValue, setFieldTouched } = form;
                         const { value } = field;
                         return (
                              <DateView
                                   id={name}
                                   {...rest}
                                   {...field}
                                   selected={value}
                                   onChange={date => setFieldValue(name, date)}
                                   onBlur={() => setFieldTouched(name, true)}
                                   dateFormat="dd/MM/yyyy"
                              />
                         );
                    }}
               </Field>

               <ErrorMessage name={name} component={TextError} />
          </div>
     );
}

export default DatePicker;
