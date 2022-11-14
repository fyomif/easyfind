import logo from '../../assets/logo.svg';
import './Landing.css';
import Floating_button from "../../Components/general/FloatingButton/floating_button";
import Decoration_corner from "../../Components/general/Decoration/decoration_corner";
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home');
    };

    return (
        <div className="App">
            <Decoration_corner ></Decoration_corner>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="Title">
                    Welcome to <span>Easy Find</span>, the best solution to start your business
                </h1>
                <p className="Explain">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida ullamcorper aliquet odio tincidunt nunc nunc. Ac porttitor senectus sit varius nunc sit sed diam. Lectus cras porttitor dignissim feugiat gravida in quisq
                </p>
                <button className="button" onClick={navigateHome}>
                    Try now
                </button>
            </header>
        </div>
    );
}

export default Landing;
