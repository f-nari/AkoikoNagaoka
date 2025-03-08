import Footer from "@/components/FooterHeader/Footer";
import Header from "@/components/FooterHeader/Header/Header";


const mainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
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