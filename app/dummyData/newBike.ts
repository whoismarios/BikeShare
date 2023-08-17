import { Bike } from '../types/types';

export const newBikes: Bike[] = [
    {
        id: 0,
        name: "Cube Stereo Hybrid 120 Pro 625 grey",
        size: "L",
        description: "Full Suspension E-Bike with 29 inch wheels and 140mm travel",
        pricePerDay: 49,
        pricePerWeek: 299,
        isRented: false,
        imagePath: require('../../assets/images/cube.png')
    },
    {
        id: 1,
        name: "Cube Stereo Hybrid 120 Pro 625 white",
        size: "M",
        description: "Full Suspension E-Bike with 29 inch wheels and 140mm travel",
        pricePerDay: 39,
        pricePerWeek: 199,
        isRented: false,
        imagePath: require('../../assets/images/cube_white.png')
    }
];
   