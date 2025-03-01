import { Button, Text , Image, TextInput, View} from 'react-native'
import CustomButton from '../props/CustomButton'


const Withdrawal = () => {
    return(
        <View>
            <Image
            source={require('../assets/with-logo.png')} 
            />
            <Text>Total available amount</Text>
            <Text>N20,000</Text>
            <View>
            <TextInput placeholder="Amount" keyboardType="text"/>
            <Image
            source={require('../assets/with-logo.png')} 
            />
            </View>
            <View>
                <Text>All</Text>
                <Text>50%</Text>
            </View>
           

            <CustomButton 
            title="Sign Up" 
            backgroundColor="#28A745" />
           
        </View>
    )
}

export default Withdrawal