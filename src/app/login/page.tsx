import { handleLogin } from "@/actions/Login";

const LoginPage = () => {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">ログインページ</h2>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Googleでログイン
                </button>
            </form>
        </div>
    );
};

export default LoginPage