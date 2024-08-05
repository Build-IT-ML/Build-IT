import './bootstrap';
import '../css/app.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import '@fontsource/poppins';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Pages/Loading'; 

const AppWrapper = ({ App, props }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const end = () => setLoading(false);

        router.on('start', start);
        router.on('finish', end);
        router.on('cancel', end);

        return () => {
            router.off('start', start);
            router.off('finish', end);
            router.off('cancel', end);
        };
    }, []);

    return (
        <>
            {loading && <Loading />}
            <PrimeReactProvider value={{ unstyled: false, pt: { Tailwind } }}>
                <App {...props} />
            </PrimeReactProvider>
        </>
    );
};

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <AppWrapper App={App} props={props} />
        );
    },
    progress: {
        color: '#55aca6',
    },
});