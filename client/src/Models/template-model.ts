import { AnyMxRecord } from "dns";
import { ReactElement } from "react";

export interface TemplateModel {
  code: string;
}
export const createTemplateModel = (): TemplateModel => {
  return {
    code: "",
  };
};
