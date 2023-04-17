import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import PostScreen from "./screens/PostScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MessageViewScreen from "./screens/MessageViewScreen";
import PostViewScreen from "./screens/PostViewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NewCommentScreen from "./screens/NewCommentScreen";
import { Context, ContextProvider } from "./libraries/Context";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ContextProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ animation: "none" }}>
					<Stack.Screen
						options={{ headerShown: false }}
						name="WelcomeScreen"
						component={WelcomeScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="LoginScreen"
						component={LoginScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="SignupScreen"
						component={SignupScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="HomeScreen"
						component={HomeScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="MessageScreen"
						component={MessageScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="PostScreen"
						component={PostScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="ProfileScreen"
						component={ProfileScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="ExploreScreen"
						component={ExploreScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="MessageViewScreen"
						component={MessageViewScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="PostViewScreen"
						component={PostViewScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="SettingsScreen"
						component={SettingsScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="NewCommentScreen"
						component={NewCommentScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
