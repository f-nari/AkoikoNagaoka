import Footer from "@/components/FooterHeader/Footer";
import Header from "@/components/FooterHeader/Header/Header";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const mainLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    //ラップする
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login');  // ログインページのパスにリダイレクト
    }

    return (

        <div>
            <Header />
            <div className=' flex justify-center  '>
                <div className='w-4/5  flex justify-center '>
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default mainLayout

