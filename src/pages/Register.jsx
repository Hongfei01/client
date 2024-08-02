import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' labelText={'First Name'} name={'name'} />
        <FormRow type='text' labelText={'Last Name'} name={'lastName'} />
        <FormRow type='text' labelText={'Location'} name={'location'} />
        <FormRow type='email' labelText={'Email'} name={'email'} />
        <FormRow type='password' labelText={'Password'} name={'password'} />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
