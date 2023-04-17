import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	Text,
} from "react-native";
import Navigation from "../components/Navigation";
import Colors from "../libraries/Colors";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

function PostScreen(props) {
	const navigation = useNavigation();
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [image, setImage] = useState();
	const addImage = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!_image.cancelled) {
			setImage(_image.uri);
		}
	};
	function done() {
		console.log([title, description, image]);
		navigation.replace("HomeScreen");
	}
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<TextInput
					onChangeText={(newText) => setTitle(newText)}
					style={styles.inputBox}
					placeholder="Post title"
				/>
				<TextInput
					onChangeText={(newText) => setDescription(newText)}
					style={styles.inputBox}
					placeholder="Post descroption"
				/>
				<View>
					{image && (
						<Image source={{ uri: image }} style={styles.uploadedImage} />
					)}
					<TouchableOpacity onPress={addImage} style={styles.selectImage}>
						<Text style={styles.selectImageText}>Select Image</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={done} style={styles.selectImage}>
						<Text style={styles.selectImageText}>Done</Text>
					</TouchableOpacity>
				</View>
			</View>
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
	inputBox: {
		marginTop: 20,
		paddingLeft: 20,
		backgroundColor: Colors.grey,
		height: 50,
		width: 300,
		borderRadius: 10,
	},
	selectImage: {
		backgroundColor: Colors.orange,
		marginTop: 20,
		height: 50,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	selectImageText: {
		fontWeight: "bold",
		color: Colors.white,
	},
	uploadedImage: {
		marginTop: 30,
		alignSelf: "center",
		height: 300,
		width: 300,
	},
});

export default PostScreen;
