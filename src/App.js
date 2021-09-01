import './App.css';
import  Selector from './component/selector.js'
import { useState ,useEffect} from 'react';
import Card from './component/card';
import axios from 'axios';
import Table from './component/table';
import Chart from './component/chart';

function App() {
  const [istrue,setostrue]=useState(false)
  // const [apidata,setapidata]=useState("")
  const [city,setcity]=useState("Andhra Pradesh")
  const [data,setdata]=useState({
    totalcase:'loading data',
    totaldeath:'loading data',
    totalconfirm:'loading data',
    totalrecover:'loading data',
    cityname:'loading data',
    active:'loading data',
    deth:"loading data",
    confirm:'loading data',
    recover:"loading data"
  })

  useEffect(()=>{
    const getdata=async ()=>{
      const data=await axios.get('https://api.covid19india.org/state_district_wise.json')
      // setapidata(data)
            var data1=data.data[city].districtData
            // console.log(data1)

            var ActiveCase=[];
            var ConformCase=[];
            var deathCase=[];
            var recoverCase=[];
            var dname=[];

            for(var i in data1){
              dname.push(i)
              ActiveCase.push(data1[i].active)
              ConformCase.push(data1[i].confirmed)
              deathCase.push(data1[i].deceased)
              recoverCase.push(data1[i].recovered)
            }
            var activesum=0;
            var recoversum=0;
            var deathsum=0;
            var confirmsum=0;
            for( i=0;i<ActiveCase.length;i++){
                activesum=activesum+ActiveCase[i]
                recoversum=recoversum+recoverCase[i]
                deathsum=deathsum+deathCase[i]
                confirmsum=confirmsum+ConformCase[i]
            }

            setdata({
              totalcase:activesum,
              totaldeath:deathsum,
              totalrecover:recoversum,
              totalconfirm:confirmsum,
              cityname:dname,
              active:ActiveCase,
              deth:deathCase,
              recover:recoverCase,
              confirm:ConformCase
            })
            setostrue(false)
    }
    getdata()
  },[city])
  const callcity=(x)=>{
    setcity(x)
  }
  const setis=()=>{
    console.log("done")
    setostrue(true)
  }
  return (
    <div className="App">
      {!istrue && <Selector city={callcity}></Selector>}
      {/* <button onClick={setis} className="float"><i class="fa fa-plus my-float"></i></button> */}
      <h2 >{city}</h2>
      <Card name={'total activecase'} value={data.totalcase} color={"pink"}/>
      <Card name={'total confirmcase'} value={data.totalconfirm} color={"blue"}/>
      <Card name={'total deathcase'} value={data.totaldeath} color={"red"}/>
      <Card name={'total recovercase'} value={data.totalrecover} color={"green"}/>
      <Table data={data}></Table>
    </div>
  );
}

export default App;
