// RUN: %hermes -O %s | %FileCheck --match-full-lines %s

function printer() {
  print(this);
  for (var i=0; i < arguments.length; i++) print(arguments[i]);
}

function foo1(f) { f(); }
foo1(printer);
// CHECK: [object global]

function foo2(f) { f(1); }
foo2(printer);
// CHECK-NEXT: [object global]
// CHECK-NEXT: 1

function foo3(f) { f(1, 2); }
foo3(printer);
// CHECK-NEXT: [object global]
// CHECK-NEXT: 1
// CHECK-NEXT: 2

function foo4(f) { f(1, 2, 3); }
foo4(printer);
// CHECK-NEXT: [object global]
// CHECK-NEXT: 1
// CHECK-NEXT: 2
// CHECK-NEXT: 3

// This has too many parameters and so will be an ordinary Call instruction, not HBCCallNInst.
function foo5(f) { f(1, 2, 3, 4); }
foo5(printer);
// CHECK-NEXT: [object global]
// CHECK-NEXT: 1
// CHECK-NEXT: 2
// CHECK-NEXT: 3
// CHECK-NEXT: 4
