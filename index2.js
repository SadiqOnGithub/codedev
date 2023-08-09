const la = (n = 1) => {
  if (n == 1 || n == 2) return 1;
  return la(n - 1) + la(n - 2);
};

const le = (n = 1) => { 
  if (n == 0 ) return;
  console.log(la(n))
  return le(n - 1);
}

console.log(la(1));
console.log(le(1));

// 1 1 2 3 5 8 13 