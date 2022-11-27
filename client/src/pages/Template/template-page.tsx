import { MenuContainer } from "../../components";
import { useParams } from "react-router-dom";
import { getTemplate } from "../../controllers/template-controller";

export const TemplatePage = () => {
  let { templateCode } = useParams();
  const templateResponse = getTemplate(templateCode as string);
  const TemplateComp = templateResponse.template;
  return (
    <>
      <MenuContainer />
      <TemplateComp code="dasssdad" />
    </>
  );
};
