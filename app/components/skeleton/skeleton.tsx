import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";

const { width } = Dimensions.get("window");

export default function SkeletonListProducts() {
    return (
        <View>
            <SkeletonLoader>
                <SkeletonLoader style={styles.container} highlightColor="#e3e3e3" boneColor="#EFEFEF" duration={500}>
                    <SkeletonLoader.Item
                        style={{
                            width: width / 2.3,
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    />
                    <SkeletonLoader.Item
                        style={{
                            width: width / 2.3,
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    />
                    <SkeletonLoader.Item
                        style={{
                            width: width / 2.3,
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    />
                    <SkeletonLoader.Item
                        style={{
                            width: width / 2.3,
                            height: 200,
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    />
                </SkeletonLoader>
            </SkeletonLoader>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
