import './table.css'

const Table=(prop)=>{
    const active=prop.data.active
    const deth=prop.data.deth
    const confirm=prop.data.confirm
    const recover=prop.data.recover
    const city=prop.data.cityname
    const l=[]
    for(var i=0;i<active.length;i++){
        l.push({
            active:active[i],
            deth:deth[i],
            confirm:confirm[i],
            city:city[i],
            recover:recover[i]
        })
    }
    // console.log(l)
    return( 
        <div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">CITY NAME</th>
      <th scope="col">ACTIVE CASE</th>
      <th scope="col">CONFIRM CASE</th>
      <th scope="col">RECOVER CASE</th>
      <th scope="col">TOTAL DEATH</th>
    </tr>
  </thead>
  <tbody>
        {l.map((x)=>{
            return(
                <tr className="tr" key={Math.random()}>
                <th scope="row">{x.city}</th>
                <td >{x.active}</td>
                <td>{x.confirm}</td>
                <td className="green">{x.recover}</td>
                <td className='red'>{x.deth}</td>
              </tr>
            )
        })}
  </tbody>
</table>
</div>
    )
}

export default Table