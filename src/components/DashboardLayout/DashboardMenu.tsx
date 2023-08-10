import { DashboardMenuButton } from "./DashboardMenuButton";

interface IMenuSection {
    label: string;
    url: string;
    icon: JSX.Element | string;
}

interface IDashboardMenuSection {
    label: string;
    sectionItems: IMenuSection[]
};

// TODO: Refector this 
const DASHBOARD_MENU_SECTIONS: IDashboardMenuSection[] = [
    {
        label: 'Clientes',
        sectionItems: [
            {
                label: 'Section Menu 1.1',
                url: '#',
                icon: '🚧'
            },
            {
                label: 'Section Menu 1.2',
                url: '#',
                icon: '🚧'
            },
            {
                label: 'Section Menu 1.3',
                url: '#',
                icon: '🚧'
            },
        ]
    },
]

export const DashboardMenu = (): JSX.Element => {
    return (
        <div className="border-r-[2px] border-gray-200 max-w-[320px] min-h-screen position fixed min-w-[320px] px-4">
            <h1 className="text-bold text-3xl my-4">Parking Manager</h1>
            {
                DASHBOARD_MENU_SECTIONS.map((menu) => (
                    <div className="rounded">
                        <div className="mt-4 mb-3 flex flex-col gap-3">
                            <p className="font-thin uppercase px-4">{menu.label}</p>
                            {
                                menu.sectionItems.map(item => (
                                    <DashboardMenuButton label={item.label} icon={item.icon}/>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
