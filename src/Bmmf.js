import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  text-align:center ;
  margin-bottom:80px ;
  margin-top:20px;
  position:relative ;
`

const ContainerTable = styled.div`
  width: 90%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  text-align:center ;
  margin-bottom:20px ;
  margin-top:10px;
  position:relative ;
  overflow-x:scroll ;
`

const TimeTable= styled.div` 
width:6.67%;
height:50px;
background-color:${({bg})=>bg === false ? 'tranparent':'#cecece'} ;
border-left:${({bg})=>bg !== false && '#FFFFFF 1px solid'} ;
position:relative ;
cursor:pointer ;
`

const FlexData = styled.div` 
width:1100px;
display:flex;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
margin-bottom:10px ;
`

const FlexDate = styled.div` 
width:fit-content;
max-width:90%;
display:flex;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
`

const TextTime = styled.div` 
font-size:0.75rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300 ;
`

const TextDate = styled.div` 
font-size:0.75rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300 ;
color:#FFFFFF;
`

const TimeTableArtis= styled.div` 
width:6.67%;
height:230px;
background-color:${({bg})=>bg === false ? 'tranparent':'#EFEFEF'} ;
border-left:${({bg})=>bg !== false && '#cecece 1px solid'} ;
position:relative ;
cursor:pointer ;
`
const DateConcert= styled.div` 
width:75px;
height:30px;
margin-right:10px ;
background-color:${({bg})=>bg === false ? '#cecece':'#252525'}  ;
border-radius:100px ;
position:relative ;
cursor:pointer ;
`
const TextArtist = styled.div` 
font-size:0.7rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300;
color:${({color})=>color === true ? '#000000': '#FFFFFF'};
width:90%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
`

const TextArtistSelect = styled.span` 
font-size:1rem ;
font-weight:300;
color:${({color})=>color};
width:90%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
`
const TabStage = styled.div` 
position:absolute;
top:${({top})=>top};
left:${({left})=>left+'%'};
background-color:${({bgColor})=>bgColor} ;
width:${({width})=>width+'%'} ;
height:18px ;
border:${({border})=>border === true&&'2px #000000 solid'};
z-index:1 ;
border-radius:20px ;
:hover{
    opacity:0.7 ;
}
`

const ImgLogo = styled.img` 
width:15% ;
`

const DotColor = styled.div` 
width:15px;
height:15px;
border-radius:100px ;
background-color:${({bgColor})=>bgColor} ;
margin-top:2px ;
`

const TextStage = styled.div` 
font-size:0.8rem ;
font-weight:300 ;
padding-left:5px ;
padding-top:2px ;
text-transform: uppercase;
`
const DivStage = styled.div`
display:flex;
margin-left:20px ;

