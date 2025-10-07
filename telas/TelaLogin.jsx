import{View, Text, Button} from 'react-native';

function TelaLogin({ navigation}) {
    return (
        <view>
            <text>Tela Login</text>

            <Button title='Ir para Cadastro' onPress={()=> navigation.navigate('Cadastro')}/>
            <Button title='Ir para Descobrir' onPress={()=> navigation.navigate('Descobrir')}/>
        </view>
    )
}

export default TelaLogin;