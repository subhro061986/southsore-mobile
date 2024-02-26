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

  howToSouthShoreHeader_View: {
    marginVertical: 20,
    paddingHorizontal: 15
  },

  howToSouthShoreHeader: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  howToSouthShoreTagView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  howToSouthShoreTag: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#374755'
  },

  howToSouthShoreTagPart2: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: '#374755'
  },

  howToSouthShoreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginVertical: 30,
    marginHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#AAB4BA',
    borderWidth: 1,
    width: 290
  },

  howToSouthShoreCardHead: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#26252C',
  },

  howToSouthShoreCardHeadSec_view: {
    marginVertical: 15,
  },

  howToSouthShoreCardHeadSec: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  howToSouthShoreCardTag_view: {
    marginVertical: 10
  },

  howToSouthShoreCardTag: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    color: '#26252C',
  },

  howToSouthShoreJoinNowBtn: {
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginHorizontal: 46,
    marginVertical: 35,
    backgroundColor: '#007FE3',
  },

  howToSouthShoreJoinNowBtnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  howToSouthShoreModal_container: {
    marginVertical: 5,
  },

  howToSouthShoreModalHead_view: {
    marginVertical: 10,
  },

  howToSouthShoreModalHead: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  howToSouthShoreModalSubHead: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: '#5A6E7A',
  },

  howToSouthShoreModalBody: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    width: '80%',
  },

  howToSouthShoreModalBodyFormView: {
    marginTop: 8,
    marginBottom: 15,
    position: 'relative',
  },

  buy_join_modal_input_height: {
    height: 40,
  },

  howToSouthShoreModalBodyFormLabel: {
    color: '#26252C',
    fontSize: 17,
    fontWeight: '600',
  },

  howToSouthShoreModalBodyFormInput: {
    borderColor: '#3F4556',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 250,
    color: '#26252C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 13,
    fontWeight: '400',
    marginVertical: 10,
  },

  howToSouthShoreModalBodyFormInputIcon: {
    position: 'absolute',
    top: '50%',
    right: '5%'
  },

  howToSouthShoreModalSubmit: {
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginHorizontal: 46,
    marginVertical: 20,
    backgroundColor: '#007FE3',
  },

  howToSouthShoreModalSubmitText: {
    fontSize: 16,
    fontWeight: '600',
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

  aboutSouthShoreHeadView: {
    paddingHorizontal: 25
  },

  aboutSouthShoreHead: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  aboutSouthShoreHeadPart2: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#7B8890'
  },

  aboutSouthShoreTagView: {
    padding: 20,
    borderBottomColor: 'rgba(124, 149, 167, 0.73)',
    borderBottomWidth: 0.5
  },

  aboutSouthShoreTag: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#5A6E7A'
  },

  aboutSouthShoreDescPart1View: {
    padding: 20
  },

  aboutSouthShoreDescPart1: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#555562'
  },

  aboutSouthShoreDescPart2View: {
    paddingHorizontal: 15
  },

  aboutSouthShoreDescPart2: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#26252C'
  },

  aboutSouthShoreReadMoreBtn: {
    padding: 20
  },

  aboutSouthShoreReadMore: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#007FE3',
    textDecorationLine: 'underline',
    textDecorationColor: '#007FE3'
  },

  southshoreInnovationsView: {
    backgroundColor: '#EBF3FA',
    paddingBottom: '50%',
  },

  southshoreInnovationsHeader_view: {
    padding: 25,
  },

  southshoreInnovationsHeader: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  southshoreInnovationsTag_view: {
    paddingHorizontal: 25,
  },

  southshoreInnovationsTag: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    color: '#3F4556'
  },

  southshoreInnovationsDesc_view: {
    padding: 20,
  },

  southshoreInnovationsDesc: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#555562'
  },

  southshoreInnovationsReadMore_btn: {
    padding: 20,
  },

  southshoreInnovationsReadMore: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#007FE3',
    textDecorationLine: 'underline',
    textDecorationColor: '#007FE3'
  },

  // Cateory Details Page start
  categoryDetailsBodyBg: {
    backgroundColor: '#EFF2FC',
    height: Dimensions.get('screen').height,
    width: '100%'
  },

  categoryDetailsHeaderView: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  categoryDetailsHeader: {
    fontWeight: '900',
    fontSize: 20,
    color: '#26252C'
  },

  categoryDetailsHeaderResults: {
    fontWeight: '400',
    fontSize: 14,
    color: '#555562'
  },

  categoryDetailsSortingMainView: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#9EA1A3',
    borderBottomWidth: 0.5
  },

  categoryDetailsSortText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#26252C'
  },

  categoryDetailsDropDown:{
    backgroundColor: '#fff',
    width : '68%',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderColor : '#777983',
    borderWidth: 0.5,
    borderRadius: 10,
    color : '#141516',
    fontWeight : '500',
    fontSize : 12
  },

  categoryDetailsDropDownPicker: { 
    color : '#141516',
    fontWeight : '500',
    fontSize : 12
  },

  categoryDetailsBooksMainDiv : {
    // paddingVertical: '15%',
    paddingHorizontal: '6%',
    paddingBottom : '10%'
  },

  categoryDetailsViewMore_btn: {
    padding: 20,
  },

  categoryDetailsViewMore: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#555562', 
    textDecorationLine: 'underline',
    textDecorationColor: '#555562'
  },

  categoryDetailsModalCross: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '90%',
  },

  categoryDetailsModalHeaderView: {
    marginBottom: 10
  },

  categoryDetailsModalHeader: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#26252C',
  },

  categoryDetailsModalBody: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  categoryDetailsModalBody: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%'
  },

  categoryDetailsModalRadioBtn: { 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },

  categoryDetailsModalRadioBtnTextFont:{
    fontSize: 14,
    color: '#64646F',
    fontWeight: '500'
  },

  bottomnav: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#03142C',
    borderRadius: 100,
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
    //fontFamily: 'Roboto',
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

  paddingTop10: {
    paddingTop: 10,
  },

  intro_1: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#133B72',
  },

  intro_2: {
    fontSize: 57,
    fontWeight: '900',
    textAlign: 'center',
    color: '#3448AF',
  },

  intro_3: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#012860',
  },

  intro_4: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#153562',
  },

  publist_bg: {
    backgroundColor: '#EBF4FC',
    paddingTop: '10%',
    paddingBottom: '13%',
    paddingHorizontal: 15,
  },

  publist_head_view: {
    paddingBottom: '10%',
  },

  publist_head: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#26252C',
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
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#26252C',
  },

  buy_bg: {
    backgroundColor: '#2F4FA0',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  buy_head_1_View: {
    marginBottom: 25
  },

  buy_head_1: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },

  buy_head_2: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FDFDFF',
  },

  buy_head_3_View: {
    marginTop: 20
  },

  buy_head_3: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  buy_head_3_sec: {
    fontSize: 16,
    fontWeight: '800',
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

  buy_card_head_view: {
    marginVertical: 10,
  },

  buy_card_head: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#26252C',
  },

  buy_card_head_sec: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#26252C',
  },

  buy_card_body: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#64646F',
  },

  buy_card_link: {
    //fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
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
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  modal_main_view: {
    marginHorizontal: 50,
    marginVertical: 90,
    backgroundColor: 'white'
  },

  buy_join_modal_cross: {
    display: 'flex',
    alignItems: 'flex-end',
    width: 275,
  },

  buy_join_modal_head_view: {
    marginBottom: 10
  },

  buy_join_modal_head: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#26252C',
  },

  buy_join_modal_sub_head: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: '#5A6E7A',
  },

  buy_join_modal_body: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },

  buy_join_modal_legend: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: '#5A6E7A',
  },

  buy_join_modal_input_view: {
    marginTop: 8,
    marginBottom: 15,
    position: 'relative',
  },

  buy_join_modal_input: {
    borderColor: '#3F4556',
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#7B8890',
    width: 260,
    paddingLeft: 12,
  },

  buy_join_modal_input_height: {
    height: 40,
  },

  buy_join_modal_input_icon: {
    position: 'absolute',
    top: '21%',
    right: '5%'
  },

  buy_submit_font: {
    fontSize: 16,
  },

  pub_banner: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '10%',
    height: 285,
    width: Dimensions.get('screen').width,
  },

  pub_banner_txt_view: {
    width: '45%',
    paddingVertical: '5%',
  },

  pub_banner_head: {
    fontWeight: '500',
    fontSize: 12,
    color: '#42554E',
  },

  pub_banner_body_view: {
    marginTop: '5%',
  },

  pub_banner_body: {
    fontWeight: '600',
    fontSize: 22,
    color: '#202C27',
  },

  pub_about: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '15%',
  },

  pub_about_logo: {
    marginBottom: '12%'
  },

  pub_about_body: {
    fontWeight: '400',
    fontSize: 14,
    color: '#555562',
    textAlign: 'center',
  },

  pub_cat_cards: {
    height: 82,
    width: 82,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  pub_home_buy_bg: {
    backgroundColor: '#D9F1E8',
    paddingTop: 30,
    paddingBottom: 200,
    paddingHorizontal: 20,
  },

  pub_buy_head_1: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111F2B',
  },

  pub_buy_head_3: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#343545',
  },

  pub_buy_head_3_sec: {
    fontWeight: '600',
  },

  pub_home_new_view: {
    paddingVertical: '6%',
    paddingHorizontal: '5%',
  },

  pub_home_new_head: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#26252C',
  },

  pub_home_new_body: {
    marginVertical: '8%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  pub_home_rec_body: {
    marginVertical: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pub_home_new_card: {
    height: 252,
    width: 156,
    borderColor: '#CDD2DF',
    borderWidth: 1,
    borderRadius: 14,
    display: 'flex',
    marginBottom: '3%',
    position: 'relative',
  },

  pub_home_rec_card: {
    height: 252,
    width: 156,
    borderColor: '#CDD2DF',
    borderWidth: 1,
    borderRadius: 14,
    display: 'flex',
    marginBottom: '3%',
    marginHorizontal: 5,
    position: 'relative',
  },

  pub_home_new_card_img: {
    borderRadius: 13,
    resizeMode: 'contain',
  },

  pub_home_new_card_txtbox: {
    marginHorizontal: '6%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },

  pub_home_new_card_view_1: {
    borderBottomColor: '#B3B9C3',
    borderBottomWidth: 0.5,
    paddingBottom: '10%',
    marginBottom: '6%'
  },

  pub_home_card_title_view: {
    marginBottom: '3%'
  },

  pub_home_card_title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#26252C',
  },

  pub_home_card_author: {
    fontWeight: '400',
    fontSize: 11,
    color: '#64646F',
  },

  pub_home_card_author_name: {
    fontWeight: '500'
  },

  pub_home_card_price_view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pub_home_card_price: {
    fontWeight: '600',
    fontSize: 20,
    color: '#26252C',
  },

  pub_home_new_card_wishbtn: {
    position: 'absolute',
    top: '5%',
    right: '8%',

  },

  pub_home_best_bg: {
    backgroundColor: '#EEF1F9',
    paddingVertical: '10%',
    paddingHorizontal: '6%',
  },

  pub_home_best_head: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    color: '#26252C',
  },

  pub_home_best_card: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginVertical: '3%',
  },

  pub_home_best_cover: {
    borderRadius: 13,
    resizeMode: 'contain',
  },

  pub_home_best_card_col2: {
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: '5%',
    marginLeft: '3%'
  },

  pub_home_best_card_col2_top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
    borderBottomColor: '#B3B9C3',
    borderBottomWidth: 0.5,
    paddingBottom: '5%',
  },

  pub_home_best_card_title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#26252C',
  },

  pub_home_card_author_view: {
    marginTop: '5%'
  },

  pub_home_best_card_col2_bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pub_home_best_card_price: {
    fontWeight: '600',
    fontSize: 20,
    color: '#26252C',
  },

  // kaustav Confirm Order start
  ConfirmOrderView: {
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  ConfirmOrderViewMain: {
    backgroundColor: '#EFF2FC',
    padding: 25,
    height:Dimensions.get('screen').height
  },
  ConfirmOrderMainHeaderText:{
    fontSize: 26,
    fontFamily:'Poppins',
    fontWeight: '600',
    textAlign: 'center',
    color: '#26252C'
  },
  ConfirmOrdeSubHeaderText:{
    marginVertical:5,
    fontSize: 14,
    fontWeight: '600',
    fontFamily:'Roboto',
    textAlign: 'center',
    color: '#555562',
  },
  ConfirmOrderCard: {
    display: 'flex',
    width:'100%',
    borderRadius: 14,
    
    marginVertical: '15%',
    height:100,
    alignItems:'center',
    
  },
  ConfirmOrderButton:{
    borderRadius: 100,
    borderColor:'#26252C',
    padding:10,
    borderWidth:0.5,
    display: 'flex',
    width:'97%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:'7%',
    borderBottomColor: '#B3B9C3',
    borderBottomWidth: 0.5,
  }
  // Confirm Order end
});


