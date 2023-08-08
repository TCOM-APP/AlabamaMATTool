//onload 
window.onload = () => { getElements(); };

//global varriables
let checkedRadio = [];
let itemsList = ["1. Physical/Medical: ", "2. Intellectual: ", "3. Developmental: ", "4. Self-Care/Daily Living Skills: ", "5. Family Functioning: ", "6. Sleep: ", "7. School Achievement: ", 
                    "8. School Behavior: ", "9. School Attendance: ", "10. Sexual Developement: ", "11. Abuse: ", "12. Neglect: ", "13. Permanency: ", "14. Expliotation: ", "15. Psychotic Symptoms: ",
                    "16. Attention Deficit/Impulse Control: ", "17. Depression/Anxiety: ", "18. Anger Control: ", "19. Oppositional Behavior: ", "20. Antisocial Behavior: ", "21. Adjustment to Trauma: ", 
                    "22. Attachment: ", "23. Situational Consistency of Problems: ", "24. Temporal Consistency of Mental Health Problems: ", "25. Abuse History: ", "26. Family History of Mental Illness: ", 
                    "27. Suicide Risk: ", "28. Self Mutilation: ", "29. Fire Setting: ", "30. Runaway: ", "31. Social Behavior: ", "32. Substance Use: ", "33. Delinquency: ", "34. Danger to Others/Violence: ", 
                    "35. Sexually Reactive Behavior: ", "36. Sexual Aggression: ", "37. Urgency: ", "38. Monitoring: ", "39. Treatment Intensity: ", "40. Transportation: ", "41. Service Permanence: ", "42. Physical/Behavioral Health (CG): ",
                    "43. Supervision (CG): ", "44. Involvement with Care (CG): ", "45. Knowledge (CG): ", "46. Organization (CG): ", "47. Resources (CG): ", "48. Residential Stability (CG): ", "49. Family: ", "50. Interpersonal: ", 
                    "51. Relationship Permanence: ", "52. Educational: ", "53. Vocational: ", "54. Resiliency-Crisis: ", "55. Resiliency-Long Term: ", "56. Optimism: ", "57. Talent/Interests: ", "58. Spiritual/Religous: ", "59. Community Life: ", 
                    "60. Independent Living Skills (14 and up): "];


