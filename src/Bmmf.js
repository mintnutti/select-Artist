import React, { useState,useRef } from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

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
  width: 73%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  text-align:center ;
  margin-bottom:20px ;
  margin-top:10px;
  position:relative ;
  overflow-x:scroll ;
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color:#f7f7f7;
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #e6e6e6; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d6d6d6; 
}
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
width:80px;
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
font-weight:900;
color:${({color})=>color};
width:90%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
-webkit-text-stroke: 0.1px black;
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
border:1px solid #9a031e ;
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
text-align: center;
`

const TextDes= styled.div` 
font-size:0.75rem ;
color:#252525 ;
margin-top:10px;
margin-bottom:10px ;
text-transform: uppercase;
display: flex;
line-height: 24px;
`

const FBText= styled.span` 
font-size:0.75rem ;
color:#0866FF;
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
text-align: center;
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
padding-bottom:10px ;
height:fit-content ;
padding-right:10px;
padding-left:10px;
border-radius: 40px;
position: relative;

`
const SelectDataArtist = styled.div`
margin-bottom:10px ;
text-transform: uppercase;
font-size: 1rem;
text-align:center ;
font-weight: bold;
`

const DivImgLogo =styled.img`
width: 80px;
`
const DivImgBG =styled.img`
position: absolute;
z-index: -1;
left: 0;
width: -webkit-fill-available ;
border-radius: 40px;
height: -webkit-fill-available;
`

const DivTextDate = styled.div`
font-size: x-large;
color:#0c337a;
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
        {dateData:'2023/12/09 14:00',start:'1'},
        {dateData:'2023/12/09 15:00',start:'2'},
        {dateData:'2023/12/09 16:00',start:'3'},
        {dateData:'2023/12/09 17:00',start:'4'},
        {dateData:'2023/12/09 18:00',start:'5'},
        {dateData:'2023/12/09 19:00',start:'6'},
        {dateData:'2023/12/09 20:00',start:'7'},
        {dateData:'2023/12/09 21:00',start:'8'},
        {dateData:'2023/12/09 22:00',start:'9'},
        {dateData:'2023/12/09 23:00',start:'10'},
        {dateData:'2023/12/09 00:00',start:'11'},
        {dateData:'2023/12/09 01:00',start:'12'},
        {dateData:'2023/12/09 02:00',start:'13'},
        {dateData:'2023/12/09 03:00',start:'14'},
        ]

        const dataSatgeFrist =[
            {id:1,Artist:'Num kala',start:'2022/12/09 18:00',end:'19:00',time:60,stage:1},
            {id:2,Artist:'Big ass',start:'2022/12/09 19:15',end:'20:15',time:60,stage:1},
            {id:3,Artist:'Cocktail',start:'2022/12/09 20:30',end:'21:30',time:60,stage:1},
            {id:4,Artist:'Potato',start:'2022/12/09 21:45',end:'22:45',time:60,stage:1},
            {id:5,Artist:'Slot machine',start:'2022/12/09 23:00',end:'00:00',time:60,stage:1},
            {id:6,Artist:'Joeyboy',start:'2022/12/09 00:15',end:'01:15',time:60,stage:1},

            {id:7,Artist:'Diamon narakorn',start:'2022/12/09 17:00',end:'17:20',time:20,stage:2},
            {id:8,Artist:'Zom marie',start:'2022/12/09 17:30',end:'18:15',time:45,stage:2},
            {id:9,Artist:'Violette wautier',start:'2022/12/09 18:30',end:'19:15',time:45,stage:2},
            {id:10,Artist:'Bowkylion',start:'2022/12/09 19:30',end:'20:15',time:45,stage:2},
            {id:11,Artist:'ink waruntorn',start:'2022/12/09 20:30',end:'21:15',time:45,stage:2},
            {id:12,Artist:'Lipta',start:'2022/12/09 21:30',end:'22:15',time:45,stage:2},
            {id:13,Artist:'Nont tanont',start:'2022/12/09 22:30',end:'23:15',time:45,stage:2},
            {id:14,Artist:'Tattoo colour',start:'2022/12/09 23:30',end:'00:15',time:45,stage:2},

            {id:15,Artist:'atlas',start:'2022/12/09 16:30',end:'17:15',time:45,stage:3},
            {id:16,Artist:'pixxie',start:'2022/12/09 17:30',end:'18:15',time:45,stage:3},
            {id:17,Artist:'4eve',start:'2022/12/09 18:30',end:'19:15',time:45,stage:3},
            {id:18,Artist:'Billkin x pp krit',start:'2022/12/09 19:30',end:'20:15',time:90,stage:3},
            {id:19,Artist:'the toys',start:'2022/12/09 20:30',end:'21:15',time:45,stage:3},
            {id:20,Artist:'safeplanet',start:'2022/12/09 21:30',end:'22:15',time:45,stage:3},
            {id:21,Artist:'milli',start:'2022/12/09 22:30',end:'23:15',time:45,stage:3},
            {id:22,Artist:'joey phuwasit',start:'2022/12/09 23:30',end:'00:15',time:45,stage:3},
            {id:23,Artist:'Paper planes',start:'2022/12/09 00:30',end:'01.15',time:45,stage:3},
            {id:24,Artist:'Youngohm',start:'2022/12/09 01:30',end:'02:15',time:45,stage:3},

            {id:25,Artist:'the whitest crow',start:'2022/12/09 14:00',end:'14:45',time:45,stage:4},
            {id:26,Artist:'sarah salola',start:'2022/12/09 15:00',end:'15:45',time:45,stage:4},
            {id:27,Artist:'patrickananda',start:'2022/12/09 16:00',end:'16:45',time:45,stage:4},
            {id:28,Artist:'wendy wander (tw)',start:'2022/12/09 17:00',end:'17:45',time:45,stage:4},
            {id:29,Artist:'bonnadol',start:'2022/12/09 18:00',end:'18:45',time:45,stage:4},
            {id:30,Artist:'dongurizu (jp)',start:'2022/12/09 19:00',end:'19:45',time:45,stage:4},
            {id:31,Artist:'freehand',start:'2022/12/09 20:00',end:'20:45',time:45,stage:4},
            {id:32,Artist:'dept',start:'2022/12/09 21:00',end:'21:45',time:45,stage:4},
            {id:33,Artist:'yew',start:'2022/12/09 22:00',end:'22:45',time:45,stage:4},
            {id:34,Artist:'slur',start:'2022/12/09 23:00',end:'23:45',time:45,stage:4},
            {id:35,Artist:'desktop error',start:'2022/12/09 00:00',end:'00:45',time:45,stage:4},
            {id:36,Artist:'bomb at track',start:'2022/12/09 01:00',end:'01:45',time:45,stage:4},

            {id:37,Artist:'twins plus',start:'2022/12/09 14:00',end:'14:30',time:30,stage:5},
            {id:38,Artist:'98percent',start:'2022/12/09 14:45',end:'15:15',time:30,stage:5},
            {id:39,Artist:'bootleg',start:'2022/12/09 15:30',end:'16:00',time:30,stage:5},
            {id:40,Artist:'television off',start:'2022/12/09 16:15',end:'17:00',time:45,stage:5},
            {id:41,Artist:'mole the explosion',start:'2022/12/09 17:15',end:'18:00',time:45,stage:5},
            {id:42,Artist:'h 3 f',start:'2022/12/09 18:15',end:'19:00',time:45,stage:5},
            {id:43,Artist:'telex telexs',start:'2022/12/09 19:15',end:'20:00',time:45,stage:5},
            {id:44,Artist:'blackbeans',start:'2022/12/09 20:15',end:'21:00',time:45,stage:5},
            {id:45,Artist:'purpeech',start:'2022/12/09 21:15',end:'22:00',time:45,stage:5},
            {id:46,Artist:'the white hair cut',start:'2022/12/09 22:15',end:'23:00',time:45,stage:5},
            {id:47,Artist:'hard boy',start:'2022/12/09 23:15',end:'00:00',time:45,stage:5},
            {id:18,Artist:'ไปส่งกู บขส.ดู๊',start:'2022/12/09 00:15',end:'01:00',time:45,stage:5},

            {id:49,Artist:'velika',start:'2022/12/09 14:30',end:'15:15',time:45,stage:6},
            {id:50,Artist:'tofu',start:'2022/12/09 15:30',end:'16:15',time:45,stage:6},
            {id:51,Artist:'chilax',start:'2022/12/09 16:30',end:'17:15',time:45,stage:6},
            {id:52,Artist:'tinn',start:'2022/12/09 17:30',end:'18:15',time:45,stage:6},
            {id:53,Artist:`ayla's`,start:'2022/12/09 18:30',end:'19:15',time:45,stage:6},
            {id:54,Artist:'fluffypak',start:'2022/12/09 19:30',end:'20:15',time:45,stage:6},
            {id:55,Artist:'loserpop',start:'2022/12/09 20:30',end:'21:15',time:45,stage:6},
            {id:56,Artist:'เรนิษา',start:'2022/12/09 21:30',end:'22:15',time:45,stage:6},
            {id:57,Artist:'sherry',start:'2022/12/09 22:30',end:'23:15',time:45,stage:6},
            {id:58,Artist:'newery',start:'2022/12/09 23:30',end:'00:15',time:45,stage:6},

            {id:59,Artist:'phranakhon ensemble (ดุริยางค์)',start:'2022/12/09 15:00',end:'15:45',time:45,stage:7},
            {id:60,Artist:'sueff',start:'2022/12/09 16:00',end:'16:30',time:30,stage:7},
            {id:61,Artist:'gmm academy',start:'2022/12/09 16:45',end:'18:15',time:90,stage:7},
            {id:62,Artist:'shata',start:'2022/12/09 18:30',end:'19:15',time:45,stage:7},
            {id:63,Artist:'oosedochishima (jp)',start:'2022/12/09 19:30',end:'20:15',time:45,stage:7},
            {id:64,Artist:'dj hosoboyo',start:'2022/12/09 20:30',end:'21:30',time:60,stage:7},
            {id:65,Artist:'dj tezza',start:'2022/12/09 21:30',end:'22:30',time:60,stage:7},
            {id:66,Artist:'dj austin',start:'2022/12/09 22:30',end:'23:30',time:60,stage:7},
            {id:67,Artist:'dj jeffry',start:'2022/12/09 23:30',end:'00:30',time:60,stage:7},
            {id:68,Artist:'dj spacemonkey & mc eddy',start:'2022/12/09 00:30',end:'01:30',time:60,stage:7},

            {id:69,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/09 18:30',end:'20:00',time:90,stage:8},
            {id:70,Artist:'เบนซ์ เมืองเลย, ออยเลอร์, เน็ค นฤมล, เวียง นฤมล',start:'2022/12/09 20:15',end:'21:15',time:60,stage:8},
            {id:71,Artist:'new country',start:'2022/12/09 21:30',end:'22:30',time:60,stage:8},
            {id:72,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/09 22:45',end:'23:45',time:60,stage:8},
            {id:73,Artist:'ไผ่ พงศธร',start:'2022/12/09 00:00',end:'01:00',time:60,stage:8},
            {id:74,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/09 01:15',end:'03:00',time:105,stage:8},
 
            {id:75,Artist:'oosedochishima (jp)',start:'2022/12/09 17:00',end:'17:45',time:45,stage:9},
            {id:76,Artist:'hot club of siam',start:'2022/12/09 18:00',end:'18:45',time:45,stage:9},
            {id:77,Artist:'sunny rattana x sri',start:'2022/12/09 19:00',end:'19:45',time:45,stage:9},
            {id:78,Artist:'doobadoo',start:'2022/12/09 20:00',end:'20:45',time:45,stage:9},
            {id:79,Artist:'open mic',start:'2022/12/09 21:00',end:'22:45',time:60,stage:9},
            {id:80,Artist:'the parkinson',start:'2022/12/09 22:00',end:'22:45',time:45,stage:9},
            {id:81,Artist:'the thonglor quarter',start:'2022/12/09 23:00',end:'23:45',time:45,stage:9},
            {id:82,Artist:'kingsley drive',start:'2022/12/09 00:00',end:'00:45',time:45,stage:9},
            {id:83,Artist:'dj leo',start:'2022/12/09 01:00',end:'02:00',time:60,stage:9},
            ]

        const dataSatgeSecond =[
            {id:84,Artist:'Tilly birds',start:'2022/12/10 18:00',end:'19:00',time:60,stage:1},
            {id:85,Artist:'klear',start:'2022/12/10 19:15',end:'20:15',time:60,stage:1},
            {id:86,Artist:'urboytj',start:'2022/12/10 20:30',end:'21:30',time:60,stage:1},
            {id:87,Artist:'three man down',start:'2022/12/10 21:45',end:'22:45',time:60,stage:1},
            {id:88,Artist:'taitosmith',start:'2022/12/10 23:00',end:'00:00',time:60,stage:1},
            {id:89,Artist:'lomosonic',start:'2022/12/10 00:15',end:'01:15',time:60,stage:1},

            {id:90,Artist:'Kin, matcha, alala',start:'2022/12/09 16:30',end:'17:15',time:45,stage:2},
            {id:91,Artist:'monica, firzter',start:'2022/12/09 17:30',end:'18:15',time:45,stage:2},
            {id:92,Artist:'tigger x perses x viis',start:'2022/12/09 18:30',end:'19:15',time:45,stage:2},
            {id:93,Artist:'proxie',start:'2022/12/09 19:30',end:'20:15',time:45,stage:2},
            {id:94,Artist:'2002 ratree',start:'2022/12/09 20:30',end:'21:15',time:45,stage:2},
            {id:95,Artist:'pop pongkool',start:'2022/12/09 21:30',end:'22:15',time:45,stage:2},
            {id:96,Artist:'stamp',start:'2022/12/09 22:30',end:'23:15',time:45,stage:2},
            {id:97,Artist:'polycat',start:'2022/12/09 23:30',end:'00:15',time:45,stage:2},
            {id:98,Artist:'paradox',start:'2022/12/09 00:30',end:'01:15',time:45,stage:2},

            {id:99,Artist:'sizzy',start:'2022/12/10 15:30',end:'15:50',time:20,stage:3},
            {id:100,Artist:'lykn',start:'2022/12/10 15:50',end:'16:10',time:20,stage:3},
            {id:101,Artist:'gemini x fourth x satang x ford',start:'2022/12/10 16:10',end:'16:40',time:30,stage:3},
            {id:102,Artist:'nanon',start:'2022/12/10 16:40',end:'17:10',time:30,stage:3},
            {id:103,Artist:'krist',start:'2022/12/10 17:25',end:'17:55',time:30,stage:3},
            {id:104,Artist:'kimberley (tw)',start:'2022/12/10 18:10',end:'18:55',time:45,stage:3},
            {id:105,Artist:'jeff satue',start:'2022/12/10 19:10',end:'19:55',time:45,stage:3},
            {id:106,Artist:'the rampage from exile tribe (jp)',start:'2022/12/10 20:10',end:'20:55',time:45,stage:3},
            {id:107,Artist:'trinity',start:'2022/12/10 21:10',end:'21:55',time:45,stage:3},
            {id:108,Artist:'loco (kr)',start:'2022/12/10 22:10',end:'22.50',time:40,stage:3},
            {id:109,Artist:'yugyeom (kr)',start:'2022/12/10 22:50',end:'23:30',time:40,stage:3},
            {id:110,Artist:'the yers',start:'2022/12/10 23:45',end:'00:45',time:60,stage:3},
            {id:111,Artist:'retrospect',start:'2022/12/10 01:00',end:'01:45',time:45,stage:3},

            {id:112,Artist:'only monday',start:'2022/12/10 14:00',end:'14:45',time:45,stage:4},
            {id:113,Artist:'The darkest romance',start:'2022/12/10 15:00',end:'15:45',time:45,stage:4},
            {id:114,Artist:'lacuna (kr)',start:'2022/12/10 16:00',end:'16:45',time:45,stage:4},
            {id:115,Artist:'anatomy rabbit',start:'2022/12/10 17:00',end:'17:45',time:45,stage:4},
            {id:116,Artist:'sorry youth(tw)',start:'2022/12/10 18:00',end:'18:45',time:45,stage:4},
            {id:117,Artist:'yented',start:'2022/12/10 19:00',end:'19:45',time:45,stage:4},
            {id:118,Artist:'sirup (jp)',start:'2022/12/10 20:00',end:'20:45',time:45,stage:4},
            {id:119,Artist:'hybs',start:'2022/12/10 21:00',end:'21:45',time:45,stage:4},
            {id:120,Artist:'mirrr',start:'2022/12/10 22:00',end:'22:45',time:45,stage:4},
            {id:121,Artist:'whal & dolph',start:'2022/12/10 23:00',end:'23:45',time:45,stage:4},
            {id:122,Artist:`zweed n' roll`,start:'2022/12/10 00:00',end:'00:45',time:45,stage:4},

            {id:123,Artist:'cvptain morgans',start:'2022/12/10 14:15',end:'15:00',time:45,stage:5},
            {id:124,Artist:'the young wolf',start:'2022/12/10 15:15',end:'16:00',time:45,stage:5},
            {id:125,Artist:'clockwork motionless',start:'2022/12/10 16:15',end:'17:00',time:45,stage:5},
            {id:126,Artist:'adora',start:'2022/12/10 17:15',end:'18:00',time:45,stage:5},
            {id:127,Artist:'vitamin d from the sun',start:'2022/12/10 18:15',end:'18:35',time:20,stage:5},
            {id:128,Artist:'lemony',start:'2022/12/10 18:50',end:'19:30',time:40,stage:5},
            {id:129,Artist:'qler',start:'2022/12/10 19:45',end:'20:30',time:45,stage:5},
            {id:130,Artist:'yourmood',start:'2022/12/10 20:45',end:'21:30',time:45,stage:5},
            {id:131,Artist:'rooftop',start:'2022/12/10 21:45',end:'22:30',time:45,stage:5},
            {id:132,Artist:'uncle ben',start:'2022/12/10 22:45',end:'23:30',time:45,stage:5},
            {id:133,Artist:'solitude is bliss',start:'2022/12/10 23:45',end:'00:30',time:45,stage:5},

            {id:134,Artist:'whatfalse',start:'2022/12/10 14:30',end:'15:30',time:60,stage:6},
            {id:135,Artist:'sitta',start:'2022/12/10 15:45',end:'16:45',time:60,stage:6},
            {id:136,Artist:'มนัสวีร์',start:'2022/12/10 17:00',end:'18:00',time:60,stage:6},
            {id:137,Artist:'ดวงดาวเดียวดาย',start:'2022/12/10 18:15',end:'19:15',time:60,stage:6},
            {id:138,Artist:'landokmai',start:'2022/12/10 19:30',end:'20:30',time:60,stage:6},
            {id:139,Artist:'เขียนไขและวานิช',start:'2022/12/10 20:45',end:'21:45',time:60,stage:6},
            {id:140,Artist:'คณะขวัญใจ',start:'2022/12/10 22:00',end:'23:00',time:60,stage:6},

            {id:141,Artist:'phranakhon ensemble (ดุริยางค์)',start:'2022/12/10 15:00',end:'15:45',time:45,stage:7},
            {id:142,Artist:'kachain',start:'2022/12/10 16:00',end:'16:30',time:30,stage:7},
            {id:143,Artist:'lonelymoon',start:'2022/12/10 16:45',end:'17:30',time:45,stage:7},
            {id:144,Artist:'thepicnik',start:'2022/12/10 17:45',end:'18:30',time:45,stage:7},
            {id:145,Artist:'dj pm',start:'2022/12/10 18:45',end:'19:45',time:60,stage:7},
            {id:146,Artist:'dj kingfish',start:'2022/12/10 19:45',end:'20:45',time:60,stage:7},
            {id:147,Artist:'dj noona & mr jay',start:'2022/12/10 20:45',end:'21:45',time:60,stage:7},
            {id:148,Artist:'dj p-one & mc tongking',start:'2022/12/10 21:45',end:'22:45',time:60,stage:7},
            {id:149,Artist:'dj krissada funk',start:'2022/12/10 22:45',end:'23:45',time:60,stage:7},
            {id:150,Artist:'dj tum to & mc eddy',start:'2022/12/10 23:45',end:'01:00',time:75,stage:7},

            {id:151,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 18:30',end:'20:00',time:90,stage:8},
            {id:152,Artist:'มีนตรา อินทิรา',start:'2022/12/10 20:15',end:'20:45',time:30,stage:8},
            {id:153,Artist:'ตรี ชัยณรงค์',start:'2022/12/10 21:00',end:'21:30',time:30,stage:8},
            {id:154,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 21:45',end:'22:30',time:45,stage:8},
            {id:155,Artist:'มนต์แคน แก่นคูน',start:'2022/12/10 22:45',end:'23:45',time:60,stage:8},
            {id:156,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 00:00',end:'01:00',time:60,stage:8},
            {id:157,Artist:'ก้อง ห้วยไร่ x เบิ้ล ปทุมราช',start:'2022/12/10 01:15',end:'02:15',time:60,stage:8},
            {id:158,Artist:'ระเบียบวาทะศิลป์',start:'2022/12/10 02:30',end:'03:30',time:60,stage:8},

            {id:159,Artist:'oosedochishima (jp)',start:'2022/12/10 17:00',end:'17:45',time:45,stage:9},
            {id:160,Artist:'the vintagers',start:'2022/12/10 18:00',end:'18:45',time:45,stage:9},
            {id:161,Artist:'daddy c & bangkok mojo',start:'2022/12/10 19:00',end:'19:45',time:45,stage:9},
            {id:162,Artist:'doobadoo',start:'2022/12/10 20:00',end:'20:45',time:45,stage:9},
            {id:163,Artist:'open mic',start:'2022/12/10 21:00',end:'22:45',time:60,stage:9},
            {id:164,Artist:'season five',start:'2022/12/10 22:00',end:'22:45',time:45,stage:9},
            {id:165,Artist:'the thonglor quarter',start:'2022/12/10 23:00',end:'23:45',time:45,stage:9},
            {id:166,Artist:'kingsley drive',start:'2022/12/10 00:00',end:'00:45',time:45,stage:9},
            {id:167,Artist:'dj leo',start:'2022/12/10 01:00',end:'02:00',time:60,stage:9},
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

        const certificateRef = useRef(null);
        const screenShot = (element) => {
            html2canvas(element).then(canvas => {
                const image = canvas.toDataURL('png');
                const a = document.createElement('a');
                a.setAttribute('download', 'certificate.png');
                a.setAttribute('href', image);
                a.click();
            });
        };
          
  return (
      <Container>
      <FlexDate>
    <TextDes>
        <div>- develop by</div> <FacebookIcon sx={{color:"#0866FF",paddingRight:"5px",paddingLeft:"5px"}}/> <div> <FBText  onClick={()=> window.open('https://www.facebook.com/Mintnutti/')}>Miint Nuttida</FBText> - </div>
    </TextDes>
    </FlexDate>
    <FlexStage>
        <DivStage>
        <DotColor bgColor={'#0c545c'}/>
        <TextStage>Mountain stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#aa4088'}/>
        <TextStage>Cow stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#9a031e'}/>
        <TextStage>Block stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#5c5cc6'}/>
        <TextStage>Pepsi egg stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#003d5b'}/>
        <TextStage>Chic stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#fdbf52'}/>
        <TextStage>Rumwong bar X ระเบียบวาทะศิลป์</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#fb6d10'}/>
        <TextStage>Kratom stage</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#138086'}/>
        <TextStage>Camp jazz by Nanake</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#f11548'}/>
        <TextStage>For-rest stage</TextStage>
        </DivStage>
    </FlexStage>

    <FlexDate>
    <DateConcert onClick={()=> setSelectDate(1)} bg={selectDate === 1 && true}>
        <TextDate>วันที่ 9</TextDate>
    </DateConcert>

    <DateConcert onClick={()=> setSelectDate(2)}  bg={selectDate === 2 && true}>
        <TextDate>วันที่ 10</TextDate>
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
                    <TextArtist color={value.stage === 6 || value.stage === 8 && true}>
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
                    <TextArtist color={ value.stage === 6 ||value.stage === 8 && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    )
                    
                    }
            </TimeTableArtis>)}
    </FlexData>
    </ContainerTable>

<DivSelectDataArtist ref={certificateRef}>
<DivImgLogo src={process.env.PUBLIC_URL + '/bmmf_13_logo.png'} />
<DivImgBG src={process.env.PUBLIC_URL + '/bgskyopacity.png'}/>
<SelectDataArtist>
   <DivTextDate>รายชื่อศิลปินที่เลือก วันที่ {selectDate === 1 ? '9':'10'}</DivTextDate>
</SelectDataArtist>

    {selectDate === 1 ?
    <>
    <>
    {dataSelect?.map((data,key)=>
    new Date(data.start).getDate() === 9 &&
    new Date(data.start).getHours() > 4 && 
    <SelectDataArtist>
    {data.Artist} - 
    {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น.
    -&nbsp;
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
                    data.stage === 4 ?'PEPSI EGG STAGE':
                    data.stage === 5 ? 'CHIC STAGE':
                    data.stage === 6 ? 'KRATOM STAGE':
                    data.stage === 7 ? 'FOR-REST STAGE':
                    data.stage === 8 ? 'RUMWONG BAR X ระเบียบวาทะศิลป์':
                    data.stage === 9 && 'CAMP JAZZ BY NANAKE'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}       
    </>
    <>{
    dataSelect?.map((data,key)=>
    new Date(data.start).getDate() === 9 &&
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
data.stage === 5 ? 'CHIC STAGE':
data.stage === 6 ? 'KRATOM STAGE':
data.stage === 7 ? 'FOR-REST STAGE':
data.stage === 8 ? 'RUMWONG BAR X ระเบียบวาทะศิลป์':
data.stage === 9 && 'CAMP JAZZ BY NANAKE'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}</>
    </>
    :
    <>
    <>
    {dataSelect?.map((data)=>
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
    {data.stage === 1 ?'MOUNTAIN STAGE':
    data.stage === 2 ? 'COW STAGE':
    data.stage === 3 ? 'BLOCK STAGE':
    data.stage === 4 ?'EGG STAGE':
    data.stage === 5 ? 'PEPSI CHIC STAGE':
    data.stage === 6 ? 'KRATOM STAGE':
    data.stage === 7 ? 'FOR-REST STAGE':
    data.stage === 8 ? 'RUMWONG BAR X ระเบียบวาทะศิลป์':
    data.stage === 9 && 'CAMP JAZZ BY NANAKE'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}
    </>
    <>
    {dataSelect?.map((data)=>
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
                    data.stage === 8 ? 'RUMWONG BAR X ระเบียบวาทะศิลป์':
                    data.stage === 9 && 'CAMP JAZZ BY NANAKE'}
    </TextArtistSelect>
    </SelectDataArtist>
    )}
    </>
    </>
    }
</DivSelectDataArtist>

<Modal
        open={showModal}
        onClose={()=>setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        {showModal !==false && 
                    dataSatgeFrist.map((value,key)=> 
                    <>
                    <ModalArtist>
                    <X onClick={()=>setShowModal(false)}>
                        <CloseIcon sx={{color:"#9a031e",paddingLeft:"2px"}}/>
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
                    showModal.stage === 8 ? 'RUMWONG BAR X ระเบียบวาทะศิลป์':
                    showModal.stage === 9 && 'CAMP JAZZ BY NANAKE'}
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
        </Box> 
      </Modal>

    <Button sx={{marginTop:"20px",marginBottom:"50px"}}startIcon={<DownloadIcon />} variant="contained" onClick={() => screenShot(certificateRef.current)}>
            ดาวน์โหลด
     </Button>

                  
    </Container>
    )
}

export default Bmmf