import { Label } from "../ui/label";

type Props = {
  inputRef: any;
  attribute: string;
  placeholder: string;
  attributeType: string;
  handleInputChange: (property: string, value: string) => void;
};

const Color = ({
  inputRef,
  attribute,
  placeholder,
  attributeType,
  handleInputChange,
}: Props) => (
  <div className='flex flex-col gap-3 border-b border-primary-grey-300 p-5'>
    <h3 className='text-[10px] uppercase'>{placeholder}</h3>
    <div
      className='flex items-center gap-2 border border-primary-grey-300'
      onClick={() => inputRef.current.click()}
    >
      <input
      className=" w-9 "
        type='color'
        value={attribute}
        ref={inputRef}
        onChange={(e) => handleInputChange(attributeType, e.target.value)}
      />
      <Label className='flex-1'>{attribute}</Label>
      <Label className='flex h-6 w-fit mr-2 px-2 items-center justify-center text-[10px] leading-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        100%
      </Label>
    </div>
  </div>
);

export default Color;
