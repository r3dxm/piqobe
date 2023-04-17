import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function MessagePerson(props) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.replace("MessageViewScreen")}
			style={styles.container}>
			<Text style={styles.person}>Person Personson</Text>
			<Text style={styles.lastMessage}>Last text reieved</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		paddingLeft: 20,
		borderRadius: 10,
		backgroundColor: Colors.grey,
		height: 80,
		width: "90%",
		alignSelf: "center",
		justifyContent: "center",
	},
	person: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.orange,
	},
});

export default MessagePerson;
