import { useSelector } from "react-redux";
import { sendData2Esp32 } from "./config";
import "./style.css";

const EnergyCluster = () => {
    const energyData=useSelector(e=>e.energyMeter.data);
    console.log(energyData);
    
    return (
        <>
            <section className="analy-table h-100">
                <table className="w-100 h-100">
                    <thead className="">
                        <tr>
                            <th className="d-none d-md-block d-lg-block">S.No</th>
                            <th >Appliances</th>
                            <th className="d-none d-md-block d-lg-block">Current</th>
                            <th >Voltage</th>
                            <th>Power</th>
                            <th className="d-none d-md-block d-lg-block">Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light p-5">
                        {
                            energyData.map(item => (
                                <tr key={item.id} className="analy-table-tr">
                                    <td className="d-none d-md-block d-lg-block">{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="d-none d-md-block d-lg-block h-100">{item.current} A</td>
                                    <td>{item.voltage} V</td>
                                    <td>{item.power/10} W</td>
                                    <td className="d-none d-md-block d-lg-block h-100">${item.price}</td>
                                    <td className="h-100">
                                        <button className={!item.status?"TurnOFF bg-danger":"TurnON"} onClick={()=>sendData2Esp32(item)}>{!item.status?"Turn OFF":"Turn ON"}</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
export default EnergyCluster;