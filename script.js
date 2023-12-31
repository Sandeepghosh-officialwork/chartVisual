// dataset of cluster data in multiline string
const clusterDataset = `SkillCluster,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,
na,0.3546255507,0.393849793,0.3493348757,0.3898895991,0.356542617,0.3493774391,0.371349096,0.4042918455,0.4369846879,0.4117392558,41.17392558
Occupational Health and Safety,0.03744493392,0.03134240095,0.03354540197,0.01801278327,0.01960784314,0.01802638915,0.02607788595,0.02532188841,0.05418138987,0.04643784252,4.643784252
Equipment Repair and Maintenance,0.005873715125,0.0053222945,0.01330248699,0.0177222545,0.02541016407,0.01821222821,0.02155771905,0.02060085837,0.03674911661,0.03951543121,3.951543121
Physical Abilities,0.0007342143906,0.001774098167,0.001156737999,0.003776873911,0.0050020008,0.007433562535,0.02016689847,0.01716738197,0.02873969376,0.03475627344,3.475627344
Basic Customer Service,0.02202643172,0.02306327617,0.01735106998,0.02324230099,0.01920768307,0.02044229697,0.01842837274,0.02618025751,0.01908127208,0.02970868186,2.970868186
Vehicle Repair and Maintenance,0.001468428781,0.001774098167,0,0.000871586287,0,0.001300873444,0.005215577191,0.01115879828,0.01672555948,0.02869916354,2.869916354
Material Handling,0.0007342143906,0.001774098167,0.005783689994,0.005810575247,0.0306122449,0.004645976584,0.009388038943,0.008154506438,0.00777385159,0.02826651284,2.826651284
Geotechnical Engineering,0.008076358297,0.01123595506,0.006940427993,0.01220220802,0.01920768307,0.001300873444,0.01564673157,0.01072961373,0.02567726737,0.02451687338,2.451687338
Oil Well Intervention,0.001468428781,0.0053222945,0.004048582996,0.008425334108,0.004401760704,0.002601746887,0.007649513213,0.01287553648,0.02520612485,0.02249783675,2.249783675
Oil Drilling,0.004405286344,0.005913660556,0.006940427993,0.006101104009,0.005602240896,0.003159264077,0.003824756606,0.003004291845,0.008951707892,0.01600807615,1.600807615
Business Process and Analysis,0.008810572687,0.01005322295,0.006940427993,0.01423590936,0.01700680272,0.01003530942,0.0128650904,0.009442060086,0.00800942285,0.01571964234,1.571964234
Energy Solutions,0.005873715125,0.01655824956,0.01677270098,0.01016850668,0.004601840736,0.002973425014,0.002781641168,0.01158798283,0.01554770318,0.01413325642,1.413325642
Machinery,0.002202643172,0.004730928445,0.001735106998,0.002614758861,0.003201280512,0.003530942204,0.004520166898,0.01072961373,0.01389870436,0.01384482261,1.384482261
General Administrative and Clerical Tasks,0.004405286344,0.004730928445,0.01156737999,0.01133062173,0.01240496198,0.006132689091,0.006606397775,0.007296137339,0.009187279152,0.01153735218,1.153735218
Physical Therapy,0,0,0.001156737999,0,0,0,0,0,0.0004711425206,0.008941447938,0.8941447938
Training Programs,0.03230543319,0.009461856889,0.003470213997,0.003195816386,0.003801520608,0.003530942204,0.002086230876,0.001287553648,0.002355712603,0.008941447938,0.8941447938
Water Testing and Treatment,0,0.002956830278,0.002891844997,0.0005810575247,0.000200080032,0.0009291953169,0.0006954102921,0.0004291845494,0.001177856302,0.008941447938,0.8941447938
General Sales,0.02129221733,0.02010644589,0.01330248699,0.01423590936,0.03281312525,0.01449544694,0.01251738526,0.01630901288,0.006124852768,0.00778771272,0.778771272
Microsoft Office and Productivity Tools,0.01835535977,0.02247191011,0.01561596298,0.01365485183,0.008603441377,0.02285820479,0.01668984701,0.01158798283,0.009658421673,0.007643495818,0.7643495818
Project Management,0.03230543319,0.01241868717,0.02082128398,0.0200464846,0.01900760304,0.02657498606,0.02433936022,0.01072961373,0.006831566549,0.007355062013,0.7355062013
Environmental Geology,0.008076358297,0.005913660556,0.005205320995,0.003776873911,0.001400560224,0.002415907824,0.002781641168,0.00686695279,0.003062426384,0.004903374676,0.4903374676
Contract Management,0.01982378855,0.008870490834,0.01272411799,0.006972690296,0.002400960384,0.005389332838,0.006606397775,0.004721030043,0.006831566549,0.004614940871,0.4614940871
Welding,0.005139500734,0.007096392667,0.009253903991,0.003776873911,0.004401760704,0.03530942204,0.009040333797,0.006008583691,0.006360424028,0.004470723969,0.4470723969
Equipment Operation,0.002202643172,0.004139562389,0.005205320995,0.002324230099,0.002601040416,0.001486712507,0.005910987483,0.003433476395,0.005653710247,0.004326507067,0.4326507067
Transportation Operations,0.002936857562,0.001182732111,0.0005783689994,0.001162115049,0.00100040016,0.002044229697,0.001390820584,0.002575107296,0.00753828033,0.004182290164,0.4182290164
Power Tools,0.002202643172,0.001182732111,0.0005783689994,0.002324230099,0.002200880352,0.003345103141,0.003824756606,0.005150214592,0.003297997644,0.004038073262,0.4038073262
General Accounting,0.01174743025,0.0053222945,0.01041064199,0.00493898896,0.0050020008,0.01375209069,0.00347705146,0.009442060086,0.004711425206,0.00389385636,0.389385636
Regulation and Law Compliance,0.04111600587,0.01774098167,0.01792943898,0.004648460198,0.0008003201281,0.02824753763,0.004520166898,0.00643776824,0.003062426384,0.00389385636,0.389385636
Oil Wells,0.004405286344,0.006505026611,0.008097165992,0.006391632772,0.004601840736,0.001486712507,0.002433936022,0.002145922747,0.005418138987,0.003749639458,0.3749639458`;

