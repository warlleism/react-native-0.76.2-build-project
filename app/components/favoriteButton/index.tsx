import React from 'react';
import { TouchableOpacity } from 'react-native';
import IProduct from '@/app/interfaces/product';
import { Ionicons } from '@expo/vector-icons';

export default function FavoriteButton({
    product,
    addFavorite,
    favorites,
    theme
}: {
    product: IProduct;
    addFavorite: (product: IProduct) => void;
    favorites: any;
    theme: any;
}) {
    const isFavorite = favorites?.some((favorite: IProduct) => favorite.name === product.name);

    return (
        <TouchableOpacity onPress={() => addFavorite(product)} >
            <Ionicons
                style={{ marginTop: 10 }}
                name={isFavorite ? "heart-circle-sharp" : "heart-circle-outline"}
                size={50}
                color={theme ? '#fff' : isFavorite ? '#FF1E00' : "#2626261a"}
            />
        </TouchableOpacity>
    );
}
