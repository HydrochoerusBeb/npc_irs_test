import { Link } from "react-router-dom";
import s from "./style.module.css";
import profilePic from '../../assets/117731844.jpeg'

export const NavBar = () => {

  return (
    <div className={s.nav_container}>
        <div className={s.free_space}>
        <a className={s.profile_link} target="_blank" href="https://github.com/HydrochoerusBeb">
            <img className={s.profile_pic} src={profilePic} alt="Link to my GitHub!" />
        </a>
      <div className={s.buttons}>
        <Link to="/npc_irs_test">Main page</Link>
        <Link to="/npc_irs_test/helpdesk">Help desk</Link>
        <Link to="/npc_irs_test/citizenslist">List of citizens</Link>
      </div>
      </div>
    </div>
  );
};