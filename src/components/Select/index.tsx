import { FC } from "react";

import Select, { SelectProps } from "./select";
import Option, { SelectOptionProps } from "./option";

// export type ISelectComponent = FC<SelectProps> & {
//   Option: FC<SelectOptionProps>;
// };

// (Select as ISelectComponent).Option = Option;
export { Option };

export default Select;
