import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MessagePerson from "../components/MessagePerson";
import Navigation from "../components/Navigation";
import Colors from "../libraries/Colors";

function MessageScreen(props) {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.content}>
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
				<MessagePerson />
			</ScrollView>
			<Navigation />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flex: 1,
		backgroundColor: Colors.white,
	},
	content: {},
});

export default MessageScreen;
