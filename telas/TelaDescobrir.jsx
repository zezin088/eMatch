import{View, Text, Button} from 'react-native';

function TelaDescobrir({navigation}) {
    return (
        <view>
            <text>Tela Descobrir</text>

            <Button
                title='Ir para Login'
                onPress={()=> navigation.navigate("Login")}
            />
        </view>
    );
}

export default TelaDescobrir;