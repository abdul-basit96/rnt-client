import React, {useEffect} from 'react'
import ProcedureCard from '../../Components/ProcedureCard';
import Header from '../../Containers/Header'
import data from './data.json'
import Modal from "../../Components/Modal";


export default  ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
      const [inverterData,setInverterData] = React.useState("SDT-G2-Series")
      const [open,setOpen] = React.useState(false)
      const openModal = (data)=>{
          setOpen(true)
          setInverterData(data)
      }
      const closeModal = ()=>{
          setOpen(false)
      }
      

    return(
        <>
            <Header />
            <div className="container-fluid  mb-5  mt-5">
        <div className="row  mt-5">
          <div className="col-md-10 mx-auto text-center">
            <h1>Commercial Rooftop Inverters</h1>
            <div className="row justify-content-center">
              <ProcedureCard
              title="SDT G2 Series"
              detail="17-25KW | Three Phase | 2 MPPT"
              src="SDT-G2-Roof-Top"
              style="SDT-G2-Series"
              handleModal = {openModal}
              />
                <ProcedureCard
              title="SMT Series"
              detail="25-36KW | Three Phase | 3 MPPT"
              src="SMT-Series-Roof-Top"
              style="SMT-Series"
              handleModal = {openModal}
              />
                <ProcedureCard
              title="MT Series"
              detail="50-80KW | Three Phase | 4 MPPT"
              src="MT-Series-Roof-Top"
              style="MT-Series"
              handleModal = {openModal}
              />
                <ProcedureCard
              title="HT Series"
              detail="100-136KW | Three Phase | up to 12 MPPT"
              src="HT-Series"
              style="HT-Series"
              handleModal = {openModal}
              />
            </div>
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-md-10 mx-auto text-center">
            <h1>Residential Inverter</h1>
            <div className="row justify-content-center">
              <ProcedureCard
              title="SDT G2 Series"
              detail="4-15KW | Three Phase | 2 MPPT"
              src="SDT-G2-Residential"
              style="SDT-G2-Series"
              handleModal = {openModal}
              />
            </div>
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-md-10 mx-auto text-center">
            <h1>Ground Utility Inverter</h1>
            <div className="row justify-content-center">
              <ProcedureCard
              title="HT Series"
              detail="225/250KW | Three Phase | 12 MPPT"
              src="HT-Series"
              style="HT-Series"
              handleModal = {openModal}
              />
            </div>
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-md-10 mx-auto text-center">
            <h1>Energy Storage Inverters</h1>
            <div className="row justify-content-center">
              <ProcedureCard
              title="ET Series"
              detail="Three Phase Storage Inverter | High Voltage Battery"
              src="ET-Series"
              style="ET-Series"
              handleModal = {openModal}
              />
               <ProcedureCard
              title="ESA Series"
              detail="5KW+10.8KWh | All-in-one Single Phase Storage Inverter"
              src="ESA-Series"
              style="ESA-Series"
              handleModal = {openModal}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-10 mx-auto text-center">
            <h1>Monitoring Systems</h1>
            <div className="row justify-content-center">
              <ProcedureCard
              title="SEMS"
            //   detail="ALL-IN-ONE MONITORING & COMPREHENSIVE VISUALIZATION"
              src="SEMS"
              height='50%'
              style="SEMS"
              handleModal = {openModal}
              />
               <ProcedureCard
              title="Smart Meter"
            //   detail="5KW+10.8KWh | All-in-one Single Phase Storage Inverter"
              src="SMART-METER"
              height='50%'
              style="Smart-Meter"
              handleModal = {openModal}
              />
               <ProcedureCard
              title="WIFI Module"
            //   detail="5KW+10.8KWh | All-in-one Single Phase Storage Inverter"
              src="WIFI-MODULE"
              height='50%'
              style="Wifi-Module"
              handleModal = {openModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} data={data[inverterData]} closeModal={closeModal}/>
        </>
    )
}