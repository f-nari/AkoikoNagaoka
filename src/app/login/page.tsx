import { handleLogin } from "@/actions/Login";

const LoginPage = () => {

  return (
    <div>
      <form action={handleLogin}>
        <button type="submit">Googleでログイン</button>
      </form>
    </div>
  );
};

export default LoginPage