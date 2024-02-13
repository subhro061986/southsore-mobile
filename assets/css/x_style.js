import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({


  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBg: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('screen').height,
    width: '100%'
  },
  topnav: {
    backgroundColor: '#03142C',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 25,

  },

  topnav_top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topnavRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    width: '35%',
  },


  bottomnav: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#03142C',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    //height:100,
    marginHorizontal: 20,
    marginVertical: 10
  },

  topnav_bottom: {
    marginTop: 20,
    position: 'relative',
  },

  search_bar: {
    width: '100%',
    height: 46,
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 50,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 13,
  },

  search_pos: {
    position: 'absolute',
    top: '32%',
    left: '5%',
  },

  banner: {
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
    height: 285,
  },

  intro_1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
    color:'#133B72',
    marginBottom: 20,
  },

  intro_2: {
    fontFamily: 'ProtestRevolution-Regular',
    fontSize: 54,
    fontWeight: '800',
    lineHeight: 40,
    textAlign: 'center',
    color:'#3448AF',
    paddingTop: 12,
  },

  intro_3: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
    color:'#012860',
    paddingTop: 10,
  },

  intro_4: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
    color:'#153562',
    paddingTop: 10,
  },
});


