
function A(props) {
  // 아 ~ 인풋에 들어온 값으로 state 바꾸고싶다!
  // e.target.value로 setState 하고 싶다.
  // props.setName(e.target.value)
  return(
    <div>
      <input onChange={(e) => {
        // console.log(e.target.value)
        props.setName(e.target.value)
      }}></input>
    </div>
  )
}

export default A;