import React, {useState, useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from 'recharts';
import { HomeContainerBody, HomeContainerHeader, HomeContainerHeaderButtonsContainer, HomeContainerHeaderButtonsElement, HomeContainerHeaderButtonsElementDiv, StreakContainer, StreakContainerWorkoutContainer, StreakContainerWorkoutElement, StreakContainerWorkoutElementIcon, StreakContainerWorkoutElementParagraph, StreakContainerWorkoutElementParagraph2, StreakContainerWorkoutElementParagraphContainer } from './styles.ts';
import IconArm from '../../icons/workout-icons/arm.png'
import IconBack from '../../icons/workout-icons/back.png'
import IconLeg from '../../icons/workout-icons/leg.png'

const data = [
  { name: 'Jan', uv: 4000, amt: 2400 },
  { name: 'Fev', uv: 3000, amt: 2210 },
  { name: 'Mar', uv: 2000, amt: 2290 },
  { name: 'Abr', uv: 2780, amt: 2000 },
  { name: 'Mar', uv: 1890, amt: 2181 },
  { name: 'Jun', uv: 2390, amt: 2500 },
  { name: 'Jul', uv: 3490, amt: 2100 },
  { name: 'Ago', uv: 3490, amt: 2100 },
  { name: 'Set', uv: 3490, amt: 2100 },
  { name: 'Out', uv: 3490, amt: 2100 },
  { name: 'Nov', uv: 3490, amt: 2100 },
  { name: 'Dez', uv: 3490, amt: 2100 },
];

const SimpleLineChart = () => {
  return (
    <div style={{background:'white', boxShadow:'1px 1px 10px rgba(0,0,0,0.5', padding:'50px 50px 0px 50px', borderRadius:10, minHeight:'290px', maxHeight:'290px'}}>
    <LineChart style={{marginLeft:'-2%', fontSize:'12pt'}} width={650} height={260} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
}

const MobileLineChart = () => {
    return (
      <div style={{width:'100%', height:'100%'}}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      </div>
    );
  }

  const getIcon = (icon) =>{
    switch(icon){
      case 'leg':
        return IconLeg;
      case 'arm':
        return IconArm;
      case 'back':
        return IconBack;
      default:
        break;
    }
  }

  const workout = [
    {
      icon:'leg',
      name:'Treino de Perna',
      quantity:'12/3',
    },
    {
      icon:'arm',
      name:'Treino de Braço',
      quantity:'12/3',
    },

    {
      icon:'back',
      name:'Treino de Costas',
      quantity:'12/3',
    },

    {
      icon:'leg',
      name:'Treino de perna',
      quantity:'12/3',
    },

    {
      icon:'back',
      name:'Treino de Costas',
      quantity:'12/3',
    },
    {
      icon:'back',
      name:'Treino de Costas',
      quantity:'12/3',
    },

  ]

const Home: React.FC = () => {
  return (
    <div>
        <HomeContainerHeader>Seja Bem-Vindo</HomeContainerHeader>
        <HomeContainerHeader style={{marginTop:'-7%', fontSize:'15pt', marginBottom:'4%', color:'rgba(0,0,0,0.5)'}}>Nome Do Usuário</HomeContainerHeader>
        <HomeContainerBody>
            {window.outerWidth > 600?SimpleLineChart():SimpleLineChart()}
            <HomeContainerHeaderButtonsContainer>
              <HomeContainerHeaderButtonsElementDiv>
                <HomeContainerHeaderButtonsElement>Treinos</HomeContainerHeaderButtonsElement>
              </HomeContainerHeaderButtonsElementDiv>
              <HomeContainerHeaderButtonsElementDiv>
                <HomeContainerHeaderButtonsElement>Resultados</HomeContainerHeaderButtonsElement>
              </HomeContainerHeaderButtonsElementDiv>
              <HomeContainerHeaderButtonsElementDiv>
                <HomeContainerHeaderButtonsElement>Relatórios</HomeContainerHeaderButtonsElement>
              </HomeContainerHeaderButtonsElementDiv>
            </HomeContainerHeaderButtonsContainer>
            <div style={{display:window.outerWidth > 600?'none':'block', textAlign:'left', marginLeft:'2%', marginBottom:'-2%', marginTop:'10%'}}>
              <h2>Sua Lista de Treino</h2>
              <p>É recomendavel que você siga a lista corretamente</p>
            </div>
            <StreakContainer>
              <StreakContainerWorkoutContainer>
                {workout.map((list)=>{
                  return(
                <StreakContainerWorkoutElement>
                  <StreakContainerWorkoutElementIcon>
                    <img style={{width:'70%', margin:6, borderRadius:10}} src={getIcon(list.icon)}/>
                  </StreakContainerWorkoutElementIcon>
                  <StreakContainerWorkoutElementParagraphContainer>
                    <StreakContainerWorkoutElementParagraph>
                      {list.name}
                    </StreakContainerWorkoutElementParagraph>
                    <StreakContainerWorkoutElementParagraph2>
                      {list.quantity}
                    </StreakContainerWorkoutElementParagraph2>
                  </StreakContainerWorkoutElementParagraphContainer>
                </StreakContainerWorkoutElement>
                )})}
              </StreakContainerWorkoutContainer>
            </StreakContainer>
            {/* <StreakContainer>Streak de dias na academia consecutivos</StreakContainer>
            <StreakContainer>Notícias da academia</StreakContainer>
            <StreakContainer></StreakContainer> */}
        </HomeContainerBody>
    </div>
  );
}

export default Home;