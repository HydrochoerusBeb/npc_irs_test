import { useNavigate} from "react-router-dom";
import BackButtonSVG from '../../assets/back-button-svgrepo-com.svg'
import s from './style.module.css'


export const BackButton = () =>{
    const navigateBack = useNavigate()
    const clickNavigate = () =>{
        navigateBack(-1)
    }
    return(
        <div
         className={s.button_container}
         >
           <div
            className={s.back_button}
            onClick={clickNavigate}>
                <img src={BackButtonSVG} alt="" />
           </div>
        </div>
    )
}