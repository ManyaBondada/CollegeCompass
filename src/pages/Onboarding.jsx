import { useNavigate } from "react-router-dom";

const Onboarding = ({setHasCompletedOnboarding}) => {

    const navigate = useNavigate(); 

    const handleFinishOnboarding = () => {
        console.log("Onboarding finished!");
        // setHasCompletedOnboarding(true);  // TODO: handle a state change?
        navigate('/home', {replace: true});
    };

    return (
        <div>
            <h1>Let's get started</h1>
            <button onClick={handleFinishOnboarding}>
                Submit
            </button>
        </div>
    );
}
 
export default Onboarding;