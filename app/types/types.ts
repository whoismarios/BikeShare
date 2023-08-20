import { ImageSourcePropType } from "react-native";

export type Bike = {
    id: number;
    name: string;
    size: string;
    description: string;
    pricePerDay: number;
    pricePerWeek: number;
    isRented: boolean;
    imagePath: ImageSourcePropType;
};

export type BikeCompanyType = {
    id: number;
    name: string;
    imagePath: ImageSourcePropType;
};