import React, { Component } from 'react';
import authService from '../../services/authService';
import styled, { css } from 'styled-components';
import { Flex } from '../../components/TuxComponents/utilities';
import { LoginModal } from '../../components/TuxComponents/elements/Login/Login'
// styled components for this Login comoponent are at the bottom

class Login extends Component {
    state = { 
        email: '',
        pw: '',
    };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
    handleSubmit = async (e) => {
        const { history, handleSignupOrLogin } = this.props;
        e.preventDefault();
        try {
          await authService.login(this.state);
          // Let <App> know a user has signed up!
          handleSignupOrLogin();
          history.push('/');
        } catch (err) {
          // Use a modal or toast in your apps instead of alert
          alert('Invalid Credentials!');
        }
    };

    render() { 
        const { email, pw } = this.state;
        return (
          <Main>
            <OutsideFlex>
                <LoginModal />
            </OutsideFlex>
          </Main>
        );
    }
}
 
export default Login;

const Main = styled.main`
	background: linear-gradient(210.65deg, rgba(255, 238, 153, 0.32) 17.3%, rgba(122, 218, 222, 0.32) 87.56%), linear-gradient(19.08deg, rgba(234, 74, 70, 0.32) -33.26%, rgba(234, 74, 70, 0) 67.74%);
	background-blend-mode: normal, multiply;
  height: 100vh;
	margin: 0;
	/* max-width: 1440px; */
`;

const OutsideFlex = styled.article`
    ${Flex({jc:'center',ai:'center'})};
    ${(props) =>
    props.signUp && css`
      margin-top: 30px;
      padding-left: 550px;
    `}
`;

