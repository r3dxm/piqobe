import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";

function Comment(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.commentUser}>User Userson</Text>
			<Text style={styles.commentText}>This is a comment</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 350,
		paddingLeft: 20,
		backgroundColor: Colors.white,
		justifyContent: "center",
	},
	commentUser: {
		fontWeight: "bold",
		fontSize: 16,
	},
	commentText: {
		color: Colors.black,
		fontSize: 14,
	},
});

export default Comment;
