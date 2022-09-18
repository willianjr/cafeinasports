import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import LogoCafeina from './assets/logoCafeinaSports.svg';
import { Input } from './common/components/Input';
function App() {
 
  const [timeStart, setTimeStart] = useState('')
  const [timePrevist, setTimePrevist] = useState('')

  const [timeFinalUser, setTimeFinalUser] = useState('')
  const [timeUserEvent, setTimeUserEvent] = useState('')
  const [timeEventCheck, setTimeEventCheck] = useState('')
 
  const calculateTimeUserEvent = () => {
    const dateStart = moment(timeStart, 'HH:mm:ss');
     const datePrevist = moment(timePrevist, 'HH:mm:ss');
     var duration = moment(dateStart.add(moment(datePrevist).hours(),'hours').add(moment(datePrevist).minutes(),'minutes').add(moment(datePrevist).seconds(),'seconds')).format('HH:mm:ss')
    
     return duration
    
  }
  const calculateTimeFinalUserEvent = () => {
     const dateNow = moment(timeEventCheck, 'HH:mm:ss');
     const dateStart = moment(timeStart, 'HH:mm:ss');
     var duration = moment.duration(dateNow.diff(dateStart))
     const diference = moment(`${duration.asHours()}:${duration.asMinutes()%60}:${duration.asSeconds() % 60 % 60}`,'HH:mm:ss').format('HH:mm:ss')
     return diference
    
  }

  useEffect(() => {
    setTimeUserEvent(prev=>calculateTimeUserEvent())   
  },[timePrevist])
  
  useEffect(() => {
    setTimeFinalUser(prev=>calculateTimeFinalUserEvent())   
  },[timeEventCheck])
  
  return (
    <div className="App">
      <figure>
      <img src={LogoCafeina} width={'100%'} />

      </figure>
      <Input type={'time'} step={1} label={'Hora Inicial do Evento'} value={timeStart} onChange={(e)=>setTimeStart(e.currentTarget.value)}/>
      
      <Input type={'time'} step={1} label={'Tempo Previsto do Atleta'} value={timePrevist} onChange={(e) => setTimePrevist(e.currentTarget.value)} />
      <Input type={'text'}  label={'Tempo Previsto de Passagem'} value={timeUserEvent} />
      
      <Input type={'time'} step={1} label={'Tempo de Passagem - Check'} value={timeEventCheck} onChange={(e) => setTimeEventCheck(e.currentTarget.value)} />
      <Input type={'text'}  label={'Tempo Final do Atleta'} value={timeFinalUser} />

    
      
    </div>
  )
}

export default App