//when the page loads, an event listener is put on the submit button. 
//when submit is push, an array (checkedRadio) is generated with the IDs for all the selected radio buttons.
function getElements() {
    //getting DOM Elements
    const submitButton = document.getElementById("calc");
    const resetButton = document.getElementById("reset");
    const radios = document.getElementsByClassName("r");
    const resultsDiv = document.getElementById("result");
    const popup = document.getElementById("myPopup");
    const age = document.getElementById('age');
    //event listener for reset button 
    resetButton.addEventListener('click', function (e) {
        location.reload();
    })
    //removes the "Please enter age" error message if the age box is clicked
    age.addEventListener('click', function (e){
        popup.style.display = "none"; 
    })
    //Event listener for submit button
    submitButton.addEventListener('click', function (e) {
        //array with all the radio buttons
        checkedRadio = [];
        //Displays an error message if the age is left blank
        if (!age.value) {
            popup.style.display = "block";
        }
        else {
            //checking which radios are checked and storing their values 
            for (let i = 0; i < 240; i++) {
                if (radios[i].checked === true) {
                    checkedRadio.push(radios[i].value);
                }
            }
            //getting the level from the huge list of if statements below and returning it 
            let level = getLevel(checkedRadio, age.value);
            //clearing the level display
            resultsDiv.innerHTML = "";
            //displaying the level 
            let pNode = document.createElement('h2');
            pNode.innerText = getpNodeText(level);
            resultsDiv.style.border = "2px solid black";
            resultsDiv.style.width = "25%";
            resultsDiv.appendChild(pNode);
            //button to print the results
            let printButton = document.createElement('button'); 
            printButton.innerHTML = "Print Results"; 
            printButton.style.marginBottom = '10px';
            resultsDiv.appendChild(printButton); 
            //event listener for the print button
            printButton.addEventListener('click', function (e){
                let printWindow = window.open('', '', 'height=600, width = 1000'); 
                printWindow.document.write('<html><head><style>'); 
                printWindow.document.write('table {width: 20%; border-collapse: collapse; margin-right: auto; }');
                printWindow.document.write('td, th{border: 2px solid black; padding: 8px;}');
                printWindow.document.write('#tableDiv {display: flex;}')
                printWindow.document.write("h2 {width: 90%; margin: auto; margin-bottom: 30px; }")
                printWindow.document.write('</style>'); 
                printWindow.document.write('<title>Alabama Support Model Level of Need</title>'); 
                printWindow.document.write('</head>'); 
                printWindow.document.write('<body>')
                printWindow.document.write('<h2>Alabama Support Model Level of Need: ' + getpNodeText(level) + '</h2>')
                printWindow.document.write('<div id = "tableDiv">')
                printWindow.document.write('<table>')
                for(let i =0; i < 15; i++){
                    printWindow.document.write('<tr><td>'+ itemsList[i] + checkedRadio[i] +'</td></tr>'); 
                }
                printWindow.document.write('</table>')
                printWindow.document.write('<table>')
                for(let i =15; i < 30; i++){
                    printWindow.document.write('<tr><td>'+ itemsList[i] + checkedRadio[i] +'</td></tr>'); 
                }
                printWindow.document.write('</table>');
                printWindow.document.write('<table>')
                for(let i = 30; i < 45; i++){
                    printWindow.document.write('<tr><td>'+ itemsList[i] + checkedRadio[i] +'</td></tr>'); 
                }
                printWindow.document.write('</table>')
                printWindow.document.write('<table>')
                for(let i =45; i < checkedRadio.length; i++){
                    printWindow.document.write('<tr><td>'+ itemsList[i] + checkedRadio[i] +'</td></tr>'); 
                }
                printWindow.document.write('</table>')
                printWindow.document.write('</div>')
                printWindow.document.write('</body>')
                printWindow.document.write('</html>');
                printWindow.print(); 
            })

        }
    })
}


//the names for the level of care 
function getpNodeText(level) {
    if (level == 1) {
        return "Foster Care";
    }
    else if (level == 2) {
        return "Independent Living";
    }
    else if (level == 3) {
        return "Transitional Living";
    }
    else if (level == 4) {
        return "Therapeutic Foster Care";
    }
    else if (level == 5) {
        return "Enhanced Therapeutic Foster Care";
    }
    else if (level == 7) {
        return "Moderate Residential";
    }
    else if (level == 8) {
        return "Intensive Residential";
    }
    //has to be else if because of the other level 9 case
    else if (level == 9) {
        return "Sexual Rehabilitation Services";
    }
    else {
        return "Specialized Foster Care";
    }

}

