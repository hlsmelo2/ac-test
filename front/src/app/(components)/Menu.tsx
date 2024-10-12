import Link from "next/link";

const menuItems: any = {
  login: { href: '/login', label: 'Login' },
  register: { href: '/register', label: 'Cadastrar' },
  transfers: { href: '/transfers', label: 'Transferências' },
};

export default function Menu() {
  return (
    <nav>
      {
        Object.keys(menuItems).map(key => {
          const item: { href: string, label: string } = menuItems[key];

          return (
            <Link href={item.href}>{item.label}</Link>
          );
        })
      }
    </nav>
  )
}


