import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Login() {
    return(
        <>
        <Head title="Login"></Head>
        <Navbar/>
        <div className="content min-h-screen bg-[url('asset/images/bg-waves-pattern.png')] bg-no-repeat bg-cover bg-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute   bottom-0 -z-0"><path fill="#ffffff" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,122.7C560,85,640,43,720,26.7C800,11,880,21,960,37.3C1040,53,1120,75,1200,69.3C1280,64,1360,32,1400,16L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            <div className="flex bg-white border">
                <img src="asset/images/iconic.png" alt="Build-IT 2024" className="w-40" />
                <form action=""></form>
            </div>
        </div>
        <Footer/>
        </>
    )
}