//getLevel takes the array of checked IDs and returns the "Level of Care" as well as the reason that level was selected. 
//the highest level should always be returned so the highest levels are checked first. 
//age does have an impact so age is given as num 
//there is no level 6 I don't know why
function getLevel(arr, num) {
    //Level 9 C91 and C92 and C93 and C94------------------------------------------------------------------------------------------------------------
    let C91 = false, C92 = false, C93 = false, C94 = false;
    //C91
    if (arr[14] == 3 || arr[15] == 3 || arr[16] == 3 || arr[17] == 3 || arr[18] == 3 || arr[19] == 3 || arr[20] == 3 || arr[21] == 3 || arr[31] == 3) {
        C91 = true;
    }
    let count = 0;
    if (arr[14] >= 2) {
        count++;
    }
    if (arr[15] >= 2) {
        count++;
    }
    if (arr[16] >= 2) {
        count++;
    }
    if (arr[17] >= 2) {
        count++;
    }
    if (arr[18] >= 2) {
        count++;
    }
    if (arr[19] >= 2) {
        count++;
    }
    if (arr[20] >= 2) {
        count++;
    }
    if (arr[21] >= 2) {
        count++;
    }
    if (arr[31] >= 2) {
        count++;
    }
    if (count >= 2) {
        C91 = true;
    }
    //C92
    if (arr[26] == 3 || arr[27] == 3 || arr[28] == 3 || arr[29] == 3 || arr[30] == 3 || arr[32] == 3 || arr[33] == 3) {
        C92 = true;
    }
    count = 0;
    if (arr[26] >= 2) {
        count++;
    }
    if (arr[27] >= 2) {
        count++;
    }
    if (arr[28] >= 2) {
        count++;
    }
    if (arr[29] >= 2) {
        count++;
    }
    if (arr[30] >= 2) {
        count++;
    }
    if (arr[32] >= 2) {
        count++;
    }
    if (arr[33] >= 2) {
        count++;
    }
    if (count >= 2) {
        C92 = true;
    }
    //C93
    if (arr[35] == 3 || arr[35] == 2) {
        C93 = true;
    }
    //C94
    if (arr[37] == 3 || arr[38] == 3) {
        C94 = true;
    }

    if (C91 && C92 && C93 && C94) {
        return 9;
    }

    //continued Level 9 for other case
    if (arr[34] == 3) {
        return 10;
    }
    if (arr[35] >= 2) {
        return 10;
    }

    //Level 8 C81 and C82 and C83---------------------------------------------------------------------------------------------------------------------------------------------
    let C81 = false, C82 = false, C83 = false;
    //C81
    count = 0;
    if (arr[14] >= 3) {
        count++;
    }
    if (arr[15] >= 3) {
        count++;
    }
    if (arr[16] >= 3) {
        count++;
    }
    if (arr[17] >= 3) {
        count++;
    }
    if (arr[18] >= 3) {
        count++;
    }
    if (arr[19] >= 3) {
        count++;
    }
    if (arr[20] >= 3) {
        count++;
    }
    if (arr[21] >= 3) {
        count++;
    }
    if (arr[31] >= 3) {
        count++;
    }
    if (count >= 2) {
        C81 = true;
    }
    count = 0;
    if (arr[14] >= 2) {
        count++;
    }
    if (arr[15] >= 2) {
        count++;
    }
    if (arr[16] >= 2) {
        count++;
    }
    if (arr[17] >= 2) {
        count++;
    }
    if (arr[18] >= 2) {
        count++;
    }
    if (arr[19] >= 2) {
        count++;
    }
    if (arr[20] >= 2) {
        count++;
    }
    if (arr[21] >= 2) {
        count++;
    }
    if (arr[31] >= 2) {
        count++;
    }
    if (count >= 3) {
        C81 = true;
    }
    //C82
    count = 0;
    if (arr[26] >= 3) {
        count++;
    }
    if (arr[27] >= 3) {
        count++;
    }
    if (arr[28] >= 3) {
        count++;
    }
    if (arr[29] >= 3) {
        count++;
    }
    if (arr[30] >= 3) {
        count++;
    }
    if (arr[32] >= 3) {
        count++;
    }
    if (arr[33] >= 3) {
        count++;
    }
    if (count >= 2) {
        C82 = true;
    }
    count = 0;
    if (arr[26] >= 2) {
        count++;
    }
    if (arr[27] >= 2) {
        count++;
    }
    if (arr[28] >= 2) {
        count++;
    }
    if (arr[29] >= 2) {
        count++;
    }
    if (arr[30] >= 2) {
        count++;
    }
    if (arr[32] >= 2) {
        count++;
    }
    if (arr[33] >= 2) {
        count++;
    }
    if (count >= 3) {
        C82 = true;
    }
    //C83
    if (arr[37] == 3 && arr[38] == 3) {
        C83 = true;
    }
    if (C81 && C82 && C83) {
        return 8;
    }

    //Level 7 C71 and C72 and C73 --------------------------------------------------------------------------------------------------------------------------------------------
    let C71 = false, C72 = false, C73 = false;
    //C71
    count = 0;
    if (arr[14] == 3) {
        count++;
    }
    if (arr[15] == 3) {
        count++;
    }
    if (arr[16] == 3) {
        count++;
    }
    if (arr[17] == 3) {
        count++;
    }
    if (arr[18] == 3) {
        count++;
    }
    if (arr[19] == 3) {
        count++;
    }
    if (arr[20] == 3) {
        count++;
    }
    if (arr[21] == 3) {
        count++;
    }
    if (arr[31] == 3) {
        count++;
    }
    if (count >= 2) {
        C71 = true;
    }
    count = 0;
    if (arr[14] >= 2) {
        count++;
    }
    if (arr[15] >= 2) {
        count++;
    }
    if (arr[16] >= 2) {
        count++;
    }
    if (arr[17] >= 2) {
        count++;
    }
    if (arr[18] >= 2) {
        count++;
    }
    if (arr[19] >= 2) {
        count++;
    }
    if (arr[20] >= 2) {
        count++;
    }
    if (arr[21] >= 2) {
        count++;
    }
    if (arr[31] >= 2) {
        count++;
    }
    if (count >= 3) {
        C71 = true;
    }
    //C72
    if (arr[26] == 3 || arr[27] == 3 || arr[28] == 3 || arr[29] == 3 || arr[30] == 3 || arr[32] == 3 || arr[33] == 3) {
        C72 = true;
    }
    count = 0;
    if (arr[26] >= 2) {
        count++;
    }
    if (arr[27] >= 2) {
        count++;
    }
    if (arr[28] >= 2) {
        count++;
    }
    if (arr[29] >= 2) {
        count++;
    }
    if (arr[30] >= 2) {
        count++;
    }
    if (arr[32] >= 2) {
        count++;
    }
    if (arr[33] >= 2) {
        count++;
    }
    if (count >= 2) {
        C72 = true;
    }
    //C73
    if (arr[37] == 3 || arr[38] == 3) {
        C73 = true;
    }
    if (C71 && C72 && C73) {
        return 7;
    }

    //Level 5 C51 and C52 and C53 and C54 -----------------------------------------------------------------------------------------------------------------------------------------
    let C51 = false, C52 = false, C53 = false, C54 = false;
    //C51
    if (arr[0] == 3 || arr[1] == 3 || arr[2] == 3 || arr[14] == 3 || arr[15] == 3 || arr[16] == 3 || arr[17] == 3 || arr[18] == 3 || arr[19] == 3 || arr[20] == 3 || arr[21] == 3 || arr[31] == 3) {
        C51 = true;
    }
    count = 0;
    if (arr[0] >= 2) {
        count++;
    }
    if (arr[1] >= 2) {
        count++;
    }
    if (arr[2] >= 2) {
        count++;
    }
    if (arr[14] >= 2) {
        count++;
    }
    if (arr[15] >= 2) {
        count++;
    }
    if (arr[16] >= 2) {
        count++;
    }
    if (arr[17] >= 2) {
        count++;
    }
    if (arr[18] >= 2) {
        count++;
    }
    if (arr[19] >= 2) {
        count++;
    }
    if (arr[20] >= 2) {
        count++;
    }
    if (arr[21] >= 2) {
        count++;
    }
    if (arr[31] >= 2) {
        count++;
    }
    if (count >= 2) {
        C51 = true;
    }
    //C52
    if (arr[3] == 3 || arr[4] == 3 || arr[5] == 3 || arr[7] == 3 || arr[8] == 3 || arr[9] == 3) {
        C52 = true;
    }
    count = 0;
    if (arr[3] >= 2) {
        count++;
    }
    if (arr[4] >= 2) {
        count++;
    }
    if (arr[5] >= 2) {
        count++;
    }
    if (arr[7] >= 2) {
        count++;
    }
    if (arr[8] >= 2) {
        count++;
    }
    if (arr[9] >= 2) {
        count++;
    }
    if (count >= 2) {
        C52 = true;
    }
    //C53
    if (arr[26] >= 2 || arr[27] >= 2 || arr[28] >= 2 || arr[29] >= 2 || arr[30] >= 2 || arr[32] >= 2 || arr[33] >= 2) {
        C53 = true;
    }
    //C54
    if (arr[37] == 3 || arr[38] == 3) {
        C54 = true;
    }
    if (arr[37] == 2 && arr[38] == 2) {
        C54 = true;
    }
    if (C51 && C52 && C53 && C54) {
        return 5;
    }

    //Level 4 C41 and (C42 or C43) and C44 ------------------------------------------------------------------------------
    let C41 = false, C42 = false, C43 = false, C44 = false;
    //C41
    if (arr[0] >= 2 || arr[1] >= 2 || arr[2] >= 2 || arr[14] >= 2 || arr[15] >= 2 || arr[16] >= 2 || arr[17] >= 2 || arr[18] >= 2 || arr[19] >= 2 || arr[20] >= 2 || arr[21] >= 2 || arr[31] >= 2) {
        C41 = true;
    }
    //C42
    count = 0;
    if (arr[3] >= 2) {
        count++;
    }
    if (arr[5] >= 2) {
        count++;
    }
    if (arr[8] >= 2) {
        count++;
    }
    if (arr[7] >= 2) {
        count++;
    }
    if (arr[9] >= 2) {
        count++;
    }
    if (count >= 2) {
        C42 = true;
    }
    //C43
    if (arr[26] >= 2) {
        C43 = true;
    }
    if (arr[27] >= 2) {
        C43 = true;
    }
    if (arr[28] >= 2) {
        C43 = true;
    }
    if (arr[29] >= 2) {
        C43 = true;
    }
    if (arr[30] >= 2) {
        C43 = true;
    }
    if (arr[32] >= 2) {
        C43 = true;
    }
    if (arr[33] >= 2) {
        C43 = true;
    }
    //C44
    if (arr[34] < 2 && arr[35] < 2) {
        C44 = true;
    }
    if (C41 && (C42 || C43) && C44) {
        return 4;
    }

    //Level 3 C31 and (C32 or C33) -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let C31 = false, C32 = false, C33 = false;
    //C31
    if (num >= 16 && num <= 19) {
        C31 = true;
    }
    //C32
    if (arr[0] == 3 || arr[1] == 3 || arr[2] == 3 || arr[3] == 3 || arr[4] == 3 || arr[5] == 3 || arr[6] == 3 || arr[7] == 3 || arr[8] == 3 || arr[9] == 3
        || arr[14] == 3 || arr[15] == 3 || arr[16] == 3 || arr[17] == 3 || arr[18] == 3 || arr[19] == 3 || arr[20] == 3 || arr[21] == 3 || arr[22] == 3
        || arr[23] == 3 || arr[24] == 3 || arr[25] == 3 || arr[26] == 3 || arr[27] == 3 || arr[30] == 3 || arr[31] == 3 || arr[32] == 3 || arr[33] == 3
        || arr[34] == 3 || arr[35] == 3) {
        C32 = true;
    }
    //C33
    count = 0;
    if (arr[0] >= 2) {
        count++;
    }
    if (arr[1] >= 2) {
        count++;
    }
    if (arr[2] >= 2) {
        count++;
    }
    if (arr[3] >= 2) {
        count++;
    }
    if (arr[4] >= 2) {
        count++;
    }
    if (arr[5] >= 2) {
        count++;
    }
    if (arr[6] >= 2) {
        count++;
    }
    if (arr[7] >= 2) {
        count++;
    }
    if (arr[8] >= 2) {
        count++;
    }
    if (arr[9] >= 2) {
        count++;
    }
    if (arr[14] >= 2) {
        count++;
    }
    if (arr[15] >= 2) {
        count++;
    }
    if (arr[16] >= 2) {
        count++;
    }
    if (arr[17] >= 2) {
        count++;
    }
    if (arr[18] >= 2) {
        count++;
    }
    if (arr[19] >= 2) {
        count++;
    }
    if (arr[20] >= 2) {
        count++;
    }
    if (arr[21] >= 2) {
        count++;
    }
    if (arr[22] >= 2) {
        count++;
    }
    if (arr[23] >= 2) {
        count++;
    }
    if (arr[24] >= 2) {
        count++;
    }
    if (arr[25] >= 2) {
        count++;
    }
    if (arr[26] >= 2) {
        count++;
    }
    if (arr[27] >= 2) {
        count++;
    }
    if (arr[30] >= 2) {
        count++;
    }
    if (arr[31] >= 2) {
        count++;
    }
    if (arr[32] >= 2) {
        count++;
    }
    if (arr[33] >= 2) {
        count++;
    }
    if (arr[34] >= 2) {
        count++;
    }
    if (arr[35] >= 2) {
        count++;
    }
    if (count >= 3 && count <= 6) {
        C33 = true;
    }
    if (C31 && (C32 || C33)) {
        return 3;
    }


    //Level 2 C21 and C22 and C23 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    let C21 = false, C22 = false, C23 = false;
    //C21
    if (num >= 16 && num <= 19) {
        C21 = true;
    }
    //C22
    if (arr[0] < 3 && arr[1] < 3 && arr[2] < 3 && arr[3] < 3 && arr[4] < 3 && arr[5] < 3 && arr[6] < 3 && arr[7] < 3 && arr[8] < 3 && arr[9] < 3
        && arr[14] < 3 && arr[15] < 3 && arr[16] < 3 && arr[17] < 3 && arr[18] < 3 && arr[19] < 3 && arr[20] < 3 && arr[21] < 3 && arr[22] < 3
        && arr[23] < 3 && arr[24] < 3 && arr[25] < 3 && arr[26] < 3 && arr[27] < 3 && arr[30] < 3 && arr[31] < 3 && arr[32] < 3 && arr[33] < 3
        && arr[34] < 3 && arr[35] < 3) {
        C22 = true;
    }
    //C23
    count = 0;
    if (arr[0] == 2) {
        count++;
    }
    if (arr[1] == 2) {
        count++;
    }
    if (arr[2] == 2) {
        count++;
    }
    if (arr[3] == 2) {
        count++;
    }
    if (arr[4] == 2) {
        count++;
    }
    if (arr[5] == 2) {
        count++;
    }
    if (arr[6] == 2) {
        count++;
    }
    if (arr[7] == 2) {
        count++;
    }
    if (arr[8] == 2) {
        count++;
    }
    if (arr[9] == 2) {
        count++;
    }
    if (arr[14] == 2) {
        count++;
    }
    if (arr[15] == 2) {
        count++;
    }
    if (arr[16] == 2) {
        count++;
    }
    if (arr[17] == 2) {
        count++;
    }
    if (arr[18] == 2) {
        count++;
    }
    if (arr[19] == 2) {
        count++;
    }
    if (arr[20] == 2) {
        count++;
    }
    if (arr[21] == 2) {
        count++;
    }
    if (arr[22] == 2) {
        count++;
    }
    if (arr[23] == 2) {
        count++;
    }
    if (arr[24] == 2) {
        count++;
    }
    if (arr[25] == 2) {
        count++;
    }
    if (arr[26] == 2) {
        count++;
    }
    if (arr[27] == 2) {
        count++;
    }
    if (arr[30] == 2) {
        count++;
    }
    if (arr[31] == 2) {
        count++;
    }
    if (arr[32] == 2) {
        count++;
    }
    if (arr[33] == 2) {
        count++;
    }
    if (arr[34] == 2) {
        count++;
    }
    if (arr[35] == 2) {
        count++;
    }
    if (count <= 2) {
        C23 = true;
    }
    if (C21 && C22 && C23) {
        return 2;
    }
    return 1;
}
