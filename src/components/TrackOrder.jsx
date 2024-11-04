import React, { useEffect } from "react";  
import axios from "axios";
import { useState } from 'react'
import checkImg from '../assets/Check img.jpg';
import DeliveryImg from '../assets/Delivery Img.jpg'

const TrackOrder =()=>{
   
    // const url = 'https://blktracksvc.dtdc.com/dtdc-api/rest/JSONCnTrk/getTrackDetails'; // Direct API URL

    // const data = {
    //     trkType: 'cnno',
    //     strcnno: '7D101179101',
    //     addtnlDtl: 'Y'
    // };

    // const config = {
    // headers: {
    //     'Content-Type': 'application/json',
    //     'X-Access-Token': 'IO1421_trk_json:53f28800c5ef566a91fd2e4d43f26d1e',
    //     'Cookie': 'JSESSIONID=9B428F691333E0B17EA560B33CBCFA2A; JSESSIONID=573048E0254C9D56E23ED16D2A3F8B7C'
    // }
    // };
    // const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-Access-Token': 'IO1421_trk_json:53f28800c5ef566a91fd2e4d43f26d1e'
    //       // No Cookie header
    //     }
    //   };

    const [orderData,setOrderData] = useState([
        {
            statusCode: 200,
            statusFlag: true,
            status: "SUCCESS",
            version: null,
            errorDetails: null,
            trackHeader: {
              strShipmentNo: "7D101179101",
              strRefNo: "5103",
              strCNType: "CPDP",
              strCNTypeCode: "IF456",
              strCNActCustCode: "IO1421",
              strCNTypeName: "AWADHPURI - SAMANWAY NAGAR",
              strCNProduct: "STANDARD",
              strModeCode: null,
              strMode: null,
              strCNProdCODFOD: "NDX",
              strOrigin: "BHOPAL",
              strOriginRemarks: "Booked By",
              strBookedDate: "09102024",
              strBookedTime: "22:03:06",
              strPieces: "1",
              strWeightUnit: null,
              strWeight: null,
              strDestination: "PANCHKULA",
              strStatus: "Delivered",
              strStatusTransOn: "15102024",
              strStatusTransTime: "1306",
              strStatusRelCode: "SEL",
              strStatusRelName: "",
              strRemarks: "PARVEZ KRISHAN",
              strNoOfAttempts: "2",
              strRtoNumber: "",
              strComplaintNo: "",
              strActualServiceType: null,
              strExpectedAgent: null,
              strActualAgent: null,
              strConnectionDateTime: null,
              strAltReferenceNumber: null,
              strAgentConnectionLocation: null,
              strBookingType: null,
              strExpectedDeliveryDate: "15102024",
              strRevExpectedDeliveryDate: "16102024"
            },
            trackDetails: [
              {
                strCode: "SPL",
                strAction: "Softdata Upload",
                strManifestNo: "",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "",
                strOriginCode: "I02",
                strDestinationCode: "",
                strActionDate: "09102024",
                strActionTime: "1202",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "PCSC",
                strAction: "Pickup Scheduled",
                strManifestNo: "7284555177443",
                strOrigin: "HUB OFFICE",
                strDestination: "",
                strOriginCode: "PF980",
                strDestinationCode: "",
                strActionDate: "09102024",
                strActionTime: "1202",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "PCAW",
                strAction: "Pickup Awaited",
                strManifestNo: "",
                strOrigin: "HUB OFFICE",
                strDestination: "",
                strOriginCode: "PF980",
                strDestinationCode: "",
                strActionDate: "09102024",
                strActionTime: "1202",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "BKD",
                strAction: "Booked",
                strManifestNo: "",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "",
                strOriginCode: "I02",
                strDestinationCode: "",
                strActionDate: "09102024",
                strActionTime: "2203",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "OBMN",
                strAction: "In Transit",
                strManifestNo: "I4407530",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "NORTH T/S APEX",
                strOriginCode: "I02",
                strDestinationCode: "N04",
                strActionDate: "09102024",
                strActionTime: "2229",
                sTrRemarks: "0.00",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "CDOUT",
                strAction: "In Transit",
                strManifestNo: "13810",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "DELHI SAMALKHA APEX",
                strOriginCode: "I02",
                strDestinationCode: "N05",
                strActionDate: "09102024",
                strActionTime: "2251",
                sTrRemarks: "Out Going Load Made To DELHI SAMALKHA APEX via  Master ConNo.I02N050910224429",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "CDIN",
                strAction: "In Transit",
                strManifestNo: "13810",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "DELHI SAMALKHA APEX",
                strOriginCode: "I02",
                strDestinationCode: "N05",
                strActionDate: "11102024",
                strActionTime: "1556",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "IBMN",
                strAction: "In Transit",
                strManifestNo: "Y1632425117",
                strOrigin: "BHOPAL BRANCH",
                strDestination: "DELHI SAMALKHA APEX",
                strOriginCode: "I02",
                strDestinationCode: "N05",
                strActionDate: "11102024",
                strActionTime: "1632",
                sTrRemarks: "12.30",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "OBMN",
                strAction: "In Transit",
                strManifestNo: "1004593499",
                strOrigin: "DELHI SAMALKHA APEX",
                strDestination: "PANCHKULA BRANCH",
                strOriginCode: "N05",
                strDestinationCode: "J13",
                strActionDate: "11102024",
                strActionTime: "1752",
                sTrRemarks: "12.30",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "CDOUT",
                strAction: "In Transit",
                strManifestNo: "C19061577022338724943",
                strOrigin: "DELHI SAMALKHA APEX",
                strDestination: "PANCHKULA BRANCH",
                strOriginCode: "N05",
                strDestinationCode: "J13",
                strActionDate: "11102024",
                strActionTime: "2238",
                sTrRemarks: "Out Going Load Made To PANCHKULA BRANCH via  Master ConNo.C19061577022338724943",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "CDIN",
                strAction: "In Transit",
                strManifestNo: "",
                strOrigin: "DELHI SAMALKHA APEX",
                strDestination: "PANCHKULA BRANCH",
                strOriginCode: "N05",
                strDestinationCode: "J13",
                strActionDate: "12102024",
                strActionTime: "0801",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "IBMN",
                strAction: "In Transit",
                strManifestNo: "1004593499",
                strOrigin: "DELHI SAMALKHA APEX",
                strDestination: "PANCHKULA BRANCH",
                strOriginCode: "N05",
                strDestinationCode: "J13",
                strActionDate: "12102024",
                strActionTime: "0848",
                sTrRemarks: "0.00",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "INSCAN",
                strAction: "Reached At Destination",
                strManifestNo: "1004593499",
                strOrigin: "DELHI SAMALKHA APEX",
                strDestination: "PANCHKULA BRANCH",
                strOriginCode: "N05",
                strDestinationCode: "",
                strActionDate: "12102024",
                strActionTime: "0848",
                sTrRemarks: "0.00",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "OUTDLV",
                strAction: "Out For Delivery",
                strManifestNo: "00273420849LI",
                strOrigin: "PANCHKULA BRANCH",
                strDestination: "",
                strOriginCode: "J13",
                strDestinationCode: "",
                strActionDate: "14102024",
                strActionTime: "1634",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "NONDLV",
                strAction: "Not Delivered",
                strManifestNo: "00273420849LI",
                strOrigin: "PANCHKULA BRANCH",
                strDestination: "",
                strOriginCode: "J13",
                strDestinationCode: "",
                strActionDate: "14102024",
                strActionTime: "1647",
                sTrRemarks: "UAT|COULD NOT ATTEMPT",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "OUTDLV",
                strAction: "Out For Delivery",
                strManifestNo: "V520241015091917",
                strOrigin: "PANCHKULA BRANCH",
                strDestination: "",
                strOriginCode: "J13",
                strDestinationCode: "",
                strActionDate: "15102024",
                strActionTime: "0919",
                sTrRemarks: "",
                strLatitude: "",
                strLongitude: ""
              },
              {
                strCode: "DLV",
                strAction: "Delivered",
                strManifestNo: "5060378363",
                strOrigin: "PANCHKULA BRANCH",
                strDestination: "",
                strOriginCode: "J13",
                strDestinationCode: "",
                strActionDate: "15102024",
                strActionTime: "1306",
                sTrRemarks: "PARVEZ KRISHAN",
                strSCDOTP: "N",
                strLatitude: "",
                strLongitude: ""
              }
            ]
          }
    ]);
    // useEffect(()=>{
    //     async function getTrackingDetails(){
    //         try{
    //             const {trackDetails} = await axios.post(url, data, config);
    //             setOrderData(trackDetails);
    //         }
    //         catch(error){
    //             console.log("Something Went wrong",error);
    //         }
    //     }
    //     getTrackingDetails();
    // },[])
    let {trackDetails} = orderData[0];
    console.log(trackDetails);
    return(
        <>
            <div className="m-5">
                <div className="flex flex-col items-center mb-10">
                    <img className="w-80 h-60 rounded-full" src={DeliveryImg} alt="this is img"  />
                    <p className="text-black font-semibold mt-3">
    
                        Tracking Number: {orderData[0].trackHeader.strShipmentNo}
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <ol className="relative text-black-50">
                        {trackDetails.reverse().map((item,index)=>{
                            return(
                            <li key={index} className="mb-10 ms-6">
                                <div className="flex">
                                <img className="w-8 h-8 rounded-full"  src={checkImg} alt="" />
                                <h3 className="font-medium leading-tight ml-2 self-center">{item.strAction}</h3>
                                </div>
                                <p className="text-sm ml-3">
                                    Shippment scanned at {item.strOrigin}
                                    <br />
                                    At : {item.strActionTime.slice(0,2).toString() }:{ item.strActionTime.slice(2).toString()}
                                    <br />
                                    Date :
                                    {item.strActionDate.slice(0,2).toString()}/ 
                                    {item.strActionDate.slice(2,4).toString()}/
                                    {item.strActionDate.slice(4).toString()}

                                </p>
                            </li>)
                        })}
                    </ol>

                </div>
            </div>
        </>
    )
}

export default TrackOrder;