import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import 'primeicons/primeicons.css';
import Tailwind from 'primereact/passthrough/tailwind';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '@fontsource/poppins';



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <>
                <PrimeReactProvider value={{ unstyled: false, pt: { Tailwind } }}>
                    <App {...props} />
                </PrimeReactProvider>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
