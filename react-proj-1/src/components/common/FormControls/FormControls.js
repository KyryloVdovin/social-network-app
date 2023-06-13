import React from "react";
import styles from './FormsControls.module.css';
import { Field } from "redux-form"


const FormControl = ({ input, meta, element, ...props }) => {
    let hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} validate={validators} name={name} component={component} {...props} /> {text}
        </div>
    )
}

// export const FormControl = ({input, meta, tag, placeholder}) => {
//     const hasError = meta.touched && meta.error;

//     return <div>
//         {React.createElement(tag, {
//             placeholder,
//             ...input,
//             className: `${styles.formControl} ${hasError ? styles.error : ''}`
//         })}
//         {hasError && <span className={styles.messageError}>{meta.error}</span>}
//     </div>
// }

// const Element = Element => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//       <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//         <Element {...input} {...props} />
//         { hasError && <span> { meta.error } </span> }                              для импорта
//       </div>
//     );
//   }; 
// const Textarea = Element("textarea");

// и передаем

// <Field component={Textarea} .../>

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;

    return (
        <FormControl {...props}> <textarea {...restProps} {...input} /> </FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;

    return (
        <FormControl {...props}> <input {...restProps} {...input} /> </FormControl>
    )
}