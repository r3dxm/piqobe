import React, { useState } from "react";
import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function LoginScreen(props) {
	const navigation = useNavigation();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	return (
		<View style={styles.container}>
			<TextInput
				onChangeText={(newText) => setUsername(newText)}
				style={styles.input}
				placeholder="Username"
			/>
			<TextInput
				onChangeText={(newText) => setPassword(newText)}
				style={styles.input}
				placeholder="Password"
			/>
			<TouchableOpacity
				onPress={() => navigation.replace("HomeScreen")}
				style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Log in</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.replace("SignupScreen")}
				style={styles.signupButton}>
				<Text style={styles.signupButtonText}>I don't have an account</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
	},
	input: {
		height: 50,
		borderRadius: 10,
		marginTop: 10,
		width: "80%",
		backgroundColor: Colors.grey,
		paddingLeft: 20,
	},
	loginButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: "80%",
		borderRadius: 10,
		marginTop: 10,
	},
	loginButtonText: {
		color: Colors.white,
		fontWeight: "bold",
	},
	signupButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: "80%",
		borderRadius: 10,
		marginTop: 10,
	},
});

export default LoginScreen;
