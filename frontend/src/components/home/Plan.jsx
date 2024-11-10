import { createPlans } from "./createPlan";
import "./style.css";
const Plan = () => {
    const dataPlan=createPlans();
    console.log(dataPlan)
    return (
        <>  
            <section className="plan-table">
            <h4 className="fw-bold plan-heading">
            View the Plan to reach you GOAL
            </h4>
                <table className="plan-main w-100">
                    <tr className="plan-title">
                        <th>S.No</th>
                        <th>Appliances</th>
                        <th>Power Consumption / Day</th>
                        <th>Hours/Day</th>
                        <th>Price</th>
                    </tr>
                    {
                        dataPlan?.map((item,ind) => (
                            <tr>
                                <td>{ind+1}</td>
                                <td>{item?.name}</td>
                                <td>{(item.unit * item.day)/1000} KWts</td>
                                <td>{item.day} hrs</td>
                                <td>{item.unit*item.day*0.0025}</td>
                            </tr>
                        ))
                    }
                </table>
            </section>
        </>
    )
}
export default Plan;