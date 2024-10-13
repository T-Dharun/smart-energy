import Sidebar from "../components/misc/Sidebar";
import Banner from "../components/profile/banner";
import BasicDetails from "../components/profile/BasicDetails";

const Profile = () => {
    return (
        <>
            <Sidebar/>
            <section className="d-flex flex-column w-100">
                <Banner />
                <BasicDetails />
            </section>
        </>
    )
}
export default Profile;