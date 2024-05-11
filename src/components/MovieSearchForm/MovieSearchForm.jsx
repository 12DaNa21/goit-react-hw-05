import toast, {Toaster} from 'react-hot-toast';
import css from './MovieSearchForm.module.css'
import { FaSearch } from "react-icons/fa";
import { Formik, Form, Field } from 'formik';
export default function MovieSearchForm({onSearch}){
    return <Formik
    initialValues={{ query: '' }}
    onSubmit={(values, actions) => {
      if (values.query.trim() === '') {
        toast.error('Please enter a search term');
        return;
      }

      onSearch(values.query);
      actions.resetForm();
    }}
  >
    <Form className={css.form}>
      <Field name="query">
        {({ field }) => (
          <input className={css.input}
            {...field}
            type="text"
            autoComplete="off"
            autoFocus
          />
        )}
      </Field>
      <button className={css.srchbtn} type="submit"><FaSearch className={css.icon}/>Search</button>
      <Toaster position="top-right" reverseOrder={false}/>
    </Form>
  </Formik>
}