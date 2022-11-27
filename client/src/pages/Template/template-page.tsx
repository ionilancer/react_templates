import { MenuContainer } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import {
  creategGetTemplateResoponseModel,
  getTemplate,
} from "../../controllers/template-controller";
import { useEffect, useState } from "react";

export const TemplatePage = () => {
  const history = useNavigate();
  const [templateLoaded, setTemplateLoaded] = useState(
    creategGetTemplateResoponseModel()
  );

  let { templateCode } = useParams();

  const fetchData = async () => {
    const response = await getTemplate(templateCode as string);
    setTemplateLoaded(response);
  };
  useEffect(() => {
    fetchData().catch(() => {
      history("/sorry");
    });
  }, []);
  const TemplateComp = templateLoaded.component as React.ComponentType<any>;
  return (
    <>
      <MenuContainer />
      <TemplateComp {...templateLoaded.modelConstructor()} />
    </>
  );
};
