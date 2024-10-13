import './Learning.css';
import energy from "../../assets/energy.mp4"
import image from "../../assets/thumbnail.jpg"
import Sidebar from '../misc/Sidebar';

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
function Learning() {
    return (
        <>
            <Sidebar/>
            <section className='learning-home w-100'>
                <div className='learn-title'>
                    Learning
                </div>
                <div className='container-fluid row'>
                    {
                        data.map(item => (
                            <div className='v1 col-6'>
                                <video width="100%" height="auto" controls poster={image}>
                                    <source src={energy} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>


                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Learning;
