import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './style.css';

const BasicDetails = () => {
    const user = {
        name: 'Dharun',
        email: 'dharunee.afda',
        units: 2323,
        price: 2323,
        phone: 32232323,
        city: 'Cuddalore',
    };

    return (
        <section className="basic-home">
            <div className="basic-details row">
                <div className="col-md-6 mb-3">
                    <div className="card p-3">
                        <h5>Name</h5>
                        <p>{user.name}</p>
                    </div>
                    <div className="card p-3 mt-3">
                        <h5>Email Id</h5>
                        <p>{user.email}</p>
                    </div>
                    <div className="card p-3 mt-3">
                        <h5>Target Units</h5>
                        <p>{user.units}</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card p-3">
                        <h5>Target Price</h5>
                        <p>{user.price}</p>
                    </div>
                    <div className="card p-3 mt-3">
                        <h5>Phone</h5>
                        <p>{user.phone}</p>
                    </div>
                    <div className="card p-3 mt-3">
                        <h5>City</h5>
                        <p>{user.city}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BasicDetails;
