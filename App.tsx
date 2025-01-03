import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexPage } from './pages/IndexPage';
import { LandingScreen } from './pages/LandingScreen';
import { Login } from './pages/Login';
import { AdminLogin } from './pages/AdminLogin';
import { CoachLogin } from './pages/CoachLogin';
import { CoordinatorLogin } from './pages/CoordinatorLogin';
import { AdminLandingPage } from './pages/AdminLandingPage';
import { CoachLandingPage } from './pages/CoachLandingPage';
import { CoordinatorLandingPage } from './pages/CoordinatorLandingPage';
import { RepLogin } from './pages/RepLogin';
import { RepLandingPage } from './pages/RepLandingPage';
import { NominationCategories } from './pages/NominationCatgories';
import { NominationForm } from './pages/NominationForm';
import { TrialsConfirmation } from './pages/TrialsConfirmation';
import { CaptainLogin } from './pages/CaptainLogin';
import { CaptainLandingPage } from './pages/CaptainLandingPage';
import { CaptainsAccountCreate } from './pages/CaptainsAccountCreate';
import { FeedScreen } from './pages/FeedScreen';
import { RulesScreen } from './pages/RulesScreen';
import { LiveMatchesScreen } from './pages/LiveMatchesScreen';
import { RecentMatchesScreen } from './pages/RecentMatchesScreen';
import { HistoryScreen } from './pages/HistoryScreen';
import { UpcomingMatchesScreen } from './pages/UpcomingMatchesScreen';
import { MenuScreen } from './pages/MenuScreen';
import { PoolsCreateSchedulingPage } from './pages/PoolsCreateSchedulingPage';
import { RefLogin } from './pages/RefLogin';
import { RefLandingPage } from './pages/RefLandingPage';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <>
      {/* Global StatusBar configuration */}
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />

      {/* Navigation Container */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexPage">
          <Stack.Screen name="IndexPage" component={IndexPage} options={{ headerShown: false }} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
          <Stack.Screen name="CoachLogin" component={CoachLogin} options={{ headerShown: false }} />
          <Stack.Screen name="CoordinatorLogin" component={CoordinatorLogin} options={{ headerShown: false }} />
          <Stack.Screen name="AdminLandingPage" component={AdminLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="CoachLandingPage" component={CoachLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="CoordinatorLandingPage" component={CoordinatorLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="RepLogin" component={RepLogin} options={{ headerShown: false }} />
          <Stack.Screen name="RefLogin" component={RefLogin} options={{ headerShown: false }} />
          <Stack.Screen name="RepLandingPage" component={RepLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="RefLandingPage" component={RefLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="NominationCategories" component={NominationCategories} options={{ headerShown: false }} />
          <Stack.Screen name="NominationForm" component={NominationForm} options={{ headerShown: false }} />
          <Stack.Screen name="TrialsConfirmation" component={TrialsConfirmation} options={{ headerShown: false }} />
          <Stack.Screen name="CaptainLogin" component={CaptainLogin} options={{ headerShown: false }} />
          <Stack.Screen name="CaptainLandingPage" component={CaptainLandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="CaptainsAccountCreate" component={CaptainsAccountCreate} options={{ headerShown: false }} />
          <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LiveMatchesScreen" component={LiveMatchesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RecentMatchesScreen" component={RecentMatchesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UpcomingMatchesScreen" component={UpcomingMatchesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PoolsCreateSchedulingPage" component={PoolsCreateSchedulingPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MyStack;
