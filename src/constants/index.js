import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram, FaTasks } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io"; 
import profile from "../assets/images/profile.jpg"
 
 const K = {
    USER:{
        name:"Albert Nartey",
        profilePic: profile,
        email:"albertnartey824@gmail.com"
    },
  NAVLINKS: [
    { icon: MdDashboard, link: "Dashboard", path: "/dashboard" },
    { icon: FaProjectDiagram, link: "Projects", path: "/dashboard/projects" },
    { icon: FaTasks, link: "Task list", path: "/dashboard/tasks" },
    { icon: GrUserWorker, link: "Services", path: "/dashboard/services" },
    {
      icon: IoIosNotifications,
      link: "Notifications",
      path: "/dashboard/notifications",
    },
  ],
};


export default K