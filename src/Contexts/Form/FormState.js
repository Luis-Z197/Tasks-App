import { useState } from "react";
import FormContext from "./FormContext";
function FormState(props) {

    const [show, setShow] = useState(false);
    const [action, setAction] = useState('save');

    return (
        <FormContext.Provider value={
            {
                show,
                setShow,
                action,
                setAction
            }
        }>
            {props.children}
        </FormContext.Provider>
      )
}
export default FormState;