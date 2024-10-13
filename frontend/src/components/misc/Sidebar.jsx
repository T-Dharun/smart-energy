import "./style.css";
import analytics from "../../assets/anaytics.png";
import home from "../../assets/home.png";
import user from "../../assets/user.png";
import bot from "../../assets/bot.png";
import education from "../../assets/edu.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const sidebarData = [

    {
        id: 0,
        name: "Analytics",
        image: user,
    },
    {
        id: 1,
        name: "Analytics",
        image: home,
    },
    {
        id: 2,
        name: "Analytics",
        image: education,
    },
    {
        id: 3,
        name: "Analytics",
        image: analytics,
    },
    {
        id: 4,
        name: "Analytics",
        image: bot,
    }
]
const Sidebar = () => {
    const [status,setSidebar]=useState(-1);
    const navigate = useNavigate();
    const handleSidebar = (value) => {
        setSidebar(value);
        switch (value) {
            case 0:
                navigate("/profile")
                break;
            case 1:
                navigate("/home")
                break;
            case 2:
                navigate("/education")
                break;
            case 3:
                navigate("/analytics")
                break;
            case 4:
                navigate("/chatbot")
                break;
            default:
                navigate("/")
                break;
        }
    }
    return (
        <>
            <section className="sidebar-home">
            <section className="sidebar h-100">
                {
                    sidebarData.map(item => (
                        <div key={item.id}
                            className={status == item.id ? "sidebar-default w-100 sidebar-icon" : "w-100 sidebar-icon"}
                            onClick={() => handleSidebar(item.id)}
                        >
                            <img src={item.image} width="100%" className="p-2" />
                        </div>
                    ))
                }
            </section>
            </section>
        </>
    )
}
export default Sidebar;