import { StyleSheet , Dimensions} from 'react-native';

export default StyleSheet.create({


    bgImg:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
  homeBg: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('screen').height,
    width: '100%'
},
topnav:{
  backgroundColor:'#03142C',
  paddingHorizontal:15,
  paddingTop:15,
  paddingBottom:25,
},


bottomnav:{
  position:'absolute', 
  bottom:Dimensions.get('screen').height*0.1,
  width:'90%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#03142C',
  borderRadius:20,
  paddingHorizontal:20,
  paddingVertical:20,
  //height:100,
  marginHorizontal:20,
  marginVertical:10
},
});


