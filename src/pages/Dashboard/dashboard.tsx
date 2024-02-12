import React, {useState, useEffect} from 'react'
import { DashboardContainer, DashboardContainerIcon, DashboardContainerShowed } from './styles.ts';
import Sidebar from '../../components/sidebar/index.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import AllInOneService from '../../services/all-in-one.service.ts';
import Home from '../../components/home/index.tsx';

const Dashboard: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(true)
  const [token, setToken] = useLocalStorage('accessToken', null)
  useEffect(()=>{
    console.log(token)
    AllInOneService.getUserByToken(token)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
  },[token])

  return (
    <DashboardContainer>
      {window.outerWidth > 600?'':<DashboardContainerIcon onClick={()=>setIsMenuActive(!isMenuActive)} />}
      {isMenuActive?<Sidebar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>:''}
      {isMenuActive && window.outerWidth < 600?'':
      <DashboardContainerShowed>
        <Home/>
      </DashboardContainerShowed>
      }
    </DashboardContainer>
  );
}

export default Dashboard;