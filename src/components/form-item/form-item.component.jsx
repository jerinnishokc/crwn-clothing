import React from 'react';
// import './form-item.component.scss';
import {
  GroupContainer,
  InputContainer,
  LabelContainer,
} from './form-item.styles';

const FormItem = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <InputContainer
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></InputContainer>
    {label ? (
      <LabelContainer
        className={`${
          otherProps.value.length ? 'shrink' : null
        } form-input-label`}
      >
        {label}
      </LabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormItem;
