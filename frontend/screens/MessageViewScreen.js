import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Message from "../components/Message";

function MessageViewScreen(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.replace("MessageScreen")}>
					<AntDesign
						name="back"
						size={24}
						color={Colors.white}
						style={styles.arrow}
					/>
				</TouchableOpacity>
				<Text style={styles.personName}>Person Personson</Text>
			</View>
			<ScrollView style={styles.messageHistory}>
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
			</ScrollView>
			<View style={styles.messageInput}>
				<TextInput style={styles.inputBox} />
				<TouchableOpacity style={styles.sendButton}>
					<Text style={styles.sendButtonText}>Send</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		marginTop: 40,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	messageHistory: {
		flex: 1,
	},
	messageInput: {
		flexDirection: "row",
	},
	inputBox: {
		backgroundColor: Colors.grey,
		height: 50,
		width: 300,
		marginRight: 20,
		paddingLeft: 20,
		borderRadius: 10,
	},
	sendButton: {
		backgroundColor: Colors.orange,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginBottom: 20,
	},
	sendButtonText: {
		color: Colors.white,
	},
	header: {
		flexDirection: "row",
		width: "100%",
		height: 60,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: Colors.orange,
	},
	arrow: {
		marginLeft: 20,
	},
	personName: {
		marginLeft: 20,
		fontSize: 20,
		color: Colors.white,
	},
	messageHistory: {
		width: "100%",
	},
});

export default MessageViewScreen;
