// import React, { useState, ChangeEvent } from "react";
// import { SearchInput, InputForm, BtnSearch, InputFormContainer } from "./StyledDict";

// export default function Dict() {
//   const [value, setValue] = useState("");

//   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <SearchInput>
//         <InputFormContainer>
//           <InputForm
//             value={value}
//             onChange={onChange}
//             type="text"
//             placeholder="용어 검색"
//           >
//             <BtnSearch>닉네임 변경</BtnSearch>
//           </InputForm>
//         </InputFormContainer>


//       </SearchInput>
//     </div>
//   );
// }
import React, { useState, ChangeEvent } from "react";
import { SearchInput, InputForm, BtnSearch, InputFormContainer } from "./StyledDict";

export default function Dict() {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <SearchInput>
        <InputForm value={value}
          onChange={onChange}
          type="text" />
        <BtnSearch>검색</BtnSearch>
      </SearchInput>
    </div >
  );
}
