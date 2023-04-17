import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
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

function Post(props) {
	const navigation = useNavigation();
	const [liked, setAsLiked] = useState(Colors.red);

	function like() {
		test_post.liked = !test_post.liked;
		test_post.liked ? setAsLiked(Colors.red) : setAsLiked(Colors.grey);
	}

	return (
		<View style={styles.outerContainer}>
			<TouchableOpacity
				onPress={() => navigation.replace("PostViewScreen")}
				style={styles.innerContainer}>
				<View style={styles.profile}>
					<View style={styles.profilePic}></View>
					<View style={styles.profileInfo}>
						<Text style={styles.profileName}>{test_post.UserName}</Text>
						<Text styke={styles.postTime}>{test_post.created_at}</Text>
					</View>
				</View>
				<Text style={styles.postTitle}>{test_post.title}</Text>
				<View style={styles.image}></View>
				<View style={styles.reacts}>
					<TouchableOpacity onPress={like}>
						<AntDesign
							name="heart"
							size={32}
							color={liked}
							style={styles.reactLike}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.replace("NewCommentScreen")}>
						<AntDesign
							name="message1"
							size={32}
							color={Colors.grey}
							style={styles.reactComment}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign
							name="arrowright"
							size={32}
							color={Colors.grey}
							style={styles.reactSend}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.info}>
					<Text style={styles.infoText}>{test_post.likes} Likes</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: Colors.grey,
		height: 500,
		width: "100%",
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	innerContainer: {
		backgroundColor: Colors.white,
		height: 450,
		width: "100%",
		borderRadius: 30,
		alignItems: "center",
	},
	profile: {
		flexDirection: "row",
		width: "90%",
		paddingTop: 25,
		paddingBottom: 10,
	},
	profilePic: {
		backgroundColor: Colors.grey,
		height: 50,
		width: 50,
		borderRadius: 15,
	},
	profileInfo: {
		paddingLeft: 20,
	},
	profileName: {
		fontWeight: "bold",
		paddingTop: 5,
	},
	postTime: {
		paddingTop: 10,
	},
	postTitle: {
		alignSelf: "flex-start",
		paddingLeft: 25,
		paddingBottom: 10,
	},
	image: {
		height: 250,
		width: "90%",
		borderRadius: 30,
		backgroundColor: Colors.orange,
	},
	reacts: {
		flexDirection: "row",
		paddingLeft: 25,
		paddingTop: 25,
		width: "100%",
		alignItems: "flex-start",
	},
	reactLike: {},
	reactComment: {
		paddingLeft: 20,
	},
	reactSend: {
		paddingLeft: 20,
	},
	info: {
		width: "100%",
		alignItems: "flex-start",
		paddingTop: 10,
		paddingLeft: 25,
	},
	infoText: {
		fontWeight: "bold",
		fontSize: 14,
	},
});

export default Post;
