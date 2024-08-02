import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='form-input'
            defaultValue={'john'}
          />
        </div>
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
