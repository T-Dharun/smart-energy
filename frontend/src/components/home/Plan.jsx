import "./style.css";
const data = [
    {
        id: 1,
        name: 'bulb1',
        hours: 0,
        price: 0,
        power: 0
    },
    {
        id: 2,
        name: 'bulb2',
        hours: 0,
        price: 0,
        power: 0
    }
]

const Plan = () => {
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
                        <th>Power Consumption</th>
                        <th>Hours/Day</th>
                        <th>Price</th>
                    </tr>
                    {
                        data.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.power}</td>
                                <td>{item.hours}/day</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </table>
            </section>
        </>
    )
}
export default Plan;