import React from 'react';
import PropTypes from 'prop-types';

const ButtonViewCertificate = ({ userName, status }) => {
    const handleViewCertificate = () => {
        const folderId = '1R9Q3GWaLoUIKSWwN8S6K_BwuNSfd39tt';
        const searchUrl = `https://drive.google.com/drive/u/0/folders/${folderId}?q=${encodeURIComponent(
            `${userName}.png`
        )}`;
        window.open(searchUrl, '_blank');
    };

    return (
        <button
            onClick={handleViewCertificate}
            disabled={!status}
            className={`py-3 px-6 font-bold text-white rounded-lg transition-all ease-in-out duration-300 text-center ${status ? 'bg-primary hover:bg-secondary' : 'bg-primary/80 cursor-not-allowed'
                }`}
        >
            {status ? 'Lihat Sertifikat' : 'Belum Tersedia'}
        </button>
    );
};

ButtonViewCertificate.propTypes = {
    userName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default ButtonViewCertificate;