`
const FlexStage = styled.div` 
width:90%;
display:flex;
flex-wrap:wrap ;
justify-content:center ;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
margin-bottom:10px ;
`

const ModalArtist = styled.div` 
position:absolute;
width:300px;
height:250px;
background-color:#fafafa;
box-shadow: 3px 3px 20px 3px #00000001;
z-index:10 ;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius:10px ;
padding-left:10px;
padding-right:10px ;
`

const X = styled.div` 
position:absolute;
width:30px;
height:30px;
background-color:#FFFFFF;
border:3px solid #000000 ;
z-index:11 ;
top: -10px;
right:-10px ;
border-radius:100px ;
font-size:1.25rem ;
cursor:pointer ;
padding-top:5px ;
padding-left:2px ;
padding-right:2px ;
`
const TextName = styled.div` 
font-size:1.05rem ;
color:${({bgColor})=>bgColor} ;
margin-top:40px;
margin-bottom:10px ;
text-transform: uppercase;
`

const TextDes= styled.div` 
font-size:0.75rem ;
color:#252525 ;
margin-top:10px;
margin-bottom:10px ;
text-transform: uppercase;
`

const XSURFACEText= styled.span` 
font-size:0.75rem ;
color:#E13B30;
margin-top:10px;
margin-bottom:10px ;
text-transform: uppercase;
cursor: pointer;
text-decoration: underline;
font-weight:900 ;
`
const TextModal = styled.div` 
font-size:1rem ;
color:${({bgColor})=>bgColor} ;
margin-bottom:5px ;
text-transform: uppercase;
`

const ButtonSelect =styled.div`
padding:10px 20px ;
background-color: ${({bgColor})=>bgColor} ;
width:fit-content ;
position:absolute ;
bottom:10px ;
color:${({color})=>color === true ? '#000000': '#FFFFFF'};
border-radius:100px ;
left:50% ;
transform: translate(-50%, -10%);
right:50%;
cursor:  pointer;
:hover{
    opacity:0.9 ;
}
`

const XStage = styled.div` 
position:absolute;
width:15px;
height:15px;
background-color:#FFFFFF;
border:1px solid #000000 ;
z-index:100 ;
top: -5px;
right:-5px ;
border-radius:100px ;
font-size:0.75rem ;
cursor:pointer ;
`

const DivSelectDataArtist = styled.div`
width:fit-content;
max-width:90% ;
margin-left:auto;
margin-right:auto ;
padding-bottom:50px ;
height:fit-content ;
`
const SelectDataArtist = styled.div`
margin-bottom:10px ;
text-transform: uppercase;
font-size: 1rem;
text-align:left ;
`
function Bmmf () {

    const [showModal,setShowModal]= useState(false)
    const [dataSelect,setDataSelect]= useState([])
    const [selectDate,setSelectDate]= useState(1)

   dataSelect?.sort(function (a, b) {
        return a.start.localeCompare(b.start);
    });
    

    console.log('dataSelect',dataSelect.map((data)=> new Date(data.start).getHours() > 3 && data.Artist + new Date(data.start).getHours() ))
    

    const defaultTime =[
        {dateData:'2022/12/10 14:00',start:'1'},
        {dateData:'2022/12/10 15:00',start:'2'},
        {dateData:'2022/12/10 16:00',start:'3'},
        {dateData:'2022/12/10 17:00',start:'4'},
        {dateData:'2022/12/10 18:00',start:'5'},
        {dateData:'2022/12/10 19:00',start:'6'},
        {dateData:'2022/12/10 20:00',start:'7'},
        {dateData:'2022/12/10 21:00',start:'8'},
        {dateData:'2022/12/10 22:00',start:'9'},
        {dateData:'2022/12/10 23:00',start:'10'},
        {dateData:'2022/12/10 00:00',start:'11'},
        {dateData:'2022/12/10 01:00',start:'12'},
        {dateData:'2022/12/10 02:00',start:'13'},
        {dateData:'2022/12/10 03:00',start:'14'},
        {dateData:'2022/12/10 04:00',start:'15'},
        ]

        const dataSatgeFrist =[
            {id:1,Artist:'Klear',start:'2022/12/10 17:30',end:'18:15',time:45,stage:1},
            {id:2,Artist:'Getsunova',start:'2022/12/10 18:30',end:'19:15',time:45,stage:1},
            {id:3,Artist:'Num kala',start:'2022/12/10 19:30',end:'20:15',time:45,stage:1},
            {id:4,Artist:'Big ass',start:'2022/12/10 20:30',end:'21:15',time:45,stage:1},
            {id:5,Artist:'Cocktail',start:'2022/12/10 21:30',end:'22:15',time:45,stage:1},
            {id:6,Artist:'Potato',start:'2022/12/10 22:30',end:'23:15',time:45,stage:1},
            {id:7,Artist:'Slot machine',start:'2022/12/10 23:30',end:'00:15',time:45,stage:1},
            {id:8,Artist:'Boom boom cash',start:'2022/12/10 00:30',end:'01:00',time:30,stage:1},
            {id:9,Artist:'F.hero x bear knuckle',start:'2022/12/10 01:00',end:'02:00',time:60,stage:1},
            {id:10,Artist:'Ally',start:'2022/12/10 17:15',end:'17:45',time:30,stage:2},
            {id:11,Artist:'Zom marie',start:'2022/12/10 18:00',end:'18:45',time:45,stage:2},
            {id:12,Artist:'Violette wautier',start:'2022/12/10 19:00',end:'19:45',time:45,stage:2},
            {id:13,Artist:'Bowkylion',start:'2022/12/10 20:00',end:'20:45',time:45,stage:2},
            {id:14,Artist:'The parkinson',start:'2022/12/10 21:00',end:'21:45',time:45,stage:2},
            {id:15,Artist:'Nont tanont',start:'2022/12/10 22:00',end:'22:45',time:45,stage:2},
            {id:16,Artist:'Stamp',start:'2022/12/10 23:00',end:'23:45',time:45,stage:2},
            {id:17,Artist:'Lipta',start:'2022/12/10 00:00',end:'00:45',time:45,stage:2},
            {id:18,Artist:'Tattoo colour',start:'2022/12/10 01:00',end:'01:45',time:45,stage:2},
            {id:19,Artist:'The darkest romance',start:'2022/12/10 16:00',end:'16:45',time:45,stage:3},
            {id:20,Artist:'Paper planes',start:'2022/12/10 17:00',end:'17:45',time:45,stage:3},
            {id:21,Artist:'Baby mic candy(jp)',start:'2022/12/10 18:00',end:'18:30',time:30,stage:3},
            {id:22,Artist:'Gmmtv super band(Bright x win x krist x nanon)',start:'2022/12/10 18:45',end:'20:15',time:90,stage:3},
            {id:23,Artist:'Billkin x pp krit',start:'2022/12/10 20:30',end:'21:15',time:45,stage:3},
            {id:24,Artist:'the toys',start:'2022/12/10 21:30',end:'22:15',time:45,stage:3},
            {id:25,Artist:'lham somphol',start:'2022/12/10 22:30',end:'23:15',time:45,stage:3},
            {id:26,Artist:'vannda(hh)',start:'2022/12/10 23:30',end:'00:15',time:45,stage:3},
            {id:27,Artist:'twopee southside x xoflow',start:'2022/12/10 00:30',end:'01.15',time:45,stage:3},
            {id:28,Artist:'bomb at track',start:'2022/12/10 01:30',end:'02:15',time:45,stage:3},
            {id:29,Artist:'sweet mullet',start:'2022/12/10 02:30',end:'03:15',time:45,stage:3},
            {id:30,Artist:'the whitest crow',start:'2022/12/10 15:00',end:'15:45',time:45,stage:4},
            {id:31,Artist:'h 3 f',start:'2022/12/10 16:00',end:'16:45',time:45,stage:4},
            {id:32,Artist:'luss',start:'2022/12/10 17:00',end:'17:45',time:45,stage:4},
            {id:33,Artist:'เขียนไขและวานิช',start:'2022/12/10 18:00',end:'18:45',time:45,stage:4},
            {id:34,Artist:'interflow: chapter 1 presented by bpm plus asia',start:'2022/12/10 19:00',end:'19:45',time:45,stage:4},
            {id:35,Artist:'patrickananda',start:'2022/12/10 20:00',end:'20:45',time:45,stage:4},
            {id:36,Artist:'ไปส่งกู บขส.ดู๊',start:'2022/12/10 21:00',end:'21:45',time:45,stage:4},
            {id:37,Artist:'mirrr',start:'2022/12/10 22:00',end:'22:45',time:45,stage:4},
            {id:38,Artist:'desktop error',start:'2022/12/10 23:00',end:'23:45',time:45,stage:4},
            {id:39,Artist:'safeplanet',start:'2022/12/10 00:00',end:'00:45',time:45,stage:4},
            {id:40,Artist:'yew',start:'2022/12/10 15:15',end:'15:45',time:30,stage:5},
            {id:41,Artist:'television off',start:'2022/12/10 16:00',end:'16:30',time:30,stage:5},
            {id:42,Artist:'freehand',start:'2022/12/10 16:45',end:'17:15',time:30,stage:5},
            {id:43,Artist:'purpeech',start:'2022/12/10 17:30',end:'18:00',time:30,stage:5},
            {id:44,Artist:'quicksand bed',start:'2022/12/10 18:15',end:'18:45',time:30,stage:5},
            {id:45,Artist:'the white hair cut',start:'2022/12/10 19:00',end:'19:30',time:30,stage:5},
            {id:46,Artist:'blackbeans',start:'2022/12/10 19:45',end:'20:15',time:30,stage:5},
            {id:47,Artist:'hens',start:'2022/12/10 20:30',end:'21:00',time:30,stage:5},
            {id:48,Artist:'bell warisara',start:'2022/12/10 21:15',end:'21:45',time:30,stage:5},
            {id:49,Artist:'serious bacon',start:'2022/12/10 22:00',end:'22:30',time:30,stage:5},
            {id:50,Artist:'slapkiss',start:'2022/12/10 22:45',end:'23:15',time:30,stage:5},
            {id:51,Artist:'_less',start:'2022/12/10 16:00',end:'16:30',time:30,stage:6},
            {id:52,Artist:'common people like you',start:'2022/12/10 16:45',end:'17:15',time:30,stage:6},
            {id:53,Artist:'kiki',start:'2022/12/10 17:30',end:'18:00',time:30,stage:6},
            {id:54,Artist:'panpan yeeyee',start:'2022/12/10 18:15',end:'18:45',time:30,stage:6},
            {id:55,Artist:'tinn',start:'2022/12/10 19:00',end:'19:30',time:30,stage:6},
            {id:56,Artist:'tofu',start:'2022/12/10 19:45',end:'20:15',time:30,stage:6},
            {id:57,Artist:'door plant',start:'2022/12/10 20:30',end:'21:00',time:30,stage:6},
            {id:58,Artist:'summer dress',start:'2022/12/10 21:15',end:'21:45',time:30,stage:6},
            {id:59,Artist:'hybs',start:'2022/12/10 22:00',end:'22:30',time:30,stage:6},
            {id:60,Artist:'random dance',start:'2022/12/10 14:00',end:'14:40',time:40,stage:7},
            {id:61,Artist:'phranakhon ensemble',start:'2022/12/10 15:00',end:'15:45',time:45,stage:7},
            {id:62,Artist:'good mood',start:'2022/12/10 16:00',end:'16:45',time:45,stage:7},
            {id:63,Artist:'gmm academy',start:'2022/12/10 17:00',end:'18:30',time:90,stage:7},
            {id:64,Artist:'yes indeed',start:'2022/12/10 18:45',end:'19:30',time:45,stage:7},
            {id:65,Artist:'shata',start:'2022/12/10 19:45',end:'20:15',time:30,stage:7},
            {id:66,Artist:'movie club',start:'2022/12/10 20:30',end:'23:00',time:150,stage:7},
            {id:67,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 18:30',end:'20:00',time:90,stage:8},
            {id:68,Artist:'vaseline band',start:'2022/12/10 20:15',end:'21:15',time:60,stage:8},
            {id:69,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 21:30',end:'22:30',time:60,stage:8},
            {id:70,Artist:'จ๊ะ นงผณี',start:'2022/12/10 22:45',end:'23:45',time:60,stage:8},
            {id:71,Artist:'vaseline band',start:'2022/12/10 00:00',end:'01:00',time:60,stage:8},
            {id:72,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 01:15',end:'02:15',time:60,stage:8},
            {id:73,Artist:'dj ยกล้อ',start:'2022/12/10 02:30',end:'03:30',time:60,stage:8},
            {id:74,Artist:'akojorn project band',start:'2022/12/10 17:30',end:'18:30',time:60,stage:9},
            {id:75,Artist:'ปีเตอร์ คอร์ป ไดเรนดัล x จั๊ก ชวิน x ต้าร์ mr.team',start:'2022/12/10 20:00',end:'21:00',time:60,stage:9},
            {id:76,Artist:'on the way',start:'2022/12/10 21:30',end:'22:30',time:60,stage:9},
            {id:77,Artist:'pimrypie',start:'2022/12/10 23:00',end:'00:00',time:60,stage:9},
            {id:78,Artist:'on the way',start:'2022/12/10 00:30',end:'01:30',time:60,stage:9},
            {id:79,Artist:'jspkk (แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก)',start:'2022/12/10 02:00',end:'03:00',time:60,stage:9},
            {id:80,Artist:'dj leo',start:'2022/12/10 03:00',end:'05:00',time:120,stage:9},
            ]

        const dataSatgeSecond =[
            {id:81,Artist:'lomosonic',start:'2022/12/11 17:30',end:'18:15',time:45,stage:1},
            {id:82,Artist:'milli',start:'2022/12/11 18:30',end:'19:15',time:45,stage:1},
            {id:83,Artist:'urboytj',start:'2022/12/11 19:30',end:'20:15',time:45,stage:1},
            {id:84,Artist:'three man down',start:'2022/12/11 20:30',end:'21:15',time:45,stage:1},
            {id:85,Artist:'palmy',start:'2022/12/11 21:30',end:'22:15',time:45,stage:1},
            {id:86,Artist:'labanoon',start:'2022/12/11 22:30',end:'23:15',time:45,stage:1},
            {id:87,Artist:'bodyslam',start:'2022/12/11 23:30',end:'00:15',time:45,stage:1},
            {id:88,Artist:'clash',start:'2022/12/11 00:30',end:'01:15',time:45,stage:1},
            {id:89,Artist:'taitosmith',start:'2022/12/11 01:00',end:'02:15',time:75,stage:1},
            {id:162,Artist:'laz1',start:'2022/12/11 15:30',end:'16:00',time:30,stage:2},
            {id:163,Artist:'proxie',start:'2022/12/11 16:15',end:'15:45',time:30,stage:2},
            {id:90,Artist:'pun x txrbo x pearwah',start:'2022/12/11 17:00',end:'17:45',time:45,stage:2},
            {id:91,Artist:'paradox',start:'2022/12/11 18:00',end:'18:45',time:45,stage:2},
            {id:92,Artist:'lula',start:'2022/12/11 19:00',end:'19:45',time:45,stage:2},
            {id:93,Artist:'oat pramote',start:'2022/12/11 20:00',end:'20:45',time:45,stage:2},
            {id:94,Artist:'pop pongkool',start:'2022/12/11 21:00',end:'21:45',time:45,stage:2},
            {id:95,Artist:'ink waruntorn',start:'2022/12/11 22:00',end:'22:45',time:45,stage:2},
            {id:96,Artist:'singto numchok',start:'2022/12/11 23:00',end:'23:45',time:45,stage:2},
            {id:97,Artist:'scrubb',start:'2022/12/11 00:00',end:'00:45',time:45,stage:2},
            {id:98,Artist:'polycat',start:'2022/12/11 01:00',end:'01:45',time:45,stage:2},
            {id:164,Artist:'atlas',start:'2022/12/11 15:00',end:'15:30',time:30,stage:3},
            {id:99,Artist:'matcha x kin x alala x perses',start:'2022/12/11 15:45',end:'16:30',time:45,stage:3},
            {id:100,Artist:'pixxie x bamm x proo thunwa',start:'2022/12/11 16:45',end:'17:30',time:45,stage:3},
            {id:101,Artist:'ballistik boyz x psychic fever from exile tribe (jp)',start:'2022/12/11 17:45',end:'18:30',time:45,stage:3},
            {id:102,Artist:'4mix',start:'2022/12/11 18:45',end:'19:30',time:45,stage:3},
            {id:103,Artist:'4eve',start:'2022/12/11 19:45',end:'20:30',time:45,stage:3},
            {id:104,Artist:'tilly birds',start:'2022/12/11 20:45',end:'21:30',time:45,stage:3},
            {id:105,Artist:'saran x dieout',start:'2022/12/11 21:45',end:'22:15',time:45,stage:3},
            {id:106,Artist:'sprite,guygeegee,og bobby,seeda thevillain,don kids,iceace,eskiimo',start:'2022/12/11 22:30',end:'23:15',time:45,stage:3},
            {id:107,Artist:'autta,namemt,ainn,flower.far,fizzie,galchanie',start:'2022/12/11 23:30',end:'00.30',time:60,stage:3},
            {id:108,Artist:'d gerrard',start:'2022/12/11 00:45',end:'01:30',time:45,stage:3},
            {id:109,Artist:'thaitanium',start:'2022/12/11 01:45',end:'02:30',time:45,stage:3},
            {id:110,Artist:'only monday',start:'2022/12/11 15:00',end:'15:45',time:45,stage:4},
            {id:111,Artist:'greasy cafe',start:'2022/12/11 16:00',end:'16:45',time:45,stage:4},
            {id:112,Artist:'joey phuwasit',start:'2022/12/11 17:00',end:'17:45',time:45,stage:4},
            {id:113,Artist:'คณะขวัญใจ',start:'2022/12/11 18:00',end:'18:45',time:45,stage:4},
            {id:114,Artist:'จุลโหราฬ',start:'2022/12/11 19:00',end:'19:45',time:45,stage:4},
            {id:115,Artist:'jisokuryclub(kr)',start:'2022/12/11 20:00',end:'20:45',time:45,stage:4},
            {id:116,Artist:'anatomy rabbit',start:'2022/12/11 21:00',end:'21:45',time:45,stage:4},
            {id:117,Artist:'dept',start:'2022/12/11 22:00',end:'22:45',time:45,stage:4},
            {id:118,Artist:'the yers',start:'2022/12/11 23:00',end:'23:45',time:45,stage:4},
            {id:119,Artist:'phum viphurit',start:'2022/12/11 00:00',end:'00:45',time:45,stage:4},
            {id:165,Artist:'whal & dolph',start:'2022/12/11 01:00',end:'01:45',time:45,stage:4},
            {id:120,Artist:'คณะสีหยืด',start:'2022/12/11 15:15',end:'15:45',time:30,stage:5},
            {id:121,Artist:'bad baboon',start:'2022/12/11 16:00',end:'16:30',time:30,stage:5},
            {id:122,Artist:'yourmood',start:'2022/12/11 16:45',end:'17:15',time:30,stage:5},
            {id:123,Artist:'sarah salola',start:'2022/12/11 17:30',end:'18:00',time:30,stage:5},
            {id:124,Artist:'no one else',start:'2022/12/11 18:15',end:'18:45',time:30,stage:5},
            {id:125,Artist:'uncle ben',start:'2022/12/11 19:00',end:'19:30',time:30,stage:5},
            {id:126,Artist:'temp.',start:'2022/12/11 19:45',end:'20:15',time:30,stage:5},
            {id:127,Artist:'death of heather',start:'2022/12/11 20:30',end:'21:00',time:30,stage:5},
            {id:128,Artist:'solitude is bliss',start:'2022/12/11 21:15',end:'21:45',time:30,stage:5},
            {id:129,Artist:'yented',start:'2022/12/11 22:00',end:'22:30',time:30,stage:5},
            {id:130,Artist:`zweed n' rppl`,start:'2022/12/11 22:45',end:'23:15',time:30,stage:5},
            {id:131,Artist:'potato (acoustic)',start:'2022/12/11 16:00',end:'16:45',time:45,stage:6},
            {id:132,Artist:'sammii',start:'2022/12/11 17:00',end:'17:30',time:30,stage:6},
            {id:133,Artist:'landokmai',start:'2022/12/11 17:45',end:'18:15',time:30,stage:6},
            {id:134,Artist:'youth brush',start:'2022/12/11 18:30',end:'19:00',time:30,stage:6},
            {id:135,Artist:'มนัสวีร์',start:'2022/12/11 19:15',end:'19:45',time:30,stage:6},
            {id:136,Artist:'ดวงดาวเดียวดาย',start:'2022/12/11 20:00',end:'20:30',time:30,stage:6},
            {id:137,Artist:'stoondio',start:'2022/12/11 20:45',end:'21:15',time:30,stage:6},
            {id:138,Artist:'southern boys',start:'2022/12/11 21:30',end:'22:00',time:30,stage:6},
            {id:139,Artist:'อพาร์ตเมนต์คุณป้า',start:'2022/12/11 22:15',end:'22:45',time:30,stage:6},
            {id:140,Artist:'random dance',start:'2022/12/11 14:00',end:'14:40',time:40,stage:7},
            {id:141,Artist:'phranakhon ensemble',start:'2022/12/11 15:00',end:'15:45',time:45,stage:7},
            {id:142,Artist:'tofee',start:'2022/12/11 16:00',end:'16:30',time:30,stage:7},
            {id:166,Artist:'t!ne',start:'2022/12/11 16:30',end:'17:00',time:30,stage:7},
            {id:143,Artist:'tndtle',start:'2022/12/11 17:00',end:'17:30',time:30,stage:7},
            {id:144,Artist:'rattanr vinyl set',start:'2022/12/11 17:45',end:'18:45',time:60,stage:7},
            {id:145,Artist:'shata',start:'2022/12/11 19:00',end:'19:30',time:30,stage:7},
            {id:146,Artist:'movie club',start:'2022/12/11 19:45',end:'22:30',time:165,stage:7},
            {id:147,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/11 18:30',end:'20:00',time:90,stage:8},
            {id:148,Artist:'vaseline band',start:'2022/12/11 20:15',end:'21:15',time:60,stage:8},
            {id:149,Artist:'grammy gold show zapp (หญิงลี ศรีจุมพล,ลำเพลิน วงศกร,เบลล์ นิภาดา,เวียง นฤมล,มีนตรา อินทิรา,newcountry)',start:'2022/12/11 21:30',end:'23:10',time:100,stage:8},
            {id:150,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/11 23:15',end:'00:15',time:60,stage:8},
            {id:151,Artist:'vaseline band',start:'2022/12/11 00:30',end:'01:30',time:60,stage:8},
            {id:152,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/11 01:45',end:'02:45',time:60,stage:8},
            {id:153,Artist:'dj ยกล้อ',start:'2022/12/11 02:45',end:'03:30',time:45,stage:8},
            {id:154,Artist:'akojorn project band',start:'2022/12/11 17:30',end:'18:30',time:60,stage:9},
            {id:155,Artist:'เอ๊ะ จิรากร',start:'2022/12/11 20:00',end:'21:00',time:60,stage:9},
            {id:156,Artist:'on the way',start:'2022/12/11 21:30',end:'22:30',time:60,stage:9},
            {id:157,Artist:'paradox',start:'2022/12/11 23:00',end:'00:00',time:60,stage:9},
            {id:158,Artist:'on the way',start:'2022/12/11 00:30',end:'01:30',time:60,stage:9},
            {id:159,Artist:'mocca garden',start:'2022/12/11 02:00',end:'03:00',time:60,stage:9},
            {id:160,Artist:'dj leo',start:'2022/12/11 03:00',end:'05:00',time:120,stage:9},
                ]

        const selectValue = (data,status)=>{
            if(status === 'delete'){
                setShowModal(false)
                setDataSelect(dataSelect.filter((value)=> value.id !== data.id))
                console.log('----',dataSelect.filter((value)=> value.id !== data.id))
            }else{
            dataSelect.push(data)
            setShowModal(false)
            }
        }
  return (
      <Container>
        
      {/* <ImgLogo src='https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/302752761_10158034750784364_4826772492468966894_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGADD_IFrjnpGdiekQXMLnmI2pNPTGpjtUjak09MamO1RbwmWmSif22biMxG54HRAnjcx-fAZwTllFqdGI2YBSL&_nc_ohc=aB0rfooew18AX9eqzvD&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfBODlx6VPGsE66gtNVXp0eGCIWRzplv1cVpZ6hNQXZtSg&oe=638DA5DD'/> */}
      <FlexDate>
    <TextDes>
        - develop by mint <XSURFACEText onClick={()=> window.open('https://xsurface.com/')}>XSURFACE</XSURFACEText> - 
    </TextDes>
    </FlexDate>
    <FlexStage>
        <DivStage>
        <DotColor bgColor={'#0c545c'}/>
        <TextStage>Mountain stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#aa4088'}/>
        <TextStage>Cow stage </TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#9a031e'}/>
        <TextStage>Block stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#5c5cc6'}/>
        <TextStage>Egg stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#003d5b'}/>
        <TextStage>Pepsi chic stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#fb6d10'}/>
        <TextStage>Kratom stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#f11548'}/>
        <TextStage>For-rest stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#fdbf52'}/>
        <TextStage>บาร์รำวง</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#138086'}/>
        <TextStage>อโคจรผับ</TextStage>
        </DivStage>
    </FlexStage>

    <FlexDate>
    <DateConcert onClick={()=> setSelectDate(1)} bg={selectDate === 1 && true}>
        <TextDate>วันที่ 10</TextDate>
    </DateConcert>

    <DateConcert onClick={()=> setSelectDate(2)}  bg={selectDate === 2 && true}>
        <TextDate>วันที่ 11</TextDate>
    </DateConcert>
    </FlexDate>
    <FlexDate>
    <TextDes style={{color:'red'}}>
        ***กดที่ชื่อศิลปินเพื่อเลือก***
    </TextDes>
    </FlexDate>
    <ContainerTable>
    <FlexData>
        {defaultTime.map((data)=><TimeTable><TextTime>{new Date(data.dateData).getHours()}.00</TextTime></TimeTable>)}
    </FlexData>

    <FlexData>
            {defaultTime.map((data)=>
            <TimeTableArtis>
            {selectDate === 1 ? 
                dataSatgeFrist.map((value,key)=> 
                    new Date(value.start).getHours() === new Date(data.dateData).getHours() && 
                    <TabStage 
                    onClick={()=> setShowModal(value)}
                    border= {value.id === dataSelect.find(element => element.id === value.id)?.id && true }
                    top={   
                        value.stage === 1 ? '2%':
                        value.stage === 2 ? '13%':
                        value.stage === 3 ? '24%':
                        value.stage === 4 ? '35%':
                        value.stage === 5 ? '46%':
                        value.stage === 6 ? '57%':
                        value.stage === 7 ? '68%':
                        value.stage === 8 ? '79%':
                        value.stage === 9 && '90%'
                        }
                    width={(value.time/60)*100}
                    bgColor={
                        value.stage === 1 ?'#0c545c':
                        value.stage === 2 ? '#aa4088':
                        value.stage === 3 ? '#9a031e':
                        value.stage === 4 ?'#5c5cc6':
                        value.stage === 5 ? '#003d5b':
                        value.stage === 6 ? '#fb6d10':
                        value.stage === 7 ? '#f11548':
                        value.stage === 8 ? '#fdbf52':
                        value.stage === 9 && '#138086'
                        }
                    left={(new Date(value.start).getMinutes()/60)*100}
                    >
                    {value.id === dataSelect.find(element => element.id === value.id)?.id && 
                    <XStage>x</XStage>
                    } 
                    <TextArtist color={
                                        value.stage === 6 ||
                                        value.stage === 8 && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    ): 
                    dataSatgeSecond.map((value,key)=> 
                    new Date(value.start).getHours() === new Date(data.dateData).getHours() && 
                    <TabStage 
                    onClick={()=> setShowModal(value)}
                    border= {value.id === dataSelect.find(element => element.id === value.id)?.id && true }
                    top={   
                        value.stage === 1 ? '2%':
                        value.stage === 2 ? '13%':
                        value.stage === 3 ? '24%':
                        value.stage === 4 ? '35%':
                        value.stage === 5 ? '46%':
                        value.stage === 6 ? '57%':
                        value.stage === 7 ? '68%':
                        value.stage === 8 ? '79%':
                        value.stage === 9 && '90%'
                        }
                    width={(value.time/60)*100}
                    bgColor={
                        value.stage === 1 ?'#0c545c':
                        value.stage === 2 ? '#aa4088':
                        value.stage === 3 ? '#9a031e':
                        value.stage === 4 ?'#5c5cc6':
                        value.stage === 5 ? '#003d5b':
                        value.stage === 6 ? '#fb6d10':
                        value.stage === 7 ? '#f11548':
                        value.stage === 8 ? '#fdbf52':
                        value.stage === 9 && '#138086'
                        }
                    left={(new Date(value.start).getMinutes()/60)*100}
                    >
                    {value.id === dataSelect.find(element => element.id === value.id)?.id && 
                    <XStage>x</XStage>
                    } 
                    <TextArtist color={
                                        value.stage === 6 ||
                                        value.stage === 8 && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    )
                    
                    }
            </TimeTableArtis>)}
    </FlexData>
    </ContainerTable>

<DivSelectDataArtist>
<SelectDataArtist>
    ***รายชื่อศิลปินที่เลือก วันที่ {selectDate === 1 ? '10':'11'}*** เลือกเสร็จแล้วกดแคปหน้าจอรายชื่อศิลปินที่เลือก
</SelectDataArtist>

    {selectDate === 1 ?
    <>
    <>
    {dataSelect?.map((data,key)=>
    new Date(data.start).getDate() === 10 &&
    new Date(data.start).getHours() > 4 && 
    <SelectDataArtist>
    {data.Artist} - {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น. -&nbsp;
    <TextArtistSelect
    color={
        data.stage === 1 ?'#0c545c':
        data.stage === 2 ? '#aa4088':
        data.stage === 3 ? '#9a031e':
        data.stage === 4 ?'#5c5cc6':
        data.stage === 5 ? '#003d5b':
        data.stage === 6 ? '#fb6d10':
        data.stage === 7 ? '#f11548':
        data.stage === 8 ? '#fdbf52':
        data.stage === 9 && '#138086'
        }
    >
    {
                    data.stage === 1 ?'MOUNTAIN STAGE':
                    data.stage === 2 ? 'COW STAGE':
                    data.stage === 3 ? 'BLOCK STAGE':
                    data.stage === 4 ?'EGG STAGE':
                    data.stage === 5 ? 'PEPSI CHIC STAGE':
                    data.stage === 6 ? 'KRATOM STAGE':
                    data.stage === 7 ? 'FOR-REST STAGE':
                    data.stage === 8 ? 'บาร์รำวง':
                    data.stage === 9 && 'อโคจรผับ'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}       
    </>
    <>{
    dataSelect?.map((data,key)=>
    new Date(data.start).getDate() === 10 &&
    new Date(data.start).getHours() < 4 && 
    <SelectDataArtist>
    {data.Artist} - {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น. -&nbsp;
    <TextArtistSelect
    color={
        data.stage === 1 ?'#0c545c':
        data.stage === 2 ? '#aa4088':
        data.stage === 3 ? '#9a031e':
        data.stage === 4 ?'#5c5cc6':
        data.stage === 5 ? '#003d5b':
        data.stage === 6 ? '#fb6d10':
        data.stage === 7 ? '#f11548':
        data.stage === 8 ? '#fdbf52':
        data.stage === 9 && '#138086'
        }
    >
    {
                    data.stage === 1 ?'MOUNTAIN STAGE':
                    data.stage === 2 ? 'COW STAGE':
                    data.stage === 3 ? 'BLOCK STAGE':
                    data.stage === 4 ?'EGG STAGE':
                    data.stage === 5 ? 'PEPSI CHIC STAGE':
                    data.stage === 6 ? 'KRATOM STAGE':
                    data.stage === 7 ? 'FOR-REST STAGE':
                    data.stage === 8 ? 'บาร์รำวง':
                    data.stage === 9 && 'อโคจรผับ'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}</>
    </>
    :
    <>
    <>
    {dataSelect?.map((data)=>
    new Date(data.start).getDate() === 11 &&
    new Date(data.start).getHours() > 4 && 
    <SelectDataArtist>
    {data.Artist} - {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น. -&nbsp;
    <TextArtistSelect
    color={
        data.stage === 1 ?'#0c545c':
        data.stage === 2 ? '#aa4088':
        data.stage === 3 ? '#9a031e':
        data.stage === 4 ?'#5c5cc6':
        data.stage === 5 ? '#003d5b':
        data.stage === 6 ? '#fb6d10':
        data.stage === 7 ? '#f11548':
        data.stage === 8 ? '#fdbf52':
        data.stage === 9 && '#138086'
        }
    >
    {
                    data.stage === 1 ?'MOUNTAIN STAGE':
                    data.stage === 2 ? 'COW STAGE':
                    data.stage === 3 ? 'BLOCK STAGE':
                    data.stage === 4 ?'EGG STAGE':
                    data.stage === 5 ? 'PEPSI CHIC STAGE':
                    data.stage === 6 ? 'KRATOM STAGE':
                    data.stage === 7 ? 'FOR-REST STAGE':
                    data.stage === 8 ? 'บาร์รำวง':
                    data.stage === 9 && 'อโคจรผับ'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}
    </>
    <>
    {dataSelect?.map((data)=>
    new Date(data.start).getDate() === 11 &&
    new Date(data.start).getHours() < 4 && 
    <SelectDataArtist>
    {data.Artist} - {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น. -&nbsp;
    <TextArtistSelect
    color={
        data.stage === 1 ?'#0c545c':
        data.stage === 2 ? '#aa4088':
        data.stage === 3 ? '#9a031e':
        data.stage === 4 ?'#5c5cc6':
        data.stage === 5 ? '#003d5b':
        data.stage === 6 ? '#fb6d10':
        data.stage === 7 ? '#f11548':
        data.stage === 8 ? '#fdbf52':
        data.stage === 9 && '#138086'
        }
    >
    {
                    data.stage === 1 ?'MOUNTAIN STAGE':
                    data.stage === 2 ? 'COW STAGE':
                    data.stage === 3 ? 'BLOCK STAGE':
                    data.stage === 4 ?'EGG STAGE':
                    data.stage === 5 ? 'PEPSI CHIC STAGE':
                    data.stage === 6 ? 'KRATOM STAGE':
                    data.stage === 7 ? 'FOR-REST STAGE':
                    data.stage === 8 ? 'บาร์รำวง':
                    data.stage === 9 && 'อโคจรผับ'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}
    </>
    </>
    }


</DivSelectDataArtist>
                    {showModal !==false && 
                    dataSatgeFrist.map((value,key)=> 
                    <>
                    
                    <ModalArtist>
                    <X onClick={()=>setShowModal(false)}>
                        X
                    </X>
                    <TextName
                    bgColor={
                        showModal.stage === 1 ?'#0c545c':
                        showModal.stage === 2 ? '#aa4088':
                        showModal.stage === 3 ? '#9a031e':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#003d5b':
                        showModal.stage === 6 ? '#fb6d10':
                        showModal.stage === 7 ? '#f11548':
                        showModal.stage === 8 ? '#fdbf52':
                        showModal.stage === 9 && '#138086'
                        }
                    >{showModal.Artist}</TextName>
                    <TextModal>
                    เวลา {new Date(showModal.start).getHours() < 10 ? '0'+new Date(showModal.start).getHours() :new Date(showModal.start).getHours()}:{new Date(showModal.start).getMinutes() === 0 ? '00':new Date(showModal.start).getMinutes()}-
                    {showModal.end}
                    </TextModal>
                    <TextModal>
                    เวลาในการแสดง {showModal.time} นาที
                    </TextModal>
                    <TextModal
                    bgColor={
                        showModal.stage === 1 ?'#0c545c':
                        showModal.stage === 2 ? '#aa4088':
                        showModal.stage === 3 ? '#9a031e':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#003d5b':
                        showModal.stage === 6 ? '#fb6d10':
                        showModal.stage === 7 ? '#f11548':
                        showModal.stage === 8 ? '#fdbf52':
                        showModal.stage === 9 && '#138086'
                        }
                    >
                    เวที {
                    showModal.stage === 1 ?'MOUNTAIN STAGE':
                    showModal.stage === 2 ? 'COW STAGE':
                    showModal.stage === 3 ? 'BLOCK STAGE':
                    showModal.stage === 4 ?'EGG STAGE':
                    showModal.stage === 5 ? 'PEPSI CHIC STAGE':
                    showModal.stage === 6 ? 'KRATOM STAGE':
                    showModal.stage === 7 ? 'FOR-REST STAGE':
                    showModal.stage === 8 ? 'บาร์รำวง':
                    showModal.stage === 9 && 'อโคจรผับ'}
                    </TextModal>
                    <ButtonSelect
                    onClick={()=>
                        showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        selectValue(showModal,'delete') : selectValue(showModal,1)
                    }
                    bgColor={
                        showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        '#cecece' :
                        showModal.stage === 1 ?'#0c545c':
                        showModal.stage === 2 ? '#aa4088':
                        showModal.stage === 3 ? '#9a031e':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#003d5b':
                        showModal.stage === 6 ? '#fb6d10':
                        showModal.stage === 7 ? '#f11548':
                        showModal.stage === 8 ? '#fdbf52':
                        showModal.stage === 9 && '#138086'
                        }
                        color={
                            showModal.stage === 6 ||
                            showModal.stage === 8 && true}
                    >
                    { showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        'ลบ' :'เลือก'}
                    </ButtonSelect>
                    </ModalArtist>
                    </>
                    
                    )}
    </Container>
    )
}

export default Bmmf