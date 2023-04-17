import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function Header(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.name}>Piqobe</Text>
			<View style={styles.headerButtons}>
				<TouchableOpacity onPress={() => navigation.replace("SettingsScreen")}>
					<AntDesign
						name="setting"
						size={24}
						color={Colors.black}
						style={styles.settings}
					/>
				</TouchableOpacity>
				<AntDesign
					name="bells"
					size={24}
					color={Colors.black}
					style={styles.notifications}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		width: "85%",
		justifyContent: "center",
	},
	name: {
		fontWeight: "bold",
		fontSize: 32,
		alignSelf: "flex-start",
	},
	headerButtons: {
		flexDirection: "row",
		alignSelf: "flex-end",
		marginTop: -30,
	},
	settings: {
		paddingRight: 20,
	},
});

export default Header;
