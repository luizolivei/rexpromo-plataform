export interface Promotion {
    id: number;
    title: string;
    category?: string;
    currentPrice: number;
    originalPrice?: number | null;
    discountPercentage?: number | null;
    hasCoupon: boolean;
    imageUrl: string;
    store: string;
    time?: string;
    url: string;
}

export const promotions: Promotion[] = [
    {
        id: 1,
        title: 'Notebook Gamer Acer Nitro 5',
        category: 'Notebooks',
        currentPrice: 4299.90,
        originalPrice: 5299.90,
        discountPercentage: 19,
        hasCoupon: true,
        imageUrl: 'http://localhost:3000/images/product_example.webp',
        store: 'Kabum',
        time: '5 horas',
        url: '#'
    },
    {
        id: 2,
        title: 'Monitor Gamer 27" 144Hz',
        category: 'Monitores',
        currentPrice: 1299.00,
        hasCoupon: false,
        imageUrl: 'http://localhost:3000/images/product_example.webp',
        store: 'Pichau',
        time: '1 dia',
        url: '#'
    },
    {
        id: 3,
        title: 'Smartphone Ultra X Pro Max 5G',
        category: 'Smartphones',
        currentPrice: 3499.00,
        originalPrice: 4000.00,
        discountPercentage: 12,
        hasCoupon: true,
        imageUrl: 'http://localhost:3000/images/product_example.webp',
        store: 'Magazine Luiza',
        time: '2 horas',
        url: '#'
    },
    {
        id: 4,
        title: 'Smart TV LED 55" 4K HDR',
        category: 'Eletrônicos',
        currentPrice: 2899.99,
        originalPrice: 3500.00,
        discountPercentage: 17,
        hasCoupon: false,
        imageUrl: 'http://localhost:3000/images/product_example.webp',
        store: 'Casas Bahia',
        time: '8 horas',
        url: '#'
    },
    {
        id: 5,
        title: 'Fone de Ouvido Bluetooth Noise Cancelling',
        category: 'Áudio',
        currentPrice: 499.00,
        originalPrice: 650.00,
        discountPercentage: 23,
        hasCoupon: true,
        imageUrl: 'http://localhost:3000/images/product_example.webp',
        store: 'Amazon',
        time: '3 dias',
        url: '#'
    }
];