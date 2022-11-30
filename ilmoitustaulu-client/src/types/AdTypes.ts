export type AdType = {
    id: number;
    type: {
        id: number;
        name: string;
    },
    price: number;
    images: [{
        id: number;
        image: string;
    }],
    category: {
        id: number;
        name: string
    },
    description: string;
    contact: {
        id: number;
        email: string;
        phoneNumber: string;
    },
    address: {
        id: number;
        province: string;
        city: string;
        postalCode: number;
        streetAddress: string;
    }
}