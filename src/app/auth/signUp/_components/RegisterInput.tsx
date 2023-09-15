// import React, { ChangeEvent } from "react";

// import Input from "@/components/Input";

// type RegisterInputProps = {
//   placeholder: string;
//   name: string;
//   type: string;
//   validator: (e: ChangeEvent<HTMLInputElement>) => void
//   error: string
// }

// const RegisterInput: React.FC<RegisterInputProps> = ({ ...props }) => {
//   return (
//     <div className="flex flex-col gap-2 h-max">
//       <Input
//         placeholder={props.placeholder}
//         name={props.name}
//         type={props.type}
//         onChange={props.validator}
//       />
//       {props.error && (
//         <span className="text-red-500 font-bold text-sm">
//           {props.error}
//         </span>
//       )}
//     </div>
//   );
// };

// export default RegisterInput;
