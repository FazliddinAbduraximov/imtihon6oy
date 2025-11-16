export const Btn = ({ 
    children, 
    bg = "bg-btn", 
    text = "text-white", 
    padding = "p-[17px]", 
    radius = "rounded-full",
    border='', 
    grow = false 
}) => {
    return (
        <button className={`${padding} ${border} ${bg} ${text} ${radius} ${grow ? "grow" : ""}`}>
            {children}
        </button>
    );
};
