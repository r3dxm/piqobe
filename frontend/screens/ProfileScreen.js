import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Navigation from "../components/Navigation";

function ProfileScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.profileInfo}>
				<View style={styles.profilePic}></View>
				<Text style={styles.profileName}>@Steve-John</Text>
				<View style={styles.profileStats}>
					<View style={styles.profileStatsBlock}>
						<Text style={styles.profileStatsTextTop}>45</Text>
						<Text style={styles.profileStatsTextBottome}>Following</Text>
					</View>
					<View style={styles.profileStatsBlock}>
						<Text style={styles.profileStatsTextTop}>125.8m</Text>
						<Text style={styles.profileStatsTextBottome}>Followers</Text>
					</View>
					<View style={styles.profileStatsBlock}>
						<Text style={styles.profileStatsTextTop}>1.5k</Text>
						<Text style={styles.profileStatsTextBottome}>Posts</Text>
					</View>
				</View>
			</View>
			<View style={styles.followButtons}>
				<TouchableOpacity style={styles.followButton}>
					<Text style={styles.followButtonText}>Follow</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sendMessage}>
					<AntDesign name="message1" size={20} color={Colors.black} />
				</TouchableOpacity>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.posts}>
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
					<View style={styles.post} />
				</View>
			</ScrollView>
			<Navigation />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
	},
	profileInfo: {
		alignItems: "center",
		width: "80%",
		marginTop: 20,
	},
	profilePic: {
		height: 100,
		width: 100,
		borderRadius: 20,
		backgroundColor: Colors.orange,
	},
	profileName: {
		fontWeight: "bold",
		fontSize: 24,
		marginTop: 20,
	},
	profileStats: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	profileStatsBlock: {
		alignItems: "center",
		marginTop: 20,
	},
	profileStatsTextTop: {
		fontWeight: "bold",
	},
	followButtons: {
		flexDirection: "row",
		marginTop: 20,
		marginBottom: 20,
	},
	followButton: {
		backgroundColor: Colors.orange,
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		width: 150,
		borderRadius: 10,
		marginRight: 20,
	},
	followButtonText: {
		color: Colors.white,
	},
	sendMessage: {
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		width: 50,
		borderRadius: 10,
		backgroundColor: Colors.grey,
	},
	posts: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		width: "100%",
	},
	post: {
		backgroundColor: Colors.black,
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
});

export default ProfileScreen;
