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