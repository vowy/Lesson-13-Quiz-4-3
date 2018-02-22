var s = 60;
while (s > 0) {
  console.log("T-" + s + " seconds");
  s = s - 1;

switch (s) {
  case 50: console.log("Orbiter transfers from ground to internal power");
  s = s - 1;
    break;
  case 31: console.log("Ground launch sequencer is go for auto sequence start");
  s = s - 1;
   break;
  case 16: console.log("Activate launch pad sound suppression system");
  s = s - 1;
   break;
  case 10: console.log("Activate main engine hydrogen burnoff system");
  s = s - 1;
   break;
  case 6: console.log("Main engine start");
  s = s - 1;
   break;
}
}
if (s <= 1) {

console.log("Solid rocket booster ignition and liftoff!");}
