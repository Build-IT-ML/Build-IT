import { Menubar } from "primereact/menubar"

export default function Navbar(){
    return(
        <nav className="bg-white h-42 w-full flex justify-between items-center px-12 py-4 fixed top-0 shadow">
            <span>
                <img src="asset/images/navbar-logo.png" alt="logo Build-IT 2024" />
            </span>
            <div>
                <Menubar model={items}/>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Modul Pelatihan</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Merchandise</a>
                    </li>
                </ul>   
            </div>  
            <div className="btn-cta">
                
            </div>
        </nav>
    )
}