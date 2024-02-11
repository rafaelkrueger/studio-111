import React, { useState } from 'react'
import { AuthContainer, AuthContainerElements, AuthContainerLeft, AuthContainerLeftButton, AuthContainerLeftForgotPassword, AuthContainerLeftForgotSignup, AuthContainerLeftInput, AuthContainerLeftLabelInput, AuthContainerLeftLabelPassword, AuthContainerLeftPassword, AuthContainerRight, AuthContainerRightImage, AuthContainerLeftForgotSignupLink, AuthContainerLeftLogo } from './styles.ts'
import AuthCoverImage from '../../images/auth-cover.jpg';
import LogoImage from '../../images/logo-auth-no-bg.png';
import LogoImageResponsive from '../../images/logo-auth.jpeg';
import { useMutation } from '@tanstack/react-query';
import AllInOneService from '../../services/all-in-one.service.ts';

const Auth: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    cellphone: '',
    password: '',
    gender: '',
    birthDate: '',
  })

  const genderOptions = [
    {
      gender:'Masculino'
    },
    {
      gender:'Feminino'
    },
    {
      gender:'Prefiro não opinar'
    },
  ]

  const getUser = () =>{
    AllInOneService.get(user).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <AuthContainer>
      <AuthContainerLeft>
        <AuthContainerElements>
        {!isNewUser?
        <>
        <AuthContainerLeftLogo src={window.outerWidth <=600?LogoImageResponsive:LogoImage} /><AuthContainerLeftLabelInput>
              Email
            </AuthContainerLeftLabelInput><AuthContainerLeftInput
                onChange={(e: { target: { value: any; }; }) => {
                  setUser({ ...user, email: e.target.value });
                } } /><AuthContainerLeftLabelPassword>
                Senha
          </AuthContainerLeftLabelPassword><AuthContainerLeftPassword onChange={(e: { target: { value: any; }; }) => {
            setUser({ ...user, password: e.target.value });
          } } /><AuthContainerLeftButton onClick={getUser}>Entrar</AuthContainerLeftButton><div style={{ textAlign: 'center' }}>
            <AuthContainerLeftForgotSignup>Não tem uma conta ainda? <AuthContainerLeftForgotSignupLink onClick={()=>{setIsNewUser(!isNewUser)}}>Registre-se</AuthContainerLeftForgotSignupLink></AuthContainerLeftForgotSignup>
            <AuthContainerLeftForgotPassword>Esqueci minha senha</AuthContainerLeftForgotPassword>
          </div>
        </>
        :
        <>
          <AuthContainerLeftLogo src={LogoImage} style={{marginTop:'-12%'}} />
          <AuthContainerLeftLabelInput style={{marginTop:window.outerWidth > 600? '-10%': '-20%'}}>
              Nome
          </AuthContainerLeftLabelInput>
          <AuthContainerLeftInput
                onChange={(e: { target: { value: any; }; }) => {
                  setUser({ ...user, email: e.target.value });
          }}/>
          <AuthContainerLeftLabelInput style={{marginTop:'-5%'}}>
              Número
          </AuthContainerLeftLabelInput>
          <AuthContainerLeftInput
                onChange={(e: { target: { value: any; }; }) => {
                  setUser({ ...user, email: e.target.value });
          }}/>
          <AuthContainerLeftLabelInput style={{marginTop:'-5%'}}>
              Email
          </AuthContainerLeftLabelInput>
          <AuthContainerLeftInput
                onChange={(e: { target: { value: any; }; }) => {
                  setUser({ ...user, email: e.target.value });
          }}/>
          <AuthContainerLeftLabelPassword style={{marginTop:'-5%'}}>
                Senha
          </AuthContainerLeftLabelPassword>
          <AuthContainerLeftPassword onChange={(e: { target: { value: any; }; }) => {
            setUser({ ...user, password: e.target.value });
          } } />
          <div style={{display:'flex', marginTop:'1%'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <AuthContainerLeftLabelPassword style={{marginTop:window.outerWidth > 600? '-15%': '-5%', marginBottom:window.outerWidth > 600? '0%': '2%'}}>
                    Dt. Nasc
              </AuthContainerLeftLabelPassword>
              <AuthContainerLeftPassword type="date"
                style={{marginRight:'5%', width:'90%'}}
                value={user.birthDate}
                onChange={(e) => setUser({...user, birthDate:e.target.value})}
                max={new Date().toISOString().split('T')[0]} // restrict to today's date or before
              />
            </div>
            <div style={{display:'flex', flexDirection:'column', marginLeft:'7%'}}>
          <AuthContainerLeftLabelPassword style={{marginTop:window.outerWidth > 600? '-12%': '-5%', marginBottom:window.outerWidth > 600? '0%': '-2%'}}>
                Gênero
          </AuthContainerLeftLabelPassword>
          <select
          style={{width:window.outerWidth > 600? '160%': '110%', height:window.outerWidth > 600? '70%': '60%', marginTop:window.outerWidth > 600? '0%': '4%'}}
            value={user.gender}
            onChange={(e) => setUser({...user, gender:e.target.value})}
          >
            <option value="">Selecione uma opção</option>
            {genderOptions.map((option, index) => (
              <option key={index} value={option.gender}>
                {option.gender}
              </option>
            ))}
          </select>
            </div>
          </div>

          <AuthContainerLeftButton onClick={getUser} style={{marginTop:window.outerWidth > 600? '5%': '10%'}}>Registre-se</AuthContainerLeftButton>
          <div style={{ textAlign: 'center' }}>
            <AuthContainerLeftForgotSignup>Já tem uma conta? <AuthContainerLeftForgotSignupLink onClick={()=>{setIsNewUser(!isNewUser)}}>Entre</AuthContainerLeftForgotSignupLink></AuthContainerLeftForgotSignup>
          </div>

        </>
        }
      </AuthContainerElements>
      </AuthContainerLeft>
      <AuthContainerRight>
        <AuthContainerRightImage src={AuthCoverImage}/>
      </AuthContainerRight>
    </AuthContainer>
  );
}

export default Auth;