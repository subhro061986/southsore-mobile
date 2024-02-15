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

  howToSouthShoreView: {
    backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },

  howToSouthShoreHeader: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 30,
    textAlign: 'center',
    color: '#26252C',
    marginTop: 20,
    paddingHorizontal: 15
  },

  howToSouthShoreTagView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  howToSouthShoreTag: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
    textAlign: 'center',
    color: '#374755'
  },

  howToSouthShoreTagPart2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    textAlign: 'center',
    color: '#374755'
  },

  howToSouthShoreCard : {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginVertical: 30,
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAB4BA',
    borderWidth: 1,
    width: 320
  },

  howToSouthShoreCardHead: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 32,
    textAlign: 'center',
    color: '#26252C',
    // marginBottom: 15,
  },

  howToSouthShoreCardHeadSec: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'center',
    color: '#26252C',
    marginBottom: 15,
  },

  howToSouthShoreCardTag : {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#26252C',
    marginBottom: 10
  },

  howToSouthShoreJoinNowBtn :{
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginHorizontal: 46,
    marginVertical: 35,
    backgroundColor: '#007FE3',
  },

  howToSouthShoreJoinNowBtnText : {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
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
    fontWeight: '700',
    lineHeight: 34,
    textAlign: 'center',
    color: '#26252C',
    paddingHorizontal: 15
  },

  aboutSouthShoreHeadPart2: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 34,
    textAlign: 'center',
    color: '#7B8890'
  },

  aboutSouthShoreTag: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
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

  aboutSouthShoreDescPart2: {
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

  southshoreInnovationsView: {
    backgroundColor: '#EBF3FA'
  },

  southshoreInnovationsHeader: {
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 48,
    textAlign: 'center',
    color: '#26252C',
    padding: 25,
    paddingBottom: 25
  },

  southshoreInnovationsTag: {
    fontFamily: 'Roboto',
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    paddingHorizontal: 25,
    color: '#3F4556'
  },

  southshoreInnovationsDesc: {
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
    color: '#133B72',
    marginBottom: 20,
  },

  intro_2: {
    fontFamily: 'ProtestRevolution-Regular',
    fontSize: 54,
    fontWeight: '800',
    lineHeight: 40,
    textAlign: 'center',
    color: '#3448AF',
    paddingTop: 12,
  },

  intro_3: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
    textAlign: 'center',
    color: '#012860',
    paddingTop: 10,
  },

  intro_4: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
    color: '#153562',
    paddingTop: 10,
  },

  publist_bg: {
    backgroundColor: '#EBF4FC',
    paddingVertical: '15%',
    paddingHorizontal: 15,
  },

  publist_head: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    color: '#26252C',
    paddingBottom: '10%'
  },

  pub_cards: {
    height: 117,
    width: 140,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  pub_name: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    color: '#26252C',
  },

  buy_bg: {
    backgroundColor: '#2F4FA0',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  buy_head_1: {
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 38,
    textAlign: 'center',
    color: 'white',
    marginBottom: 25,
  },

  buy_head_2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    color: '#FDFDFF',
  },

  buy_head_3: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },

  buy_head_3_sec: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  

  buy_card: {
    height: 450,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingVertical: 40,
    paddingHorizontal: 40,
    marginTop: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
    // backgroundColor:'pink',
  },

  buy_card_head: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 32,
    textAlign: 'center',
    color: '#26252C',
    marginBottom: 15,
  },

  buy_card_head_sec: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'center',
    color: '#26252C',
  },

  buy_card_body: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    color: '#64646F',
  },

  buy_card_link: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    color: '#097EDA',
  },

  buy_join_btn: {
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 86,
    marginTop: 50,
  },

  buy_join_txt: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  modal_main_view: {
    marginHorizontal: 50,
    marginVertical: 90,
    backgroundColor: 'white'
  },

  buy_join_modal_head: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 26,
    textAlign: 'center',
    color: '#26252C',
    marginBottom:10
  },

  buy_join_modal_sub_head: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    textAlign: 'center',
    color: '#5A6E7A',
  },

  buy_join_modal_body: {
    
  },
});


