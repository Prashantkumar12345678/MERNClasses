// const firstNameChange =(e)=>{
//     const val = e.target.value;
//     if(val.length>1){
//         console.log('correct')
//     }

// console.log(e.target.value);
// }
function submitForm(e) {
  e.preventDefault();

  // console.dir(e.target.value)

  const t = e.target;
  const res = {
    hobbies: [],
  };
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;

    // const vl=t[i].value;
    // const nm=t[i].name;

    // console.log(ty ,vl);
    // res[nm]=vl;
    // if(ty=='checkbox'){
    //     console.log(t[i].checked)

    // console.dir(t[i].value);

    if (ty != "Submit") {
      const vl = t[i].value;
      const nm = t[i].name;

      if (ty == "checkbox" && t[i].checked) {
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        res[nm] = vl;
      }
    }
  }
  console.log(res);
}
