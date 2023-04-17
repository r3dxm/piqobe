import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Navigation from "../components/Navigation";

function ExploreScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.searchBar}>
				<TextInput style={styles.searchText}></TextInput>
				<TouchableOpacity style={styles.searchButton}>
					<AntDesign name="search1" size={26} color={Colors.white} />
				</TouchableOpacity>
			</View>
			<View style={styles.searchResults}></View>
			<Navigation />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		backgroundColor: Colors.white,
	},
	searchBar: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	searchText: {
		height: 50,
		width: "70%",
		backgroundColor: Colors.grey,
		marginRight: 20,
		paddingLeft: 20,
		borderRadius: 10,
	},
	searchButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: 50,
		borderRadius: 10,
	},
});

export default ExploreScreen;