// //split string with next line and get new array of lines
// const arrayOfLines = clusterDataset.split("\n");
// console.log(arrayOfLines);

// //devlaring empty array to store array of values
// let arrayOfValues = [];

// //creating two dimensional array and inserting separated values
// for (let index in arrayOfLines) {
//   arrayOfValues[index] = [];
//   arrayOfValues[index] = arrayOfLines[index].split(",");
// }

// //getting table element by id
// const tableContainer = document.getElementById("table-container");

// // Create the table element
// const table = document.createElement("table");

// const tableHead = document.createElement("thead");

// for (let i = 0; i < arrayOfValues[0].length; i++) {
//   const headCell = document.createElement("th");
//   headCell.textContent = arrayOfValues[0][i];
//   tableHead.appendChild(headCell);
// }
// table.appendChild(tableHead);

// for (
//   let OuterArrayIndex = 1;
//   OuterArrayIndex < arrayOfValues.length;
//   OuterArrayIndex++
// ) {
//   const row = document.createElement("tr");
//   // Create the table rows and cells
//   for (let i = 0; i < arrayOfValues[OuterArrayIndex].length; i++) {
//     const cell = document.createElement("td");
//     cell.textContent = arrayOfValues[OuterArrayIndex][i];
//     row.appendChild(cell);
//   }

//   table.appendChild(row);
// }

// const table2 = table;
// // Append the table to the container
// tableContainer.appendChild(table2);

//generating objects from array of string
let arrayObj = [];
let lines = clusterDataset.split("\n");

let header = lines[0].split(",");

for (let i = 1; i < lines.length; i++) {
  let rowData = lines[i].split(",");
  arrayObj[i - 1] = {};

  for (let j = 0; j < rowData.length; j++) {
    arrayObj[i - 1][header[j]] = rowData[j];
  }
}

let data = arrayObj;

console.log(header);

var table = $("<table>");

