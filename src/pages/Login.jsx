import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
const Login = () => {
  return (
    <Wrapper>
      <form className='form' method='POST'>
        <Logo />
        <h4>Login</h4>
        <FormRow
          type='email'
          name='email'
          defaultValue={'test@gmail.com'}
          labelText={'Email'}
        />
        <FormRow
          type={'password'}
          labelText={'Password'}
          name={'password'}
          defaultValue={'qawsedrf'}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <button type='button' className='btn btn-block'>
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
