import "./style.css";
import banner from "../../assets/banner.jpg"
import bot from "../../assets/bot.png"
import profile from "../../assets/profile-photo.png"
const Banner = () => {
    return (
        <>
            <section className="w-100">
                <div className="profile-banner">
                    <img src={banner} width="100%" height="100%" />
                </div>
                <div className="profile-photo">
                    <img src={profile}/>
                </div>
                <div className="profile-details d-flex">
                    <section>
                        <h2 className="fw-bolder p-0 m-0">T DHARUN</h2>
                        <div className="text-secondary p-0 m-0">dharuneee007@gmail.com</div>
                    </section>
                    <section>
                        <button>Edit</button>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Banner;