// Create the table header
var thead = $("<thead>").appendTo(table);
$("<th>").text("SkillCluster").appendTo(thead);
$("<th>").text("2010").appendTo(thead);
$("<th>").text("2011").appendTo(thead);
$("<th>").text("2012").appendTo(thead);
$("<th>").text("2013").appendTo(thead);
$("<th>").text("2014").appendTo(thead);
$("<th>").text("2015").appendTo(thead);
$("<th>").text("2016").appendTo(thead);
$("<th>").text("2017").appendTo(thead);
$("<th>").text("2018").appendTo(thead);
$("<th>").text("2019").appendTo(thead);
$("<th>").text("").appendTo(thead);

// Create the table body
var tbody = $("<tbody>").appendTo(table);
$.each(data, function (index, item) {
  var row = $("<tr>").appendTo(tbody);
  $("<td .sortable-column>").text(item["SkillCluster"]).appendTo(row);
  $("<td>").text(item["2010"]).appendTo(row);
  $("<td>").text(item["2011"]).appendTo(row);
  $("<td>").text(item["2012"]).appendTo(row);
  $("<td>").text(item["2013"]).appendTo(row);
  $("<td>").text(item["2014"]).appendTo(row);
  $("<td>").text(item["2015"]).appendTo(row);
  $("<td>").text(item["2016"]).appendTo(row);
  $("<td>").text(item["2017"]).appendTo(row);
  $("<td>").text(item["2018"]).appendTo(row);
  $("<td>").text(item["2019"]).appendTo(row);
  $("<td>").text(item[""]).appendTo(row);
});

// Append the table to the container
$("#table-container").append(table);

// const contentTable = document.getElementById("result");

// drawTable(arrayObj);

// function drawTable(arrayObj) {
//   const table = document.createElement("table");
//   const thead = document.createElement("thead");

//   const thForHeader = document.createElement("th");

//   //appending table head
//   for (let i = 0; i < header.length; i++) {
//     thForHeader.innerText = header[i];
//     thead.appendChild(thForHeader);
//   }
//   table.appendChild(thead);

//   for (let i = 0; i < arrayObj.length; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < header.length; j++) {
//       const td = document.createElement("td");
//       td.innerText = arrayObj[i][header[j]];
//       console.log(arrayObj[i][header[j]]);
//       console.log(header[j]);
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// }

// const newTable = document.createElement("table");

// let thValues = ``;
// for (value of header) {
//   thValues += `<th>${value}</th>`;
// }
// let tableHeadString = `<thead>${thValues}</thead>`;

// newTable.innerHTML = tableHeadString;

// for (outerIndex of arrayObj) {
//   const rowData = document.createElement("tr");
//   for (innerIndex in outerIndex) {
//     const cellData = document.createElement("td");
//     cellData.textContent = outerIndex[innerIndex];
//     rowData.appendChild(cellData);
//   }
//   newTable.appendChild(rowData);
// }

// contentTable.appendChild(newTable);

// let sortDirection = false;

// //function to sort columns
// function sortColumn(columnName) {
//   const dataType = typeof arrayObj[1][columnName];
//   sortDirection = !sortDirection;

//   switch (dataType) {
//     case "String":
//       sortStringColumn(sortDirection, columnName);
//       break;

//     case "Number":
//       sortNumberColumn(sortDirection, columnName);
//       break;

//     default:
//       console.log("invalid data type: " + dataType);
//   }
// }

// //function to sort number column values
// function sortNumberColumn(sort, columnName) {
//   arrayObj = arrayObj.sort((value1, value2) => {
//     return sort
//       ? value1[columnName] - value2[columnName]
//       : value2[columnName] - value1[columnName];
//   });
// }

// //function to sort string column values
// function sortStringColumn(sort, columnName) {
//   arrayObj = arrayObj.sort((value1, value2) => {
//     if (value1[columnName].toLowerCase() < value2[columnName].toLowerCase()) {
//       return -1;
//     } else if (
//       value1[columnName].toLowerCase() > value2[columnName].toLowerCase()
//     ) {
//       return 1;
//     }
//     return 0;
//   });
// }
