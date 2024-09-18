const DisableInspect = () => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    const handleKeyDown = (e) => {
        if (
            e.keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('contextmenu', (e) => e.preventDefault());
        document.removeEventListener('keydown', handleKeyDown);
    };
};

export default DisableInspect;
