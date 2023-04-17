import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.mainText}>Best Social App To Make New Friends</Text>
				<Text style={styles.subText}>
					Find People With The Same Interests As You
				</Text>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity
					onPress={() => navigation.replace("LoginScreen")}
					style={styles.login}>
					<Text style={styles.loginText}>Log in</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.replace("SignupScreen")}
					style={styles.signup}>
					<Text style={styles.signupText}>Sign up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: Colors.light_orange,
	},
	top: {},
	mainText: {
		fontSize: 50,
		fontWeight: "bold",
	},
	subText: {
		fontSize: 20,
	},
	bottom: {
		alignItems: "center",
		width: "100%",
	},
	login: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
		borderColor: Colors.grey,
		height: 50,
		width: "80%",
		borderWidth: 2,
		borderRadius: 10,
		marginTop: 10,
	},
	loginText: {
		color: Colors.black,
		fontWeight: "bold",
	},
	signup: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: "80%",
		borderRadius: 10,
		marginTop: 10,
	},
	signupText: {
		color: Colors.white,
		fontWeight: "bold",
	},
});

export default WelcomeScreen;
