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

  aboutSouthShoreView: {
    backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },

  aboutSouthShoreHead: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 34,
    textAlign: 'center',
    color: '#26252C',
    paddingHorizontal: 15
  },

  aboutSouthShoreHeadPart2: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 34,
    textAlign: 'center',
    color: '#7B8890'
  },

  aboutSouthShoreTag : {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    padding: 20,
    color: '#5A6E7A',
    borderBottomColor: 'rgba(124, 149, 167, 0.73)',
    borderBottomWidth: 0.5
  },

  aboutSouthShoreDescPart1: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    padding: 20,
    color: '#555562'
  },

  aboutSouthShoreDescPart2:{
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 15,
    color: '#26252C'
  },

  aboutSouthShoreReadMore: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
    padding: 20,
    color: '#007FE3'
  },

  southshoreInnovationsView:{
    backgroundColor: '#EBF3FA'
  },

  southshoreInnovationsHeader : {
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 48,
    textAlign: 'center',
    color: '#26252C',
    padding: 25,
    paddingBottom: 25
  },

  southshoreInnovationsTag: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
    paddingHorizontal: 15,
    color: '#3F4556'
  },

  southshoreInnovationsDesc : {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    padding: 20,
    paddingBottom: 20,
    color: '#555562'
  },

  southshoreInnovationsReadMore: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
    padding: 20,
    paddingBottom: 200,
    color: '#007FE3'
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
});


