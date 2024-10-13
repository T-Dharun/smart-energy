import "./style.css";
import energy from "../../assets/energy.png";
const Head = () => {
    return (
        <>
            <section className="w-100 header">
                <h4 className="head fw-bold">Hello Dharun, Let's Analyze</h4>
                <section className="w-100 d-flex head-main">
                    <section className="card-head w-100">
                    <div className="card-head-title">
                            Monitor Smart Home
                        </div>
                        <img src={energy} className="card-head-img"/>
                        
                        <div className="card-head-content">
                            Now your Home will converted into a smart home and monitor each appliances .
                        </div>
                    </section>
                    <section className="card-head w-100">
                    <div className="card-head-title">
                            Monitor Smart Home
                        </div>
                        <img src={energy} className="card-head-img"/>
                        
                        <div className="card-head-content">
                            Now your Home will converted into a smart home and monitor each appliances .
                        </div>
                    </section>
                    <section className="card-head w-100">
                    <div className="card-head-title">
                            Monitor Smart Home
                        </div>
                        <img src={energy} className="card-head-img"/>
                        
                        <div className="card-head-content">
                            Now your Home will converted into a smart home and monitor each appliances .
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
export default Head;