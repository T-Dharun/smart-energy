import EnergyCluster from "../components/analytics/EnergyCluster";
import PieChart from "../components/analytics/Piechart";
import ControlChart from "../components/analytics/ControlChart";
import "./Analytics.css";
import Sidebar from "../components/misc/Sidebar";

const Analytics = () => {
    return (
        <>
            <Sidebar/>
            <main className="analytics w-100">
                <h5 className="analytics-head m-0 pb-0">Analytics Dashboard</h5>
                <section className="d-flex analytics-home w-100">
                    <section className="analytics-chart chart-bar">
                        <ControlChart />
                    </section>
                    <section className="analytics-chart chart-pie">
                        <PieChart />
                    </section>

                </section>
                <section className="analytics-table">
                    <EnergyCluster />
                </section>
            </main>
        </>
    )
}
export default Analytics;