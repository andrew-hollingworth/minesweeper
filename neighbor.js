const areaArnd = (xcord, ycord) => {
  const cord1 = [(xcord - 1), (ycord - 1)];
  const cord2 = [(xcord - 1), (ycord - 0)];
  const cord3 = [(xcord - 1), (ycord + 1)];
  const cord4 = [(xcord - 0), (ycord + 1)];
  const cord5 = [(xcord + 1), (ycord + 1)];
  const cord6 = [(xcord + 1), (ycord - 0)];
  const cord7 = [(xcord + 1), (ycord - 1)];
  const cord8 = [(xcord - 0), (ycord - 1)];
  const chkAdj = [cord1, cord2, cord3, cord4, cord5, cord6, cord7, cord8];
  console.log(chkAdj);
};

areaArnd(1, 1);
