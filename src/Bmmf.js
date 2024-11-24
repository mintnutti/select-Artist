import React, { useState, useRef } from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import html2canvas from "html2canvas";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { TextField } from "@mui/material";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 20px;
  position: relative;
`;

const ContainerTable = styled.div`
  width: 73%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
  position: relative;
  overflow-x: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #f7f7f7;
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
`;

const TimeTable = styled.div`
  width: 6.67%;
  height: 50px;
  background-color: ${({ bg }) => (bg === false ? "tranparent" : "#cecece")};
  border-left: ${({ bg }) => bg !== false && "#FFFFFF 1px solid"};
  position: relative;
  cursor: pointer;
`;

const FlexData = styled.div`
  width: 1100px;
  display: flex;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const FlexDate = styled.div`
  width: fit-content;
  max-width: 90%;
  display: flex;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexDateSearch = styled.div`
  width: 100%;
  max-width: 73%;
  display: flex;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  .MuiFormControl-root {
    border-radius: 100px;
    width: 100%;
    height: 50px;
  }
  .MuiInputBase-root {
    border-radius: 100px;
    width: 100%;
    height: 50px;
  }
`;

const TextTime = styled.div`
  font-size: 0.75rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
`;

const TextDate = styled.div`
  font-size: 0.75rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  color: #ffffff;
`;

const TimeTableArtis = styled.div`
  width: 6.67%;
  height: 230px;
  background-color: ${({ bg }) => (bg === false ? "tranparent" : "#EFEFEF")};
  border-left: ${({ bg }) => bg !== false && "#cecece 1px solid"};
  position: relative;
  cursor: pointer;
`;
const DateConcert = styled.div`
  width: 80px;
  height: 30px;
  margin-right: 10px;
  background-color: ${({ bg }) => (bg === false ? "#cecece" : "#252525")};
  border-radius: 100px;
  position: relative;
  cursor: pointer;
`;
const TextArtist = styled.div`
  font-size: 0.7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  //color: ${({ color }) => (color === true ? "#000000" : "#FFFFFF")};
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;

const TextArtistSelect = styled.span`
  font-size: 1rem;
  font-weight: 900;
  color: ${({ color }) => color};
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #cecece05;
`;
const TabStage = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left + "%"};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width + "%"};
  height: 18px;
  border: ${({ border }) => border === true && "2px #000000 solid"};
  z-index: 1;
  border-radius: 20px;
  :hover {
    opacity: 0.7;
  }
`;

const DotColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100px;
  background-color: ${({ bgColor }) => bgColor};
  margin-top: 2px;
`;

const TextStage = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  padding-left: 5px;
  padding-top: 2px;
  text-transform: uppercase;
`;
const DivStage = styled.div`
  display: flex;
  margin-left: 20px;
`;
const FlexStage = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const ModalArtist = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  background-color: #fafafa;

  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const X = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #b756ff;
  z-index: 11;
  top: -10px;
  right: -10px;
  border-radius: 100px;
  font-size: 1.25rem;
  cursor: pointer;
  padding-top: 5px;
  padding-left: 2px;
  padding-right: 2px;
`;
const TextName = styled.div`
  font-size: 1.05rem;
  color: ${({ bgColor }) => bgColor};
  margin-top: 40px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
`;

const TextDes = styled.div`
  font-size: 0.75rem;
  color: #252525;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  display: flex;
  line-height: 24px;
`;

const FBText = styled.span`
  font-size: 0.75rem;
  color: #0866ff;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 900;
`;
const TextModal = styled.div`
  font-size: 1rem;
  color: ${({ bgColor }) => bgColor};
  margin-bottom: 5px;
  text-transform: uppercase;
  text-align: center;
`;

const ButtonSelect = styled.div`
  padding: 10px 20px;
  background-color: ${({ bgColor }) => bgColor};
  width: fit-content;
  position: absolute;
  bottom: 10px;
  color: ${({ color }) => (color === true ? "#000000" : "#FFFFFF")};
  border-radius: 100px;
  left: 50%;
  transform: translate(-50%, -10%);
  right: 50%;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

const XStage = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #ffffff;
  border: 1px solid #000000;
  z-index: 100;
  top: -5px;
  right: -5px;
  border-radius: 100px;
  font-size: 0.75rem;
  cursor: pointer;
`;

const DivSelectDataArtist = styled.div`
  width: fit-content;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
  height: fit-content;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 40px;
  position: relative;
`;
const SelectDataArtist = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;

const DivImgLogo = styled.img`
  width: 80px;
`;
const DivImgBG = styled.img`
  position: absolute;
  z-index: -1;
  left: 0;
  width: -webkit-fill-available;
  border-radius: 40px;
  height: -webkit-fill-available;
`;

