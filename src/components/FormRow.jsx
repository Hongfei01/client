const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        className='form-input'
        defaultValue={defaultValue || ''}
      />
    </div>
  );
};
export default FormRow;
