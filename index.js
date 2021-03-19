const container = document.getElementById("container");

const makeRows = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div");
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
    container.appendChild(cell).id = (i + 1);
  };
};

makeRows(8, 9);

const row1 = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9")
];

const row2 = [
  document.getElementById("10"),
  document.getElementById("11"),
  document.getElementById("12"),
  document.getElementById("13"),
  document.getElementById("14"),
  document.getElementById("15"),
  document.getElementById("16"),
  document.getElementById("17"),
  document.getElementById("18")
];

const row3 = [
  document.getElementById("19"),
  document.getElementById("20"),
  document.getElementById("21"),
  document.getElementById("22"),
  document.getElementById("23"),
  document.getElementById("24"),
  document.getElementById("25"),
  document.getElementById("26"),
  document.getElementById("27")
];

const row4 = [
  document.getElementById("28"),
  document.getElementById("29"),
  document.getElementById("30"),
  document.getElementById("31"),
  document.getElementById("32"),
  document.getElementById("33"),
  document.getElementById("34"),
  document.getElementById("35"),
  document.getElementById("36")
];

const row5 = [
  document.getElementById("37"),
  document.getElementById("38"),
  document.getElementById("39"),
  document.getElementById("40"),
  document.getElementById("41"),
  document.getElementById("42"),
  document.getElementById("43"),
  document.getElementById("44"),
  document.getElementById("45")
];

const row6 = [
  document.getElementById("46"),
  document.getElementById("47"),
  document.getElementById("48"),
  document.getElementById("49"),
  document.getElementById("50"),
  document.getElementById("51"),
  document.getElementById("52"),
  document.getElementById("53"),
  document.getElementById("54")
];

const row7 = [
  document.getElementById("55"),
  document.getElementById("56"),
  document.getElementById("57"),
  document.getElementById("58"),
  document.getElementById("59"),
  document.getElementById("60"),
  document.getElementById("61"),
  document.getElementById("62"),
  document.getElementById("63")
];

const row8 = [
  document.getElementById("64"),
  document.getElementById("65"),
  document.getElementById("66"),
  document.getElementById("67"),
  document.getElementById("68"),
  document.getElementById("69"),
  document.getElementById("70"),
  document.getElementById("71"),
  document.getElementById("72")
];


// const selectSeat = () => {
//   const row = document.getElementById("row").value
//   const seat = document.getElementById("seat").value

//   console.log('ROW : ', row);
//   console.log('SEAT : ', seat);
  
//   if (row == 1 && seat == 1) {
//     document.getElementById("1").className = "grid-item-selected";
//     console.log('CLASS : ', document.getElementById("1").className);
//   } else {
//     document.getElementById("1").className = "grid-item";
//   }
// }

const selectSeat = () => {
  const row = document.getElementById("row").value
  const seat = document.getElementById("seat").value

  console.log('ROW : ', row);
  console.log('SEAT : ', seat);
  
  if (row == 1) {
    for (i = 0; i < seat; i++) {
      row1[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  } else if (row == 2) {
    for (i = 0; i < seat; i++) {
      row2[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 3) {
    for (i = 0; i < seat; i++) {
      row3[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 4) {
    for (i = 0; i < seat; i++) {
      row4[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 5) {
    for (i = 0; i < seat; i++) {
      row5[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 6) {
    for (i = 0; i < seat; i++) {
      row6[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 7) {
    for (i = 0; i < seat; i++) {
      row7[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  }
  else if (row == 8) {
    for (i = 0; i < seat; i++) {
      row8[i].className = "grid-item-selected";
    }
    console.log('CLASS : ', row1[i].className);
  } else {
    alert("Ce ou ces sièges sont indisponibles")
  }
}
