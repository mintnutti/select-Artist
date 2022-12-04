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
  margin-top:80px;
  position:relative ;
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
width:90%;
display:flex;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
margin-bottom:10px ;
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
width:6.25%;
height:40px;
background-color:#252525 ;
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
margin-bottom:30px ;
`



const ModalArtist = styled.div` 
position:absolute;
width:400px;
height:250px;
background-color:#fafafa;
box-shadow: 0 3px 20px #00000002;
z-index:10 ;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius:40px ;
padding-left:10px;
padding-right:10px ;
`

const X = styled.div` 
position:absolute;
width:40px;
height:40px;
background-color:#FFFFFF;
border:3px solid #000000 ;
z-index:11 ;
top: -10px;
right:-10px ;
border-radius:100px ;
font-size:1.6rem ;
cursor:pointer ;
padding-top:5px ;
padding-left:2px ;
padding-right:2px ;
`
const TextName = styled.div` 
font-size:1.5rem ;
color:${({bgColor})=>bgColor} ;
margin-top:40px;
margin-bottom:10px ;
text-transform: uppercase;
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
function Bmmf () {

    const [showModal,setShowModal]= useState(false)
    const [dataSelect,setDataSelect]= useState([])

    const defaultTime =[
        {dateData:'2022-12-10 14:00',start:'1'},
        {dateData:'2022-12-10 15:00',start:'2'},
        {dateData:'2022-12-10 16:00',start:'3'},
        {dateData:'2022-12-10 17:00',start:'4'},
        {dateData:'2022-12-10 18:00',start:'5'},
        {dateData:'2022-12-10 19:00',start:'6'},
        {dateData:'2022-12-10 20:00',start:'7'},
        {dateData:'2022-12-10 21:00',start:'8'},
        {dateData:'2022-12-10 22:00',start:'9'},
        {dateData:'2022-12-10 23:00',start:'10'},
        {dateData:'2022-12-10 00:00',start:'11'},
        {dateData:'2022-12-10 01:00',start:'12'},
        {dateData:'2022-12-10 02:00',start:'13'},
        {dateData:'2022-12-10 03:00',start:'14'},
        {dateData:'2022-12-10 04:00',start:'15'},
        ]

        const dataSatgeFrist =[
            {id:1,Artist:'Klear',start:'2022-12-10 17:30',end:'18:15',time:45,stage:1},
            {id:2,Artist:'Getsunova',start:'2022-12-10 18:30',end:'19:15',time:45,stage:1},
            {id:3,Artist:'Num kala',start:'2022-12-10 19:30',end:'20:15',time:45,stage:1},
            {id:4,Artist:'Big ass',start:'2022-12-10 20:30',end:'21:15',time:45,stage:1},
            {id:5,Artist:'Clocktail',start:'2022-12-10 21:30',end:'22:15',time:45,stage:1},
            {id:6,Artist:'Potato',start:'2022-12-10 22:30',end:'23:15',time:45,stage:1},
            {id:7,Artist:'Slot machine',start:'2022-12-10 23:30',end:'00:15',time:45,stage:1},
            {id:8,Artist:'Boom boom cash',start:'2022-12-10 00:30',end:'01:00',time:30,stage:1},
            {id:9,Artist:'F.hero x bear khuckle',start:'2022-12-10 01:00',end:'02:00',time:60,stage:1},
            {id:10,Artist:'Ally',start:'2022-12-10 17:15',end:'17:45',time:30,stage:2},
            {id:11,Artist:'Zom marie',start:'2022-12-10 18:00',end:'18:45',time:45,stage:2},
            {id:12,Artist:'Violette wautier',start:'2022-12-10 19:00',end:'19:45',time:45,stage:2},
            {id:13,Artist:'Bowkylion',start:'2022-12-10 20:00',end:'20:45',time:45,stage:2},
            {id:14,Artist:'The parkinson',start:'2022-12-10 21:00',end:'21:45',time:45,stage:2},
            {id:15,Artist:'Nont tanont',start:'2022-12-10 22:00',end:'22:45',time:45,stage:2},
            {id:16,Artist:'Stamp',start:'2022-12-10 23:00',end:'23:45',time:45,stage:2},
            {id:17,Artist:'Lipta',start:'2022-12-10 00:00',end:'00:45',time:45,stage:2},
            {id:18,Artist:'Tattoo colour',start:'2022-12-10 01:00',end:'01:45',time:45,stage:2},
            {id:19,Artist:'The darkest romance',start:'2022-12-10 16:00',end:'16:45',time:45,stage:3},
            {id:20,Artist:'Paper planes',start:'2022-12-10 17:00',end:'17:45',time:45,stage:3},
            {id:21,Artist:'Baby mic candy(jp)',start:'2022-12-10 18:00',end:'18:30',time:30,stage:3},
            {id:22,Artist:'Gmmtv super band(Bright x win x krist x nanon)',start:'2022-12-10 18:45',end:'20:15',time:90,stage:3},
            {id:23,Artist:'Billkin x pp krit',start:'2022-12-10 20:30',end:'21:15',time:45,stage:3},
            {id:24,Artist:'the toys',start:'2022-12-10 21:30',end:'22:15',time:45,stage:3},
            {id:25,Artist:'lham somphol',start:'2022-12-10 22:30',end:'23:15',time:45,stage:3},
            {id:26,Artist:'vannda(hh)',start:'2022-12-10 23:20',end:'00:15',time:45,stage:3},
            {id:27,Artist:'twopee southside x xoflow',start:'2022-12-10 00:30',end:'01.15',time:45,stage:3},
            {id:28,Artist:'bomb at track',start:'2022-12-10 01:30',end:'02:15',time:45,stage:3},
            {id:29,Artist:'sweet mullet',start:'2022-12-10 02:30',end:'03:15',time:45,stage:3},
            {id:30,Artist:'the whitest crow',start:'2022-12-10 15:00',end:'15:45',time:45,stage:4},
            {id:31,Artist:'h 3 f',start:'2022-12-10 16:00',end:'16:45',time:45,stage:4},
            {id:32,Artist:'luss',start:'2022-12-10 17:00',end:'17:45',time:45,stage:4},
            {id:33,Artist:'เขียนไขและวานิช',start:'2022-12-10 18:00',end:'18:45',time:45,stage:4},
            {id:34,Artist:'interflow: chapter 1 presentted by bpm plus asia',start:'2022-12-10 19:00',end:'19:45',time:45,stage:4},
            {id:35,Artist:'prtrickrnanda',start:'2022-12-10 20:00',end:'20:45',time:45,stage:4},
            {id:36,Artist:'ไปส่งกู บขส.ดู๊',start:'2022-12-10 21:00',end:'21:45',time:45,stage:4},
            {id:37,Artist:'mirrr',start:'2022-12-10 22:00',end:'22:45',time:45,stage:4},
            {id:38,Artist:'desktop error',start:'2022-12-10 23:00',end:'23:45',time:45,stage:4},
            {id:39,Artist:'srfeplanet',start:'2022-12-10 00:00',end:'00:45',time:45,stage:4},
            {id:40,Artist:'yew',start:'2022-12-10 15:15',end:'15:45',time:30,stage:5},
            {id:41,Artist:'television off',start:'2022-12-10 16:00',end:'16:30',time:30,stage:5},
            {id:42,Artist:'freehand',start:'2022-12-10 16:45',end:'17:15',time:30,stage:5},
            {id:43,Artist:'purpeech',start:'2022-12-10 17:30',end:'18:00',time:30,stage:5},
            {id:44,Artist:'quicksand bed',start:'2022-12-10 18:15',end:'18:45',time:30,stage:5},
            {id:45,Artist:'the white hair cut',start:'2022-12-10 19:00',end:'19:30',time:30,stage:5},
            {id:46,Artist:'blackbeans',start:'2022-12-10 19:45',end:'20:15',time:30,stage:5},
            {id:47,Artist:'hens',start:'2022-12-10 20:30',end:'21:00',time:30,stage:5},
            {id:48,Artist:'bell warisara',start:'2022-12-10 21:15',end:'21:45',time:30,stage:5},
            {id:49,Artist:'serious bacon',start:'2022-12-10 22:00',end:'22:30',time:30,stage:5},
            {id:50,Artist:'slapkiss',start:'2022-12-10 22:45',end:'23:15',time:30,stage:5},
            {id:51,Artist:'_less',start:'2022-12-10 16:00',end:'16:30',time:30,stage:6},
            {id:52,Artist:'common people like you',start:'2022-12-10 16:45',end:'17:15',time:30,stage:6},
            {id:53,Artist:'kiki',start:'2022-12-10 17:30',end:'18:00',time:30,stage:6},
            {id:54,Artist:'panpan yeeyee',start:'2022-12-10 18:15',end:'18:45',time:30,stage:6},
            {id:55,Artist:'tinn',start:'2022-12-10 19:00',end:'19:30',time:30,stage:6},
            {id:56,Artist:'tofu',start:'2022-12-10 19:45',end:'20:15',time:30,stage:6},
            {id:57,Artist:'door plant',start:'2022-12-10 20:30',end:'21:00',time:30,stage:6},
            {id:58,Artist:'summer dress',start:'2022-12-10 21:15',end:'21:45',time:30,stage:6},
            {id:59,Artist:'hybs',start:'2022-12-10 22:00',end:'22:30',time:30,stage:6},
            {id:60,Artist:'random dance',start:'2022-12-10 14:00',end:'14:40',time:40,stage:7},
            {id:61,Artist:'phranakhon ensemble',start:'2022-12-10 15:00',end:'15:45',time:45,stage:7},
            {id:62,Artist:'good mood',start:'2022-12-10 16:00',end:'16:45',time:45,stage:7},
            {id:63,Artist:'gmm academy',start:'2022-12-10 17:00',end:'18:30',time:90,stage:7},
            {id:64,Artist:'yes indeed',start:'2022-12-10 18:45',end:'19:30',time:45,stage:7},
            {id:65,Artist:'shata',start:'2022-12-10 19:45',end:'20:15',time:30,stage:7},
            {id:66,Artist:'movie club',start:'2022-12-10 20:30',end:'23:00',time:150,stage:7},
            {id:67,Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 18:30',end:'20:00',time:90,stage:8},
            {id:68,Artist:'vaseline band',start:'2022-12-10 20:15',end:'21:15',time:60,stage:8},
            {id:69,Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 21:30',end:'22:30',time:60,stage:8},
            {id:70,Artist:'จ๊ะ นงผณี',start:'2022-12-10 22:45',end:'23:45',time:60,stage:8},
            {id:71,Artist:'vaseline band',start:'2022-12-10 00:00',end:'01:00',time:60,stage:8},
            {id:72,Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 01:15',end:'02:15',time:60,stage:8},
            {id:73,Artist:'dj ยกล้อ',start:'2022-12-10 02:30',end:'03:30',time:60,stage:8},
            {id:74,Artist:'akojorn project band',start:'2022-12-10 17:30',end:'18:30',time:60,stage:9},
            {id:75,Artist:'ปีเตอร์ คอร์ป x จั๊ก ชวิน x ต้าร์ mr.team',start:'2022-12-10 20:00',end:'21:00',time:60,stage:9},
            {id:76,Artist:'on the way',start:'2022-12-10 21:30',end:'22:30',time:60,stage:9},
            {id:77,Artist:'pimrypie',start:'2022-12-10 23:00',end:'00:00',time:60,stage:9},
            {id:78,Artist:'on the way',start:'2022-12-10 00:30',end:'01:30',time:60,stage:9},
            {id:79,Artist:'jspkk (แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก)',start:'2022-12-10 02:00',end:'02:00',time:60,stage:9},
            {id:80,Artist:'dj leo',start:'2022-12-10 03:00',end:'05:00',time:120,stage:9},
            ]

            const dataSatgeSecond =[
                {Artist:'Klear',start:'2022-12-10 17:30',end:'18:15',time:45,stage:1},
                {Artist:'Getsunova',start:'2022-12-10 18:30',end:'19:15',time:45,stage:1},
                {Artist:'Num kala',start:'2022-12-10 19:30',end:'20:15',time:45,stage:1},
                {Artist:'Big ass',start:'2022-12-10 20:30',end:'21:15',time:45,stage:1},
                {Artist:'Clocktail',start:'2022-12-10 21:30',end:'22:15',time:45,stage:1},
                {Artist:'Potato',start:'2022-12-10 22:30',end:'23:15',time:45,stage:1},
                {Artist:'Slot machine',start:'2022-12-10 23:30',end:'00:15',time:45,stage:1},
                {Artist:'Boom boom cash',start:'2022-12-10 00:30',end:'01:00',time:30,stage:1},
                {Artist:'F.hero x bear khuckle',start:'2022-12-10 01:00',end:'02:00',time:60,stage:1},
                {Artist:'Ally',start:'2022-12-10 17:15',end:'17:45',time:30,stage:2},
                {Artist:'Zom marie',start:'2022-12-10 18:00',end:'18:45',time:45,stage:2},
                {Artist:'Violette wautier',start:'2022-12-10 19:00',end:'19:45',time:45,stage:2},
                {Artist:'Bowkylion',start:'2022-12-10 20:00',end:'20:45',time:45,stage:2},
                {Artist:'The parkinson',start:'2022-12-10 21:00',end:'21:45',time:45,stage:2},
                {Artist:'Nont tanont',start:'2022-12-10 22:00',end:'22:45',time:45,stage:2},
                {Artist:'Stamp',start:'2022-12-10 23:00',end:'23:45',time:45,stage:2},
                {Artist:'Lipta',start:'2022-12-10 00:00',end:'00:45',time:45,stage:2},
                {Artist:'Tattoo colour',start:'2022-12-10 01:00',end:'01:45',time:45,stage:2},
                {Artist:'The darkest romance',start:'2022-12-10 16:00',end:'16:45',time:45,stage:3},
                {Artist:'Paper planes',start:'2022-12-10 17:00',end:'17:45',time:45,stage:3},
                {Artist:'Baby mic candy(jp)',start:'2022-12-10 18:00',end:'18:30',time:30,stage:3},
                {Artist:'Gmmtv super band(Bright x win x krist x nanon)',start:'2022-12-10 18:45',end:'20:15',time:90,stage:3},
                {Artist:'Billkin x pp krit',start:'2022-12-10 20:30',end:'21:15',time:45,stage:3},
                {Artist:'the toys',start:'2022-12-10 21:30',end:'22:15',time:45,stage:3},
                {Artist:'lham somphol',start:'2022-12-10 22:30',end:'23:15',time:45,stage:3},
                {Artist:'vannda(hh)',start:'2022-12-10 23:20',end:'00:15',time:45,stage:3},
                {Artist:'twopee southside x xoflow',start:'2022-12-10 00:30',end:'01.15',time:45,stage:3},
                {Artist:'bomb at track',start:'2022-12-10 01:30',end:'02:15',time:45,stage:3},
                {Artist:'sweet mullet',start:'2022-12-10 02:30',end:'03:15',time:45,stage:3},
                {Artist:'the whitest crow',start:'2022-12-10 15:00',end:'15:45',time:45,stage:4},
                {Artist:'h 3 f',start:'2022-12-10 16:00',end:'16:45',time:45,stage:4},
                {Artist:'luss',start:'2022-12-10 17:00',end:'17:45',time:45,stage:4},
                {Artist:'เขียนไขและวานิช',start:'2022-12-10 18:00',end:'18:45',time:45,stage:4},
                {Artist:'interflow: chapter 1 presentted by bpm plus asia',start:'2022-12-10 19:00',end:'19:45',time:45,stage:4},
                {Artist:'prtrickrnanda',start:'2022-12-10 20:00',end:'20:45',time:45,stage:4},
                {Artist:'ไปส่งกู บขส.ดู๊',start:'2022-12-10 21:00',end:'21:45',time:45,stage:4},
                {Artist:'mirrr',start:'2022-12-10 22:00',end:'22:45',time:45,stage:4},
                {Artist:'desktop error',start:'2022-12-10 23:00',end:'23:45',time:45,stage:4},
                {Artist:'srfeplanet',start:'2022-12-10 00:00',end:'00:45',time:45,stage:4},
                {Artist:'yew',start:'2022-12-10 15:15',end:'15:45',time:30,stage:5},
                {Artist:'television off',start:'2022-12-10 16:00',end:'16:30',time:30,stage:5},
                {Artist:'freehand',start:'2022-12-10 16:45',end:'17:15',time:30,stage:5},
                {Artist:'purpeech',start:'2022-12-10 17:30',end:'18:00',time:30,stage:5},
                {Artist:'quicksand bed',start:'2022-12-10 18:15',end:'18:45',time:30,stage:5},
                {Artist:'the white hair cut',start:'2022-12-10 19:00',end:'19:30',time:30,stage:5},
                {Artist:'blackbeans',start:'2022-12-10 19:45',end:'20:15',time:30,stage:5},
                {Artist:'hens',start:'2022-12-10 20:30',end:'21:00',time:30,stage:5},
                {Artist:'bell warisara',start:'2022-12-10 21:15',end:'21:45',time:30,stage:5},
                {Artist:'serious bacon',start:'2022-12-10 22:00',end:'22:30',time:30,stage:5},
                {Artist:'slapkiss',start:'2022-12-10 22:45',end:'23:15',time:30,stage:5},
                {Artist:'_less',start:'2022-12-10 16:00',end:'16:30',time:30,stage:6},
                {Artist:'common people like you',start:'2022-12-10 16:45',end:'17:15',time:30,stage:6},
                {Artist:'kiki',start:'2022-12-10 17:30',end:'18:00',time:30,stage:6},
                {Artist:'panpan yeeyee',start:'2022-12-10 18:15',end:'18:45',time:30,stage:6},
                {Artist:'tinn',start:'2022-12-10 19:00',end:'19:30',time:30,stage:6},
                {Artist:'tofu',start:'2022-12-10 19:45',end:'20:15',time:30,stage:6},
                {Artist:'door plant',start:'2022-12-10 20:30',end:'21:00',time:30,stage:6},
                {Artist:'summer dress',start:'2022-12-10 21:15',end:'21:45',time:30,stage:6},
                {Artist:'hybs',start:'2022-12-10 22:00',end:'22:30',time:30,stage:6},
                {Artist:'random dance',start:'2022-12-10 14:00',end:'14:40',time:40,stage:7},
                {Artist:'phranakhon ensemble',start:'2022-12-10 15:00',end:'15:45',time:45,stage:7},
                {Artist:'good mood',start:'2022-12-10 16:00',end:'16:45',time:45,stage:7},
                {Artist:'gmm academy',start:'2022-12-10 17:00',end:'18:30',time:90,stage:7},
                {Artist:'yes indeed',start:'2022-12-10 18:45',end:'19:30',time:45,stage:7},
                {Artist:'shata',start:'2022-12-10 19:45',end:'20:15',time:30,stage:7},
                {Artist:'movie club',start:'2022-12-10 20:30',end:'23:00',time:150,stage:7},
                {Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 18:30',end:'20:00',time:90,stage:8},
                {Artist:'vaseline band',start:'2022-12-10 20:15',end:'21:15',time:60,stage:8},
                {Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 21:30',end:'22:30',time:60,stage:8},
                {Artist:'จ๊ะ นงผณี',start:'2022-12-10 22:45',end:'23:45',time:60,stage:8},
                {Artist:'vaseline band',start:'2022-12-10 00:00',end:'01:00',time:60,stage:8},
                {Artist:'ระเบียบวาทะศิลป์',start:'2022-12-10 01:15',end:'02:15',time:60,stage:8},
                {Artist:'dj ยกล้อ',start:'2022-12-10 02:30',end:'03:30',time:60,stage:8},
                {Artist:'akojorn project band',start:'2022-12-10 17:30',end:'18:30',time:60,stage:9},
                {Artist:'ปีเตอร์ คอร์ป x จั๊ก ชวิน x ต้าร์ mr.team',start:'2022-12-10 20:00',end:'21:00',time:60,stage:9},
                {Artist:'on the way',start:'2022-12-10 21:30',end:'22:30',time:60,stage:9},
                {Artist:'pimrypie',start:'2022-12-10 23:00',end:'00:00',time:60,stage:9},
                {Artist:'on the way',start:'2022-12-10 00:30',end:'01:30',time:60,stage:9},
                {Artist:'jspkk (แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก)',start:'2022-12-10 02:00',end:'02:00',time:60,stage:9},
                {Artist:'dj leo',start:'2022-12-10 03:00',end:'05:00',time:120,stage:9},
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
        <DotColor bgColor={'#f6d55c'}/>
        <TextStage>Block stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#5c5cc6'}/>
        <TextStage>Egg stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#9fe7f5'}/>
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
    <FlexData>
        {defaultTime.map((data)=><TimeTable><TextTime>{new Date(data.dateData).getHours()}.00</TextTime></TimeTable>)}
    </FlexData>

    <FlexData>
    <DateConcert>
        <TextDate>วันที่ 10</TextDate>
    </DateConcert>
    </FlexData>

    <FlexData>
            {defaultTime.map((data)=>
            <TimeTableArtis>
                {dataSatgeFrist.map((value,key)=> 
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
                        value.stage === 3 ? '#f6d55c':
                        value.stage === 4 ?'#5c5cc6':
                        value.stage === 5 ? '#9fe7f5':
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
                                        value.stage === 3 || 
                                        value.stage === 5 ||
                                        value.stage === 6 ||
                                        value.stage === 8 && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    )}
            </TimeTableArtis>)}
    </FlexData>


   <FlexData>
    <DateConcert>
        <TextDate>วันที่ 11</TextDate>
    </DateConcert>
    </FlexData>

    <FlexData>
            {defaultTime.map((data)=>
            <TimeTableArtis >
                {dataSatgeSecond.map((value)=> 
                    new Date(value.start).getHours() === new Date(data.dateData).getHours() && 
                    <TabStage 
                    top={   
                        value.stage === 1 ? '0%':
                        value.stage === 2 ? '11.11%':
                        value.stage === 3 ? '22.22%':
                        value.stage === 4 ? '33.33%':
                        value.stage === 5 ? '44.44%':
                        value.stage === 6 ? '55.55%':
                        value.stage === 7 ? '66.66%':
                        value.stage === 8 ? '77.77%':
                        value.stage === 9 && '88.88%'
                        }
                    width={(value.time/60)*100}
                    bgColor={
                        value.stage === 1 ?'#0c545c':
                        value.stage === 2 ? '#aa4088':
                        value.stage === 3 ? '#f6d55c':
                        value.stage === 4 ?'#5c5cc6':
                        value.stage === 5 ? '#9fe7f5':
                        value.stage === 6 ? '#fb6d10':
                        value.stage === 7 ? '#f11548':
                        value.stage === 8 ? '#fdbf52':
                        value.stage === 9 && '#138086'
                        }
                    left={(new Date(value.start).getMinutes()/60)*100}
                    >
                    <TextArtist color={
                                        value.stage === 3 || 
                                        value.stage === 5 ||
                                        value.stage === 6 ||
                                        value.stage === 8 && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    )}
            </TimeTableArtis>)}
    </FlexData>

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
                        showModal.stage === 3 ? '#f6d55c':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#9fe7f5':
                        showModal.stage === 6 ? '#fb6d10':
                        showModal.stage === 7 ? '#f11548':
                        showModal.stage === 8 ? '#fdbf52':
                        showModal.stage === 9 && '#138086'
                        }
                    >{showModal.Artist}</TextName>
                    <TextModal>
                    เวลา {new Date(showModal.start).getHours()}:{new Date(showModal.start).getMinutes()}-
                    {showModal.end}
                    </TextModal>
                    <TextModal>
                    เวลาในการแสดง {showModal.time} นาที
                    </TextModal>
                    <TextModal
                    bgColor={
                        showModal.stage === 1 ?'#0c545c':
                        showModal.stage === 2 ? '#aa4088':
                        showModal.stage === 3 ? '#f6d55c':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#9fe7f5':
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
                        showModal.stage === 3 ? '#f6d55c':
                        showModal.stage === 4 ?'#5c5cc6':
                        showModal.stage === 5 ? '#9fe7f5':
                        showModal.stage === 6 ? '#fb6d10':
                        showModal.stage === 7 ? '#f11548':
                        showModal.stage === 8 ? '#fdbf52':
                        showModal.stage === 9 && '#138086'
                        }
                        color={
                            showModal.stage === 3 || 
                            showModal.stage === 5 ||
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
