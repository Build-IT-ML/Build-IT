import Navbar from '../../Navbar';
import Footer from '../../Footer';

export default function UserGuest({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
