import { FC, ReactNode } from "react"

interface ButtonSettings {
    label: string;
    icon: string | ReactNode;
}

export const DashboardMenuButton: FC<ButtonSettings> = (item: ButtonSettings, ...props) => {
    return (
        <div
            className="hover:bg-gray-200 p-3 mx-4 rounded"
            key={item.label}
            {...props}
        >
            <span className="mr-2">{item.icon}</span>
            {item.label}
        </div>
    )
}
