import { FC } from "react";

interface CloseIconProps {
  className?: string;
}

export const CloseIcon: FC<CloseIconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6" stroke="#F5F5F5" strokeLinecap="round"/>
            <path d="M18 18L6 6" stroke="#F5F5F5" strokeLinecap="round"/>
        </svg>
    )
}
