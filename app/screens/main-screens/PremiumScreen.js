import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import NormalButton from '../../components/NormalButton';
import PremiumCard from '../../components/PremiumCard';
import PlanCard from '../../components/PlanCard';

const PremiumScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/Spotify.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Premium</Text>
          <View>
            <Image
              source={require('../../assets/images/SPpr.jpeg')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.freeTrialText}>FREE TRIAL</Text>
          <Text style={styles.headingText}>Try Premium free for 1 month</Text>
          <NormalButton onPress={()=> {navigation.navigate('LikedSongsScreen')}} title={'GET PREMIUM'} />
          <View>
            <Text style={styles.descriptionText}>
              From $49/month after. Offer only for users who are new to Premium.
              <Text style={styles.descriptionText2}>
                Terms and conditions apply.
              </Text>
            </Text>
          </View>
        </View>
        <PremiumCard
          heading={'Why join Premium?'}
          subHeading={'Download to listen offline without wifi'}
          subHeading2={'Music without ad interruptions'}
          subHeading3={'2 times higher sound quality than our free plan'}
          subHeading4={'Cancell monthly plans online anytime'}
        />
        <Text style={styles.subHeading}>Pick your Premium</Text>
        <PlanCard
          backgroundColor={'blue'}
          title={'Mini'}
          title1={'From $49'}
          description={
            '1 day and 1 week plans . Ad-free music on mobile . Download 30 songs on 1 mobile device . Mobile only plan'
          }
          description1={'Prices vary according to duration of plan.'}
          description2={'Terms and conditions apply'}
        />

        <PlanCard
          backgroundColor={'green'}
          title={' Individual'}
          title1={'Free'}
          description={
            'Ad-free music listening . Download to listen offline . Debit and credit cards accepted'
          }
          description1={'Offer only for users who are new to Premium.'}
          description2={'Terms and conditions apply'}
        />

        <PlanCard
          backgroundColor={'purple'}
          title={'Duo'}
          title1={'Free'}
          description={
            '2 Premium accounts . For couples who live together . Ad-free music listening . Download 10,000 songs/devices, on up to 5 devices per account . Choose 1,3,6 or 12 months of Premium . Debit and credit cards accepted'
          }
          description1={'Offer only for users who are new to Premium.'}
          description2={'Terms and conditions apply'}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginRight: 10,
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  headingContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  freeTrialText: {
    color: 'white',
  },
  descriptionText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  descriptionText2: {
    color: 'white',
    fontWeight: 'bold',
  },
  subHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    height: 150,
    width: 290,
  },
});
