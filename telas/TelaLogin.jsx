import{View, Text, Button} from 'react-native';
import InputPersonalizado from '../componentes/inputPersonalizado';

function TelaLogin({ navigation}) {
    return (
        <view>
            <text>Tela Login</text>

            <InputPersonalizado 
            legenda="Email"
            textoTemporario="Digite seu email"
            valor=""
            aoAlterarValor={() => {}}
            />

            <InputPersonalizado
            legenda="Senha"
            textoTemporario="Digite sua senha"
            valor=""
            aoAlterarValor={() => {}}
            ehSenha={true}
            />

            <Button title='Ir para Cadastro' onPress={()=> navigation.navigate('Cadastro')}/>
            <Button title='Ir para Descobrir' onPress={()=> navigation.navigate('Descobrir')}/>
        </view>
    );
}

export default TelaLogin;