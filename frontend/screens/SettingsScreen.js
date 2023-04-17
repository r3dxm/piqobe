import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../libraries/Colors";

function SettingsScreen(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.replace("HomeScreen")}>
					<AntDesign name="back" size={24} color={Colors.white} />
				</TouchableOpacity>
			</View>
			<ScrollView>
				<View style={styles.settingsList}>
					<TouchableOpacity
						onPress={() => navigation.replace("LoginScreen")}
						style={styles.signoutTab}>
						<Text>Sign out</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: Colors.white,
	},
	header: {
		height: 50,
		backgroundColor: Colors.orange,
		justifyContent: "center",
		paddingLeft: 20,
	},
	settingsList: {
		marginTop: 20,
		alignItems: "flex-start",
		width: "100%",
	},
	signoutTab: {
		justifyContent: "center",
		paddingLeft: 20,
		height: 50,
		width: "100%",
		backgroundColor: Colors.grey,
	},
});

export default SettingsScreen;
