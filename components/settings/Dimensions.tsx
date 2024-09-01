import { Label } from "../ui/label";
import { Input } from "../ui/input";

const dimensionsOptions = [
  { label: "W", property: "width" },
  { label: "H", property: "height" },
];

type Props = {
  width: string;
  height: string;
  isEditingRef: React.MutableRefObject<boolean>;
  handleInputChange: (property: string, value: string) => void;
};

const Dimensions = ({ width, height, isEditingRef, handleInputChange }: Props) => (
  <section className='flex flex-col border-b border-primary-grey-300'>
     
    <div className='flex flex-col gap-4 px-6 py-3 '>
      
      {dimensionsOptions.map((item) => (
        <div
          key={item.label}
          className='flex flex-1 items-center gap-3 rounded-sm bg-[#f5f5f5] px-4 py-2'
        >
          <Label htmlFor={item.property} className='text-base font-bold rounded-xl'>
            {item.label}
          </Label>
          <Input
            type='number'
            id={item.property}
            placeholder='100'
            value={item.property === "width" ? width : height}
            className='input-ring text-base shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg'
            min={10}
            onChange={(e) => handleInputChange(item.property, e.target.value)}
            onBlur={(e) => {
              isEditingRef.current = false
            }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Dimensions;
