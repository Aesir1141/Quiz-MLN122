import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface GoogleUser {
  name: string;
  picture: string;
  email: string;
}

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      const decoded: GoogleUser = jwtDecode(credentialResponse.credential);
      localStorage.setItem("user", JSON.stringify(decoded));

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-pink-100">
  <div className="text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition rounded-3xl shadow-2xl p-16 flex flex-col items-center gap-8 w-96 md:w-[28rem] lg:w-[32rem]">
    <h2 className="text-3xl font-bold text-white text-center">Đăng Nhập</h2>
    <p className="text-white/90 text-center text-lg md:text-xl">
      Đăng nhập để tiếp tục trải nghiệm Quiz Challenge
    </p>

    <div className="w-full">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => alert("Đăng nhập thất bại, vui lòng thử lại.")}
      />
    </div>
  </div>
</div>
  );
}

export default LoginPage;
