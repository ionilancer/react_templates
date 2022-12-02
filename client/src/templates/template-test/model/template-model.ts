export interface TemplateModel {
  code: string;
}
export const createTemplateModel = (): TemplateModel => {
  return {
    code: "",
  };
};
