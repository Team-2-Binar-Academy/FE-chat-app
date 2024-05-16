import { useGoogleLogin } from "@react-oauth/google";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/action/auth";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComponent = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
    console.log(codeResponse);
      dispatch(loginWithGoogle(navigate, codeResponse?.access_token));
    },
  });

  return (
    <button
      className="block w-full py-3 px-4 bg-gradient-to-r from-[#F1F1F1] to-[#F1F1F1] hover:from-[#eedfee] hover:to-[#eedfee] text-dark rounded-md focus:outline-none"
      onClick={() => login()}
    >
      {text}
    </button>
  );
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLoginComponent;