const DivTextDate = styled.div`
  font-size: x-large;
  color: #0c337a;
`;
function Bmmf() {
  const [showModal, setShowModal] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [selectDate, setSelectDate] = useState(1);

  dataSelect?.sort(function (a, b) {
    return a.start.localeCompare(b.start);
  });

  //   console.log(
  //     "dataSelect-----",
  //     dataSelect.map(
  //       (data) =>
  //         new Date(data.start).getHours() > 3 &&
  //         data.Artist + new Date(data.start).getHours()
  //     )
  //   );

  const defaultTime = [
    { dateData: "2024/12/07 13:00", start: "1" },
    { dateData: "2024/12/07 14:00", start: "2" },
    { dateData: "2024/12/07 15:00", start: "3" },
    { dateData: "2024/12/07 16:00", start: "4" },
    { dateData: "2024/12/07 17:00", start: "5" },
    { dateData: "2024/12/07 18:00", start: "6" },
    { dateData: "2024/12/07 19:00", start: "7" },
    { dateData: "2024/12/07 20:00", start: "8" },
    { dateData: "2024/12/07 21:00", start: "9" },
    { dateData: "2024/12/07 22:00", start: "10" },
    { dateData: "2024/12/07 23:00", start: "11" },
    { dateData: "2024/12/07 00:00", start: "12" },
    { dateData: "2024/12/07 01:00", start: "13" },
    { dateData: "2024/12/07 02:00", start: "14" },
    { dateData: "2024/12/07 03:00", start: "15" },
    { dateData: "2024/12/07 04:00", start: "16" },
  ];

  const dataSatgeFrist = [
    {
      id: 1,
      Artist: "LABANOON",
      start: "2024/12/07 17:30",
      end: "18:30",
      time: 60,
      stage: 1,
    },
    {
      id: 2,
      Artist: "NUM KALA",
      start: "2024/12/07 18:45",
      end: "19:45",
      time: 60,
      stage: 1,
    },
    {
      id: 3,
      Artist: "BIG ASS",
      start: "2024/12/07 20:00",
      end: "21:00",
      time: 60,
      stage: 1,
    },
    {
      id: 4,
      Artist: "POTATO",
      start: "2024/12/07 21:15",
      end: "22:15",
      time: 60,
      stage: 1,
    },
    {
      id: 5,
      Artist: "TAITOSMITH",
      start: "2024/12/07 22:30",
      end: "23:30",
      time: 60,
      stage: 1,
    },
    {
      id: 6,
      Artist: "BODYSLAM",
      start: "2024/12/07 23:45",
      end: "00:45",
      time: 60,
      stage: 1,
    },
    {
      id: 7,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/07 18:30",
      end: "20:00",
      time: 90,
      stage: 2,
    },
    {
      id: 8,
      Artist: "New Country",
      start: "2024/12/07 20:15",
      end: "21:15",
      time: 60,
      stage: 2,
    },
    {
      id: 9,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/07 21:30",
      end: "22:30",
      time: 60,
      stage: 2,
    },
    {
      id: 10,
      Artist: "จี๋ นมสด",
      start: "2024/12/07 22:45",
      end: "23:45",
      time: 60,
      stage: 2,
    },
    {
      id: 11,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/07 00:00",
      end: "03:00",
      time: 180,
      stage: 2,
    },
    {
      id: 12,
      Artist: "EMCEE",
      start: "2024/12/07 17:00",
      end: "18:00",
      time: 60,
      stage: 3,
    },
    {
      id: 13,
      Artist: "7Days Crazy",
      start: "2024/12/07 18:00",
      end: "18:45",
      time: 45,
      stage: 3,
    },
    {
      id: 14,
      Artist: "Skinny",
      start: "2024/12/07 19:00",
      end: "19:45",
      time: 45,
      stage: 3,
    },
    {
      id: 15,
      Artist: "On The Way",
      start: "2024/12/07 20:00",
      end: "20:45",
      time: 45,
      stage: 3,
    },
    {
      id: 16,
      Artist: "บีม ปภังกร x จิ๊ก ชวิน",
      start: "2024/12/07 21:00",
      end: "22:00",
      time: 60,
      stage: 3,
    },
    {
      id: 17,
      Artist: "Skinny",
      start: "2024/12/07 22:15",
      end: "23:00",
      time: 45,
      stage: 3,
    },
    {
      id: 18,
      Artist: "On The Way",
      start: "2024/12/07 23:15",
      end: "00:00",
      time: 45,
      stage: 3,
    },
    {
      id: 19,
      Artist: "Nanakess5",
      start: "2024/12/07 00:00",
      end: "00:45",
      time: 45,
      stage: 3,
    },
    {
      id: 20,
      Artist: "Mocca Garden",
      start: "2024/12/07 00:45",
      end: "01:30",
      time: 45,
      stage: 3,
    },
    {
      id: 21,
      Artist: "DJ Leo",
      start: "2024/12/07 01:30",
      end: "04:00",
      time: 150,
      stage: 3,
    },
    {
      id: 22,
      Artist: "Alala / Viis",
      start: "2024/12/07 16:30",
      end: "17:15",
      time: 45,
      stage: 4,
    },
    {
      id: 23,
      Artist: "Jaow Pittaya / Diamond Narakorn",
      start: "2024/12/07 17:30",
      end: "18:15",
      time: 45,
      stage: 4,
    },
    {
      id: 24,
      Artist: "Badmixy",
      start: "2024/12/07 18:30",
      end: "19:15",
      time: 45,
      stage: 4,
    },
    {
      id: 25,
      Artist: "Atom",
      start: "2024/12/07 19:30",
      end: "20:15",
      time: 45,
      stage: 4,
    },
    {
      id: 26,
      Artist: "Violette Wautier",
      start: "2024/12/07 20:30",
      end: "21:15",
      time: 45,
      stage: 4,
    },
    {
      id: 27,
      Artist: "Bowkylion",
      start: "2024/12/07 21:30",
      end: "22:15",
      time: 45,
      stage: 4,
    },
    {
      id: 28,
      Artist: "Ink Waruntorn",
      start: "2024/12/07 22:30",
      end: "23:15",
      time: 45,
      stage: 4,
    },
    {
      id: 29,
      Artist: "Nont Tanont",
      start: "2024/12/07 23:30",
      end: "00:15",
      time: 45,
      stage: 4,
    },
    {
      id: 30,
      Artist: "Oat Pramote",
      start: "2024/12/07 00:30",
      end: "01:15",
      time: 45,
      stage: 4,
    },
    {
      id: 31,
      Artist: "New Cluster Band",
      start: "2024/12/07 14:00",
      end: "14:45",
      time: 45,
      stage: 5,
    },
    {
      id: 32,
      Artist: "TIGGER",
      start: "2024/12/07 15:15",
      end: "16:00",
      time: 45,
      stage: 5,
    },
    {
      id: 33,
      Artist: "19 (กวินท์, DEETHA, FIT ARDON, OSSEY, JIGSAW STORY)",
      start: "2024/12/07 16:30",
      end: "17:15",
      time: 45,
      stage: 5,
    },
    {
      id: 34,
      Artist: "Tinn",
      start: "2024/12/07 17:45",
      end: "18:30",
      time: 45,
      stage: 5,
    },
    {
      id: 35,
      Artist: "Landokmai",
      start: "2024/12/07 19:00",
      end: "19:45",
      time: 45,
      stage: 5,
    },
    {
      id: 36,
      Artist: "Ayla's",
      start: "2024/12/07 20:15",
      end: "21:00",
      time: 45,
      stage: 5,
    },
    {
      id: 37,
      Artist: "คณะขวัญใจ",
      start: "2024/12/07 21:30",
      end: "22:15",
      time: 45,
      stage: 5,
    },
    {
      id: 38,
      Artist: "Anatomy Rabbit",
      start: "2024/12/07 22:45",
      end: "23:30",
      time: 45,
      stage: 5,
    },
    {
      id: 39,
      Artist: "Blackbeans",
      start: "2024/12/07 00:00",
      end: "00:45",
      time: 45,
      stage: 5,
    },
    {
      id: 40,
      Artist: "DJ Hosoboyo",
      start: "2024/12/07 19:30",
      end: "21:00",
      time: 90,
      stage: 6,
    },
    {
      id: 41,
      Artist: "DJ Tezza x DJ Kingfish",
      start: "2024/12/07 21:00",
      end: "22:30",
      time: 90,
      stage: 6,
    },
    {
      id: 42,
      Artist: "DJ Austin",
      start: "2024/12/07 22:30",
      end: "00:00",
      time: 90,
      stage: 6,
    },
    {
      id: 43,
      Artist: "DJ Jeffry & MC Title",
      start: "2024/12/07 00:00",
      end: "01:30",
      time: 90,
      stage: 6,
    },
    {
      id: 44,
      Artist: "DJ Spacemonkey & MC Eddy Presents No Mercy",
      start: "2024/12/07 01:30",
      end: "03:00",
      time: 90,
      stage: 6,
    },
    {
      id: 45,
      Artist: "Telex Telexs",
      start: "2024/12/07 13:15",
      end: "14:00",
      time: 45,
      stage: 7,
    },
    {
      id: 46,
      Artist: "UMU / Kimseungjoo (KR)",
      start: "2024/12/07 14:30",
      end: "15:15",
      time: 45,
      stage: 7,
    },
    {
      id: 47,
      Artist: "Fellow Fellow",
      start: "2024/12/07 15:45",
      end: "16:30",
      time: 45,
      stage: 7,
    },
    {
      id: 48,
      Artist: "Yew",
      start: "2024/12/07 17:00",
      end: "17:45",
      time: 45,
      stage: 7,
    },
    {
      id: 49,
      Artist: "Pun",
      start: "2024/12/07 18:15",
      end: "19:00",
      time: 45,
      stage: 7,
    },
    {
      id: 50,
      Artist: "MEYOU",
      start: "2024/12/07 19:30",
      end: "20:15",
      time: 45,
      stage: 7,
    },
    {
      id: 51,
      Artist: "D Gerrard",
      start: "2024/12/07 20:45",
      end: "21:30",
      time: 45,
      stage: 7,
    },
    {
      id: 52,
      Artist: "The Superglasses Ska Ensemble",
      start: "2024/12/07 22:00",
      end: "22:45",
      time: 45,
      stage: 7,
    },
    {
      id: 53,
      Artist: "T-Bone",
      start: "2024/12/07 23:15",
      end: "00:00",
      time: 45,
      stage: 7,
    },
    {
      id: 54,
      Artist: "Srirajah Rockers",
      start: "2024/12/07 00:30",
      end: "01:15",
      time: 45,
      stage: 7,
    },
    {
      id: 55,
      Artist: "The Darkest Romance",
      start: "2024/12/07 17:00",
      end: "17:45",
      time: 45,
      stage: 8,
    },
    {
      id: 56,
      Artist: "Bomb at Track",
      start: "2024/12/07 18:00",
      end: "18:45",
      time: 45,
      stage: 8,
    },
    {
      id: 57,
      Artist: "Safeplanet",
      start: "2024/12/07 19:00",
      end: "19:45",
      time: 45,
      stage: 8,
    },
    {
      id: 58,
      Artist: "Getsunova",
      start: "2024/12/07 20:00",
      end: "20:45",
      time: 45,
      stage: 8,
    },
    {
      id: 59,
      Artist: "Lham Somphol",
      start: "2024/12/07 21:00",
      end: "21:45",
      time: 45,
      stage: 8,
    },
    {
      id: 60,
      Artist: "Bank Preeti",
      start: "2024/12/07 22:00",
      end: "22:45",
      time: 45,
      stage: 8,
    },
    {
      id: 61,
      Artist: "Moderndog",
      start: "2024/12/07 23:00",
      end: "23:45",
      time: 45,
      stage: 8,
    },
    {
      id: 62,
      Artist: "Lomosonic",
      start: "2024/12/07 00:00",
      end: "00:45",
      time: 45,
      stage: 8,
    },
    {
      id: 63,
      Artist: "Sweet Mullet",
      start: "2024/12/07 01:00",
      end: "01:45",
      time: 45,
      stage: 8,
    },
  ];

  const dataSatgeSecond = [
    {
      id: 84,
      Artist: "TATTOO COLOUR",
      start: "2024/12/08 17:30",
      end: "18:30",
      time: 60,
      stage: 1,
    },
    {
      id: 85,
      Artist: "THREE MAN DOWN",
      start: "2024/12/08 18:45",
      end: "19:45",
      time: 60,
      stage: 1,
    },
    {
      id: 86,
      Artist: "JOEY PHUWASIT",
      start: "2024/12/08 20:00",
      end: "21:00",
      time: 60,
      stage: 1,
    },
    {
      id: 87,
      Artist: "PALMY",
      start: "2024/12/08 21:15",
      end: "22:15",
      time: 60,
      stage: 1,
    },
    {
      id: 88,
      Artist: "SLOT MACHINE",
      start: "2024/12/08 22:30",
      end: "23:30",
      time: 60,
      stage: 1,
    },
    {
      id: 89,
      Artist: "COCKTAIL",
      start: "2024/12/08 23:45",
      end: "00:45",
      time: 60,
      stage: 1,
    },
    {
      id: 90,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/08 18:30",
      end: "20:00",
      time: 90,
      stage: 2,
    },
    {
      id: 91,
      Artist: "เบียร์ พร้อมพงษ์, กีต้าร์ หน้าหวาน",
      start: "2024/12/08 20:15",
      end: "21:15",
      time: 60,
      stage: 2,
    },
    {
      id: 92,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/08 21:30",
      end: "22:30",
      time: 60,
      stage: 2,
    },
    {
      id: 93,
      Artist: "ต่าย อรทัย, ศิริพร อำไพพงษ์",
      start: "2024/12/08 22:45",
      end: "23:45",
      time: 60,
      stage: 2,
    },
    {
      id: 94,
      Artist: "ระเบียบวาทะศิลป์",
      start: "2024/12/08 00:00",
      end: "03:00",
      time: 180,
      stage: 2,
    },
    {
      id: 95,
      Artist: "EMCEE",
      start: "2024/12/08 17:00",
      end: "18:00",
      time: 60,
      stage: 3,
    },
    {
      id: 96,
      Artist: "7Days Crazy",
      start: "2024/12/08 18:00",
      end: "18:45",
      time: 45,
      stage: 3,
    },
    {
      id: 97,
      Artist: "Skinny",
      start: "2024/12/08 19:00",
      end: "19:45",
      time: 45,
      stage: 3,
    },
    {
      id: 98,
      Artist: "Super Spring Board",
      start: "2024/12/08 20:00",
      end: "20:45",
      time: 45,
      stage: 3,
    },
    {
      id: 99,
      Artist: "ฮิวโก้ Fly x ปู Blackhead",
      start: "2024/12/08 21:00",
      end: "22:00",
      time: 60,
      stage: 3,
    },
    {
      id: 100,
      Artist: "Skinny",
      start: "2024/12/08 22:15",
      end: "23:00",
      time: 45,
      stage: 3,
    },
    {
      id: 101,
      Artist: "แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก (JSPKK)",
      start: "2024/12/08 23:15",
      end: "00:15",
      time: 60,
      stage: 3,
    },
    {
      id: 102,
      Artist: "Nanakess5",
      start: "2024/12/08 00:15",
      end: "00:45",
      time: 30,
      stage: 3,
    },
    {
      id: 103,
      Artist: "On The Way",
      start: "2024/12/08 00:45",
      end: "01:30",
      time: 45,
      stage: 3,
    },
    {
      id: 104,
      Artist: "DJ Leo",
      start: "2024/12/08 01:30",
      end: "04:00",
      time: 150,
      stage: 3,
    },
    {
      id: 105,
      Artist: "V3rse / Monica",
      start: "2024/12/08 16:30",
      end: "17:15",
      time: 45,
      stage: 4,
    },
    {
      id: 106,
      Artist: "Polycat",
      start: "2024/12/08 17:30",
      end: "18:15",
      time: 45,
      stage: 4,
    },
    {
      id: 107,
      Artist: "Tilly Birds",
      start: "2024/12/08 18:30",
      end: "19:15",
      time: 45,
      stage: 4,
    },
    {
      id: 108,
      Artist: "Paradox",
      start: "2024/12/08 19:30",
      end: "20:15",
      time: 45,
      stage: 4,
    },
    {
      id: 109,
      Artist: "Singto Numchok",
      start: "2024/12/08 20:30",
      end: "21:15",
      time: 45,
      stage: 4,
    },
    {
      id: 110,
      Artist: "Da Endorphine",
      start: "2024/12/08 21:30",
      end: "22:15",
      time: 45,
      stage: 4,
    },
    {
      id: 111,
      Artist: "Lula",
      start: "2024/12/08 22:30",
      end: "23:15",
      time: 45,
      stage: 4,
    },
    {
      id: 112,
      Artist: "Pop Pongkool",
      start: "2024/12/08 23:30",
      end: "00:15",
      time: 45,
      stage: 4,
    },
    {
      id: 113,
      Artist: "Joeyboy",
      start: "2024/12/08 00:30",
      end: "01:15",
      time: 45,
      stage: 4,
    },
    {
      id: 115,
      Artist: "Kalipse",
      start: "2024/12/08 14:00",
      end: "14:30",
      time: 30,
      stage: 5,
    },
    {
      id: 116,
      Artist: "Lemony",
      start: "2024/12/08 15:00",
      end: "15:30",
      time: 30,
      stage: 5,
    },
    {
      id: 117,
      Artist: "Sitta",
      start: "2024/12/08 16:00",
      end: "16:45",
      time: 45,
      stage: 5,
    },
    {
      id: 118,
      Artist: "Whatfalse",
      start: "2024/12/08 17:15",
      end: "18:00",
      time: 45,
      stage: 5,
    },
    {
      id: 119,
      Artist: "Doseochishima (JP)",
      start: "2024/12/08 18:30",
      end: "19:15",
      time: 45,
      stage: 5,
    },
    {
      id: 120,
      Artist: "ดวงดาวเดียวดาย",
      start: "2024/12/08 19:45",
      end: "20:30",
      time: 45,
      stage: 5,
    },
    {
      id: 121,
      Artist: "พงษ์เทพ กระโดนชำนาญ",
      start: "2024/12/08 21:00",
      end: "22:30",
      time: 90,
      stage: 5,
    },
    {
      id: 122,
      Artist: "เขียนไขและวานิช",
      start: "2024/12/08 23:00",
      end: "23:45",
      time: 45,
      stage: 5,
    },
    {
      id: 123,
      Artist: "มนต์แคน",
      start: "2024/12/08 00:15",
      end: "01:00",
      time: 45,
      stage: 5,
    },
    {
      id: 124,
      Artist: "DJ Arrai",
      start: "2024/12/08 19:30",
      end: "21:00",
      time: 90,
      stage: 6,
    },
    {
      id: 125,
      Artist: "DJ PPT",
      start: "2024/12/08 21:00",
      end: "22:30",
      time: 90,
      stage: 6,
    },
    {
      id: 126,
      Artist: "DJ Tum To",
      start: "2024/12/08 22:30",
      end: "00:00",
      time: 90,
      stage: 6,
    },
    {
      id: 127,
      Artist: "DJ Krissada Funk & MC Title",
      start: "2024/12/08 00:00",
      end: "01:30",
      time: 90,
      stage: 6,
    },
    {
      id: 128,
      Artist: "DJ Apple & MC Korner",
      start: "2024/12/08 01:30",
      end: "03:00",
      time: 90,
      stage: 6,
    },
    {
      id: 129,
      Artist: "Television Off",
      start: "2024/12/08 13:15",
      end: "14:00",
      time: 45,
      stage: 7,
    },
    {
      id: 130,
      Artist: "Purrpeech",
      start: "2024/12/08 14:30",
      end: "15:15",
      time: 45,
      stage: 7,
    },
    {
      id: 131,
      Artist: "The Chairs (TW)",
      start: "2024/12/08 15:45",
      end: "16:30",
      time: 45,
      stage: 7,
    },
    {
      id: 132,
      Artist: "Yented",
      start: "2024/12/08 17:00",
      end: "17:45",
      time: 45,
      stage: 7,
    },
    {
      id: 133,
      Artist: "Dept",
      start: "2024/12/08 18:15",
      end: "19:00",
      time: 45,
      stage: 7,
    },
    {
      id: 134,
      Artist: "Dragon Pony (KR)",
      start: "2024/12/08 19:30",
      end: "20:15",
      time: 45,
      stage: 7,
    },
    {
      id: 135,
      Artist: "Whal & Dolph",
      start: "2024/12/08 20:45",
      end: "21:30",
      time: 45,
      stage: 7,
    },
    {
      id: 136,
      Artist: "Mirrr",
      start: "2024/12/08 22:00",
      end: "22:45",
      time: 45,
      stage: 7,
    },
    {
      id: 137,
      Artist: "Only Monday",
      start: "2024/12/08 23:15",
      end: "00:00",
      time: 45,
      stage: 7,
    },
    {
      id: 138,
      Artist: "Freehand",
      start: "2024/12/08 00:30",
      end: "01:15",
      time: 45,
      stage: 7,
    },
    {
      id: 139,
      Artist: "ATLAS",
      start: "2024/12/08 16:30",
      end: "17:15",
      time: 45,
      stage: 8,
    },
    {
      id: 140,
      Artist: "PERSES",
      start: "2024/12/08 17:30",
      end: "18:15",
      time: 45,
      stage: 8,
    },
    {
      id: 141,
      Artist: "PROXIE",
      start: "2024/12/08 18:30",
      end: "19:15",
      time: 45,
      stage: 8,
    },
    {
      id: 142,
      Artist: "4EVE",
      start: "2024/12/08 19:30",
      end: "20:15",
      time: 45,
      stage: 8,
    },
    {
      id: 143,
      Artist: "PiXXiE",
      start: "2024/12/08 20:30",
      end: "21:15",
      time: 45,
      stage: 8,
    },
    {
      id: 144,
      Artist: "Krist/Gemini/Fourth/Lyhn",
      start: "2024/12/08 21:30",
      end: "22:50",
      time: 80,
      stage: 8,
    },
    {
      id: 145,
      Artist: "Jeff Satur",
      start: "2024/12/08 23:05",
      end: "23:50",
      time: 45,
      stage: 8,
    },
    {
      id: 146,
      Artist: "UrboyTJ",
      start: "2024/12/08 00:05",
      end: "200:50",
      time: 45,
      stage: 8,
    },
    {
      id: 147,
      Artist: "F.HERO",
      start: "2024/12/08 01:05",
      end: "01:50",
      time: 45,
      stage: 8,
    },
  ];

  const selectValue = (data, status) => {
    if (status === "delete") {
      setShowModal(false);
      setDataSelect(dataSelect.filter((value) => value.id !== data.id));
      console.log(
        "----",
        dataSelect.filter((value) => value.id !== data.id)
      );
    } else {
      console.log("data-------", data);
      dataSelect.push(data);
      setShowModal(false);
    }
  };

  const certificateRef = useRef(null);
  const screenShot = (element) => {
    html2canvas(element).then((canvas) => {
      const image = canvas.toDataURL("png");
      const a = document.createElement("a");
      a.setAttribute("download", "bmmf.png");
      a.setAttribute("href", image);
      a.click();
    });
  };

  console.log("dataSelect", dataSelect);

  return (
    <Container>
      <FlexDate>
        <TextDes>
          <div>- develop by</div>{" "}
          <FacebookIcon
            sx={{ color: "#0866FF", paddingRight: "5px", paddingLeft: "5px" }}
          />{" "}
          <div>
            {" "}
            <FBText
              onClick={() => window.open("https://www.facebook.com/Mintnutti/")}
            >
              Miint Nuttida
            </FBText>{" "}
            -{" "}
          </div>
        </TextDes>
      </FlexDate>

      <FlexStage>
        <DivStage>
          <DotColor bgColor={"#c0ce11"} />
          <TextStage>FERRIS WHEEL STAGE</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#b756ff"} />
          <TextStage>Rumwong bar X ระเบียบวาทะศิลป์</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#f84c65"} />
          <TextStage>Akojorn pub by Nanake555</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#f373c2"} />
          <TextStage>COW STAGE</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#49e4eb"} />
          <TextStage>Chic/Kratom stage</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#45ff5a"} />
          <TextStage>For-rest stage</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#f1cd62"} />
          <TextStage>PEPSI stage</TextStage>
        </DivStage>

        <DivStage>
          <DotColor bgColor={"#f37f35"} />
          <TextStage>Black/BLOCK stage</TextStage>
        </DivStage>
      </FlexStage>

      <FlexDate>
        <DateConcert
          onClick={() => setSelectDate(1)}
          bg={selectDate === 1 && true}
        >
          <TextDate>วันที่ 7</TextDate>
        </DateConcert>

        <DateConcert
          onClick={() => setSelectDate(2)}
          bg={selectDate === 2 && true}
        >
          <TextDate>วันที่ 8</TextDate>
        </DateConcert>
      </FlexDate>

      <FlexDate>
        <TextDes style={{ color: "red" }}>
          ***กดที่ชื่อศิลปินเพื่อเลือก***
        </TextDes>
      </FlexDate>
      {/* <FlexDateSearch>
        <TextField
          placeholder="ค้นหารายชื่อศิลปิน"
          label="ค้นหารายชื่อศิลปิน"
          slotProps={
            {
              // input: {
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <AccountCircle />
              //     </InputAdornment>
              //   ),
              // },
            }
          }
        />
      </FlexDateSearch> */}

      <ContainerTable>
        <FlexData>
          {defaultTime.map((data) => (
            <TimeTable>
              <TextTime>{new Date(data.dateData).getHours()}.00</TextTime>
            </TimeTable>
          ))}
        </FlexData>

        <FlexData>
          {defaultTime.map((data) => (
            <TimeTableArtis>
              {selectDate === 1
                ? dataSatgeFrist.map(
                    (value, key) =>
                      new Date(value.start).getHours() ===
                        new Date(data.dateData).getHours() && (
                        <TabStage
                          onClick={() => setShowModal(value)}
                          border={
                            value.id ===
                              dataSelect.find(
                                (element) => element.id === value.id
                              )?.id && true
                          }
                          top={
                            value.stage === 1
                              ? "2%"
                              : value.stage === 2
                              ? "12.5%"
                              : value.stage === 3
                              ? "25%"
                              : value.stage === 4
                              ? "37.5%"
                              : value.stage === 5
                              ? "50%"
                              : value.stage === 6
                              ? "62.5%"
                              : value.stage === 7
                              ? "75%"
                              : value.stage === 8 && "87.5%"
                          }
                          width={(value.time / 60) * 100}
                          bgColor={
                            value.stage === 1
                              ? "#c0ce11"
                              : value.stage === 2
                              ? "#b756ff"
                              : value.stage === 3
                              ? "#f84c65"
                              : value.stage === 4
                              ? "#f373c2"
                              : value.stage === 5
                              ? "#49e4eb"
                              : value.stage === 6
                              ? "#45ff5a"
                              : value.stage === 7
                              ? "#f1cd62"
                              : value.stage === 8 && "#f37f35"
                          }
                          left={(new Date(value.start).getMinutes() / 60) * 100}
                        >
                          {value.id ===
                            dataSelect.find(
                              (element) => element.id === value.id
                            )?.id && <XStage>x</XStage>}
                          <TextArtist
                            color={
                              value.stage === 6 || (value.stage === 8 && true)
                            }
                          >
                            {value.Artist}
                          </TextArtist>
                        </TabStage>
                      )
                  )
                : dataSatgeSecond.map(
                    (value, key) =>
                      new Date(value.start).getHours() ===
                        new Date(data.dateData).getHours() && (
                        <TabStage
                          onClick={() => setShowModal(value)}
                          border={
                            value.id ===
                              dataSelect.find(
                                (element) => element.id === value.id
                              )?.id && true
                          }
                          top={
                            value.stage === 1
                              ? "2%"
                              : value.stage === 2
                              ? "12.5%"
                              : value.stage === 3
                              ? "25%"
                              : value.stage === 4
                              ? "37.5%"
                              : value.stage === 5
                              ? "50%"
                              : value.stage === 6
                              ? "62.5%"
                              : value.stage === 7
                              ? "75%"
                              : value.stage === 8 && "87.5%"
                          }
                          width={(value.time / 60) * 100}
                          bgColor={
                            value.stage === 1
                              ? "#c0ce11"
                              : value.stage === 2
                              ? "#b756ff"
                              : value.stage === 3
                              ? "#f84c65"
                              : value.stage === 4
                              ? "#f373c2"
                              : value.stage === 5
                              ? "#49e4eb"
                              : value.stage === 6
                              ? "#45ff5a"
                              : value.stage === 7
                              ? "#f1cd62"
                              : value.stage === 8 && "#f37f35"
                          }
                          left={(new Date(value.start).getMinutes() / 60) * 100}
                        >
                          {value.id ===
                            dataSelect.find(
                              (element) => element.id === value.id
                            )?.id && <XStage>x</XStage>}
                          <TextArtist
                            color={
                              value.stage === 6 || (value.stage === 8 && true)
                            }
                          >
                            {value.Artist}
                          </TextArtist>
                        </TabStage>
                      )
                  )}
            </TimeTableArtis>
          ))}
        </FlexData>
      </ContainerTable>

      <DivSelectDataArtist ref={certificateRef}>
        <DivImgLogo src={process.env.PUBLIC_URL + "/bmmf_14_logo.png"} />
        <DivImgBG src={process.env.PUBLIC_URL + "/bgskyopacity.png"} />
        <SelectDataArtist>
          <DivTextDate>
            รายชื่อศิลปินที่เลือก วันที่ {selectDate === 1 ? "7" : "8"}
          </DivTextDate>
        </SelectDataArtist>
        {selectDate === 1 ? (
          <>
            <>
              {dataSelect?.map(
                (data, key) =>
                  new Date(data.start).getDate() === 7 &&
                  new Date(data.start).getHours() > 4 && (
                    <SelectDataArtist>
                      {data.Artist} -
                      {new Date(data.start).getHours() < 10
                        ? "0" + new Date(data.start).getHours()
                        : new Date(data.start).getHours()}
                      :
                      {new Date(data.start).getMinutes() === 0
                        ? "00"
                        : new Date(data.start).getMinutes()}
                      น.-{data.end}น. -&nbsp;
                      <TextArtistSelect
                        color={
                          data.stage === 1
                            ? "#c0ce11"
                            : data.stage === 2
                            ? "#b756ff"
                            : data.stage === 3
                            ? "#f84c65"
                            : data.stage === 4
                            ? "#f373c2"
                            : data.stage === 5
                            ? "#49e4eb"
                            : data.stage === 6
                            ? "#45ff5a"
                            : data.stage === 7
                            ? "#f1cd62"
                            : data.stage === 8 && "#f37f35"
                        }
                      >
                        {data.stage === 1
                          ? "FERRIS WHEEL STAGE"
                          : data.stage === 2
                          ? "Rumwong bar X ระเบียบวาทะศิลป์"
                          : data.stage === 3
                          ? "Akojorn pub by Nanake555"
                          : data.stage === 4
                          ? "COW STAGE"
                          : data.stage === 5
                          ? "Chic/Kratom stage"
                          : data.stage === 6
                          ? "For-rest stage"
                          : data.stage === 7
                          ? "PEPSI stage"
                          : data.stage === 8 && "Black/BLOCK stage"}
                      </TextArtistSelect>
                    </SelectDataArtist>
                  )
              )}
            </>
            <>
              {dataSelect?.map(
                (data, key) =>
                  new Date(data.start).getDate() === 7 &&
                  new Date(data.start).getHours() < 4 && (
                    <SelectDataArtist>
                      {data.Artist} -{" "}
                      {new Date(data.start).getHours() < 10
                        ? "0" + new Date(data.start).getHours()
                        : new Date(data.start).getHours()}
                      :
                      {new Date(data.start).getMinutes() === 0
                        ? "00"
                        : new Date(data.start).getMinutes()}
                      น.-{data.end}น. -&nbsp;
                      <TextArtistSelect
                        color={
                          data.stage === 1
                            ? "#c0ce11"
                            : data.stage === 2
                            ? "#b756ff"
                            : data.stage === 3
                            ? "#f84c65"
                            : data.stage === 4
                            ? "#f373c2"
                            : data.stage === 5
                            ? "#49e4eb"
                            : data.stage === 6
                            ? "#45ff5a"
                            : data.stage === 7
                            ? "#f1cd62"
                            : data.stage === 8 && "#f37f35"
                        }
                      >
                        {data.stage === 1
                          ? "FERRIS WHEEL STAGE"
                          : data.stage === 2
                          ? "Rumwong bar X ระเบียบวาทะศิลป์"
                          : data.stage === 3
                          ? "Akojorn pub by Nanake555"
                          : data.stage === 4
                          ? "COW STAGE"
                          : data.stage === 5
                          ? "Chic/Kratom stage"
                          : data.stage === 6
                          ? "For-rest stage"
                          : data.stage === 7
                          ? "PEPSI stage"
                          : data.stage === 8 && "Black/BLOCK stage"}
                      </TextArtistSelect>
                    </SelectDataArtist>
                  )
              )}
            </>
          </>
        ) : (
          <>
            <>
              {dataSelect?.map(
                (data) =>
                  new Date(data.start).getDate() === 8 &&
                  new Date(data.start).getHours() > 4 && (
                    <SelectDataArtist>
                      {data.Artist} -{" "}
                      {new Date(data.start).getHours() < 10
                        ? "0" + new Date(data.start).getHours()
                        : new Date(data.start).getHours()}
                      :
                      {new Date(data.start).getMinutes() === 0
                        ? "00"
                        : new Date(data.start).getMinutes()}
                      น.-{data.end}น. -&nbsp;
                      <TextArtistSelect
                        color={
                          data.stage === 1
                            ? "#c0ce11"
                            : data.stage === 2
                            ? "#b756ff"
                            : data.stage === 3
                            ? "#f84c65"
                            : data.stage === 4
                            ? "#f373c2"
                            : data.stage === 5
                            ? "#49e4eb"
                            : data.stage === 6
                            ? "#45ff5a"
                            : data.stage === 7
                            ? "#f1cd62"
                            : data.stage === 8 && "#f37f35"
                        }
                      >
                        {data.stage === 1
                          ? "FERRIS WHEEL STAGE"
                          : data.stage === 2
                          ? "Rumwong bar X ระเบียบวาทะศิลป์"
                          : data.stage === 3
                          ? "Akojorn pub by Nanake555"
                          : data.stage === 4
                          ? "COW STAGE"
                          : data.stage === 5
                          ? "Chic/Kratom stage"
                          : data.stage === 6
                          ? "For-rest stage"
                          : data.stage === 7
                          ? "PEPSI stage"
                          : data.stage === 8 && "Black/BLOCK stage"}
                      </TextArtistSelect>
                    </SelectDataArtist>
                  )
              )}
            </>
            <>
              {dataSelect?.map(
                (data) =>
                  new Date(data.start).getDate() === 8 &&
                  new Date(data.start).getHours() < 4 && (
                    <SelectDataArtist>
                      {data.Artist} -{" "}
                      {new Date(data.start).getHours() < 10
                        ? "0" + new Date(data.start).getHours()
                        : new Date(data.start).getHours()}
                      :
                      {new Date(data.start).getMinutes() === 0
                        ? "00"
                        : new Date(data.start).getMinutes()}
                      น.-{data.end}น. -&nbsp;
                      <TextArtistSelect
                        color={
                          data.stage === 1
                            ? "#c0ce11"
                            : data.stage === 2
                            ? "#b756ff"
                            : data.stage === 3
                            ? "#f84c65"
                            : data.stage === 4
                            ? "#f373c2"
                            : data.stage === 5
                            ? "#49e4eb"
                            : data.stage === 6
                            ? "#45ff5a"
                            : data.stage === 7
                            ? "#f1cd62"
                            : data.stage === 8 && "#f37f35"
                        }
                      >
                        {data.stage === 1
                          ? "FERRIS WHEEL STAGE"
                          : data.stage === 2
                          ? "Rumwong bar X ระเบียบวาทะศิลป์"
                          : data.stage === 3
                          ? "Akojorn pub by Nanake555"
                          : data.stage === 4
                          ? "COW STAGE"
                          : data.stage === 5
                          ? "Chic/Kratom stage"
                          : data.stage === 6
                          ? "For-rest stage"
                          : data.stage === 7
                          ? "PEPSI stage"
                          : data.stage === 8 && "Black/BLOCK stage"}
                      </TextArtistSelect>
                    </SelectDataArtist>
                  )
              )}
            </>
          </>
        )}
      </DivSelectDataArtist>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {showModal !== false &&
            dataSatgeFrist.map((value, key) => (
              <>
                <ModalArtist>
                  <X onClick={() => setShowModal(false)}>
                    <CloseIcon sx={{ color: "#b756ff", paddingLeft: "2px" }} />
                  </X>
                  <TextName
                    bgColor={
                      showModal.stage === 1
                        ? "#c0ce11"
                        : showModal.stage === 2
                        ? "#b756ff"
                        : showModal.stage === 3
                        ? "#f84c65"
                        : showModal.stage === 4
                        ? "#f373c2"
                        : showModal.stage === 5
                        ? "#49e4eb"
                        : showModal.stage === 6
                        ? "#45ff5a"
                        : showModal.stage === 7
                        ? "#f1cd62"
                        : showModal.stage === 8 && "#f37f35"
                    }
                  >
                    {showModal.Artist}
                  </TextName>
                  <TextModal>
                    เวลา{" "}
                    {new Date(showModal.start).getHours() < 10
                      ? "0" + new Date(showModal.start).getHours()
                      : new Date(showModal.start).getHours()}
                    :
                    {new Date(showModal.start).getMinutes() === 0
                      ? "00"
                      : new Date(showModal.start).getMinutes()}
                    -{showModal.end}
                  </TextModal>
                  <TextModal>เวลาในการแสดง {showModal.time} นาที</TextModal>
                  <TextModal
                    bgColor={
                      showModal.stage === 1
                        ? "#c0ce11"
                        : showModal.stage === 2
                        ? "#b756ff"
                        : showModal.stage === 3
                        ? "#f84c65"
                        : showModal.stage === 4
                        ? "#f373c2"
                        : showModal.stage === 5
                        ? "#49e4eb"
                        : showModal.stage === 6
                        ? "#45ff5a"
                        : showModal.stage === 7
                        ? "#f1cd62"
                        : showModal.stage === 8 && "#f37f35"
                    }
                  >
                    เวที{" "}
                    {showModal.stage === 1
                      ? "FERRIS WHEEL STAGE"
                      : showModal.stage === 2
                      ? "Rumwong bar X ระเบียบวาทะศิลป์"
                      : showModal.stage === 3
                      ? "Akojorn pub by Nanake555"
                      : showModal.stage === 4
                      ? "COW STAGE"
                      : showModal.stage === 5
                      ? "Chic/Kratom stage"
                      : showModal.stage === 6
                      ? "For-rest stage"
                      : showModal.stage === 7
                      ? "PEPSI stage"
                      : showModal.stage === 8 && "Black/BLOCK stage"}
                  </TextModal>
                  <ButtonSelect
                    onClick={() =>
                      showModal.id ===
                      dataSelect.find((element) => element.id === showModal.id)
                        ?.id
                        ? selectValue(showModal, "delete")
                        : selectValue(showModal, 1)
                    }
                    bgColor={
                      showModal.id ===
                      dataSelect.find((element) => element.id === showModal.id)
                        ?.id
                        ? "#cecece"
                        : showModal.stage === 1
                        ? "#c0ce11"
                        : showModal.stage === 2
                        ? "#b756ff"
                        : showModal.stage === 3
                        ? "#f84c65"
                        : showModal.stage === 4
                        ? "#f373c2"
                        : showModal.stage === 5
                        ? "#49e4eb"
                        : showModal.stage === 6
                        ? "#45ff5a"
                        : showModal.stage === 7
                        ? "#f1cd62"
                        : showModal.stage === 8 && "#f37f35"
                    }
                    color={
                      showModal.stage === 6 || (showModal.stage === 8 && true)
                    }
                  >
                    {showModal.id ===
                    dataSelect.find((element) => element.id === showModal.id)
                      ?.id
                      ? "ลบ"
                      : "เลือก"}
                  </ButtonSelect>
                </ModalArtist>
              </>
            ))}
        </Box>
      </Modal>

      <Button
        sx={{ marginTop: "20px", marginBottom: "50px" }}
        startIcon={<DownloadIcon />}
        variant="contained"
        onClick={() => screenShot(certificateRef.current)}
      >
        ดาวน์โหลด
      </Button>
    </Container>
  );
}

export default Bmmf;
