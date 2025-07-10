export interface Group {
    id: string;
    title: string;
    description: string;
    icon: string;
    members: string;
    url: string;
}

export const whatsappGroups: Group[] = [
    {
        id: 'geral',
        title: 'Geral: Promoções Variadas',
        description: 'Todas as categorias em um só lugar',
        icon: 'i-heroicons-shopping-bag',
        members: '100+',
        url: 'https://chat.whatsapp.com/AAA111'
    },
    {
        id: 'epicas',
        title: 'Promoções Épicas',
        description: 'Descontos que você não vê em outros lugares',
        icon: 'i-heroicons-fire',
        members: '100+',
        url: 'https://chat.whatsapp.com/BBB222'
    },
    {
        id: 'hardware',
        title: 'Hardware',
        description: 'PCs, notebooks, periféricos e componentes',
        icon: 'i-heroicons-computer-desktop',
        members: '100+',
        url: 'https://chat.whatsapp.com/CCC333'
    },
    {
        id: 'eletrodomesticos',
        title: 'Eletrodomésticos',
        description: 'Televisões, ar-condicionados, fornos e relacionados',
        icon: 'i-heroicons-home',
        members: '100+',
        url: 'https://chat.whatsapp.com/DDD444'
    },
    {
        id: 'consoles',
        title: 'Consoles',
        description: 'PS5, Xbox, Nintendo Switch e jogos',
        icon: 'i-simple-icons-playstation',
        members: '100+',
        url: 'https://chat.whatsapp.com/EEE555'
    },
    {
        id: 'celulares',
        title: 'Celulares & Tablets',
        description: 'Smartphones, iPads e acessórios',
        icon: 'i-heroicons-device-tablet',
        members: '100+',
        url: 'https://chat.whatsapp.com/FFF666'
    }
];

export const telegramGroups: Group[] = [
    {
        id: 'padrao',
        title: 'RexPromo',
        description: 'Todas as categorias em um só lugar',
        icon: 'i-heroicons-shopping-bag',
        members: '100+',
        url: 'https://chat.whatsapp.com/AAA111'
    },
];