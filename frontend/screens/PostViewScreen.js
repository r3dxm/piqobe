import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Comment from "../components/Comment";

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
					<TouchableOpacity
						onPress={() => navigation.replace("NewCommentScreen")}>
						<AntDesign name="message1" size={24} color={Colors.black} />
					</TouchableOpacity>
					<TouchableOpacity>
						<AntDesign name="arrowright" size={24} color={Colors.black} />
					</TouchableOpacity>
				</View>
				<View style={styles.comments}>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</View>
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
	comments: {
		width: "100%",
		paddingTop: 5,
	},
});

export default PostViewScreen;
