import React, { useState } from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Text,
} from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const test_post = {
	UserName: "no id for now",
	post_image: require("../assets/icon.png"),
	title: "Test title",
	likes: 123456,
	liked: false,
	created_at: "30 sec ago",
};

function PostViewScreen(props) {
	const navigation = useNavigation();
	const [liked, setAsLiked] = useState();
	const [comment, setComment] = useState();

	function like() {
		test_post.liked = !test_post.liked;
		test_post.liked ? setAsLiked(Colors.red) : setAsLiked(Colors.black);
	}

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.replace("HomeScreen")}>
						<AntDesign name="back" size={24} color={Colors.black} />
					</TouchableOpacity>
				</View>
				<View style={styles.image}></View>
				<View style={styles.reacts}>
					<TouchableOpacity onPress={like}>
						<AntDesign name="heart" size={24} color={liked} />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="message1" size={24} color={Colors.black} />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="arrowright" size={24} color={Colors.black} />
					</TouchableOpacity>
				</View>
				<TextInput
					onChangeText={(newText) => setComment(newText)}
					style={styles.comment}
					placeholder="Comment"
				/>
				<TouchableOpacity
					onPress={() => navigation.replace("PostViewScreen")}
					style={styles.button}>
					<Text style={styles.buttonText}>Post</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.replace("PostViewScreen")}
					style={styles.button}>
					<Text style={styles.buttonText}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		marginTop: 40,
		width: "100%",
		backgroundColor: Colors.white,
	},
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		height: 50,
		width: "100%",
		paddingLeft: 20,
		backgroundColor: Colors.white,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	image: {
		height: 350,
		width: "100%",
		backgroundColor: Colors.orange,
	},
	reacts: {
		flexDirection: "row",
		backgroundColor: Colors.grey,
		height: 50,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	comment: {
		width: "80%",
		height: 50,
		marginTop: 10,
		alignSelf: "center",
		backgroundColor: Colors.grey,
		paddingLeft: 20,
		borderRadius: 10,
	},
	button: {
		height: 50,
		width: "80%",
		backgroundColor: Colors.orange,
		borderRadius: 10,
		marginTop: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontWeight: "bold",
		color: Colors.white,
	},
});

export default PostViewScreen;
