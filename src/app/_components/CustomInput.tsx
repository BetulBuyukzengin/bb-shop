import { Group, Input, InputAddon } from "@chakra-ui/react";
import { CustomInputType } from "../_interfaces/customInput.types";
function CustomInput({ placeholder, children }: CustomInputType) {
  return (
    <Group attached>
      <Input
        placeholder={placeholder}
        className="bg-slate-50 px-10 py-5 w-[80%]"
      />
      <InputAddon className="bg-slate-50">{children}</InputAddon>
    </Group>
  );
}

export default CustomInput;
