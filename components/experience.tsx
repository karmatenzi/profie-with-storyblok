import { TableComponent } from "@/utils/table";
import { storyblokEditable } from "@storyblok/react";

const Experience = ({ blok }: any) => {    
  return (
    <div className="my-44" {...storyblokEditable(blok)}>
      <p className="text-[44px] text-center">{blok.title}</p>
      <div className="flex justify-center my-20">
        <TableComponent tableData={JSON.stringify(blok.table)} />
      </div>
    </div>
  );
};
export default Experience;
