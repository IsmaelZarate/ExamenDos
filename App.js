import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';

export default function App() {
  const Separator = () => <View style={styles.separator}/>;
  const[materiaUno, setMateriaUno]= useState("")
  const[materiaDos, setMateriaDos]= useState("")
  const[materiaTres, setMateriaTres]= useState("")
  const[materiaCuatro, setMateriaCuatro]= useState("")
  const[materiaCinco, setMateriaCinco]= useState("")
  const[unificador, setUnificador] = useState("")
  const[isActivo, setActivo]=useState(true)

const onPressUnificador  = () => {
  setUnificador(materiaUno + " ," + materiaDos + " , " + materiaTres + " , " + materiaCuatro + " , " + materiaCinco),
  setMateriaUno(""),
  setMateriaDos(""),
  setMateriaTres(""),
  setMateriaCuatro(""),
  setMateriaCinco("");
}


const Materia=(props)=> {
  return(
    <View>
      <Text>{props.nombre}</Text>
    </View>
  )
};
    
return (
 
 
  
   <View style={styles.container}>

   <Text style={styles.Encabezado}>Registro de Materias</Text>

      <TextInput
        style={styles.inputTextUno}
       placeholder="Introduce la primera Materia"
       onChangeText= {setMateriaUno}
       value={materiaUno}
      />
      <Separator />
     <TextInput
        style={styles.inputTextDos}
       placeholder="Introduce la segunda Materia"
       onChangeText={setMateriaDos}
       value={materiaDos}
      />
        <Separator />
        <TextInput
        style={styles.inputTextTres}
       placeholder="Introduce la tercera Materia"
       onChangeText= {setMateriaTres}
       value={materiaTres}
      />


<TextInput
        style={styles.inputTextCuatro}
       placeholder="Introduce la Cuarta Materia"
       onChangeText= {setMateriaCuatro}
       value={materiaCuatro}
      />

<TextInput
        style={styles.inputTextCinco}
       placeholder="Introduce la quinta Materia"
       onChangeText= {setMateriaCinco}
       value={materiaCinco}
      />
 
 

    <Button onPress={onPressUnificador}
    title= "Cargar"
    color="white"
    ></Button>
    
    <Materia  nombre={unificador}/>

      <StatusBar style="auto"/>
   </View>

  );
 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF33F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextUno:{
    width:"60%",
    height:50,
    borderWidth:1,
    borderColor: '#FDFDFD',
    marginVertical:15,
    fontSize:20
  },
  inputTextDos:{
    width:"60%",
    height:50,
    borderWidth:1,
    borderColor: '#FDFDFD',
    marginVertical:15,
    fontSize:20

  },
  inputTextTres:{
    width:"60%",
    height:50,
    borderWidth:1,
    borderColor: '#FDFDFD',
    marginVertical:15,
    fontSize:20

  },


  Text:{
    width:"50%",
    height:40,
    borderWidth:1,
    borderColor: '#FF0000',
    marginVertical:15

  },
  Encabezado:{
    color:"black",
    width:"50%",
    height:40,
    fontSize:20

  },
  mostrarMaterias:{
  

  }
});
