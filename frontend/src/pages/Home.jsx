import Head from "../components/home/Head";
import Plan from "../components/home/Plan";
import Sidebar from "../components/misc/Sidebar";

const Home=()=>{
    return(
        <>
            <Sidebar/>
            <section className="w-100">
            <Head/>
            <Plan/>
            </section>
        </>
    )
}
export default Home;