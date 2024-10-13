import Link from "next/link";

type MenuItem = { href: string, label: string };
type MenuItems = Record<string, MenuItem>;

const menuItems: MenuItems = {
    home: { href: '/', label: 'Home' },
    login: { href: '/login', label: 'Login' },
    register: { href: '/register', label: 'Cadastrar' },
    transfers: { href: '/transfers', label: 'Trnaferências' },
};

export default function MenuComponent() {
    return (
        <nav>
            {
                Object.keys(menuItems).map((key, index) => {
                    const item: MenuItem = menuItems[key];

                    return (
                        <Link key={index} href={item.href}>{item.label}</Link>
                    );
                })
            }
        </nav>
    );
}
