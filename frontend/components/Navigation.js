import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function Navigation(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.replace("HomeScreen")}>
				<AntDesign name="home" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.replace("MessageScreen")}>
				<AntDesign name="message1" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.replace("PostScreen")}>
				<AntDesign name="plussquareo" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.replace("ExploreScreen")}>
				<AntDesign name="search1" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.replace("ProfileScreen")}>
				<AntDesign name="profile" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 70,
		width: "100%",
		backgroundColor: Colors.white,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-around",
		shadowColor: Colors.black,
		shadowOffset: -5,
		shadowRadius: 20,
		elevation: 10,
		marginTop: "auto",
	},
});

export default Navigation;
