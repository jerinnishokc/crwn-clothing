import React from 'react';
import './form-item.component.scss';

const FormItem = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></input>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : null
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormItem;
