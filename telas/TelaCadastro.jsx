import{View, Text, Button} from 'react-native';

function TelaCadastro({navigation}) {
    return (
        <view>
            <text>Tela Cadastro</text>

            <Button
                title='Ir para Login'
                onPress={()=> navigation.navigate("Login")}
            />
        </view>
    );
}

export default TelaCadastro;