import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";

function Message(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.person}>Person Personson</Text>
			<Text style={styles.message}>This is a sample text</Text>
			<Text style={styles.time}>19:00</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		height: 50,
		width: 300,
		borderRadius: 10,
		paddingLeft: 10,
		backgroundColor: Colors.grey,
		alignSelf: "flex-start",
		justifyContent: "center",
	},
	person: {
		fontSize: 12,
	},
	message: {
		fontSize: 15,
	},
	time: {
		fontSize: 12,
	},
});

export default Message;
